import Link from "next/link";

export function WorkTogether() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-5xl">
            Ready to work together?
          </h2>
          <p className="mt-4 max-w-lg text-muted md:text-lg">
            Whether you want a site visit, plot options near Whitefield–Malur, or
            paperwork clarity — our Bengaluru team is ready to help.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-forest px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-navy"
            >
              Book a site visit
            </Link>
            <Link
              href="/projects"
              className="border border-forest px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-forest hover:bg-mist"
            >
              Browse projects
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-56 w-full max-w-md md:h-72" aria-hidden>
          <div className="absolute right-0 top-0 h-40 w-40 rotate-12 bg-[#f6d86b] md:h-52 md:w-52" />
          <div className="absolute right-16 top-10 h-44 w-44 -rotate-6 bg-[#ffe28a]/90 md:right-20 md:h-56 md:w-56" />
          <div className="absolute bottom-0 right-8 h-36 w-36 rotate-[28deg] bg-[#efc94c] md:h-48 md:w-48" />
          <div className="absolute bottom-8 left-4 h-28 w-28 rotate-45 bg-[#fff3bf]" />
        </div>
      </div>
    </section>
  );
}
