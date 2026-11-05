/* Enquiry relay — Vercel serverless function.
   Receives the form payload and forwards it by email through Resend.
   Nothing is stored. Required env vars (set in the Vercel project):
     RESEND_API_KEY  – send-only key from resend.com
     ENQUIRY_TO      – where requests land (one address, or comma-separated)
     ENQUIRY_FROM    – sender, must be on a domain verified in Resend
   When RESEND_API_KEY is missing the function answers { ok: false,
   reason: 'unconfigured' } so the site can fall back to prototype mode. */

const MAX = 2000;

const clean = (v) => (typeof v === 'string' ? v.trim().slice(0, MAX) : '');
const list = (v) => (Array.isArray(v) ? v.map(clean).filter(Boolean).slice(0, 12) : []);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'method' });
  }

  const key = process.env.RESEND_API_KEY;
  const to = (process.env.ENQUIRY_TO || '').split(',').map((s) => s.trim()).filter(Boolean);
  const from = process.env.ENQUIRY_FROM;
  if (!key || !to.length || !from) return res.status(200).json({ ok: false, reason: 'unconfigured' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ ok: false, reason: 'payload' });

  const d = {
    name: clean(body.name),
    contact: clean(body.contact),
    area: clean(body.area),
    goals: list(body.goals),
    goalsNote: clean(body.goalsNote),
    availability: list(body.availability),
    availabilityNote: clean(body.availabilityNote),
    format: clean(body.format),
    lang: clean(body.lang) === 'pt' ? 'pt' : 'en',
  };
  if (!d.name || !d.contact) return res.status(400).json({ ok: false, reason: 'required' });

  const lines = [
    `Name: ${d.name}`,
    `Contact: ${d.contact}`,
    `Area: ${d.area || '—'}`,
    `Goals: ${[...d.goals, d.goalsNote].filter(Boolean).join(' · ') || '—'}`,
    `Availability: ${[...d.availability, d.availabilityNote].filter(Boolean).join(' · ') || '—'}`,
    `Format: ${d.format || '—'}`,
    `Language: ${d.lang.toUpperCase()}`,
    '',
    `Sent from ${req.headers['x-forwarded-host'] || req.headers.host || 'the site'} · ${new Date().toISOString()}`,
  ];
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const html = `<pre style="font:15px/1.5 -apple-system,Segoe UI,sans-serif;white-space:pre-wrap">${esc(lines.join('\n'))}</pre>`;
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.contact) ? [d.contact] : undefined;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject: `Pedido de sessão · ${d.name}`,
      text: lines.join('\n'),
      html,
      tags: [{ name: 'source', value: 'site-enquiry' }],
    }),
  });

  if (!r.ok) {
    console.error('resend error', r.status, await r.text().catch(() => ''));
    return res.status(502).json({ ok: false, reason: 'delivery' });
  }
  return res.status(200).json({ ok: true });
}
