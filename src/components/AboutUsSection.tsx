"use client";

import { useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const aboutStats = siteConfig.stats.slice(0, 3);

type AboutUsSectionProps = {
  variant?: "home" | "page";
};

function CountUpStat({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [shown, setShown] = useState("0+");

  const numeric = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "") || "+";
  const canCount = !Number.isNaN(numeric);

  useEffect(() => {
    if (!inView) return;

    if (!canCount) {
      setShown(value);
      return;
    }

    let frame = 0;
    const startTimer = window.setTimeout(() => {
      const duration = 1100;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setShown(`${Math.round(numeric * eased)}${suffix}`);
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(frame);
    };
  }, [inView, canCount, numeric, suffix, value, delay]);

  return <span ref={ref}>{shown}</span>;
}

export function AboutUsSection({ variant = "home" }: AboutUsSectionProps) {
  return (
    <section
      className={`relative overflow-x-clip py-12 sm:py-20 md:py-28 ${
        variant === "page" ? "bg-white" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute -right-24 top-1/2 hidden h-[140%] w-72 -translate-y-1/2 bg-[#f6e7a8] lg:block"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl min-w-0 gap-8 px-4 sm:gap-12 sm:px-5 md:gap-14 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="min-w-0 max-w-2xl">
          <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:gap-3 sm:text-xs sm:tracking-[0.22em]">
            <span className="block h-px w-5 bg-forest sm:w-8" aria-hidden />
            Who we are
          </p>

          <h2 className="mt-3 text-[clamp(1.4rem,5.2vw,3rem)] font-bold leading-[1.18] tracking-tight text-navy sm:mt-5 sm:leading-[1.12] lg:leading-[1.1]">
            When we focus on trust and clear paperwork, everyone wins.
          </h2>

          <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-muted sm:mt-8 sm:space-y-5 sm:text-base md:text-[1.05rem]">
            <p>
              For over a decade, {siteConfig.legalName} has planned and
              delivered residential layouts across Bengaluru&apos;s eastern growth
              corridors — where families and investors want land they can
              verify, not just admire in a brochure.
            </p>
            <p>
              We specialise in MPA-approved and RERA-registered villa plot
              projects near Whitefield, Malur and Hoskote. Our team stays
              involved from the first site visit through banker coordination and
              registration support.
            </p>
            <p>
              {siteConfig.iso} — with a Bengaluru office you can walk into, a
              phone line that gets answered, and layouts you can inspect on the
              ground before you commit.
            </p>
          </div>

          {variant === "home" ? (
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center border border-forest px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-forest transition hover:bg-forest hover:text-white sm:mt-10 sm:min-h-0 sm:w-auto sm:px-8 sm:text-sm sm:tracking-[0.14em]"
            >
              About us
            </Link>
          ) : (
            <Link
              href="/projects"
              className="group mt-6 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition hover:text-navy sm:mt-10 sm:min-h-0 sm:gap-3 sm:text-sm sm:tracking-[0.14em]"
            >
              View our projects
              <span
                className="block h-px w-8 bg-forest transition group-hover:w-14 group-hover:bg-navy sm:w-10"
                aria-hidden
              />
            </Link>
          )}
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:flex lg:flex-col lg:justify-center lg:gap-10 lg:py-4">
          {aboutStats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex min-w-0 items-baseline gap-3 border-t border-navy/10 pt-4 sm:block sm:border-0 sm:pt-0"
            >
              <p className="shrink-0 text-[clamp(1.75rem,6vw,3.75rem)] font-bold leading-none text-forest">
                <CountUpStat value={stat.value} delay={i * 140} />
              </p>
              <p className="text-sm font-bold leading-snug text-navy sm:mt-2 sm:text-base md:mt-3 md:text-lg lg:text-xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
