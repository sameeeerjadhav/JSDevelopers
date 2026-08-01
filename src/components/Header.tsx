"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/site";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

export function Header({ variant = "solid" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlay = variant === "overlay";

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-40"
          : "sticky top-0 z-40 border-b border-navy/8 bg-white/95 backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={`relative grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white ${
              overlay
                ? "bg-leaf shadow-[0_0_0_4px_rgba(47,158,99,0.25)]"
                : "bg-forest"
            }`}
          >
            JS
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-lg font-semibold tracking-tight md:text-xl ${
                overlay ? "text-white" : "text-navy"
              }`}
            >
              {siteConfig.shortName}
            </span>
            <span
              className={`hidden text-[11px] uppercase tracking-[0.18em] sm:block ${
                overlay ? "text-white/70" : "text-muted"
              }`}
            >
              {siteConfig.iso}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition ${
                  overlay
                    ? active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "text-forest"
                      : "text-navy/70 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
              overlay
                ? "rounded-none bg-white text-navy hover:bg-mist"
                : "bg-forest text-white hover:bg-navy"
            }`}
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`grid h-10 w-10 place-items-center border md:hidden ${
            overlay
              ? "rounded-full border-white/30 text-white"
              : "border-navy/20 text-navy"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div
          className={`mx-5 mb-4 border p-5 md:hidden ${
            overlay
              ? "rounded-2xl border-white/15 bg-navy-deep/95"
              : "border-navy/10 bg-white shadow-lg"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={overlay ? "text-white/90" : "text-navy"}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-forest px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
              onClick={() => setOpen(false)}
            >
              Enquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
