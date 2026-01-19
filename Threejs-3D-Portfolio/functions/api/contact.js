const MAX_MESSAGE_LENGTH = 2000;
const DEFAULT_RATE_LIMIT = 5;
const DEFAULT_WINDOW_SECONDS = 600;

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function sanitizeInput(value, maxLength) {
  if (!value) {
    return "";
  }
  return String(value).replace(/[\r\n]+/g, " ").trim().slice(0, maxLength);
}

export async function onRequestPost({ request, env }) {
  try {
    const url = new URL(request.url);
    if (url.searchParams.get("debug") === "1" || request.headers.get("x-debug") === "1") {
      return jsonResponse({ ok: true, debug: true });
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ ok: false, error: "Invalid JSON." }, 400);
    }

  const name = sanitizeInput(payload.name, 100);
  const email = sanitizeInput(payload.email, 200);
  const message = sanitizeInput(payload.message, MAX_MESSAGE_LENGTH);
  const honeypot = sanitizeInput(payload.website, 200);
  const turnstileToken = sanitizeInput(payload.turnstileToken, 2048);

  if (honeypot) {
    return jsonResponse({ ok: true });
  }

  if (!name || !email || !message) {
    return jsonResponse({ ok: false, error: "Missing required fields." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ ok: false, error: "Invalid email." }, 400);
  }

  const turnstileSecret = env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) {
    return jsonResponse({ ok: false, error: "Verification not configured." }, 500);
  }

  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const turnstileForm = new FormData();
  turnstileForm.append("secret", turnstileSecret);
  turnstileForm.append("response", turnstileToken);
  turnstileForm.append("remoteip", ip);

  let turnstileResponse;
  try {
    turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: turnstileForm,
      }
    );
  } catch {
    return jsonResponse({ ok: false, error: "Verification request failed." }, 502);
  }

  if (!turnstileResponse.ok) {
    return jsonResponse({ ok: false, error: "Verification failed." }, 502);
  }

  const turnstileResult = await turnstileResponse.json();
  if (!turnstileResult.success) {
    return jsonResponse({ ok: false, error: "Verification failed." }, 403);
  }

  if (env.RATE_LIMIT && ip !== "unknown") {
    const maxRequests = Number(env.RATE_LIMIT_MAX || DEFAULT_RATE_LIMIT);
    const windowSeconds = Number(env.RATE_LIMIT_WINDOW_SECONDS || DEFAULT_WINDOW_SECONDS);
    const bucket = Math.floor(Date.now() / (windowSeconds * 1000));
    const rateKey = `contact:${ip}:${bucket}`;
    const currentCount = Number((await env.RATE_LIMIT.get(rateKey)) || "0");

    if (currentCount >= maxRequests) {
      return jsonResponse({ ok: false, error: "Too many requests." }, 429);
    }

    await env.RATE_LIMIT.put(rateKey, String(currentCount + 1), {
      expirationTtl: windowSeconds,
    });
  }

  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL;
  if (!toEmail || !fromEmail) {
    return jsonResponse({ ok: false, error: "Email service not configured." }, 500);
  }

  const toName = env.CONTACT_TO_NAME || "Angel Camacho";
  const fromName = env.CONTACT_FROM_NAME || "Portfolio Contact";
  const subject = `Portfolio contact: ${name}`;

  const body = {
    personalizations: [
      {
        to: [{ email: toEmail, name: toName }],
      },
    ],
    from: { email: fromEmail, name: fromName },
    reply_to: { email, name },
    subject: sanitizeInput(subject, 200),
    content: [
      {
        type: "text/plain",
        value:
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `IP: ${ip}\n` +
          `\nMessage:\n${message}\n`,
      },
    ],
  };

  let response;
  try {
    response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return jsonResponse({ ok: false, error: "Email service unreachable." }, 502);
  }

    if (!response.ok) {
      let upstreamError = "";
      try {
        upstreamError = (await response.text()).slice(0, 500);
      } catch {
        upstreamError = "";
      }
      return jsonResponse(
        {
          ok: false,
          error: "Email send failed.",
          detail: upstreamError || "Upstream error.",
        },
        502
      );
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error.";
    return jsonResponse({ ok: false, error: "Server error.", detail: message }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ ok: true });
}
