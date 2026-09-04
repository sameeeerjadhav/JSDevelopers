"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

type WipeDirection = "tr-bl" | "bl-tr";

type HeroSlide = {
  src: string;
  alt: string;
  tabLabel: string;
  category: string;
  headline: string;
  subtitle: string;
  cta: { label: string; href: string };
  wipeColor: string;
  wipeDirection: WipeDirection;
};

/** Placeholder slides — swap `src` with client photos (e.g. `/hero/slide-1.jpg`) later. */
const HERO_SLIDES: HeroSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern villa with pool",
    tabLabel: "Villa Plots",
    category: "Premium layouts",
    headline:
      "RERA-ready residential plots on the Whitefield–Malur corridor.",
    subtitle:
      "Built for families who want land, not just listings — with clear dimensions and approach roads.",
    cta: { label: "View projects", href: "/projects" },
    wipeColor: "#152d47",
    wipeDirection: "tr-bl",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
    alt: "Contemporary home exterior",
    tabLabel: "Trusted legacy",
    category: "12+ years experience",
    headline: "Bengaluru developers with MPA-approved layouts you can verify.",
    subtitle:
      "Over a decade of plotted developments across the eastern growth corridors.",
    cta: { label: "About us", href: "/about" },
    wipeColor: "#1a4d38",
    wipeDirection: "bl-tr",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=80",
    alt: "Residential neighbourhood aerial view",
    tabLabel: "Clear paperwork",
    category: "From call to registration",
    headline: "Transparent documentation from first site visit to registration.",
    subtitle:
      "Walk the land, review approvals, and speak directly with our team before you decide.",
    cta: { label: "Contact us", href: "/contact" },
    wipeColor: "#6b4530",
    wipeDirection: "tr-bl",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
    alt: "Urban development at dusk",
    tabLabel: "Growth corridors",
    category: "Whitefield · Malur · Hoskote",
    headline: "Land where connectivity compounds long-term value.",
    subtitle:
      "Corridors with road upgrades, industrial pull, and rising residential demand.",
    cta: { label: "Explore locations", href: "/projects" },
    wipeColor: "#243d4a",
    wipeDirection: "bl-tr",
  },
];

const SLIDE_DURATION_MS = 7000;
const WIPE_DURATION_MS = 1300;
const CONTENT_EXIT_MS = 500;
const CONTENT_ENTER_DELAY_MS = 200;
/** Zoom runs past the slide timer so it never visibly stops before the wipe freezes it. */
const KEN_BURNS_DURATION_MS =
  SLIDE_DURATION_MS + CONTENT_EXIT_MS + WIPE_DURATION_MS / 2;

type SlideVisualState = "hidden" | "zooming" | "frozen" | "entering";

function getSlideVisualState(
  index: number,
  activeIndex: number,
  pendingIndex: number | null,
  isWiping: boolean,
  wipeHalfway: boolean,
): SlideVisualState {
  if (!isWiping) {
    return index === activeIndex ? "zooming" : "hidden";
  }

  if (pendingIndex === null) {
    return "hidden";
  }

  if (index === pendingIndex) {
    return "entering";
  }

  if (index === activeIndex && !wipeHalfway) {
    return "frozen";
  }

  return "hidden";
}

function HeroSlideBackground({
  slide,
  visualState,
  priority,
  slideshowPaused,
}: {
  slide: HeroSlide;
  visualState: SlideVisualState;
  priority?: boolean;
  slideshowPaused: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [cycleKey, setCycleKey] = useState(0);
  const prevState = useRef<SlideVisualState>("hidden");

  useEffect(() => {
    const wasVisible = prevState.current !== "hidden";
    const isVisible = visualState !== "hidden";

    if (wasVisible && !isVisible) {
      setCycleKey((key) => key + 1);
    }

    prevState.current = visualState;
  }, [visualState]);

  const hasKenBurns =
    !reduceMotion &&
    (visualState === "zooming" ||
      visualState === "entering" ||
      visualState === "frozen");
  const shouldPause = slideshowPaused || reduceMotion;
  const freezeZoom = visualState === "frozen";

  return (
    <div
      className={`absolute inset-0 ${
        visualState === "hidden"
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      } ${hasKenBurns ? "hero-slide-animate" : ""} ${
        shouldPause || freezeZoom ? "hero-slide-paused" : ""
      }`}
      style={{
        zIndex:
          visualState === "frozen" ? 2 : visualState === "hidden" ? 0 : 1,
        ["--hero-slide-duration" as string]: `${KEN_BURNS_DURATION_MS}ms`,
      }}
      aria-hidden={visualState === "hidden"}
    >
      <div key={cycleKey} className="hero-ken-burns-image absolute inset-0">
        <Image
          src={slide.src}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function DiagonalWipe({
  color,
  direction,
  onHalfway,
  onComplete,
}: {
  color: string;
  direction: WipeDirection;
  onHalfway: () => void;
  onComplete: () => void;
}) {
  const rotation = direction === "tr-bl" ? -42 : 42;
  const xKeyframes =
    direction === "tr-bl"
      ? (["115vw", "0vw", "-115vw"] as const)
      : (["-115vw", "0vw", "115vw"] as const);
  const onHalfwayRef = useRef(onHalfway);
  const onCompleteRef = useRef(onComplete);

  onHalfwayRef.current = onHalfway;
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const halfway = window.setTimeout(
      () => onHalfwayRef.current(),
      WIPE_DURATION_MS / 2,
    );
    const complete = window.setTimeout(
      () => onCompleteRef.current(),
      WIPE_DURATION_MS,
    );
    return () => {
      window.clearTimeout(halfway);
      window.clearTimeout(complete);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none absolute z-30"
      style={{
        top: "50%",
        left: "50%",
        width: "280vmax",
        height: "130vmax",
        marginLeft: "-140vmax",
        marginTop: "-65vmax",
        backgroundColor: color,
        rotate: rotation,
      }}
      initial={{ x: xKeyframes[0] }}
      animate={{ x: [...xKeyframes] }}
      transition={{
        duration: WIPE_DURATION_MS / 1000,
        times: [0, 0.5, 1],
        ease: [0.45, 0, 0.15, 1],
      }}
      aria-hidden
    />
  );
}

export function HeroClassic() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isWiping, setIsWiping] = useState(false);
  const [wipeHalfway, setWipeHalfway] = useState(false);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);
  const [contentRevealKey, setContentRevealKey] = useState(0);
  const activeIndexRef = useRef(activeIndex);
  const isWipingRef = useRef(false);
  const pendingIndexRef = useRef<number | null>(null);
  const showContentRef = useRef(true);

  activeIndexRef.current = activeIndex;
  isWipingRef.current = isWiping;
  pendingIndexRef.current = pendingIndex;
  showContentRef.current = showContent;

  const slide = HERO_SLIDES[contentIndex];
  const pendingSlide =
    pendingIndex !== null ? HERO_SLIDES[pendingIndex] : null;

  const finishWipe = useCallback(() => {
    const nextIndex = pendingIndexRef.current;

    if (nextIndex !== null) {
      setActiveIndex(nextIndex);
      setContentIndex(nextIndex);
      setProgressKey((key) => key + 1);
    }

    setPendingIndex(null);
    setWipeHalfway(false);
    setIsWiping(false);

    window.setTimeout(() => {
      setContentRevealKey((key) => key + 1);
      setShowContent(true);
    }, CONTENT_ENTER_DELAY_MS);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (
        isWipingRef.current ||
        pendingIndexRef.current !== null ||
        index === activeIndexRef.current ||
        index < 0 ||
        index >= HERO_SLIDES.length
      ) {
        return;
      }

      if (reduceMotion) {
        setActiveIndex(index);
        setContentIndex(index);
        setProgressKey((key) => key + 1);
        setContentRevealKey((key) => key + 1);
        setShowContent(true);
        return;
      }

      setPendingIndex(index);
      setWipeHalfway(false);
      setShowContent(false);
    },
    [reduceMotion],
  );

  useEffect(() => {
    if (showContent || pendingIndex === null || isWiping || reduceMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsWiping(true);
    }, CONTENT_EXIT_MS);

    return () => window.clearTimeout(timer);
  }, [showContent, pendingIndex, isWiping, reduceMotion]);

  const advanceSlide = useCallback(() => {
    goToSlide((activeIndexRef.current + 1) % HERO_SLIDES.length);
  }, [goToSlide]);

  useEffect(() => {
    if (
      isPaused ||
      isWiping ||
      pendingIndex !== null ||
      !showContent ||
      reduceMotion
    ) {
      return;
    }

    const timer = window.setInterval(advanceSlide, SLIDE_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [
    isPaused,
    isWiping,
    pendingIndex,
    showContent,
    advanceSlide,
    reduceMotion,
    activeIndex,
    progressKey,
  ]);

  useEffect(() => {
    if (!showContent && pendingIndex === null && !isWiping) {
      const recovery = window.setTimeout(() => {
        setShowContent(true);
      }, 300);

      return () => window.clearTimeout(recovery);
    }
  }, [showContent, pendingIndex, isWiping]);

  const handleWipeHalfway = useCallback(() => {
    setWipeHalfway(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((item, index) => (
          <HeroSlideBackground
            key={item.src}
            slide={item}
            visualState={getSlideVisualState(
              index,
              activeIndex,
              pendingIndex,
              isWiping,
              wipeHalfway,
            )}
            priority={index === 0}
            slideshowPaused={isPaused}
          />
        ))}
        {isWiping && pendingSlide ? (
          <DiagonalWipe
            color={pendingSlide.wipeColor}
            direction={pendingSlide.wipeDirection}
            onHalfway={handleWipeHalfway}
            onComplete={finishWipe}
          />
        ) : null}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,40,0.35)_0%,rgba(6,20,40,0.55)_45%,rgba(6,20,40,0.92)_100%)] sm:bg-[linear-gradient(105deg,rgba(6,20,40,0.88)_0%,rgba(6,20,40,0.55)_48%,rgba(6,20,40,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,158,99,0.22),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-[10.5rem] pt-20 sm:pb-36 sm:pt-24 md:justify-center md:px-8 md:pb-32 md:pt-28">
        <AnimatePresence mode="wait" initial={false}>
          {showContent ? (
            <motion.div
              key={`${contentIndex}-${contentRevealKey}`}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-2xl"
            >
              <div className="relative -ml-5 md:ml-0 md:left-1/2 md:w-screen md:-translate-x-1/2">
                <div className="relative flex items-center gap-2 pl-[calc(min(42vw,10rem)+0.75rem)] sm:pl-[calc(min(28vw,6rem)+0.75rem)] md:gap-4 md:px-8 md:pl-[calc(min(48vw,28rem)+1rem)]">
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-[3px] w-[min(42vw,10rem)] -translate-y-1/2 origin-left bg-[#e8c84a] sm:w-[min(28vw,6rem)] md:left-8 md:w-[min(48vw,28rem)]"
                    initial={reduceMotion ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.05,
                    }}
                  />
                  <motion.p
                    className="min-w-0 text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-white/75 sm:text-xs sm:tracking-[0.22em]"
                    initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.35,
                    }}
                  >
                    {slide.category}
                  </motion.p>
                </div>
              </div>

              <motion.h1
                className="mt-2.5 text-[1.35rem] font-bold leading-[1.2] tracking-tight text-white sm:mt-4 sm:text-2xl md:text-[2.75rem] lg:text-5xl lg:leading-[1.1]"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.45,
                }}
              >
                {slide.headline}
              </motion.h1>

              <motion.p
                className="mt-3 max-w-lg text-xs leading-relaxed text-white/72 sm:mt-4 sm:text-sm md:text-base"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.58,
                }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                className="mt-5 flex flex-row flex-wrap items-center gap-x-4 gap-y-2 sm:mt-8 sm:gap-4"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.7,
                }}
              >
                <Link
                  href={slide.cta.href}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white sm:gap-3 sm:text-sm sm:tracking-[0.14em]"
                >
                  {slide.cta.label}
                  <span
                    className="block h-px w-10 bg-white/80 transition group-hover:w-14 group-hover:bg-white"
                    aria-hidden
                  />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in your residential plots.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
                  className="border border-white/35 bg-white/5 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/15 sm:px-5 sm:py-2.5 sm:text-xs"
                >
                  WhatsApp us
                </a>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-gradient-to-t from-navy-deep/95 to-navy-deep/40 px-4 pb-3 pt-2.5 sm:px-5 sm:pb-5 sm:pt-4 md:px-8">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-2 sm:gap-4">
          <div
            className="scrollbar-hide flex min-w-0 flex-1 gap-x-5 overflow-x-auto pr-2 sm:gap-x-6"
            role="tablist"
            aria-label="Hero slides"
          >
            {HERO_SLIDES.map((item, index) => {
              const isActive = index === activeIndex && !isWiping;
              return (
                <button
                  key={item.tabLabel}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goToSlide(index)}
                  className={`relative shrink-0 whitespace-nowrap pb-1.5 text-left text-[9px] font-semibold uppercase tracking-[0.08em] transition sm:pb-2 sm:text-[10px] sm:tracking-[0.1em] md:text-xs ${
                    isActive ? "text-white" : "text-white/45 hover:text-white/70"
                  }`}
                >
                  {isActive && !isPaused && !reduceMotion ? (
                    <span
                      key={progressKey}
                      className="absolute inset-x-0 top-0 h-0.5 origin-left bg-white hero-tab-progress"
                      style={{
                        animationDuration: `${SLIDE_DURATION_MS}ms`,
                      }}
                      aria-hidden
                    />
                  ) : (
                    <span
                      className={`absolute inset-x-0 top-0 h-0.5 ${
                        isActive ? "bg-white/60" : "bg-transparent"
                      }`}
                      aria-hidden
                    />
                  )}
                  {item.tabLabel}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            className="mb-0.5 hidden h-8 w-8 shrink-0 place-items-center rounded-full border border-white/25 text-white/80 transition hover:border-white/50 hover:text-white sm:grid sm:h-9 sm:w-9"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
