"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

type StatPhase = "idle" | "draw" | "fill" | "count" | "done";

function AnimatedStatValue({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-8%" });
  const [phase, setPhase] = useState<StatPhase>("idle");
  const [displayText, setDisplayText] = useState("0+");
  const [strokeLen, setStrokeLen] = useState(260);

  const numeric = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "") || "+";
  const canCount = !Number.isNaN(numeric);

  useEffect(() => {
    if (!inView) return;

    const startTimer = window.setTimeout(() => {
      setDisplayText(canCount ? `0${suffix}` : value);
      setPhase("draw");
    }, delay);

    return () => window.clearTimeout(startTimer);
  }, [inView, delay, canCount, suffix, value]);

  useEffect(() => {
    if (phase !== "draw") return;

    const measureTimer = window.requestAnimationFrame(() => {
      if (textRef.current) {
        setStrokeLen(textRef.current.getComputedTextLength() + 28);
      }
    });

    const fillTimer = window.setTimeout(() => setPhase("fill"), 950);

    return () => {
      window.cancelAnimationFrame(measureTimer);
      window.clearTimeout(fillTimer);
    };
  }, [phase, displayText]);

  useEffect(() => {
    if (phase !== "fill") return;

    const countTimer = window.setTimeout(() => {
      setPhase(canCount ? "count" : "done");
    }, 480);

    return () => window.clearTimeout(countTimer);
  }, [phase, canCount]);

  useEffect(() => {
    if (phase !== "count" || !canCount) return;

    const duration = 950;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayText(`${Math.round(numeric * eased)}${suffix}`);
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setPhase("done");
      }
    };

    requestAnimationFrame(tick);
  }, [phase, canCount, numeric, suffix]);

  const filled = phase === "fill" || phase === "count" || phase === "done";
  const stroked = phase === "draw" || phase === "fill";

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto flex h-[2.75rem] w-full max-w-[9.5rem] items-center justify-center sm:h-14 md:h-[4.5rem]"
    >
      <motion.svg
        viewBox="0 0 240 84"
        className="h-full w-full overflow-visible"
        aria-hidden
        animate={phase === "done" ? { scale: [1, 1.04, 1] } : { scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.text
          ref={textRef}
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="58"
          fontWeight="700"
          fontFamily="var(--font-montserrat), Montserrat, sans-serif"
          paintOrder="stroke fill"
          initial={false}
          animate={{
            fill: filled ? "#ffffff" : "transparent",
            stroke: "#ffffff",
            strokeWidth: stroked ? 2.25 : 0,
            strokeDashoffset: phase === "idle" ? strokeLen : 0,
          }}
          transition={{
            strokeDashoffset: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            },
            fill: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
            strokeWidth: {
              duration: 0.35,
              ease: "easeOut",
            },
          }}
          style={{
            strokeDasharray: strokeLen,
          }}
        >
          {displayText}
        </motion.text>
      </motion.svg>
      <span className="sr-only">{value}</span>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section id="trust" className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/88" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-7 px-4 py-10 sm:gap-8 sm:px-5 sm:py-12 md:grid-cols-4 md:gap-6 md:px-8 md:py-14">
        {siteConfig.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="text-center text-white"
          >
            <AnimatedStatValue value={stat.value} delay={i * 120} />
            <p className="mt-1.5 text-xs leading-snug text-white/75 sm:mt-2 sm:text-sm md:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
