/**
 * Lead email delivery via Resend's HTTP API (no SDK dependency needed).
 *
 * Server-only — reads RESEND_API_KEY / LEAD_NOTIFICATION_EMAIL, neither of
 * which is prefixed with NEXT_PUBLIC_, so they never reach the client bundle.
 * With either unset, sendLeadNotification() is a safe no-op (see .env.example
 * for setup instructions).
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const LEAD_NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL;
const LEAD_EMAIL_FROM =
  process.env.LEAD_EMAIL_FROM || "JS Garden Developers <onboarding@resend.dev>";

export type LeadEmailPayload = {
  name: string;
  phone: string;
  email: string | null;
  project: string;
  message: string | null;
  attribution: Record<string, unknown> | null;
  createdAt: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `<tr><td style="padding:4px 10px 4px 0;color:#5a6b7a;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(value)}</td></tr>`;
}

export async function sendLeadNotification(lead: LeadEmailPayload): Promise<void> {
  if (!RESEND_API_KEY || !LEAD_NOTIFICATION_EMAIL) return;

  const attributionRows = lead.attribution
    ? Object.entries(lead.attribution)
        .filter(([, value]) => value !== null && value !== undefined && value !== "")
        .map(([key, value]) => row(key, String(value)))
        .join("")
    : "";

  const html = `
    <div style="font-family:sans-serif;max-width:560px;color:#142033;">
      <h2 style="color:#0a1f3d;margin-bottom:4px;">New enquiry — ${escapeHtml(lead.project)}</h2>
      <table style="border-collapse:collapse;width:100%;margin-top:12px;">
        ${row("Name", lead.name)}
        ${row("Phone", lead.phone)}
        ${row("Email", lead.email ?? "-")}
        ${row("Message", lead.message ?? "-")}
        ${row("Received", lead.createdAt)}
      </table>
      ${
        attributionRows
          ? `<h3 style="color:#0a1f3d;margin-top:24px;margin-bottom:4px;">Attribution</h3><table style="border-collapse:collapse;width:100%;">${attributionRows}</table>`
          : ""
      }
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: LEAD_EMAIL_FROM,
      to: [LEAD_NOTIFICATION_EMAIL],
      subject: `New enquiry: ${lead.name} — ${lead.project}`,
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Resend API error ${res.status}: ${text}`);
  }
}
