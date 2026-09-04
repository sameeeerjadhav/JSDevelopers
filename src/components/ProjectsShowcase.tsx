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
                  className="absolute left-0 top-1/2 h-[3px] w-12 -translate-y-1/2 bg-[#e8c84a] sm:w-14"
                />
                <p className="relative pl-[4rem] text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:pl-[4.75rem] sm:text-xs sm:tracking-[0.22em]">
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
  return (
    <section id="what-we-do" className="relative py-14 sm:py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -right-6 top-10 hidden h-44 w-44 md:block lg:-right-2 lg:top-14">
          <div className="absolute right-0 top-0 h-px w-36 rotate-[25deg] bg-[#e8c84a]/80" />
          <div className="absolute right-5 top-7 h-px w-28 rotate-[25deg] bg-[#e8c84a]/55" />
          <div className="absolute right-0 top-14 h-28 w-px bg-[#e8c84a]/35" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden">
          <div className="relative flex min-h-7 items-center sm:min-h-8">
            <span
              aria-hidden
              className="absolute left-0 top-1/2 h-[3px] w-12 -translate-y-1/2 bg-[#e8c84a] sm:w-14"
            />
            <p className="relative pl-[4rem] text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:pl-[4.75rem] sm:text-xs sm:tracking-[0.22em]">
              What we do
            </p>
          </div>
        </div>

        <h2 className="mt-5 max-w-4xl text-[1.4rem] font-bold leading-[1.15] tracking-tight text-navy sm:mt-6 sm:text-2xl md:text-[2.65rem] lg:text-5xl lg:leading-[1.08]">
          We have a vision for residential land that lasts generations.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base">
          Choose a category to see how we approach villa plots, live layouts and
          corridor projects — then open listings with clear paperwork.
        </p>

        <div className="relative mt-8 sm:mt-10">
          <div
            className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-x-5 overflow-x-auto border-b border-navy/10 px-5 pb-px sm:gap-x-7 md:mx-0 md:px-0"
            role="tablist"
            aria-label="Project categories"
          >
            {projectCategories.map((category) => {
              const isActive = category.id === active.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                  className={`relative shrink-0 snap-start whitespace-nowrap pb-3 text-[11px] font-semibold tracking-wide transition sm:pb-4 sm:text-xs md:text-sm lg:text-base ${
                    isActive ? "text-forest" : "text-navy/45 hover:text-navy/70"
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

        <div className="mt-8 grid items-start gap-6 sm:mt-10 sm:gap-8 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active.id}-image`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative aspect-[3/2] w-full overflow-hidden bg-navy sm:aspect-[4/3]"
            >
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={active.id === projectCategories[0]?.id}
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
              className="min-w-0"
            >
              <h3 className="text-lg font-bold leading-tight tracking-tight text-navy sm:text-xl md:text-2xl lg:text-4xl">
                {active.headline}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:mt-5 md:text-lg">
                {active.body}
              </p>
              <Link
                href={active.ctaHref}
                className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest transition hover:text-navy sm:mt-8 sm:gap-3 sm:text-sm sm:tracking-[0.14em]"
              >
                {active.ctaLabel}
                <span
                  className="block h-px w-8 bg-forest transition group-hover:w-12 group-hover:bg-navy sm:w-10 sm:group-hover:w-14"
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
