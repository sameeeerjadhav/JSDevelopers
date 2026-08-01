"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import type { Project } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

function SectionTitle({
  icon,
  children,
}: {
  icon: "home" | "map";
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-3 text-lg font-bold uppercase tracking-[0.08em] text-navy md:text-xl">
      <span className="grid h-9 w-9 place-items-center text-forest" aria-hidden>
        {icon === "home" ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.6]">
            <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.6]">
            <path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10Z" />
            <circle cx="12" cy="11" r="2.5" />
          </svg>
        )}
      </span>
      {children}
    </h2>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-muted md:text-[15px]">
      <span
        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-coral text-[11px] font-bold text-white"
        aria-hidden
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const [shared, setShared] = useState(false);

  const onShare = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: project.name, url });
      } else {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch {
      /* user cancelled share */
    }
  }, [project.name]);

  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${project.name}.`)}`;

  return (
    <>
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden md:min-h-[48vh]">
        <Image
          src={project.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/62" />
        <div className="relative px-5 py-20 text-center text-white">
          <h1 className="text-3xl font-bold uppercase tracking-[0.06em] md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span>{project.name}</span>
          </p>
        </div>
      </section>

      <section className="border-b border-navy/8 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">{project.name}</h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-forest md:text-base">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
              {project.shortLocation}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-mist px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-forest"
                >
                  {badge}
                </span>
              ))}
              {project.banker ? (
                <span className="border border-navy/15 px-2.5 py-1 text-xs font-semibold text-navy">
                  Banker: {project.banker}
                </span>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onShare}
              className="mt-4 inline-flex items-center gap-2 bg-navy px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-navy-deep"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
                <path d="M18 16.1a3 3 0 0 0-2.1.9l-7-4.1a3.1 3.1 0 0 0 0-1.8l7-4.1A3 3 0 1 0 15 5a3 3 0 0 0 .1.7l-7 4.1a3 3 0 1 0 0 4.4l7 4.1A3 3 0 1 0 18 16.1z" />
              </svg>
              {shared ? "Link copied" : "Share"}
            </button>
          </div>

          <div className="md:text-right">
            <p className="text-2xl font-bold text-coral md:text-3xl">{project.priceLabel}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted md:justify-end">
              <a
                href={`tel:+91${siteConfig.phone}`}
                onClick={() =>
                  trackEvent("call_click", { location: "project_header", project: project.name })
                }
                className="inline-flex items-center gap-1.5 hover:text-navy"
              >
                Call: {siteConfig.phone}
              </a>
              <span className="hidden text-navy/20 sm:inline">|</span>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", { location: "project_header", project: project.name })
                }
                className="inline-flex items-center gap-1.5 hover:text-navy"
              >
                WhatsApp
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
              <a
                href={`tel:+91${siteConfig.phone}`}
                onClick={() =>
                  trackEvent("call_click", { location: "project_cta", project: project.name })
                }
                className="bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-navy-deep"
              >
                Call now
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", { location: "project_cta", project: project.name })
                }
                className="bg-[#25D366] px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:brightness-95"
              >
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="border border-forest px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-forest hover:bg-mist"
                onClick={() =>
                  sessionStorage.setItem("interestedProject", project.name)
                }
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-12 md:py-16">
        <div className="mx-auto max-w-6xl space-y-14 px-5 md:px-8">
          <div>
            <SectionTitle icon="home">Project Overview</SectionTitle>
            <ul className="mt-6 space-y-3 text-sm text-muted md:text-base">
              {project.overview.map((row) => (
                <li key={row.label}>
                  <span className="text-navy/70">{row.label}: </span>
                  <span className="font-semibold text-navy">{row.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
              {project.description}
            </p>
          </div>

          <div>
            <SectionTitle icon="home">Project Highlights</SectionTitle>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle icon="home">Amenities</SectionTitle>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.amenities.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle icon="home">Photo Gallery</SectionTitle>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[16/10] overflow-hidden bg-navy/10"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {(project.mapEmbedUrl || project.mapLink) && (
            <div>
              <SectionTitle icon="map">Layout Map / Location</SectionTitle>
              <div className="mt-6 overflow-hidden border border-navy/10 bg-white">
                {project.mapEmbedUrl ? (
                  <iframe
                    title={`${project.name} location map`}
                    src={project.mapEmbedUrl}
                    className="h-[340px] w-full border-0 md:h-[420px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : null}
              </div>
              {project.mapLink ? (
                <a
                  href={project.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-forest"
                >
                  Open in Google Maps
                  <span className="block h-px w-10 bg-forest" aria-hidden />
                </a>
              ) : null}
            </div>
          )}
        </div>
      </section>

      <section className="bg-sand pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-deep/82" />
            <div className="relative px-6 py-14 text-center text-white md:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                Call us
              </p>
              <a
                href={`tel:+91${siteConfig.phone}`}
                onClick={() =>
                  trackEvent("call_click", { location: "project_footer_cta", project: project.name })
                }
                className="mt-3 block font-display text-4xl font-semibold md:text-5xl"
              >
                {siteConfig.phoneDisplay}
              </a>
              <p className="mt-3 text-sm text-white/75">
                For any queries, bookings, or site visit for {project.name}, feel
                free to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
