"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { projectCategories, projects, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

type ProjectsShowcaseProps = {
  showListings?: boolean;
};

const AUTO_ADVANCE_MS = 4500;

export function ProjectsShowcase({ showListings = true }: ProjectsShowcaseProps) {
  const [activeId, setActiveId] = useState(projectCategories[0]?.id ?? "");
  const [paused, setPaused] = useState(false);
  const active = useMemo(
    () => projectCategories.find((c) => c.id === activeId) ?? projectCategories[0],
    [activeId],
  );

  // Tracks how much of the current cycle is left so pausing/resuming keeps
  // the timer and the visual progress bar (see the CSS animation below) in sync.
  const remainingMsRef = useRef(AUTO_ADVANCE_MS);
  const cycleStartedAtRef = useRef(Date.now());

  useEffect(() => {
    remainingMsRef.current = AUTO_ADVANCE_MS;
  }, [activeId]);

  useEffect(() => {
    if (paused) {
      remainingMsRef.current -= Date.now() - cycleStartedAtRef.current;
      return;
    }
    cycleStartedAtRef.current = Date.now();
    const timer = setTimeout(() => {
      setActiveId((current) => {
        const index = projectCategories.findIndex((c) => c.id === current);
        const next = projectCategories[(index + 1) % projectCategories.length];
        return next?.id ?? current;
      });
    }, remainingMsRef.current);
    return () => clearTimeout(timer);
  }, [activeId, paused]);

  const listed = showListings
    ? projects.filter((p) =>
        active?.projectIds.length
          ? active.projectIds.includes(p.id)
          : true,
      )
    : [];

  if (!active) return null;

  return (
    <section className="bg-white">
      <div className="border-b border-navy/10">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 md:px-8">
          <div className="flex flex-1 gap-8 overflow-x-auto">
            {projectCategories.map((category) => {
              const isActive = category.id === active.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`relative shrink-0 py-5 text-sm font-medium tracking-wide transition md:text-base ${
                    isActive ? "text-forest" : "text-navy/55 hover:text-navy"
                  }`}
                >
                  {category.label}
                  <span className="absolute inset-x-0 bottom-0 h-[3px] bg-navy/10" />
                  {isActive && (
                    <span
                      key={category.id}
                      style={{
                        animation: `project-tab-fill ${AUTO_ADVANCE_MS}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                      className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-forest"
                    />
                  )}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Resume automatic rotation" : "Pause automatic rotation"}
            aria-pressed={paused}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/15 text-navy/50 transition hover:border-forest/40 hover:text-forest"
          >
            {paused ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${active.id}-image`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="relative aspect-[4/3] overflow-hidden bg-navy"
          >
            {/* Sharp corners intentionally — matches reference style */}
            <Image
              src={active.image}
              alt={active.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active.id}-copy`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl lg:text-[2.75rem]">
              {active.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
              {active.body}
            </p>
            <Link
              href={active.ctaHref}
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-forest transition hover:text-navy"
            >
              {active.ctaLabel}
              <span className="block h-px w-10 bg-forest" aria-hidden />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {showListings && listed.length > 0 && (
        <div id="listings" className="border-t border-navy/8 bg-sand">
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest">
              Featured in {active.label}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {listed.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col border border-navy/10 bg-white p-6 transition hover:border-forest/40 hover:shadow-[0_18px_40px_-28px_rgba(10,31,61,0.45)]"
                >
                  <Link href={`/projects/${project.id}`} className="block flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-navy hover:text-forest">
                        {project.name}
                      </h3>
                      <span className="shrink-0 bg-mist px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest">
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-forest">
                      {project.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-coral">
                      {project.priceLabel}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className="border border-navy/10 px-2.5 py-1 text-xs font-medium text-navy"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </Link>
                  <div className="mt-6 flex gap-2">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 bg-navy px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white hover:bg-navy-deep"
                    >
                      View details
                    </Link>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${project.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("whatsapp_click", {
                          location: "project_card",
                          project: project.name,
                        })
                      }
                      className="flex-1 bg-[#25D366] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white hover:brightness-95"
                    >
                      WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
