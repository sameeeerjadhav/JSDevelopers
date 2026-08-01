"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { captureAttribution } from "@/lib/attribution";
import { getConsent, saveConsent, type ConsentCategories } from "@/lib/consent";
import { loadAnalytics, loadMarketing } from "@/lib/tracking";

function ToggleRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-white/60">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-leaf" : "bg-white/15"
        } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
            checked ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    captureAttribution();

    const saved = getConsent();
    if (!saved) {
      setVisible(true);
    } else {
      if (saved.analytics) loadAnalytics();
      if (saved.marketing) loadMarketing();
    }

    function reopen() {
      setVisible(true);
      setExpanded(true);
    }
    window.addEventListener("open-cookie-preferences", reopen);
    return () => window.removeEventListener("open-cookie-preferences", reopen);
  }, []);

  function apply(consent: ConsentCategories) {
    saveConsent(consent);
    if (consent.analytics) loadAnalytics();
    if (consent.marketing) loadMarketing();
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-navy-deep shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
            <div className="p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.6]">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.5A8.5 8.5 0 1 1 11.5 3a1 1 0 0 0 1.1 1.4A2.5 2.5 0 0 0 15.6 7a1 1 0 0 0 1.4 1.1A2.5 2.5 0 0 0 20 10.5a1 1 0 0 0 1 2Z"
                    />
                    <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
                    <circle cx="13" cy="15" r="1" fill="currentColor" stroke="none" />
                    <circle cx="9.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-white md:text-xl">
                    We value your privacy
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    We use cookies to run this site securely, understand how visitors
                    explore our projects, and — only with your permission — personalise
                    our marketing and follow up with people who show interest. You can
                    change your choice anytime from the footer. See our{" "}
                    <Link href="/privacy" className="underline hover:text-white">
                      Privacy Policy
                    </Link>{" "}
                    for details.
                  </p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 divide-y divide-white/10 rounded-2xl bg-white/5 px-4">
                      <ToggleRow
                        title="Necessary"
                        description="Required for core site features and security. Always on."
                        checked
                        disabled
                      />
                      <ToggleRow
                        title="Analytics"
                        description="Helps us see which projects and pages get attention, so we can improve the site."
                        checked={analytics}
                        onChange={setAnalytics}
                      />
                      <ToggleRow
                        title="Marketing"
                        description="Lets us show relevant ads and follow up on-site visit enquiries you've shown interest in."
                        checked={marketing}
                        onChange={setMarketing}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => apply({ analytics: true, marketing: true })}
                  className="rounded-full bg-leaf px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-forest"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => apply({ analytics: false, marketing: false })}
                  className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Reject non-essential
                </button>
                <button
                  type="button"
                  onClick={() =>
                    expanded ? apply({ analytics, marketing }) : setExpanded(true)
                  }
                  className="rounded-full px-4 py-2.5 text-sm font-semibold text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                >
                  {expanded ? "Save preferences" : "Manage preferences"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
