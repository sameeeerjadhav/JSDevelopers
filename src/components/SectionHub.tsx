import Link from "next/link";
import type { SectionPage } from "@/lib/section-pages";
import { WorkTogether } from "@/components/WorkTogether";

type SectionHubProps = {
  basePath: string;
  sections: SectionPage[];
};

export function SectionHub({ basePath, sections }: SectionHubProps) {
  return (
    <>
      <section className="bg-white py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {sections.map((section, index) => (
              <Link
                key={section.slug}
                href={`${basePath}/${section.slug}`}
                className="group flex flex-col border border-navy/10 bg-sand p-6 transition hover:border-forest/40 hover:shadow-[0_18px_40px_-28px_rgba(10,31,61,0.35)] sm:p-8"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-leaf">
                  0{index + 1}
                </p>
                <h2 className="mt-3 text-xl font-bold text-navy transition group-hover:text-forest sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {section.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest">
                  Learn more
                  <span
                    className="block h-px w-6 bg-forest transition group-hover:w-10"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WorkTogether />
    </>
  );
}
