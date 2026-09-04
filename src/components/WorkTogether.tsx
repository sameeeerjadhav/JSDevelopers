import Image from "next/image";
import Link from "next/link";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

export function WorkTogether() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/80 to-navy/55"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-center justify-center gap-4">
          <span className="block h-px w-10 bg-[#e8c84a]/70 sm:w-16" aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e8c84a] sm:text-sm">
            Contact us
          </p>
          <span className="block h-px w-10 bg-[#e8c84a]/70 sm:w-16" aria-hidden />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to work together?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/80 sm:text-base md:text-lg">
          Whether you want a site visit, plot options near Whitefield–Malur, or
          paperwork clarity — our Bengaluru team is ready to help.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className="w-full bg-[#e8c84a] px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-navy transition hover:bg-[#f0d45a] sm:w-auto"
          >
            Book a site visit
          </Link>
          <Link
            href="/projects"
            className="w-full border border-white/70 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
          >
            Browse projects
          </Link>
        </div>
      </div>
    </section>
  );
}
