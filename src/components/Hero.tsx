"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const SLIDE_MS = 5600;

// Fixed hero image — always the Lakeview Garden entrance gate, regardless of
// which headline/copy is currently showing.
const HERO_IMAGE = {
  src: "/projects/js-lakeview-garden/hero-entrance-2.jpg",
  alt: "Jeevan Sagar Lakeview Garden entrance gate",
};

const HERO_SLIDES = [
  {
    id: "js-lakeview-garden",
    eyebrow: "DTCP approved · Ongoing",
    headline: "Lakeview living on the NH-44 growth belt.",
    body: "DC-converted, DTCP-approved villa plots at Mittemari, Bagepalli — with CC roads, parks and a grand entrance you can visit today.",
  },
  {
    id: "dhanapriya-paradise",
    eyebrow: "Premium villa plots",
    headline: "Land you can walk, verify and build on.",
    body: "MPA-approved layouts across Bengaluru's eastern corridors — clear dimensions, approach roads and paperwork you can review upfront.",
  },
  {
    id: "kanakasree-enclave",
    eyebrow: "RERA registered",
    headline: "Layouts with approvals you can trust.",
    body: "From Dhanapriya Paradise to Kanakasree Enclave — every project comes with documentation our team explains in plain language.",
  },
  {
    id: "royal-meadows",
    eyebrow: "MPA approved · Malur",
    headline: "Plots near the Bengaluru–Chennai corridor.",
    body: "Royal Meadows at Doddakadathur — DC-converted 30×40 and odd sites within 1 km of the 300 ft express corridor.",
  },
] as const;

/** Counts up once on mount — the hero is above the fold, so no scroll gate. */
function HeroCountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const numeric = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "") || "+";
  const canCount = !Number.isNaN(numeric);
  const [shown, setShown] = useState(() => (canCount ? `0${suffix}` : value));

  useEffect(() => {
    if (!canCount || reduceMotion) {
      setShown(value);
      return;
    }

    let frame = 0;
    const startTimer = window.setTimeout(() => {
      const duration = 1200;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setShown(`${Math.round(numeric * eased)}${suffix}`);
        if (t < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(frame);
    };
  }, [canCount, numeric, suffix, value, delay, reduceMotion]);

  return (
    <span aria-label={value}>
      <span aria-hidden>{shown}</span>
    </span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = HERO_SLIDES[activeIndex] ?? HERO_SLIDES[0];
  const activeProject = projects.find((p) => p.id === slide.id) ?? projects[0];

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[44rem] flex-col overflow-hidden bg-navy-deep lg:min-h-[100svh]"
    >
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        sizes="100vw"
        priority
        className="object-cover object-[58%_center] lg:object-center"
      />

      {/* Directional scrim: deep on the left where the copy sits, clearing to
          near-transparent on the right so the gate render stays legible. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/30 lg:bg-[linear-gradient(100deg,var(--color-navy-deep)_0%,color-mix(in_srgb,var(--color-navy-deep)_88%,transparent)_38%,color-mix(in_srgb,var(--color-navy-deep)_45%,transparent)_62%,transparent_92%)]"
        aria-hidden
      />
      {/* Tall, full-width top fade: gives the transparent header something to
          sit on and fully conceals the studio watermark baked into the top of
          the render. Kept soft and edge-to-edge so no seam is visible. */}
      <div
        className="absolute inset-x-0 top-0 h-[42%] bg-[linear-gradient(to_bottom,var(--color-navy-deep)_0%,var(--color-navy-deep)_26%,color-mix(in_srgb,var(--color-navy-deep)_78%,transparent)_48%,color-mix(in_srgb,var(--color-navy-deep)_40%,transparent)_72%,transparent_100%)]"
        aria-hidden
      />
      {/* Bottom fade to solid navy so the hero flows seamlessly into the dark
          stats band below — the two share the same base colour. */}
      <div
        className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_bottom,transparent_0%,color-mix(in_srgb,var(--color-navy-deep)_70%,transparent)_45%,var(--color-navy-deep)_100%)]"
        aria-hidden
      />

      {/* Copy block — grows to fill, keeping it optically centred above the
          stats row that shares this same screen. */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-end px-4 pb-10 pt-28 sm:px-5 sm:pt-32 md:px-8 lg:items-center lg:pb-16 lg:pt-32">
        <div className="min-w-0 max-w-[36rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={`eyebrow-${activeIndex}`}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf sm:text-xs"
            >
              <span className="block h-px w-7 bg-leaf sm:w-9" aria-hidden />
              {slide.eyebrow}
            </motion.p>
          </AnimatePresence>

          <div className="mt-6 min-h-[8.5rem] pb-2 sm:min-h-[10.5rem] lg:min-h-[12rem]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`headline-${activeIndex}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[2.25rem] font-bold leading-[1.08] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(6,12,10,0.55)] sm:text-[3.25rem] lg:text-[3.75rem]"
              >
                {slide.headline}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="min-h-[4.5rem] sm:min-h-[4rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={`body-${activeIndex}`}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="max-w-[32rem] text-[0.95rem] leading-relaxed text-white/80 [text-shadow:0_1px_12px_rgba(6,12,10,0.5)] sm:text-lg"
              >
                {slide.body}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/projects#listings"
              className="group inline-flex min-h-[3rem] w-full items-center justify-center gap-3 bg-leaf px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy-deep shadow-[0_18px_40px_-18px_rgba(18,183,104,0.8)] transition hover:bg-white sm:min-h-[3.4rem] sm:w-auto sm:px-9 sm:text-[0.8rem]"
            >
              Explore listings
              <span
                className="block h-px w-6 bg-navy-deep/50 transition-[width] duration-300 group-hover:w-10"
                aria-hidden
              />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in your residential plots.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              className="group inline-flex min-h-[3rem] w-full items-center justify-center gap-2.5 border border-white/30 bg-white/8 px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition hover:border-white/70 hover:bg-white/16 sm:min-h-[3.4rem] sm:w-auto sm:px-9 sm:text-[0.8rem]"
            >
              <svg
                className="h-5 w-5 shrink-0 text-[#25D366]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp us
            </a>
          </div>

          {/* Slide indicators double as the "now showing" control */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((s, index) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={s.headline}
                  aria-current={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[3px] rounded-full transition-all duration-500 ease-out ${
                    index === activeIndex
                      ? "w-9 bg-leaf"
                      : "w-4 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {activeProject ? (
              <p className="text-xs leading-relaxed text-white/70 sm:text-sm">
                <Link
                  href={`/projects/${activeProject.id}`}
                  className="font-semibold text-white transition hover:text-leaf"
                >
                  {activeProject.name}
                </Link>
                <span className="px-1.5 text-white/35">·</span>
                {activeProject.priceLabel}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Stats row — shares the hero screen, sits on its own subtle rule. */}
      <div className="relative z-10 border-t border-white/12 bg-navy-deep/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-6 sm:px-5 sm:py-7 md:grid-cols-4 md:gap-y-0 md:px-8">
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5 + i * 0.1,
              }}
              className={`px-2 text-center md:px-6 ${
                i > 0 ? "md:border-l md:border-white/12" : ""
              }`}
            >
              <p className="text-2xl font-bold leading-none tracking-[-0.02em] text-white sm:text-3xl">
                <HeroCountUp value={stat.value} delay={600 + i * 110} />
              </p>
              <p className="mt-1.5 text-[11px] font-medium leading-snug text-white/60 sm:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
