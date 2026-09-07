import Link from "next/link";
import type { SectionPage } from "@/lib/section-pages";
import { servicePages } from "@/lib/section-pages";
import { WorkTogether } from "@/components/WorkTogether";
import { siteConfig } from "@/lib/site";

type ServicesDetailProps = {
  page: SectionPage;
};

export function ServicesDetail({ page }: ServicesDetailProps) {
  const others = servicePages.filter((s) => s.slug !== page.slug);

  return (
    <>
      <section className="relative bg-transparent py-14 sm:py-20 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-forest transition hover:text-navy"
          >
            ← All services
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:items-start">
            <div className="border-l-2 border-[#e8c84a] pl-5 sm:pl-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8922e]">
                {page.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
                {page.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {page.description}
              </p>
              <div className="mt-8 space-y-4">
                {page.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-navy px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-navy-deep sm:text-sm"
                >
                  Enquire now
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    `Hi, I'd like help with ${page.title.toLowerCase()} support.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-navy px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy transition hover:bg-navy hover:text-white sm:text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <aside className="border border-[#e8c84a]/50 bg-[#f7f5ef] p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8922e]">
                Key highlights
              </p>
              <ul className="mt-5 space-y-4">
                {page.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-navy sm:text-[15px]"
                  >
                    <span
                      className="mt-2 block h-px w-5 shrink-0 bg-[#e8c84a]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-navy/10 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8922e]">
                  Talk to us
                </p>
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="mt-2 block text-lg font-bold text-navy hover:text-forest"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <p className="mt-2 text-sm text-muted">{siteConfig.address}</p>
              </div>
            </aside>
          </div>

          <div className="mt-14 border-t border-navy/10 pt-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8922e]">
              Related
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="border border-[#e8c84a]/50 bg-white px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-[#e8c84a] hover:bg-[#e8c84a]/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {others.length > 0 ? (
            <div className="mt-14">
              <div className="flex items-center gap-4">
                <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
                <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#b8922e]">
                  Other services
                </p>
                <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {others.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group border border-navy/10 bg-white p-5 transition hover:border-[#e8c84a]/60 sm:p-6"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                      Service
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-navy group-hover:text-forest">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">
                      {s.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <WorkTogether />
    </>
  );
}
