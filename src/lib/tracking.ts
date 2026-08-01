/**
 * Consent-gated analytics/marketing loaders.
 *
 * Nothing here fires until CookieConsent explicitly calls loadAnalytics()
 * or loadMarketing() after the visitor opts in. Drop real IDs into
 * .env.local (see .env.example) to activate each one — with no ID set,
 * these are safe no-ops.
 */

type FbqFn = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: FbqFn;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

let analyticsLoaded = false;
let marketingLoaded = false;

function injectScript(src: string) {
  if (document.querySelector(`script[data-tracking-src="${src}"]`)) return;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.dataset.trackingSrc = src;
  document.head.appendChild(script);
}

export function loadAnalytics() {
  if (analyticsLoaded || typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  if (GOOGLE_ADS_ID) window.gtag("config", GOOGLE_ADS_ID);

  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
}

export function loadMarketing() {
  if (marketingLoaded || typeof window === "undefined" || !META_PIXEL_ID) return;
  marketingLoaded = true;

  if (!window.fbq) {
    const fbq = ((...args: unknown[]) => {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue.push(args);
      }
    }) as FbqFn;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.push = fbq;
    window.fbq = fbq;
    window._fbq = fbq;
  }

  injectScript("https://connect.facebook.net/en_US/fbevents.js");
  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

/** Fires a custom event to whichever trackers are actually loaded. Safe no-op otherwise. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
  window.fbq?.("trackCustom", name, params);
}
