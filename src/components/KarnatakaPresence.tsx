"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { locationPages } from "@/lib/section-pages";

const VIDEO_SRC = "/karnataka-glow-dots.mp4";

export function KarnatakaPresence() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, [reduceMotion]);

  return (
    <section
      id="presence"
      className="relative overflow-hidden bg-[#f1f2f4]"
      aria-labelledby="karnataka-presence-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
        <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[500px]">
          {reduceMotion ? (
            <div className="absolute inset-0 grid place-items-center px-6 text-center">
              <p className="text-sm text-muted">
                Our presence across Karnataka — Whitefield, Malur and Hoskote.
              </p>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:py-20">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.22em]">
            <span className="block h-px w-6 bg-[#e8c84a] sm:w-8" aria-hidden />
            Areas across Karnataka
          </p>

          <h2
            id="karnataka-presence-heading"
            className="mt-4 text-2xl font-bold leading-[1.15] tracking-tight text-navy sm:mt-5 sm:text-3xl md:text-4xl"
          >
            Growth corridors we know deeply.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:mt-5 sm:text-base">
            Residential land along Bengaluru’s eastern belt — where connectivity,
            approvals and long-term demand align.
          </p>

          <ul className="mt-8 space-y-5 sm:mt-10">
            {locationPages.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/locations/${area.slug}`}
                  className="group block border-l-2 border-navy/12 pl-4 transition hover:border-forest"
                >
                  <p className="text-sm font-bold text-navy transition group-hover:text-forest sm:text-base">
                    {area.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/locations"
            className="group mt-8 inline-flex items-center gap-3 self-start text-xs font-semibold uppercase tracking-[0.14em] text-forest sm:mt-10 sm:text-sm"
          >
            Explore all locations
            <span
              className="block h-px w-8 bg-forest transition-[width] duration-300 group-hover:w-12"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
