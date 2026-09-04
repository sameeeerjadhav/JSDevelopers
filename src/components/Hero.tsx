"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  CARD_STACK_CYCLE_MS,
  CardStack,
  type StackCard,
} from "@/components/CardStack";
import { MandalaBackground } from "@/components/MandalaBackground";
import { projects, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const HOME_CARDS: StackCard[] = [
  {
    id: "js-lakeview-garden",
    src: "/projects/js-lakeview-garden/hero-entrance-2.jpg",
    alt: "Jeevan Sagar Lakeview Garden entrance gate",
    title: "Jeevan Sagar Lakeview Garden",
    subtitle: "Mittemari · Bagepalli",
  },
  {
    id: "dhanapriya-paradise",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Dhanapriya Paradise villa plot layout",
    title: "Dhanapriya Paradise",
    subtitle: "Madanahatti · Malur",
  },
  {
    id: "kanakasree-enclave",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    alt: "Kanakasree Enclave residential layout",
    title: "Kanakasree Enclave",
    subtitle: "Lingapura · Malur",
  },
  {
    id: "royal-meadows",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    alt: "Royal Meadows plotted development",
    title: "Royal Meadows",
    subtitle: "Hoskote corridor",
  },
  {
    id: "js-lakeview-garden-site",
    src: "/projects/js-lakeview-garden/updates/update-9.jpg",
    alt: "Lakeview Garden on-site roads and plots",
    title: "On-site progress",
    subtitle: "Roads · lights · parks",
  },
];

const HERO_COPY = [
  {
    eyebrow: "DTCP approved · Ongoing",
    headline: "Lakeview living on the NH-44 growth belt.",
    body: "Jeevan Sagar Lakeview Garden at Mittemari, Bagepalli — DC-converted, DTCP-approved villa plots with CC roads, parks and a grand entrance you can visit today.",
    cta: { label: "View Lakeview Garden", href: "/projects/js-lakeview-garden" },
  },
  {
    eyebrow: "Premium villa plots",
    headline: "Land you can walk, verify and build on.",
    body: "MPA-approved layouts across Bengaluru's eastern corridors — with clear dimensions, approach roads and paperwork you can review upfront.",
    cta: { label: "View projects", href: "/projects" },
  },
  {
    eyebrow: "RERA registered",
    headline: "Layouts with approvals you can trust.",
    body: "From Dhanapriya Paradise to Kanakasree Enclave — every project comes with documentation our team explains in plain language.",
    cta: { label: "Explore listings", href: "/projects#listings" },
  },
  {
    eyebrow: "Hoskote belt",
    headline: "Strategic land near airport connectivity.",
    body: "Royal Meadows and corridor projects positioned for buyers planning medium to long-term appreciation along planned infrastructure routes.",
    cta: { label: "See Royal Meadows", href: "/projects/royal-meadows" },
  },
  {
    eyebrow: "Build with confidence",
    headline: "Infrastructure taking shape on site.",
    body: "Internal roads, street lighting and landscaping underway at Lakeview Garden — walk the land before you decide.",
    cta: { label: "See site updates", href: "/projects/js-lakeview-garden" },
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const copy = HERO_COPY[activeIndex] ?? HERO_COPY[0]!;
  const activeCard = HOME_CARDS[activeIndex] ?? HOME_CARDS[0];
  const activeProject =
    projects.find((p) => p.id === activeCard?.id) ??
    (activeCard?.id.startsWith("js-lakeview")
      ? projects.find((p) => p.id === "js-lakeview-garden")
      : undefined) ??
    projects[0];

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-x-clip bg-white pt-5 sm:pt-10 md:pt-12 lg:min-h-[calc(100svh-5.25rem)] lg:justify-center lg:pt-14"
    >
      <MandalaBackground tone="white" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-5 px-4 pb-10 sm:gap-8 sm:px-5 sm:pb-16 md:px-8 lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr] lg:items-center lg:gap-x-14 lg:gap-y-0 lg:pb-24 xl:gap-x-16">
        <div className="min-w-0 max-w-xl">
          <div className="relative overflow-hidden lg:ml-[calc(50%-50vw)] lg:w-screen lg:overflow-visible">
            <div className="relative flex min-h-7 items-center sm:min-h-8">
              <motion.span
                aria-hidden
                key={`line-${activeIndex}`}
                className="absolute left-0 top-1/2 h-[3px] w-20 origin-left -translate-y-1/2 bg-[#e8c84a] sm:w-[min(52vw,18rem)] md:h-1 md:w-[min(46vw,24rem)] lg:w-[min(50vw,32rem)]"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={
                  reduceMotion ? { scaleX: 1 } : { scaleX: [0, 1, 1, 0] }
                }
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: CARD_STACK_CYCLE_MS / 1000,
                        // Slow draw-in, hold, then slow retract
                        times: [0, 0.3, 0.68, 1],
                        ease: [
                          [0.45, 0, 0.2, 1],
                          "linear",
                          [0.45, 0, 0.25, 1],
                        ],
                      }
                }
              />
              <motion.p
                key={`eyebrow-${activeIndex}`}
                initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.28,
                }}
                className="relative pl-[5.75rem] text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:pl-[calc(min(52vw,18rem)+1.25rem)] sm:text-xs sm:tracking-[0.22em] md:pl-[calc(min(46vw,24rem)+1.25rem)] lg:pl-[calc(min(50vw,32rem)+1.5rem)]"
              >
                {copy.eyebrow}
              </motion.p>
            </div>
          </div>

          <motion.h1
            key={`headline-${activeIndex}`}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-[1.5rem] font-bold leading-[1.15] tracking-tight text-navy sm:mt-5 sm:text-4xl lg:text-5xl lg:leading-[1.08]"
          >
            {copy.headline}
          </motion.h1>

          <motion.p
            key={`body-${activeIndex}`}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg"
          >
            {copy.body}
          </motion.p>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[280px] sm:max-w-[340px] lg:col-start-2 lg:row-span-3 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:justify-center">
          <CardStack cards={HOME_CARDS} onActiveIndexChange={setActiveIndex} />
        </div>

        <div className="mt-1 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 lg:col-start-1 lg:mt-8">
          <Link
            href="/projects#listings"
            className="group inline-flex min-h-[2.875rem] w-full items-center justify-center gap-3 bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_14px_36px_-14px_rgba(10,31,61,0.55)] transition hover:bg-forest sm:min-h-[3.25rem] sm:w-auto sm:px-7 sm:text-sm"
          >
            Explore listings
            <span
              className="block h-px w-8 bg-[#e8c84a] transition-[width] duration-300 group-hover:w-12"
              aria-hidden
            />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in your residential plots.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
            className="group inline-flex min-h-[2.875rem] w-full items-center justify-center gap-2.5 border-2 border-navy/12 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-navy transition hover:border-[#25D366] hover:bg-[#25D366]/5 hover:text-[#128C7E] sm:min-h-[3.25rem] sm:w-auto sm:px-7 sm:text-sm"
          >
            <svg
              className="h-5 w-5 shrink-0 text-[#25D366] transition group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp us
          </a>
        </div>

        {activeProject ? (
          <motion.p
            key={`project-${activeIndex}`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center text-xs leading-relaxed text-muted sm:text-left sm:text-sm lg:col-start-1 lg:mt-5"
          >
            Now showing{" "}
            <Link
              href={`/projects/${activeProject.id}`}
              className="font-semibold text-forest hover:underline"
            >
              {activeProject.name}
            </Link>
            {" · "}
            {activeProject.priceLabel}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
