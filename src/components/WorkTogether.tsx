import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

type WorkTogetherProps = {
  /** Project pages already have a sticky WhatsApp/Enquire bar */
  variant?: "default" | "project";
};

export function WorkTogether({ variant = "default" }: WorkTogetherProps) {
  const isProject = variant === "project";

  return (
    <section className="relative overflow-x-clip">
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/94 via-navy/88 to-navy-deep/92 sm:bg-gradient-to-r sm:from-navy-deep/90 sm:via-navy/80 sm:to-navy/55"
        aria-hidden
      />

      <div
        className={`relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8 ${
          isProject
            ? "py-10 pb-6 sm:py-16 sm:pb-16 md:py-24"
            : "py-10 sm:py-20 md:py-28"
        }`}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <span
            className="block h-px w-5 shrink-0 bg-[#e8c84a]/70 sm:w-16"
            aria-hidden
          />
          <p className="text-center text-[9px] font-bold uppercase tracking-[0.16em] text-[#e8c84a] sm:text-xs sm:tracking-[0.28em] md:text-sm">
            Buy with confidence
          </p>
          <span
            className="block h-px w-5 shrink-0 bg-[#e8c84a]/70 sm:w-16"
            aria-hidden
          />
        </div>

        <h2 className="mx-auto mt-3 max-w-[18ch] text-center text-[clamp(1.25rem,6vw,3rem)] font-bold leading-[1.2] tracking-tight text-white sm:mt-6 sm:max-w-3xl">
          Looking for a plot to buy?
        </h2>
        <p className="mx-auto mt-2.5 max-w-[22rem] px-1 text-center text-[13px] leading-relaxed text-white/80 sm:mt-4 sm:max-w-xl sm:px-0 sm:text-base md:text-lg">
          Walk the land, review approvals, and talk to our team — villa plots
          across Whitefield, Malur and Hoskote, with clear paperwork before you
          decide.
        </p>

        <div className="mx-auto mt-5 grid w-full max-w-xs grid-cols-1 gap-2 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-11 w-full items-center justify-center bg-[#e8c84a] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-navy transition hover:bg-[#f0d45a] sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
          >
            Book a site visit
          </Link>
          <Link
            href="/projects"
            className="inline-flex min-h-11 w-full items-center justify-center border border-white/70 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
          >
            View plots for sale
          </Link>
          {!isProject ? (
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in buying a residential plot.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center border border-white/40 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-white/90 transition hover:border-white hover:bg-white/10 sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
            >
              WhatsApp enquiry
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
