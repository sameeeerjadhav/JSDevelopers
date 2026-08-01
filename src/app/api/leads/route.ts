import { NextResponse } from "next/server";

type LeadAttribution = {
  landingPage?: string;
  referrer?: string;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmTerm?: string | null;
  utmContent?: string | null;
  gclid?: string | null;
  fbclid?: string | null;
  device?: string;
  capturedAt?: string;
};

type LeadBody = {
  name?: string;
  phone?: string;
  email?: string;
  project?: string;
  message?: string;
  consent?: boolean;
  attribution?: LeadAttribution | null;
};

export async function POST(request: Request) {
  let body: LeadBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const project = String(body.project ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !phone || !body.consent) {
    return NextResponse.json(
      { error: "Name, phone, and consent are required." },
      { status: 400 },
    );
  }

  const lead = {
    name,
    phone,
    email: email || null,
    project: project || "General enquiry",
    message: message || null,
    consent: true,
    attribution: body.attribution ?? null,
    createdAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent"),
  };

  // Persists to server logs for now. Swap for CRM / email / Sheets later.
  console.info("[lead]", JSON.stringify(lead));

  return NextResponse.json({ ok: true });
}
