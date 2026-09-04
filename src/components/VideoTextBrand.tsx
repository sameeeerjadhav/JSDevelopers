"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef } from "react";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_24fps.mp4";

const POSTER_SRC =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";

type VideoTextBrandProps = {
  tagline?: string;
};

export function VideoTextBrand({
  tagline = "Trust. It's what we build.",
}: VideoTextBrandProps) {
  const maskId = useId().replace(/:/g, "");
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
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28"
      aria-labelledby="video-text-brand-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="video-text-brand-heading" className="sr-only">
          JS Developers
        </h2>

        <div className="relative mx-auto aspect-[1200/340] w-full max-w-5xl overflow-hidden bg-white">
          {reduceMotion ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={POSTER_SRC}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={POSTER_SRC}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          )}

          {/*
            White cover with letter cutouts. preserveAspectRatio=none so the
            cover fills the box fully — no dark video strip/line at the edge.
          */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 340"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <mask
                id={maskId}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1200"
                height="340"
              >
                <rect width="1200" height="340" fill="white" />
                <text
                  x="600"
                  y="125"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                  fontFamily="var(--font-montserrat), Montserrat, system-ui, sans-serif"
                  fontWeight="800"
                  fontSize="140"
                  letterSpacing="-4"
                >
                  JS
                </text>
                <text
                  x="600"
                  y="250"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                  fontFamily="var(--font-montserrat), Montserrat, system-ui, sans-serif"
                  fontWeight="800"
                  fontSize="124"
                  letterSpacing="-3"
                >
                  DEVELOPERS
                </text>
              </mask>
            </defs>
            <rect
              width="1200"
              height="340"
              fill="white"
              mask={`url(#${maskId})`}
            />
          </svg>
        </div>

        <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-navy sm:mt-10 sm:text-sm sm:tracking-[0.28em] md:tracking-[0.3em]">
          {tagline}
        </p>
      </div>
    </section>
  );
}
