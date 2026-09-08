"use client";

import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="overflow-x-clip bg-navy-deep text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 pb-[max(5.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-12 sm:pb-14 md:px-8 md:py-14 md:pb-14">
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="min-w-0 max-w-sm">
            <SiteLogo variant="footer" />
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {siteConfig.iso} — residential plots across Bengaluru&apos;s
              eastern growth corridors.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-7"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-sm font-medium text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 space-y-2 border-t border-white/10 pt-7 text-sm leading-relaxed text-white/55 sm:mt-10 sm:pt-8">
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
