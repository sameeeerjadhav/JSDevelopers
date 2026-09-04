"use client";

import Link from "next/link";
import type { MegaMenuConfig, MegaMenuPanel } from "@/lib/navigation";

type MegaMenuProps = {
  config: MegaMenuConfig;
  activePanelId: string;
  onPanelChange: (panelId: string) => void;
  onClose: () => void;
};

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-3 w-3 shrink-0 ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 2.5L8 6L4 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PanelContent({ panel, onClose }: { panel: MegaMenuPanel; onClose: () => void }) {
  return (
    <div className="flex min-h-[280px] flex-col py-8 pl-8 pr-6 md:min-h-[320px] md:py-10 md:pl-12 md:pr-10">
      <div className="grid gap-6 border-b border-navy/10 pb-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl lg:text-4xl">
            {panel.label}
          </h2>
          <Link
            href={panel.learnMoreHref}
            onClick={onClose}
            className="group mt-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-forest transition hover:text-navy md:text-sm"
          >
            Learn more
            <span
              className="block h-px w-8 bg-forest transition group-hover:w-12 group-hover:bg-navy"
              aria-hidden
            />
          </Link>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {panel.description}
        </p>
      </div>

      <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {panel.columns.map((column, columnIndex) => (
          <ul key={columnIndex} className="space-y-2.5">
            {column.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-sm font-medium text-navy transition hover:text-forest md:text-[15px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function MegaMenu({
  config,
  activePanelId,
  onPanelChange,
  onClose,
}: MegaMenuProps) {
  const activePanel =
    config.panels.find((p) => p.id === activePanelId) ?? config.panels[0];

  if (!activePanel) return null;

  return (
    <div className="border-t border-navy/10 bg-[#f3f3f3] shadow-[0_12px_40px_-20px_rgba(10,31,61,0.25)]">
      <div className="mx-auto flex max-w-7xl">
        <aside className="w-52 shrink-0 border-r border-navy/10 py-8 pl-6 pr-4 md:w-60 md:py-10 md:pl-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            {config.sidebarLabel}
          </p>
          <ul className="mt-5 space-y-1">
            {config.panels.map((panel) => {
              const isActive = panel.id === activePanel.id;
              return (
                <li key={panel.id}>
                  <button
                    type="button"
                    onMouseEnter={() => onPanelChange(panel.id)}
                    onFocus={() => onPanelChange(panel.id)}
                    onClick={() => onPanelChange(panel.id)}
                    className={`flex w-full items-center justify-between gap-2 py-2.5 text-left text-sm font-semibold transition md:text-[15px] ${
                      isActive
                        ? "text-forest"
                        : "text-navy/55 hover:text-navy"
                    }`}
                  >
                    {panel.label}
                    <ChevronRight
                      className={isActive ? "text-forest" : "text-navy/35"}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="min-w-0 flex-1">
          <PanelContent panel={activePanel} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
