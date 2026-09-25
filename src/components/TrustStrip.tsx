"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Counts up to `value` once it scrolls into view. */
function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduceMotion = useReducedMotion();

  const numeric = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "") || "+";
  const canCount = !Number.isNaN(numeric);

  const [shown, setShown] = useState(() =>
    canCount ? `0${suffix}` : value,
  );

  useEffect(() => {
    if (!inView) return;

    if (!canCount || reduceMotion) {
      setShown(value);
      return;
    }

    let frame = 0;
    const startTimer = window.setTimeout(() => {
      const duration = 1300;
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
  }, [inView, canCount, numeric, suffix, value, delay, reduceMotion]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden>{shown}</span>
    </span>
  );
}

export function TrustStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-navy-deep"
    >
      {/* Emerald glow so the band reads as a continuation of the hero. */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,color-mix(in_srgb,var(--color-forest)_22%,transparent)_0%,transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className={`px-3 text-center md:px-6 ${
                i > 0 ? "md:border-l md:border-white/12" : ""
              }`}
            >
              <p className="text-[clamp(2.25rem,6vw,3.5rem)] font-bold leading-none tracking-[-0.02em] text-white">
                <CountUp value={stat.value} delay={i * 130} />
              </p>

              <motion.span
                className="mx-auto mt-4 block h-px bg-leaf"
                initial={reduceMotion ? false : { width: 0 }}
                whileInView={{ width: "2rem" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: 0.35 + i * 0.1,
                }}
                aria-hidden
              />

              <p className="mt-4 text-xs font-medium leading-snug text-white/65 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
