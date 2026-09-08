"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { MegaMenu } from "@/components/MegaMenu";
import { SiteLogo } from "@/components/SiteLogo";
import { mainNavigation, type NavItem } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

const SCROLL_THRESHOLD = 40;

function ChevronDown({ open, className = "" }: { open?: boolean; className?: string }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function mobileMegaLinks(item: NavItem) {
  if (!item.megaMenu) return [];
  const seen = new Set<string>();
  const links: { label: string; href: string }[] = [];

  for (const panel of item.megaMenu.panels) {
    for (const link of panel.columns[0] ?? []) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      links.push(link);
    }
  }

  const viewAll = item.megaMenu.panels[0]?.learnMoreHref;
  if (viewAll && !seen.has(viewAll)) {
    links.push({ label: `All ${item.label.toLowerCase()}`, href: viewAll });
  }

  return links;
}

const MEGA_MENU_PRIMARY_PATH: Partial<Record<string, string>> = {
  projects: "/projects",
  services: "/services",
  locations: "/locations",
};

function isNavItemActive(item: NavItem, pathname: string): boolean {
  if ("href" in item && item.href) {
    return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  }

  if (item.megaMenu) {
    const primary = MEGA_MENU_PRIMARY_PATH[item.id];
    return primary ? pathname.startsWith(primary) : false;
  }

  return false;
}

export function Header({ variant = "solid" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSectionId, setMobileSectionId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenuId, setDesktopMenuId] = useState<string | null>(null);
  const [activePanelByMenu, setActivePanelByMenu] = useState<
    Record<string, string>
  >({});
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const overlay = variant === "overlay";
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!overlay) return;

    const hero = document.getElementById("hero");

    if (hero) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setScrolled(!entry.isIntersecting);
        },
        { threshold: 0 },
      );

      observer.observe(hero);
      return () => observer.disconnect();
    }

    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const desktopOpen = desktopMenuId !== null;
  const solid = !overlay || scrolled || desktopOpen || mobileOpen;

  const closeDesktopMenu = useCallback(() => {
    setDesktopMenuId(null);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileSectionId(null);
  }, []);

  useEffect(() => {
    closeDesktopMenu();
    closeMobileMenu();
  }, [pathname, closeDesktopMenu, closeMobileMenu]);

  // Close mobile drawer when viewport crosses to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) closeMobileMenu();
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMobileMenu]);

  useEffect(() => {
    if (!desktopOpen && !mobileOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDesktopMenu();
        closeMobileMenu();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [desktopOpen, mobileOpen, closeDesktopMenu, closeMobileMenu]);

  useEffect(() => {
    if (!desktopOpen) return;

    function onPointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeDesktopMenu();
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [desktopOpen, closeDesktopMenu]);

  function toggleDesktopMenu(item: NavItem) {
    if (!item.megaMenu) return;

    if (desktopMenuId === item.id) {
      closeDesktopMenu();
      return;
    }

    setDesktopMenuId(item.id);
    if (!activePanelByMenu[item.id]) {
      setActivePanelByMenu((prev) => ({
        ...prev,
        [item.id]: item.megaMenu.panels[0]?.id ?? "",
      }));
    }
  }

  function getActivePanelId(item: NavItem): string {
    if (!item.megaMenu) return "";
    return activePanelByMenu[item.id] ?? item.megaMenu.panels[0]?.id ?? "";
  }

  const navText = solid
    ? "text-navy/75 hover:text-navy"
    : "text-white/85 hover:text-white";
  const navActive = solid ? "text-forest" : "text-white";

  const panelEase = [0.22, 1, 0.36, 1] as const;

  return (
    <header
      ref={headerRef}
      className={`z-50 transition-colors duration-300 ${
        overlay ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${
        solid
          ? "border-b border-navy/10 bg-white shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[56px] max-w-7xl items-center gap-2 px-4 py-2 sm:min-h-[68px] sm:gap-3 sm:px-5 sm:py-3 md:gap-4 md:px-8">
        <SiteLogo variant={solid ? "solid" : "overlay"} priority />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          aria-label="Main"
        >
          {mainNavigation.map((item) => {
            const active = isNavItemActive(item, pathname);
            const isOpen = desktopMenuId === item.id;

            if (item.megaMenu) {
              return (
                <div key={item.id} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => toggleDesktopMenu(item)}
                    className={`relative flex items-center gap-1.5 px-2.5 py-4 text-[13px] font-semibold tracking-wide transition xl:px-4 xl:text-sm ${
                      isOpen || active ? navActive : navText
                    }`}
                  >
                    {item.label}
                    <ChevronDown open={isOpen} />
                    {(isOpen || active) && (
                      <span
                        className="absolute inset-x-2 bottom-0 h-0.5 bg-forest"
                        aria-hidden
                      />
                    )}
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative px-2.5 py-4 text-[13px] font-semibold tracking-wide transition xl:px-4 xl:text-sm ${
                  active ? navActive : navText
                }`}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute inset-x-2 bottom-0 h-0.5 bg-forest"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 lg:ml-0">
          <Link
            href="/contact"
            className={`min-h-9 items-center bg-forest px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-navy sm:min-h-10 sm:px-4 sm:py-2.5 sm:text-xs lg:inline-flex lg:min-h-10 lg:px-4 lg:py-2.5 lg:text-xs ${
              mobileOpen ? "hidden" : "inline-flex"
            } ${solid ? "" : "shadow-sm"}`}
          >
            Enquire
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className={`relative grid h-10 w-10 shrink-0 place-items-center border transition-colors lg:hidden ${
              solid ? "border-navy/20 text-navy" : "border-white/30 text-white"
            }`}
            onClick={() => {
              setMobileOpen((open) => !open);
              setMobileSectionId(null);
            }}
          >
            <span className="relative block h-4 w-[1.125rem]" aria-hidden>
              <motion.span
                className="absolute inset-x-0 top-[7px] block h-0.5 origin-center bg-current"
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 0 }
                    : { rotate: 0, y: -5 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              />
              <motion.span
                className="absolute inset-x-0 top-[7px] block h-0.5 bg-current"
                animate={
                  mobileOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
              />
              <motion.span
                className="absolute inset-x-0 top-[7px] block h-0.5 origin-center bg-current"
                animate={
                  mobileOpen
                    ? { rotate: -45, y: 0 }
                    : { rotate: 0, y: 5 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.22 }}
              />
            </span>
          </button>
        </div>
      </div>

      {desktopMenuId && (
        <div className="hidden lg:block">
          {mainNavigation.map((item) => {
            if (!item.megaMenu || item.id !== desktopMenuId) return null;
            return (
              <MegaMenu
                key={item.id}
                config={item.megaMenu}
                activePanelId={getActivePanelId(item)}
                onPanelChange={(panelId) =>
                  setActivePanelByMenu((prev) => ({
                    ...prev,
                    [item.id]: panelId,
                  }))
                }
                onClose={closeDesktopMenu}
              />
            );
          })}
        </div>
      )}

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <>
            <motion.button
              key="mobile-backdrop"
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 top-[56px] z-40 bg-navy-deep/35 sm:top-[68px] lg:hidden"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
              onClick={closeMobileMenu}
            />

            <motion.div
              key="mobile-panel"
              id="mobile-nav"
              className="relative z-50 border-t border-navy/10 bg-white lg:hidden"
              initial={
                reduceMotion
                  ? false
                  : { height: 0, opacity: 0 }
              }
              animate={{ height: "auto", opacity: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { height: 0, opacity: 0 }
              }
              transition={{
                duration: reduceMotion ? 0.12 : 0.32,
                ease: panelEase,
              }}
              style={{ overflow: "hidden" }}
            >
              <nav
                aria-label="Mobile"
                className="flex max-h-[min(32rem,calc(100dvh-3.5rem))] flex-col overflow-y-auto overscroll-contain sm:max-h-[min(36rem,calc(100dvh-4.25rem))]"
              >
                <motion.div
                  className="px-4 sm:px-5"
                  initial={reduceMotion ? false : { y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.28,
                    delay: reduceMotion ? 0 : 0.06,
                    ease: panelEase,
                  }}
                >
                  {mainNavigation.map((item) => {
                    if (item.megaMenu) {
                      const expanded = mobileSectionId === item.id;
                      const links = mobileMegaLinks(item);

                      return (
                        <div
                          key={item.id}
                          className="border-b border-navy/8"
                        >
                          <button
                            type="button"
                            aria-expanded={expanded}
                            className="flex min-h-12 w-full items-center justify-between gap-3 py-3 text-left text-sm font-semibold text-navy"
                            onClick={() =>
                              setMobileSectionId((current) =>
                                current === item.id ? null : item.id,
                              )
                            }
                          >
                            {item.label}
                            <ChevronDown open={expanded} />
                          </button>

                          <AnimatePresence initial={false}>
                            {expanded && (
                              <motion.ul
                                key={`${item.id}-links`}
                                className="overflow-hidden pb-3"
                                initial={
                                  reduceMotion
                                    ? false
                                    : { height: 0, opacity: 0 }
                                }
                                animate={{ height: "auto", opacity: 1 }}
                                exit={
                                  reduceMotion
                                    ? { opacity: 0 }
                                    : { height: 0, opacity: 0 }
                                }
                                transition={{
                                  duration: reduceMotion ? 0.1 : 0.24,
                                  ease: panelEase,
                                }}
                              >
                                {links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      className="block py-2 pl-1 text-sm text-navy/80 transition hover:text-forest"
                                      onClick={closeMobileMenu}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="flex min-h-12 items-center border-b border-navy/8 py-3 text-sm font-semibold text-navy"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </motion.div>

                <div className="mt-auto flex flex-col gap-3 border-t border-navy/8 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-5">
                  <a
                    href={`tel:+91${siteConfig.phone}`}
                    className="text-sm font-semibold text-navy"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 w-full items-center justify-center bg-forest px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-navy sm:w-auto sm:min-w-[10rem]"
                    onClick={closeMobileMenu}
                  >
                    Enquire now
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
