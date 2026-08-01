/**
 * First-touch marketing attribution for the current browser session.
 *
 * Captured into sessionStorage on the very first page of the visit (cheap,
 * first-party, never leaves the browser on its own). Whether it gets
 * attached to a submitted lead is a separate decision — see hasConsent()
 * calls at the call site in EnquireForm.
 */

const STORAGE_KEY = "js-garden-attribution";

export type AttributionSnapshot = {
  landingPage: string;
  referrer: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  gclid: string | null;
  fbclid: string | null;
  device: "mobile" | "tablet" | "desktop";
  capturedAt: string;
};

function detectDevice(): AttributionSnapshot["device"] {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/ipad|tablet(?!.*mobile)/i.test(ua)) return "tablet";
  if (/mobi|android|iphone/i.test(ua)) return "mobile";
  return "desktop";
}

export function captureAttribution() {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem(STORAGE_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const snapshot: AttributionSnapshot = {
    landingPage: window.location.pathname,
    referrer: document.referrer || "direct",
    utmSource: params.get("utm_source"),
    utmMedium: params.get("utm_medium"),
    utmCampaign: params.get("utm_campaign"),
    utmTerm: params.get("utm_term"),
    utmContent: params.get("utm_content"),
    gclid: params.get("gclid"),
    fbclid: params.get("fbclid"),
    device: detectDevice(),
    capturedAt: new Date().toISOString(),
  };

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
}

export function getAttribution(): AttributionSnapshot | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AttributionSnapshot) : null;
  } catch {
    return null;
  }
}
