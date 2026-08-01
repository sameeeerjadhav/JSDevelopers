"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const numeric = parseInt(value, 10);
    if (Number.isNaN(numeric)) {
      setShown(value);
      return;
    }
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(`${Math.round(numeric * eased)}+`);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{shown}</span>;
}

export function TrustStrip() {
  return (
    <section id="trust" className="relative overflow-hidden py-16 md:py-20">
      <Image
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,40,0.92),rgba(10,31,61,0.85))]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
        {siteConfig.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="text-center text-white"
          >
            <p className="font-display text-4xl font-semibold md:text-5xl">
              <StatValue value={stat.value} />
            </p>
            <p className="mt-2 text-sm text-white/70 md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
