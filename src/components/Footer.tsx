"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { projects, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const footerNav = {
  projects: [
    { label: "All projects", href: "/projects" },
    { label: "Villa plots", href: "/projects/category/villa-plots" },
    { label: "Ongoing", href: "/projects/category/ongoing" },
    { label: "Growth corridors", href: "/projects/category/growth-corridors" },
  ],
  services: [
    { label: "Buying", href: "/services/buying" },
    { label: "Documentation", href: "/services/documentation" },
    { label: "After sales", href: "/services/after-sales" },
  ],
  locations: [
    { label: "Whitefield", href: "/locations/whitefield" },
    { label: "Malur", href: "/locations/malur" },
    { label: "Hoskote", href: "/locations/hoskote" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/82" />
          <div className="relative px-6 py-12 text-center md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Call us
            </p>
            <a
              href={`tel:+91${siteConfig.phone}`}
              onClick={() => trackEvent("call_click", { location: "footer_cta" })}
              className="mt-3 block font-display text-4xl font-semibold md:text-5xl"
            >
              {siteConfig.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-white/75">
              For queries, bookings, or a site visit — we&apos;re ready to help.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <SiteLogo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {siteConfig.iso} — residential plots across Bengaluru&apos;s eastern
              growth corridors.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Projects
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {footerNav.projects.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Locations
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {footerNav.locations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
            Featured properties
          </h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  className="font-medium text-white transition hover:text-leaf"
                >
                  {project.name}
                </Link>
                <p className="text-xs text-white/50">{project.location}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-2 text-sm text-white/55">
          <p>{siteConfig.address}</p>
          <p>
            <a href={`tel:+91${siteConfig.phone}`} className="hover:text-white">
              {siteConfig.phoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-preferences"))}
            className="text-left underline decoration-white/30 underline-offset-4 transition hover:text-white md:text-right"
          >
            Manage cookie preferences
          </button>
        </div>
      </div>
    </footer>
  );
}
