const MAX_MESSAGE_LENGTH = 2000;

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

  if (honeypot) {
    return jsonResponse({ ok: true });
  }

  if (!name || !email || !message) {
    return jsonResponse({ ok: false, error: "Missing required fields." }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ ok: false, error: "Invalid email." }, 400);
  }

  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL;
  if (!toEmail || !fromEmail) {
    return jsonResponse({ ok: false, error: "Email service not configured." }, 500);
  }

  const toName = env.CONTACT_TO_NAME || "Angel Camacho";
  const fromName = env.CONTACT_FROM_NAME || "Portfolio Contact";
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
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

  const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return jsonResponse({ ok: false, error: "Email send failed." }, 502);
  }

  return jsonResponse({ ok: true });
}
