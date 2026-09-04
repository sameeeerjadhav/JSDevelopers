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
      className={`relative py-14 sm:py-20 md:py-28 ${
        variant === "page" ? "overflow-hidden bg-white" : ""
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

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 sm:gap-14 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.22em]">
            <span className="block h-px w-6 bg-forest sm:w-8" aria-hidden />
            Who we are
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-[1.15] tracking-tight text-navy sm:mt-5 sm:text-3xl md:text-[2.65rem] lg:text-5xl lg:leading-[1.1]">
            When we focus on trust and clear paperwork, everyone wins.
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:mt-8 sm:space-y-5 sm:text-base md:text-[1.05rem]">
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
              className="mt-8 inline-block w-full border border-forest px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-forest transition hover:bg-forest hover:text-white sm:mt-10 sm:w-auto sm:px-8"
            >
              About us
            </Link>
          ) : (
            <Link
              href="/projects"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-forest transition hover:text-navy sm:mt-10"
            >
              View our projects
              <span
                className="block h-px w-10 bg-forest transition group-hover:w-14 group-hover:bg-navy"
                aria-hidden
              />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:flex lg:flex-col lg:justify-center lg:gap-12 lg:py-6">
          {aboutStats.map((stat, i) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold leading-none text-forest sm:text-4xl md:text-5xl lg:text-6xl">
                <CountUpStat value={stat.value} delay={i * 140} />
              </p>
              <p className="mt-2 text-sm font-bold leading-snug text-navy sm:mt-3 sm:text-base md:text-lg lg:text-xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
