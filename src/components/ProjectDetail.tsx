"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import type { Project } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";
import { MandalaBackground } from "@/components/MandalaBackground";
import { WorkTogether } from "@/components/WorkTogether";

function GoldFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="pointer-events-none absolute -inset-2 border border-[#e8c84a]/70 sm:-inset-3"
        aria-hidden
      />
      <div className="absolute inset-0 overflow-hidden bg-navy/10">{children}</div>
    </div>
  );
}

function AmenityIcon({ label }: { label: string }) {
  const key = label.toLowerCase();
  const stroke = "currentColor";
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5 shrink-0 text-[#b8922e]",
    "aria-hidden": true as const,
  };

  if (key.includes("entrance") || key.includes("arch") || key.includes("gate")) {
    return (
      <svg {...common}>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M10 20v-6h4v6" />
        <path d="M4 8h16" />
      </svg>
    );
  }
  if (key.includes("road") || key.includes("cc road") || key.includes("walking") || key.includes("jogging")) {
    return (
      <svg {...common}>
        <path d="M4 20L9 4h6l5 16" />
        <path d="M12 8v2M12 14v2" />
      </svg>
    );
  }
  if (key.includes("street light") || key.includes("streetlight") || key.includes("lighting")) {
    return (
      <svg {...common}>
        <path d="M12 22v-8" />
        <path d="M8 10a4 4 0 0 1 8 0c0 2-1.5 3-2.5 4H10.5C9.5 13 8 12 8 10Z" />
        <path d="M9 22h6" />
      </svg>
    );
  }
  if (key.includes("park") || key.includes("plantation") || key.includes("avenue") || key.includes("green")) {
    return (
      <svg {...common}>
        <path d="M12 22v-7" />
        <path d="M12 15c-4 0-6-3-6-6 3 0 5 1 6 3 1-2 3-3 6-3 0 3-2 6-6 6Z" />
        <path d="M9 22h6" />
      </svg>
    );
  }
  if (key.includes("children") || key.includes("play")) {
    return (
      <svg {...common}>
        <circle cx="12" cy="6" r="2.5" />
        <path d="M8 22l2-8 2 3 2-3 2 8" />
        <path d="M7 12h10" />
      </svg>
    );
  }
  if (key.includes("compound") || key.includes("wall") || key.includes("fence") || key.includes("gated")) {
    return (
      <svg {...common}>
        <path d="M4 20V8l8-3 8 3v12" />
        <path d="M4 11h16M4 15h16" />
        <path d="M8 11v9M12 11v9M16 11v9" />
      </svg>
    );
  }
  if (key.includes("electric") || key.includes("electricity") || key.includes("power")) {
    return (
      <svg {...common}>
        <path d="M13 2 6 13h5l-1 9 7-11h-5l1-9Z" />
      </svg>
    );
  }
  if (key.includes("water") || key.includes("tank") || key.includes("overhead")) {
    return (
      <svg {...common}>
        <path d="M12 3c-3.5 5-6 8.2-6 11a6 6 0 0 0 12 0c0-2.8-2.5-6-6-11Z" />
        <path d="M9.5 14.5c.6 1.2 1.5 1.8 2.5 1.8" />
      </svg>
    );
  }
  if (key.includes("drainage") || key.includes("dwc") || key.includes("sewer") || key.includes("stp")) {
    return (
      <svg {...common}>
        <path d="M4 8h16v4H4z" />
        <path d="M7 12v6M12 12v6M17 12v6" />
        <path d="M5 18h14" />
      </svg>
    );
  }
  if (key.includes("cctv") || key.includes("camera") || key.includes("security")) {
    return (
      <svg {...common}>
        <path d="M3 9h11v8H3z" />
        <path d="M14 12l6-3v8l-6-3" />
        <circle cx="8.5" cy="13" r="1.5" />
      </svg>
    );
  }
  if (key.includes("car") || key.includes("parking")) {
    return (
      <svg {...common}>
        <path d="M4 15h16v4H4z" />
        <path d="M6 15 8 9h8l2 6" />
        <circle cx="8" cy="19" r="1.2" />
        <circle cx="16" cy="19" r="1.2" />
      </svg>
    );
  }
  if (key.includes("rain") || key.includes("harvest")) {
    return (
      <svg {...common}>
        <path d="M8 14v5M12 12v7M16 14v5" />
        <path d="M6 10a6 6 0 1 1 11.2 2.5" />
      </svg>
    );
  }
  if (key.includes("vastu") || key.includes("gym") || key.includes("yoga") || key.includes("hall") || key.includes("pool")) {
    return (
      <svg {...common}>
        <path d="M4 19h16" />
        <path d="M7 19V9l5-4 5 4v10" />
        <path d="M10 19v-5h4v5" />
      </svg>
    );
  }

  // Default checkmark-style amenity mark
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5" />
    </svg>
  );
}

function AmenityList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-[#8a7028] sm:text-base"
        >
          <AmenityIcon label={item} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LocationIcon({ label, className = "h-5 w-5 shrink-0 text-[#b8922e]" }: { label: string; className?: string }) {
  const key = label.toLowerCase();
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  if (key.includes("bus")) {
    return (
      <svg {...common}>
        <rect x="5" y="4" width="14" height="13" rx="2" />
        <path d="M5 11h14M8 17v2M16 17v2M8 7h2M14 7h2" />
      </svg>
    );
  }
  if (key.includes("nh") || key.includes("highway") || key.includes("road") || key.includes("corridor")) {
    return (
      <svg {...common}>
        <path d="M4 20 9 4h6l5 16" />
        <path d="M12 8v2M12 14v2" />
      </svg>
    );
  }
  if (key.includes("airport") || key.includes("kempegowda")) {
    return (
      <svg {...common}>
        <path d="M12 3v7l8 3v2l-8-2.5V21l3 1.5V24l-4.5-1.2L6 24v-1.5L9 21v-8.5L1 15v-2l8-3V3a1.5 1.5 0 0 1 3 0Z" />
      </svg>
    );
  }
  if (key.includes("city") || key.includes("bengaluru") || key.includes("chikkaballapur") || key.includes("town")) {
    return (
      <svg {...common}>
        <path d="M3 21h18" />
        <path d="M5 21V9l5-4 4 3v13" />
        <path d="M14 21V11h5v10" />
        <path d="M8 12h2M8 16h2M16 14h1M16 17h1" />
      </svg>
    );
  }
  if (key.includes("station") || key.includes("railway")) {
    return (
      <svg {...common}>
        <rect x="6" y="4" width="12" height="12" rx="2" />
        <path d="M6 12h12M9 16l-2 4M15 16l2 4M10 8h4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function HighlightIcon({ label }: { label: string }) {
  const key = label.toLowerCase();
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "mt-0.5 h-5 w-5 shrink-0 text-navy",
    "aria-hidden": true as const,
  };

  if (key.includes("dtcp") || key.includes("dc conversion") || key.includes("approved") || key.includes("rera") || key.includes("mpa")) {
    return (
      <svg {...common}>
        <path d="M9 12.5 11 14.5 15.5 9.5" />
        <path d="M7 4h7l3 3v13H7z" />
      </svg>
    );
  }
  if (key.includes("plot") || key.includes("30×") || key.includes("30x") || key.includes("40×") || key.includes("size")) {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" />
        <path d="M4 12h16M12 4v16" />
      </svg>
    );
  }
  if (key.includes("road") || key.includes("main road") || key.includes("ft")) {
    return (
      <svg {...common}>
        <path d="M4 20 9 4h6l5 16" />
        <path d="M12 8v2M12 14v2" />
      </svg>
    );
  }
  if (key.includes("nh") || key.includes("highway") || key.includes("corridor") || key.includes("access")) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    );
  }
  if (key.includes("industrial") || key.includes("growth") || key.includes("near")) {
    return (
      <svg {...common}>
        <path d="M3 21h18" />
        <path d="M5 21V11l4 3V8l5 4V5l5 3v13" />
      </svg>
    );
  }
  if (key.includes("park") || key.includes("internal")) {
    return (
      <svg {...common}>
        <path d="M12 22v-7" />
        <path d="M12 15c-4 0-6-3-6-6 3 0 5 1 6 3 1-2 3-3 6-3 0 3-2 6-6 6Z" />
      </svg>
    );
  }
  if (key.includes("bank")) {
    return (
      <svg {...common}>
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
        <path d="M3 18h18" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.5 2.2 2.2 4.8-5" />
    </svg>
  );
}

function SectionRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
      <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#b8922e] sm:text-sm">
        {label}
      </p>
      <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
    </div>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallery = project.gallery;
  const activeImage = gallery[galleryIndex] ?? gallery[0];

  const outdoor =
    project.amenitiesOutdoor ?? project.amenities.slice(0, Math.ceil(project.amenities.length / 2));
  const indoor =
    project.amenitiesIndoor ?? project.amenities.slice(Math.ceil(project.amenities.length / 2));
  const locationItems = project.locationHighlights ?? [];
  const plans = project.layoutPlans ?? [];
  const updates = project.siteUpdates ?? [];
  const brochureHref = project.brochureUrl;

  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hi, I'm interested in ${project.name}. Please share pricing and a site visit.`,
  )}`;

  const utilityLinks = [
    {
      label: "Location map",
      href: project.mapLink ?? "#map",
      external: Boolean(project.mapLink),
    },
    {
      label: "Download brochure",
      href: brochureHref ?? "/contact",
      external: Boolean(brochureHref),
      download: Boolean(brochureHref),
    },
    { label: "Book site visit", href: "/contact", external: false },
    { label: "WhatsApp us", href: waHref, external: true },
  ];

  const goGallery = useCallback(
    (dir: -1 | 1) => {
      if (gallery.length < 2) return;
      setGalleryIndex((i) => (i + dir + gallery.length) % gallery.length);
    },
    [gallery.length],
  );

  return (
    <>
      {/* 1. Full-bleed hero */}
      <section className="relative min-h-[72svh] overflow-hidden md:min-h-[85svh]">
        <Image
          src={project.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy/35 to-navy/20" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 sm:pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-sm">
              {siteConfig.shortName}
            </p>
            <h1 className="mt-2 max-w-4xl text-3xl font-bold uppercase tracking-[0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <p className="mt-3 max-w-xl text-sm text-white/85 sm:text-base md:text-lg">
              {project.tagline} · {project.shortLocation}
            </p>
          </div>
        </div>
      </section>

      {/* Sticky enquire tab — desktop */}
      <a
        href="/contact"
        onClick={() => sessionStorage.setItem("interestedProject", project.name)}
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 bg-[#e8c84a] px-2.5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-navy shadow-lg [writing-mode:vertical-rl] rotate-180 hover:bg-[#f0d45a] md:inline-flex"
      >
        Request price
      </a>

      {/* 2. Story + framed gallery */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-24">
        <MandalaBackground tone="white" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative border-l-2 border-[#e8c84a] pl-5 sm:pl-7">
            <h2 className="text-2xl font-bold uppercase leading-[1.15] tracking-tight text-[#b8922e] sm:text-3xl md:text-4xl">
              {project.storyHeadline ?? "Everything is close. Everyone connected."}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {(project.storyBody ?? [project.description])[0]}
            </p>
            <p className="mt-6 text-lg font-bold uppercase tracking-[0.06em] text-[#b8922e] sm:text-xl">
              {project.storySubhead ?? project.tagline}
            </p>
            {(project.storyBody ?? []).slice(1).map((para) => (
              <p key={para} className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {para}
              </p>
            ))}
          </div>

          <div className="relative">
            <GoldFrame className="aspect-[4/3]">
              {activeImage ? (
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              ) : null}
            </GoldFrame>
            {gallery.length > 1 ? (
              <div className="absolute -left-3 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2 sm:-left-5">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => goGallery(-1)}
                  className="grid h-10 w-10 place-items-center border border-[#e8c84a] bg-white text-navy shadow-sm hover:bg-[#e8c84a]/15"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => goGallery(1)}
                  className="grid h-10 w-10 place-items-center border border-[#e8c84a] bg-white text-navy shadow-sm hover:bg-[#e8c84a]/15"
                >
                  ›
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* 3. Dark utility + summary band */}
      <section className="bg-navy-deep text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-14 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-8 md:py-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {utilityLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                download={"download" in item && item.download ? true : undefined}
                onClick={() => {
                  if (item.label.includes("WhatsApp")) {
                    trackEvent("whatsapp_click", {
                      location: "project_utility",
                      project: project.name,
                    });
                  }
                  if (item.href === "/contact") {
                    sessionStorage.setItem("interestedProject", project.name);
                  }
                }}
                className="flex flex-col items-start gap-3 border border-dashed border-[#e8c84a]/55 p-4 transition hover:border-[#e8c84a] hover:bg-white/5 sm:p-5"
              >
                <span className="grid h-10 w-10 place-items-center border border-dashed border-[#e8c84a] text-[#e8c84a]">
                  +
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/85 sm:text-sm">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-[0.08em] text-[#e8c84a] sm:text-2xl">
              Forward-looking living
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              {project.description} Located at {project.location} — priced at{" "}
              {project.priceLabel}.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#e8c84a]">
              {project.reraNo
                ? `Approvals: ${project.reraNo}`
                : `Approvals: ${project.badges.join(" · ")}`}
            </p>
            {project.banker ? (
              <p className="mt-2 text-sm text-white/60">Banker: {project.banker}</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* 4. Community / designed for life */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-24">
        <MandalaBackground tone="white" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
          <GoldFrame className="aspect-[16/11] order-2 lg:order-1">
            <Image
              src={gallery[1]?.src ?? project.heroImage}
              alt={gallery[1]?.alt ?? project.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </GoldFrame>
          <div className="order-1 lg:order-2">
            <p className="text-2xl font-semibold text-navy/70 sm:text-3xl">
              {project.communityHeadline ?? "Designed for life"}
            </p>
            <h2 className="mt-3 text-2xl font-bold uppercase tracking-[0.06em] text-[#b8922e] sm:text-3xl md:text-4xl">
              {project.communitySubhead ?? "Built for community"}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {project.communityBody ??
                "Amenities and open spaces planned for families who want land they can live on — and verify before they buy."}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Project highlights */}
      <section className="bg-[#e8d9a8]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20">
            <MandalaBackground tone="sand" className="opacity-40" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                Project highlights
              </h2>
              <ul className="mt-8 space-y-4">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-navy/85 sm:text-base"
                  >
                    <HighlightIcon label={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() =>
                  sessionStorage.setItem("interestedProject", project.name)
                }
                className="mt-10 inline-flex bg-navy px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-navy-deep sm:text-sm"
              >
                Request a call back
              </Link>
            </div>
          </div>
          <div className="relative min-h-[280px] border border-[#e8c84a]/40 sm:min-h-[360px] lg:min-h-full">
            <Image
              src={gallery[2]?.src ?? project.heroImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. Location highlights */}
      {locationItems.length > 0 ? (
        <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-24">
          <MandalaBackground tone="white" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
            <GoldFrame className="aspect-[16/11]">
              <Image
                src={gallery[0]?.src ?? project.heroImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </GoldFrame>
            <div>
              <h2 className="text-3xl font-bold text-[#b8922e] sm:text-4xl">
                Location highlights
              </h2>
              <ul className="mt-8 divide-y divide-navy/10">
                {locationItems.map((item) => (
                  <li
                    key={item.place}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="flex items-center gap-3 text-sm font-semibold text-navy sm:text-base">
                      <LocationIcon label={item.place} />
                      {item.place}
                    </span>
                    <span className="shrink-0 text-sm text-muted">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {/* 7. Amenities */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-24">
        <MandalaBackground tone="white" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
          <GoldFrame className="aspect-[4/3] order-2 lg:order-1">
            <Image
              src={
                project.siteUpdates?.[4]?.src ??
                gallery[2]?.src ??
                project.heroImage
              }
              alt={`${project.name} amenities`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </GoldFrame>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8922e]">
              {project.name}
            </p>
            <h2 className="mt-2 text-3xl font-bold uppercase tracking-[0.08em] text-[#b8922e] sm:text-4xl">
              Amenities
            </h2>

            <div className="mt-8">
              <div className="flex items-center gap-3">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                  Outdoor
                </p>
                <span className="h-px flex-1 bg-[#e8c84a]/60" aria-hidden />
              </div>
              <AmenityList items={outdoor} />
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-3">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                  Indoor / utilities
                </p>
                <span className="h-px flex-1 bg-[#e8c84a]/60" aria-hidden />
              </div>
              <AmenityList items={indoor} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Location map */}
      {(project.mapEmbedUrl || project.mapLink) && (
        <section id="map" className="relative overflow-hidden bg-[#f3f1ea] py-14 sm:py-20">
          <MandalaBackground tone="sand" className="opacity-50" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <SectionRule label="Location map" />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-10 lg:items-stretch">
              <div className="overflow-hidden border border-[#e8c84a]/50 bg-white">
                {project.mapEmbedUrl ? (
                  <iframe
                    title={`${project.name} location map`}
                    src={project.mapEmbedUrl}
                    className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[460px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : null}
              </div>

              <div className="flex flex-col justify-center border border-[#e8c84a]/40 bg-white px-6 py-8 sm:px-8 sm:py-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8922e]">
                  Project address
                </p>
                <h3 className="mt-3 text-xl font-bold text-navy sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {project.location}
                </p>
                <p className="mt-2 text-sm font-semibold text-navy">
                  {project.shortLocation}
                </p>

                {locationItems.length > 0 ? (
                  <ul className="mt-8 space-y-3 border-t border-navy/10 pt-6">
                    {locationItems.map((item) => (
                      <li
                        key={item.place}
                        className="flex items-start justify-between gap-4 text-sm"
                      >
                        <span className="flex items-start gap-2 text-navy">
                          <LocationIcon
                            label={item.place}
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#b8922e]"
                          />
                          {item.place}
                        </span>
                        <span className="shrink-0 text-muted">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {project.mapLink ? (
                  <a
                    href={project.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-forest sm:text-sm"
                  >
                    Open in Google Maps
                    <span className="block h-px w-10 bg-forest" aria-hidden />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. Layout plans */}
      {plans.length > 0 ? (
        <section className="bg-[#f2f2f2] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionRule label="Layout plans" />
            <div className="mt-10 space-y-8">
              {plans.map((plan, index) => {
                const isMaster = /master/i.test(plan.title) || index === 0;
                return (
                  <div key={plan.title} className="bg-white p-4 shadow-sm sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      {plan.title}
                    </p>
                    <div
                      className={`relative mt-3 w-full overflow-hidden bg-[#f7f5ef] ${
                        isMaster
                          ? "aspect-[16/10] min-h-[280px] sm:min-h-[420px] md:min-h-[520px]"
                          : "mx-auto max-w-xl aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={plan.src}
                        alt={plan.title}
                        fill
                        sizes={
                          isMaster
                            ? "(min-width: 1280px) 1200px, 100vw"
                            : "(min-width: 640px) 40vw, 100vw"
                        }
                        className="object-contain object-center"
                        priority={isMaster}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-center text-xs text-muted sm:text-sm">
              Final layout drawings shared on request during site visits.
            </p>
          </div>
        </section>
      ) : null}

      {/* 10. On-site updates */}
      {updates.length > 0 ? (
        <section className="relative overflow-hidden bg-white py-14 sm:py-20">
          <MandalaBackground tone="white" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <SectionRule label="On-site updates" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted sm:text-base">
              Live progress from the layout — roads, lighting, landscaping and plot works.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {updates.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[4/3] overflow-hidden bg-sand"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="flex gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("whatsapp_click", {
                location: "project_mobile_bar",
                project: project.name,
              })
            }
            className="flex-1 bg-[#25D366] py-3 text-center text-xs font-semibold uppercase tracking-wide text-white"
          >
            WhatsApp
          </a>
          <Link
            href="/contact"
            onClick={() => sessionStorage.setItem("interestedProject", project.name)}
            className="flex-1 bg-navy py-3 text-center text-xs font-semibold uppercase tracking-wide text-white"
          >
            Enquire
          </Link>
        </div>
      </div>

      <div className="pb-20 md:pb-0">
        <WorkTogether />
      </div>
    </>
  );
}
