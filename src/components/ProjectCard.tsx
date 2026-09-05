"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const STAGGER = [
  "md:translate-y-10",
  "md:-translate-y-4",
  "md:translate-y-6",
  "md:translate-y-12",
];

type ProjectCardProps = {
  project: Project;
  index?: number;
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const stagger = STAGGER[index % STAGGER.length];

  return (
    <article
      className={`group relative w-full max-w-[300px] transition duration-500 hover:-translate-y-1 sm:max-w-[320px] ${stagger}`}
    >
      <Link
        href={`/projects/${project.id}`}
        className="relative block overflow-hidden rounded-[2rem] bg-navy shadow-[0_24px_60px_-28px_rgba(10,31,61,0.55)]"
      >
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 320px, 85vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-navy/5" />

          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-forest backdrop-blur-sm">
            {project.status}
          </span>

          <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy shadow-lg transition group-hover:scale-105 group-hover:bg-[#e8c84a]">
            <ArrowUpRight />
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
              {project.shortLocation}
            </p>
            <h3 className="mt-1 text-xl font-bold leading-tight text-white sm:text-2xl">
              {project.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/75">
              {project.tagline || project.description}
            </p>
            <p className="mt-3 text-sm font-bold text-[#f6d86b]">
              {project.priceLabel}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      <div className="mt-4 flex items-center justify-between gap-3 px-1">
        <Link
          href={`/projects/${project.id}`}
          className="text-xs font-semibold uppercase tracking-[0.12em] text-navy transition hover:text-forest"
        >
          View project
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
          className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-xs font-semibold text-navy transition hover:border-forest hover:text-forest"
        >
          WhatsApp
        </a>
      </div>
    </article>
  );
}
