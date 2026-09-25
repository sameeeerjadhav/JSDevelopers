"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

type AboutUsSectionProps = {
  variant?: "home" | "page";
};

/** What the company actually does — scannable, not three dense paragraphs. */
const PILLARS = [
  {
    no: "01",
    title: "We plan the layout",
    body: "DC conversion, MPA/DTCP approvals and a master plan laid out before a single plot is sold.",
  },
  {
    no: "02",
    title: "We build the infrastructure",
    body: "CC roads, street lighting, water lines and landscaping — finished on site, not promised in a brochure.",
  },
  {
    no: "03",
    title: "We stay through registration",
    body: "Banker coordination, documentation walkthroughs and registration support after you book.",
  },
];

export function AboutUsSection({ variant = "home" }: AboutUsSectionProps) {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-12%" },
    transition: { duration: 0.65, ease: EASE, delay },
  });

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-24 md:py-28 ${
        variant === "page" ? "bg-white" : ""
      }`}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        {/* ── Header ───────────────────────────────────────────────── */}
        <motion.div {...reveal()} className="max-w-3xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest sm:text-xs">
            <span className="block h-px w-8 bg-forest" aria-hidden />
            Who we are
          </p>

          <h2 className="mt-5 text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">
            A developer that hands you
            <br className="hidden sm:block" />{" "}
            <span className="text-forest">land you can verify.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            For over a decade, {siteConfig.legalName} has planned and delivered
            residential layouts across Bengaluru&apos;s eastern growth
            corridors — near Whitefield, Malur and Hoskote.
          </p>
        </motion.div>

        {/* ── Photo + credentials ──────────────────────────────────── */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <motion.div {...reveal(0.1)} className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink">
              <Image
                src="/projects/js-lakeview-garden/updates/update-9.jpg"
                alt="Completed CC roads, street lighting and plot markers at Jeevan Sagar Lakeview Garden"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                aria-hidden
              />
              <p className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-white sm:p-6">
                Lakeview Garden, Bagepalli — roads, lighting and plots on the
                ground today.
              </p>
            </div>

            {/* ISO badge overlapping the photo corner */}
            <div className="absolute -right-2 -top-5 rounded-xl bg-white px-5 py-3 shadow-[0_18px_40px_-16px_rgba(12,19,16,0.35)] ring-1 ring-ink/5 sm:right-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Certified
              </p>
              <p className="mt-0.5 text-sm font-bold text-forest sm:text-base">
                {siteConfig.iso}
              </p>
            </div>
          </motion.div>

          <div className="min-w-0">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.no}
                {...reveal(0.15 + i * 0.1)}
                className="border-t border-ink/10 py-6 first:border-t-0 first:pt-0 sm:py-7"
              >
                <div className="flex gap-4 sm:gap-5">
                  <span className="shrink-0 text-xs font-bold tracking-[0.1em] text-leaf">
                    {pillar.no}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div {...reveal(0.45)} className="mt-8">
              {variant === "home" ? (
                <Link
                  href="/about"
                  className="group inline-flex min-h-[3rem] w-full items-center justify-center gap-3 bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-forest sm:w-auto sm:px-9 sm:text-[0.8rem]"
                >
                  About us
                  <span
                    className="block h-px w-6 bg-white/60 transition-[width] duration-300 group-hover:w-10"
                    aria-hidden
                  />
                </Link>
              ) : (
                <Link
                  href="/projects"
                  className="group inline-flex min-h-[3rem] w-full items-center justify-center gap-3 bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-forest sm:w-auto sm:px-9 sm:text-[0.8rem]"
                >
                  View our projects
                  <span
                    className="block h-px w-6 bg-white/60 transition-[width] duration-300 group-hover:w-10"
                    aria-hidden
                  />
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
