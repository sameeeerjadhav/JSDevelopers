"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef } from "react";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_24fps.mp4";

const POSTER_SRC =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";

const EASE = [0.22, 1, 0.36, 1] as const;

type VideoTextBrandProps = {
  tagline?: string;
};

export function VideoTextBrand({
  tagline = "Trust. It's what we build.",
}: VideoTextBrandProps) {
  const maskId = useId().replace(/:/g, "");
  const wipeId = `${maskId}-wipe`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });

  useEffect(() => {
    if (reduceMotion) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, [reduceMotion]);

  // Wipe travels left→right, revealing the letter cutouts as it goes.
  const wipeVariants = {
    hidden: { x: -1300 },
    visible: {
      x: 0,
      transition: { duration: 1.45, ease: EASE, delay: 0.15 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20"
      aria-labelledby="video-text-brand-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="video-text-brand-heading" className="sr-only">
          JS Developers
        </h2>

        <motion.p
          className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest sm:text-xs"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <motion.span
            className="block h-px bg-forest"
            initial={reduceMotion ? false : { width: 0 }}
            animate={inView ? { width: "2rem" } : undefined}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            aria-hidden
          />
          Since 2013
          <motion.span
            className="block h-px bg-forest"
            initial={reduceMotion ? false : { width: 0 }}
            animate={inView ? { width: "2rem" } : undefined}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            aria-hidden
          />
        </motion.p>

        <motion.div
          className="relative mx-auto mt-8 aspect-[1200/340] w-full max-w-4xl overflow-hidden bg-white sm:mt-10"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={
            inView
              ? reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: [0, -6, 0] }
              : undefined
          }
          transition={
            reduceMotion
              ? { duration: 0.7, ease: EASE }
              : {
                  opacity: { duration: 0.7, ease: EASE },
                  y: {
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 1.6,
                  },
                }
          }
        >
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.16 }}
            animate={inView ? { scale: 1 } : undefined}
            transition={{ duration: 1.8, ease: EASE }}
          >
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
          </motion.div>

          {/*
            White cover with letter cutouts. preserveAspectRatio=none so the
            cover fills the box fully — no dark video strip/line at the edge.
            An animated wipe rect inside the mask reveals the letters on scroll.
          */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 340"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              {/* Clips the cutout text so it appears progressively. */}
              <clipPath id={wipeId}>
                <motion.rect
                  x="-60"
                  y="0"
                  width="1320"
                  height="340"
                  variants={reduceMotion ? undefined : wipeVariants}
                  initial={reduceMotion ? undefined : "hidden"}
                  animate={reduceMotion || inView ? "visible" : "hidden"}
                />
              </clipPath>

              <mask
                id={maskId}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1200"
                height="340"
              >
                <rect width="1200" height="340" fill="white" />
                <g clipPath={`url(#${wipeId})`}>
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
                </g>
              </mask>
            </defs>
            <rect
              width="1200"
              height="340"
              fill="white"
              mask={`url(#${maskId})`}
            />
          </svg>

          {/* Light sweep that travels across the wordmark after the reveal. */}
          {!reduceMotion && (
            <motion.div
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.55)_50%,transparent_100%)] mix-blend-overlay"
              initial={{ x: "-140%" }}
              animate={inView ? { x: "420%" } : undefined}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                delay: 1.7,
                repeat: Infinity,
                repeatDelay: 4.5,
              }}
              aria-hidden
            />
          )}
        </motion.div>

        <motion.p
          className="mt-4 text-center text-[10px] font-bold uppercase text-ink sm:mt-6 sm:text-sm"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 12, letterSpacing: "0.5em" }
          }
          animate={
            inView
              ? { opacity: 1, y: 0, letterSpacing: "0.28em" }
              : undefined
          }
          transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
}
