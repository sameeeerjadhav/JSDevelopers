"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MegaMenu } from "@/components/MegaMenu";
import { SiteLogo } from "@/components/SiteLogo";
import { mainNavigation, type NavItem } from "@/lib/navigation";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

const SCROLL_THRESHOLD = 40;

function ChevronDown({ open, className = "" }: { open?: boolean; className?: string }) {
  return (
    <svg
      className={`h-3 w-3 shrink-0 transition-transform ${open ? "rotate-180" : ""} ${className}`}
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

/** Primary route per mega-menu — avoids highlighting every menu that links to the same page. */
const MEGA_MENU_PRIMARY_PATH: Partial<Record<string, string>> = {
  projects: "/projects",
  services: "/services",
  locations: "/locations",
};

function isNavItemActive(item: NavItem, pathname: string): boolean {
  if ("href" in item && item.href) {
    return item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href);
  }

  if (item.megaMenu) {
    const primary = MEGA_MENU_PRIMARY_PATH[item.id];
    return primary ? pathname.startsWith(primary) : false;
  }

  return false;
}

export function Header({ variant = "solid" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [activePanelByMenu, setActivePanelByMenu] = useState<Record<string, string>>(
    {},
  );
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const overlay = variant === "overlay";

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

  const menuOpen = openMenuId !== null;
  const solid = !overlay || scrolled || menuOpen;

  const closeMenu = useCallback(() => {
    setOpenMenuId(null);
  }, []);

  useEffect(() => {
    closeMenu();
    setMobileOpen(false);
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenu();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;

    function onPointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [menuOpen, closeMenu]);

  function toggleMenu(item: NavItem) {
    if (!item.megaMenu) return;

    if (openMenuId === item.id) {
      closeMenu();
      return;
    }

    setOpenMenuId(item.id);
    if (!activePanelByMenu[item.id]) {
      setActivePanelByMenu((prev) => ({
        ...prev,
        [item.id]: item.megaMenu.panels[0]?.id ?? "",
      }));
    }
  }

  function getActivePanelId(item: NavItem): string {
    if (!item.megaMenu) return "";
    return (
      activePanelByMenu[item.id] ?? item.megaMenu.panels[0]?.id ?? ""
    );
  }

  const navText = solid ? "text-navy/75 hover:text-navy" : "text-white/85 hover:text-white";
  const navActive = solid ? "text-forest" : "text-white";

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
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-5 sm:py-3 md:px-8">
        <SiteLogo variant={solid ? "solid" : "overlay"} priority />

        <nav
          className="hidden flex-1 items-center justify-center gap-0 lg:flex"
          aria-label="Main"
        >
          {mainNavigation.map((item) => {
            const active = isNavItemActive(item, pathname);
            const isOpen = openMenuId === item.id;

            if (item.megaMenu) {
              return (
                <div key={item.id} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => toggleMenu(item)}
                    className={`relative flex items-center gap-1.5 px-3 py-4 text-[13px] font-semibold tracking-wide transition xl:px-4 xl:text-sm ${
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
                className={`relative px-3 py-4 text-[13px] font-semibold tracking-wide transition xl:px-4 xl:text-sm ${
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

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={`inline-flex items-center bg-forest px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-navy ${
              solid ? "" : "shadow-sm"
            }`}
          >
            Enquire
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className={`ml-auto grid h-10 w-10 shrink-0 place-items-center border lg:hidden ${
            solid ? "border-navy/20 text-navy" : "border-white/30 text-white"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="text-lg">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {openMenuId && (
        <div className="hidden lg:block">
          {mainNavigation.map((item) => {
            if (!item.megaMenu || item.id !== openMenuId) return null;
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
                onClose={closeMenu}
              />
            );
          })}
        </div>
      )}

      {mobileOpen && (
        <div
          className={`max-h-[calc(100dvh-4rem)] overflow-y-auto border-t lg:hidden ${
            solid
              ? "border-navy/10 bg-white"
              : "border-white/15 bg-navy-deep/95"
          }`}
        >
          <div className="space-y-1 px-5 py-4">
            {mainNavigation.map((item) => {
              if (item.megaMenu) {
                const expanded = openMenuId === item.id;
                const panelId = getActivePanelId(item);
                const panel =
                  item.megaMenu.panels.find((p) => p.id === panelId) ??
                  item.megaMenu.panels[0];

                return (
                  <div key={item.id} className="border-b border-navy/8 py-2">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between py-2 text-left text-sm font-semibold ${
                        solid ? "text-navy" : "text-white"
                      }`}
                      onClick={() => toggleMenu(item)}
                    >
                      {item.label}
                      <ChevronDown open={expanded} />
                    </button>

                    {expanded && panel && (
                      <div className="pb-3 pl-2">
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                            solid ? "text-muted" : "text-white/50"
                          }`}
                        >
                          {item.megaMenu.sidebarLabel}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.megaMenu.panels.map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() =>
                                setActivePanelByMenu((prev) => ({
                                  ...prev,
                                  [item.id]: p.id,
                                }))
                              }
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                p.id === panel.id
                                  ? "bg-forest text-white"
                                  : solid
                                    ? "bg-mist text-navy"
                                    : "bg-white/10 text-white/90"
                              }`}
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                        <p
                          className={`mt-3 text-xs leading-relaxed ${
                            solid ? "text-muted" : "text-white/70"
                          }`}
                        >
                          {panel.description}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {panel.columns.flat().map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className={`text-sm font-medium ${
                                  solid
                                    ? "text-navy hover:text-forest"
                                    : "text-white/90 hover:text-white"
                                }`}
                                onClick={() => {
                                  setMobileOpen(false);
                                  closeMenu();
                                }}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={panel.learnMoreHref}
                          className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-forest"
                          onClick={() => {
                            setMobileOpen(false);
                            closeMenu();
                          }}
                        >
                          Learn more →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`block border-b border-navy/8 py-3 text-sm font-semibold ${
                    solid ? "text-navy" : "text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
