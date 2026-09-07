import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SectionPage } from "@/lib/section-pages";
import { MandalaBackground } from "@/components/MandalaBackground";
import { WorkTogether } from "@/components/WorkTogether";
import { siteConfig } from "@/lib/site";

const SERVICE_ICONS: Record<string, ReactNode> = {
  buying: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
    </svg>
  ),
  documentation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l4 4v14H7V3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  ),
  "after-sales": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};

const STEPS = [
  { label: "Enquire", detail: "Share your project interest" },
  { label: "Site visit", detail: "Walk the layout with our team" },
  { label: "Paperwork", detail: "Review approvals & terms" },
  { label: "After care", detail: "Stay supported post-booking" },
];

type ServicesHubProps = {
  sections: SectionPage[];
};

export function ServicesHub({ sections }: ServicesHubProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[48svh] overflow-hidden md:min-h-[56svh]">
        <Image
          src="/projects/js-lakeview-garden/updates/update-9.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/55 to-navy/25"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 sm:pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4">
              <span className="block h-px w-10 bg-[#e8c84a] sm:w-14" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e8c84a] sm:text-sm">
                Services
              </p>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Support at every step of your plot journey
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/85 sm:text-base md:text-lg">
              From first site visit through paperwork and registration — our
              Bengaluru team stays with you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[#e8c84a] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy transition hover:bg-[#f0d45a] sm:text-sm"
              >
                Book a site visit
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/70 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 sm:text-sm"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="border-b border-navy/8 bg-navy-deep text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 sm:gap-8 sm:py-12 md:grid-cols-4 md:px-8">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex gap-4">
              <span className="text-2xl font-bold text-[#e8c84a]/80">
                0{i + 1}
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#e8c84a]">
                  {step.label}
                </p>
                <p className="mt-1 text-sm text-white/70">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service cards */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-24">
        <MandalaBackground tone="white" layout="band" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-center gap-4">
            <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
            <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#b8922e] sm:text-sm">
              How we help
            </p>
            <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted sm:text-base">
            Three clear service paths — choose where you are in the journey.
          </p>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3 md:gap-8">
            {sections.map((section, index) => (
              <Link
                key={section.slug}
                href={`/services/${section.slug}`}
                className="group relative flex flex-col border border-[#e8c84a]/45 bg-[#f7f5ef] p-6 transition hover:border-[#e8c84a] hover:bg-white sm:p-8"
              >
                <span className="grid h-12 w-12 place-items-center border border-[#e8c84a]/70 text-[#b8922e] transition group-hover:bg-[#e8c84a]/15">
                  {SERVICE_ICONS[section.slug] ?? (
                    <span className="text-sm font-bold">0{index + 1}</span>
                  )}
                </span>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8922e]">
                  0{index + 1} · Service
                </p>
                <h2 className="mt-2 text-xl font-bold text-navy transition group-hover:text-forest sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {section.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-navy/10 pt-5">
                  {section.highlights.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-navy/80 sm:text-sm"
                    >
                      <span className="block h-px w-3 bg-[#e8c84a]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                  Learn more
                  <span
                    className="block h-px w-8 bg-forest transition group-hover:w-12"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WorkTogether />
    </>
  );
}
