"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

type Reason = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const reasons: Reason[] = [
  {
    title: "Local corridor expertise",
    body: "We focus on Whitefield, Malur and Hoskote — corridors where connectivity and land value actually move together.",
    icon: (
      <>
        <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    title: "Approvals first",
    body: "MPA-approved and RERA-registered layouts where applicable, with documentation explained before you book a visit.",
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path d="M14 3v5h5" />
        <path d="m9 15 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Direct developer access",
    body: "Speak to the team that knows the survey numbers, bankers and registration path — not a revolving call centre.",
    icon: (
      <>
        <path d="M17 20a5 5 0 0 0-10 0" />
        <circle cx="12" cy="9" r="3.5" />
        <path d="M19.5 14.5a8 8 0 1 0-15 0" />
      </>
    ),
  },
];

export function WhyUs({ bare = false }: { bare?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-20 md:py-28 ${
        bare ? "" : "bg-white"
      }`}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        {/* ── Header ───────────────────────────────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16"
        >
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest sm:text-xs">
              <span className="block h-px w-8 bg-forest" aria-hidden />
              Why choose us
            </p>
            <h2 className="mt-5 max-w-xl text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">
              A developer relationship,
              <br className="hidden sm:block" /> not a{" "}
              <span className="text-forest">brochure chase.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Jeevan Sagar Garden Developers exists for buyers who want clear
            plots, clear paperwork, and a team that stays reachable after the
            first WhatsApp message.
          </p>
        </motion.div>

        {/* ── Reason cards ─────────────────────────────────────────── */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden rounded-2xl bg-navy-deep p-7 transition duration-500 hover:-translate-y-1 sm:p-8"
            >
              {/* Emerald glow that blooms on hover */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-forest/20 blur-3xl transition-opacity duration-500 group-hover:bg-forest/35"
                aria-hidden
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/8 text-leaf ring-1 ring-white/10 transition group-hover:bg-leaf group-hover:text-navy-deep">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {reason.icon}
                    </svg>
                  </span>
                  <span className="text-xs font-bold tracking-[0.18em] text-white/25">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
                  {reason.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="mt-10 sm:mt-12"
        >
          <Link
            href="/about"
            className="group inline-flex min-h-[3rem] w-full items-center justify-center gap-3 border border-ink/15 px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-forest hover:bg-forest hover:text-white sm:w-auto sm:px-9 sm:text-[0.8rem]"
          >
            About the company
            <span
              className="block h-px w-6 bg-ink/40 transition-[width,background-color] duration-300 group-hover:w-10 group-hover:bg-white/70"
              aria-hidden
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
