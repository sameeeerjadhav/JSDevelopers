"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type StackCard = {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

/** Hold on the raised card before the next shuffle */
export const CARD_STACK_HOLD_MS = 4400;
/** Approximate settle time used for cycle sync (hero line, etc.) */
export const CARD_STACK_ANIM_MS = 980;
export const CARD_STACK_CYCLE_MS = CARD_STACK_HOLD_MS + CARD_STACK_ANIM_MS;

const HOLD_MS = CARD_STACK_HOLD_MS;
const DROP_MS = 420;
const RAISE_SETTLE_MS = 560;
const BASE_CARD_WIDTH = 220;
const BASE_LIFT_Y = 88;
const MAX_FAN_ROTATE = 36;

const springSoft = {
  type: "spring" as const,
  stiffness: 78,
  damping: 22,
  mass: 1.05,
};

const springLift = {
  type: "spring" as const,
  stiffness: 92,
  damping: 18,
  mass: 0.95,
};

type StackMetrics = {
  cardWidth: number;
  liftY: number;
  fanScale: number;
};

function getCenterSlot(total: number) {
  return Math.floor(total / 2);
}

function getFanSlot(slotIndex: number, total: number, fanScale: number) {
  const center = getCenterSlot(total);
  const offset = slotIndex - center;
  const denom = Math.max(center, 1);
  const rotate = (offset / denom) * MAX_FAN_ROTATE * fanScale;
  const x = offset * 22 * fanScale;
  const y = Math.abs(offset) * 5 * fanScale;
  const zIndex = slotIndex + 1;
  const depth = Math.abs(offset);

  return { rotate, x, y, zIndex, depth };
}

function slotForCard(
  cardIndex: number,
  activeIndex: number,
  total: number,
): number {
  const center = getCenterSlot(total);
  return (activeIndex - cardIndex + center + total * 10) % total;
}

function getStackMetrics(containerWidth: number): StackMetrics {
  const fanScale = Math.min(1, Math.max(0.52, containerWidth / 360));
  return {
    cardWidth: BASE_CARD_WIDTH * fanScale,
    liftY: BASE_LIFT_Y * Math.max(0.62, fanScale),
    fanScale,
  };
}

type CardStackProps = {
  cards: StackCard[];
  onActiveIndexChange?: (index: number) => void;
};

export function CardStack({ cards, onActiveIndexChange }: CardStackProps) {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState<StackMetrics>(() =>
    getStackMetrics(340),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRaised, setIsRaised] = useState(true);
  const animatingRef = useRef(false);
  const activeIndexRef = useRef(activeIndex);
  const timersRef = useRef<number[]>([]);
  activeIndexRef.current = activeIndex;

  const centerSlot = getCenterSlot(cards.length);
  const { cardWidth, liftY, fanScale } = metrics;
  const stackHeight = cardWidth * 1.5 + liftY + 56 * fanScale;

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const update = () => {
      setMetrics(getStackMetrics(el.getBoundingClientRect().width));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    onActiveIndexChange?.(activeIndex);
  }, [activeIndex, onActiveIndexChange]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const goToIndex = useCallback(
    (nextIndex: number) => {
      if (
        animatingRef.current ||
        nextIndex === activeIndexRef.current ||
        cards.length < 2
      ) {
        return;
      }

      animatingRef.current = true;
      clearTimers();

      if (reduceMotion) {
        setIsRaised(true);
        setActiveIndex(nextIndex);
        animatingRef.current = false;
        return;
      }

      // 1) Softly lower the raised card into the fan
      setIsRaised(false);

      // 2) Once it’s nearly seated, rotate the deck
      const t1 = window.setTimeout(() => {
        setActiveIndex(nextIndex);

        // 3) Lift the new center after a frame so springs start from rest
        const t2 = window.setTimeout(() => {
          setIsRaised(true);
          const t3 = window.setTimeout(() => {
            animatingRef.current = false;
          }, RAISE_SETTLE_MS);
          timersRef.current.push(t3);
        }, 48);
        timersRef.current.push(t2);
      }, DROP_MS);

      timersRef.current.push(t1);
    },
    [cards.length, clearTimers, reduceMotion],
  );

  const advance = useCallback(() => {
    goToIndex((activeIndexRef.current + 1) % cards.length);
  }, [cards.length, goToIndex]);

  useEffect(() => {
    if (reduceMotion || cards.length < 2) return;

    const timer = window.setInterval(advance, HOLD_MS + CARD_STACK_ANIM_MS);
    return () => window.clearInterval(timer);
  }, [advance, cards.length, reduceMotion]);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto w-full max-w-[min(100%,400px)] overflow-x-clip sm:overflow-visible"
    >
      <div
        className="relative overflow-visible"
        style={{ height: stackHeight }}
      >
        <div
          className="pointer-events-none absolute bottom-10 left-1/2 h-12 w-24 -translate-x-1/2 rounded-full bg-navy/[0.08] blur-2xl sm:bottom-12 sm:h-16 sm:w-32"
          aria-hidden
        />

        <div
          className="absolute inset-x-0 bottom-12 top-0 sm:bottom-16"
          style={{ perspective: "1400px" }}
        >
          {cards.map((card, cardIndex) => {
            const slotIndex = slotForCard(cardIndex, activeIndex, cards.length);
            const fan = getFanSlot(slotIndex, cards.length, fanScale);
            const isCenter = slotIndex === centerSlot;
            const lifted = isCenter && isRaised;
            const y = lifted ? fan.y - liftY : fan.y;
            const scale = lifted
              ? 1.055
              : 1 - fan.depth * 0.018 - (slotIndex < centerSlot ? 0.025 : 0);
            const zIndex = lifted ? 60 : fan.zIndex;
            const stagger = reduceMotion ? 0 : fan.depth * 0.035;

            return (
              <motion.div
                key={card.id}
                className="absolute bottom-0 left-1/2 will-change-transform"
                style={{
                  width: cardWidth,
                  marginLeft: -cardWidth / 2,
                  transformOrigin: "50% 100%",
                  zIndex,
                }}
                animate={{
                  x: fan.x,
                  y: -y,
                  rotate: fan.rotate,
                  scale,
                }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        ...(lifted ? springLift : springSoft),
                        delay: stagger,
                      }
                }
              >
                <div
                  className={`relative aspect-[2/3] overflow-hidden rounded-lg bg-navy/10 transition-[box-shadow,ring-color] duration-700 ease-out sm:rounded-2xl ${
                    lifted
                      ? "shadow-[0_36px_70px_-22px_rgba(10,31,61,0.55)] ring-2 ring-white/90"
                      : "shadow-[0_14px_36px_-18px_rgba(10,31,61,0.4)] ring-1 ring-white/70"
                  }`}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, 220px"
                    className="object-cover"
                    priority={isCenter}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />

                  <motion.div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#e8c84a] to-transparent"
                    initial={false}
                    animate={{ opacity: lifted ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />

                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-2.5 sm:p-4"
                    initial={false}
                    animate={{
                      opacity: lifted ? 1 : 0,
                      y: lifted ? 0 : 8,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: lifted ? 0.12 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-[10px] sm:tracking-[0.14em]">
                      {card.subtitle}
                    </p>
                    <p className="mt-0.5 text-xs font-bold leading-tight text-white sm:text-base">
                      {card.title}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 pt-1 sm:pt-2">
        {cards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            aria-label={`Show ${card.title}`}
            onClick={() => goToIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              index === activeIndex
                ? "w-6 bg-forest"
                : "w-1.5 bg-navy/20 hover:bg-navy/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
