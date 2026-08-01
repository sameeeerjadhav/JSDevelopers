"use client";

import { useEffect, useState } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "js-garden-cookie-consent";

function loadAnalytics() {
  if (typeof window === "undefined") return;
  // Placeholder: replace with GA4 / Meta Pixel IDs when company provides them.
  window.dispatchEvent(new CustomEvent("js-consent-analytics"));
}

function loadMarketing() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("js-consent-marketing"));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const saved = JSON.parse(raw) as Consent;
      if (saved.analytics) loadAnalytics();
      if (saved.marketing) loadMarketing();
    } catch {
      setVisible(true);
    }
  }, []);

  function save(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    if (consent.analytics) loadAnalytics();
    if (consent.marketing) loadMarketing();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-navy-deep/95 p-5 text-white shadow-2xl backdrop-blur md:p-6">
        <p className="font-display text-xl font-semibold">We value your privacy</p>
        <p className="mt-2 text-sm leading-relaxed text-white/75">
          We use cookies to run the site, understand which projects visitors
          explore, and — only if you allow — improve our marketing. Necessary
          cookies stay on; everything else is your choice.
        </p>

        {expanded && (
          <div className="mt-4 space-y-3 rounded-2xl bg-white/5 p-4 text-sm">
            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="font-semibold">Necessary</span>
                <span className="mt-1 block text-white/65">
                  Required for basic site function and security.
                </span>
              </span>
              <input type="checkbox" checked disabled className="mt-1 accent-leaf" />
            </label>
            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="font-semibold">Analytics</span>
                <span className="mt-1 block text-white/65">
                  Helps us see popular projects and improve the site.
                </span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 accent-leaf"
              />
            </label>
            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="font-semibold">Marketing</span>
                <span className="mt-1 block text-white/65">
                  Optional ads/remarketing for people who showed interest.
                </span>
              </span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 accent-leaf"
              />
            </label>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() =>
              save({ necessary: true, analytics: true, marketing: true })
            }
            className="rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() =>
              save({ necessary: true, analytics: false, marketing: false })
            }
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={() => {
              if (expanded) {
                save({ necessary: true, analytics, marketing });
              } else {
                setExpanded(true);
              }
            }}
            className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
          >
            {expanded ? "Save choices" : "Customize"}
          </button>
        </div>
      </div>
    </div>
  );
}
