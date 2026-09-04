import Link from "next/link";
import type { SectionPage } from "@/lib/section-pages";
import { WorkTogether } from "@/components/WorkTogether";

type SectionDetailProps = {
  page: SectionPage;
  hubHref: string;
  hubLabel: string;
  showWorkTogether?: boolean;
};

export function SectionDetail({
  page,
  hubHref,
  hubLabel,
  showWorkTogether = true,
}: SectionDetailProps) {
  return (
    <>
      <section className="bg-white py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Link
            href={hubHref}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-forest transition hover:text-navy"
          >
            ← {hubLabel}
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
                {page.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {page.description}
              </p>
              <div className="mt-8 space-y-4">
                {page.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="h-fit border border-navy/10 bg-sand p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Key highlights
              </p>
              <ul className="mt-4 space-y-3">
                {page.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-navy"
                  >
                    <span
                      className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-forest"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-12 border-t border-navy/10 pt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Related
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-navy/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-forest hover:text-forest"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showWorkTogether ? <WorkTogether /> : null}
    </>
  );
}
