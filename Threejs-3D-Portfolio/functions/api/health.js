function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestGet() {
  return jsonResponse({ ok: true, now: new Date().toISOString() });
}
