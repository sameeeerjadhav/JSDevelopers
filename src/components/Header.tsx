"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";
import { SiteLogo } from "@/components/SiteLogo";

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
      <div
        className={`mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 md:px-8 md:py-3.5 ${
          overlay ? "justify-end" : "justify-between"
        }`}
      >
        {!overlay && <SiteLogo variant="solid" priority />}

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
                ? "bg-white text-navy hover:bg-mist"
                : "bg-forest text-white hover:bg-navy"
            }`}
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`grid h-10 w-10 shrink-0 place-items-center border md:hidden ${
            overlay
              ? "border-white/30 text-white"
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
              ? "border-white/15 bg-navy-deep/95"
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
