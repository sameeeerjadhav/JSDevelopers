"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { projects, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const footerNav = [
  {
    title: "Projects",
    links: [
      { label: "All projects", href: "/projects" },
      { label: "Villa plots", href: "/projects/category/villa-plots" },
      { label: "Ongoing", href: "/projects/category/ongoing" },
      { label: "Growth corridors", href: "/projects/category/growth-corridors" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Buying", href: "/services/buying" },
      { label: "Documentation", href: "/services/documentation" },
      { label: "After sales", href: "/services/after-sales" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Whitefield", href: "/locations/whitefield" },
      { label: "Malur", href: "/locations/malur" },
      { label: "Hoskote", href: "/locations/hoskote" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

function NavLinkList({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <ul className="space-y-0.5 text-sm text-white/65 sm:mt-3 sm:space-y-1.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="block py-1.5 leading-snug transition hover:text-white sm:py-0"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="overflow-x-clip bg-navy-deep text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 pb-[max(6.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-12 sm:pb-14 md:px-8 md:py-16 md:pb-16">
        {/* Call CTA */}
        <div className="relative min-h-[9.5rem] overflow-hidden sm:min-h-[11rem]">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/85" aria-hidden />
          <div className="relative flex h-full flex-col items-center justify-center px-4 py-8 text-center sm:px-8 sm:py-10 md:py-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
              Call us
            </p>
            <a
              href={`tel:+91${siteConfig.phone}`}
              onClick={() =>
                trackEvent("call_click", { location: "footer_cta" })
              }
              className="mt-2 max-w-full break-words font-display text-[clamp(1.25rem,6.5vw,3rem)] font-semibold leading-none tracking-tight hover:text-leaf sm:mt-3"
            >
              {siteConfig.phoneDisplay}
            </a>
            <p className="mx-auto mt-2.5 max-w-sm text-xs leading-relaxed text-white/75 sm:mt-3 sm:max-w-md sm:text-sm">
              For queries, bookings, or a site visit — we&apos;re ready to help.
            </p>
          </div>
        </div>

        {/* Brand + nav */}
        <div className="mt-8 flex flex-col gap-8 sm:mt-10 lg:mt-12 lg:grid lg:grid-cols-5 lg:gap-10">
          <div className="min-w-0">
            <SiteLogo variant="footer" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.iso} — residential plots across Bengaluru&apos;s
              eastern growth corridors.
            </p>
          </div>

          {/* Mobile: accordion (< 640px) */}
          <div className="min-w-0 sm:hidden">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {footerNav.map((group) => (
                <details key={group.title} className="group">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 [&::-webkit-details-marker]:hidden">
                    {group.title}
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4 shrink-0 text-white/45 transition duration-200 group-open:rotate-180"
                      aria-hidden
                    >
                      <path
                        d="M5 7.5 10 12.5 15 7.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div className="pb-3 pl-0.5">
                    <NavLinkList links={group.links} />
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Tablet + desktop: link columns */}
          <div className="hidden min-w-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 md:grid-cols-4 lg:col-span-4 lg:gap-x-6">
            {footerNav.map((group) => (
              <div key={group.title} className="min-w-0">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  {group.title}
                </h3>
                <NavLinkList links={group.links} />
              </div>
            ))}
          </div>
        </div>

        {/* Featured properties */}
        <div className="mt-8 border-t border-white/10 pt-7 sm:mt-10 sm:pt-9">
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
            Featured properties
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {projects.map((project) => (
              <li key={project.id} className="min-w-0">
                <Link
                  href={`/projects/${project.id}`}
                  className="block break-words font-medium leading-snug text-white transition hover:text-leaf"
                >
                  {project.name}
                </Link>
                <p className="mt-1 text-xs leading-relaxed text-white/50">
                  {project.shortLocation}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-7 space-y-2.5 text-sm leading-relaxed text-white/55 sm:mt-9 sm:space-y-3">
          <p className="max-w-xl break-words">{siteConfig.address}</p>
          <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="w-fit hover:text-white"
            >
              {siteConfig.phoneDisplay}
            </a>
            <span className="hidden text-white/25 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-fit break-all hover:text-white sm:break-normal"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/45 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p className="min-w-0">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-cookie-preferences"))
            }
            className="w-fit shrink-0 text-left underline decoration-white/30 underline-offset-4 transition hover:text-white sm:text-right"
          >
            Manage cookie preferences
          </button>
        </div>
      </div>
    </footer>
  );
}
