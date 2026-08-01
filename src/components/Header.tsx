"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";
import { SiteLogo } from "@/components/SiteLogo";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

const SCROLL_THRESHOLD = 40;

export function Header({ variant = "solid" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overlay = variant === "overlay";

  useEffect(() => {
    if (!overlay) return;

    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  // Overlay header sits transparent over the hero until the visitor scrolls,
  // then it matches the solid header used on every other page.
  const solid = !overlay || scrolled;

  return (
    <header
      className={`z-40 transition-colors duration-300 ${
        overlay ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${
        solid
          ? "border-b border-navy/8 bg-white/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 md:px-8 md:py-3.5 ${
          solid ? "justify-between" : "justify-end"
        }`}
      >
        {solid && <SiteLogo variant="solid" priority />}

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
                  solid
                    ? active
                      ? "text-forest"
                      : "text-navy/70 hover:text-navy"
                    : active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
              solid
                ? "bg-forest text-white hover:bg-navy"
                : "bg-white text-navy hover:bg-mist"
            }`}
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`grid h-10 w-10 shrink-0 place-items-center border md:hidden ${
            solid ? "border-navy/20 text-navy" : "border-white/30 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div
          className={`mx-5 mb-4 border p-5 md:hidden ${
            solid
              ? "border-navy/10 bg-white shadow-lg"
              : "border-white/15 bg-navy-deep/95"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={solid ? "text-navy" : "text-white/90"}
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
