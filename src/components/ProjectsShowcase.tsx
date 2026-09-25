"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCategories, projects } from "@/lib/site";

type ProjectsShowcaseProps = {
  showListings?: boolean;
};

export function ProjectsShowcase({ showListings = true }: ProjectsShowcaseProps) {
  const [activeId, setActiveId] = useState(
    showListings ? "all" : (projectCategories[0]?.id ?? ""),
  );
  const active = useMemo(
    () => projectCategories.find((c) => c.id === activeId) ?? projectCategories[0],
    [activeId],
  );

  const listed =
    !showListings || activeId === "all"
      ? projects
      : projects.filter((p) =>
          active?.projectIds.length ? active.projectIds.includes(p.id) : true,
        );

  if (!showListings && !active) return null;

  // Projects page: listings only (no category feature panel)
  if (showListings) {
    return (
      <section
        id="listings"
        className="relative bg-transparent py-14 sm:py-20 md:py-24"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="relative flex min-h-7 items-center sm:min-h-8">
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 h-px w-12 -translate-y-1/2 bg-forest sm:w-14"
                />
                <p className="relative pl-[4rem] text-[10px] font-semibold uppercase tracking-[0.18em] text-forest sm:pl-[4.75rem] sm:text-xs sm:tracking-[0.22em]">
                  Live listings
                </p>
              </div>
              <h2 className="mt-5 max-w-xl text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
                Explore layouts you can visit on the ground
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
              Premium plotted developments with clear paperwork — pick a project
              to view details or message us on WhatsApp.
            </p>
          </div>

          <div className="relative mt-8 sm:mt-10">
            <div
              className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-x-5 overflow-x-auto border-b border-navy/10 px-5 pb-px sm:gap-x-7 md:mx-0 md:px-0"
              role="tablist"
              aria-label="Filter projects"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeId === "all"}
                onClick={() => setActiveId("all")}
                className={`relative shrink-0 snap-start whitespace-nowrap pb-3 text-[11px] font-semibold tracking-wide transition sm:pb-4 sm:text-xs md:text-sm ${
                  activeId === "all"
                    ? "text-forest"
                    : "text-navy/45 hover:text-navy/70"
                }`}
              >
                All projects
                {activeId === "all" ? (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-forest"
                    aria-hidden
                  />
                ) : null}
              </button>
              {projectCategories
                .filter((c) => c.projectIds.length > 0)
                .map((category) => {
                  const isActive = category.id === activeId;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveId(category.id)}
                      className={`relative shrink-0 snap-start whitespace-nowrap pb-3 text-[11px] font-semibold tracking-wide transition sm:pb-4 sm:text-xs md:text-sm ${
                        isActive
                          ? "text-forest"
                          : "text-navy/45 hover:text-navy/70"
                      }`}
                    >
                      {category.label}
                      {isActive ? (
                        <span
                          className="absolute inset-x-0 bottom-0 h-0.5 bg-forest"
                          aria-hidden
                        />
                      ) : null}
                    </button>
                  );
                })}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-10 sm:mt-12 md:flex-row md:flex-wrap md:items-end md:justify-center md:gap-8 lg:gap-10">
            {listed.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Homepage: category “What we do” panel only
  const activeNo = projectCategories.findIndex((c) => c.id === active.id) + 1;

  return (
    <section
      id="what-we-do"
      className="relative overflow-x-clip py-12 sm:py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest sm:text-xs">
            <span className="block h-px w-8 bg-forest" aria-hidden />
            What we do
          </p>

          <h2 className="mt-5 max-w-4xl text-[clamp(1.5rem,5.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:leading-[1.1]">
            We have a vision for residential land that lasts generations.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            Choose a category to see how we approach villa plots, live
            layouts and corridor projects — then open listings with clear
            paperwork.
          </p>
        </motion.div>

        {/* Pill tabs */}
        <div className="scrollbar-hide mt-8 flex snap-x snap-mandatory gap-2.5 overflow-x-auto overscroll-x-contain pb-1 sm:mt-10 sm:gap-3">
          {projectCategories.map((category) => {
            const isActive = category.id === active.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(category.id)}
                className={`shrink-0 snap-start whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition sm:text-sm ${
                  isActive
                    ? "bg-ink text-white"
                    : "bg-mist text-muted hover:bg-ink/8 hover:text-ink"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Photo + copy */}
        <div className="mt-8 grid min-w-0 items-stretch gap-6 sm:mt-10 sm:gap-8 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active.id}-image`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[16/10] w-full min-w-0 overflow-hidden rounded-2xl bg-ink sm:aspect-[4/3]"
            >
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
                priority={active.id === projectCategories[0]?.id}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                aria-hidden
              />
              <span className="absolute left-5 top-5 inline-flex h-9 items-center rounded-full bg-white/90 px-4 text-xs font-bold tracking-[0.1em] text-forest backdrop-blur-sm">
                0{activeNo}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${active.id}-copy`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-w-0 flex-col justify-center"
            >
              <h3 className="text-[clamp(1.2rem,4vw,2rem)] font-bold leading-snug tracking-tight text-ink">
                {active.headline}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:text-lg">
                {active.body}
              </p>
              <Link
                href={active.ctaHref}
                className="group mt-6 inline-flex min-h-[3rem] w-fit items-center justify-center gap-3 bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-forest sm:mt-8 sm:px-9 sm:text-[0.8rem]"
              >
                {active.ctaLabel}
                <span
                  className="block h-px w-6 bg-white/60 transition-[width] duration-300 group-hover:w-10"
                  aria-hidden
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
