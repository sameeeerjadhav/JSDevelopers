import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { WorkTogether } from "@/components/WorkTogether";
import { insightArticles } from "@/lib/section-pages";

const title = "Insights";
const description =
  "Guides, market notes and practical advice for plot buyers exploring Bengaluru’s land market.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/insights" },
  openGraph: { title, description, url: "/insights" },
  twitter: { title, description },
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          eyebrow="Insights"
          title="Knowledge for confident plot decisions"
          description="Buying guides, documentation explainers and corridor spotlights — placeholder content until our editorial calendar goes live."
        />

        <section className="bg-white py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {insightArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group flex flex-col border border-navy/10 bg-sand p-6 transition hover:border-forest/40 sm:p-7"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {article.date}
                  </p>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-navy transition group-hover:text-forest sm:text-xl">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-forest">
                    Read article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <WorkTogether />
      </main>
      <Footer />
    </>
  );
}
