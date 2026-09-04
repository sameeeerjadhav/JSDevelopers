import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { WorkTogether } from "@/components/WorkTogether";
import { getInsightArticle, insightArticles } from "@/lib/section-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) return { title: "Insight" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: { title: article.title, description: article.excerpt, url: `/insights/${slug}` },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          eyebrow={`Insights · ${article.date}`}
          title={article.title}
          description={article.excerpt}
        />

        <section className="bg-white py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Link
              href="/insights"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-forest transition hover:text-navy"
            >
              ← All insights
            </Link>

            <div className="prose-navy mt-8 space-y-5 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                This is placeholder editorial content for <strong className="text-navy">{article.title}</strong>.
                When your team is ready, replace this section with the full article, images and calls to action.
              </p>
              <p>
                In the meantime, buyers can browse our{" "}
                <Link href="/projects" className="font-semibold text-forest hover:underline">
                  live project listings
                </Link>
                , read about our{" "}
                <Link href="/about" className="font-semibold text-forest hover:underline">
                  company and standards
                </Link>
                , or{" "}
                <Link href="/contact" className="font-semibold text-forest hover:underline">
                  book a site visit
                </Link>{" "}
                with our Bengaluru team.
              </p>
              <p>
                For documentation questions, see our{" "}
                <Link href="/services/documentation" className="font-semibold text-forest hover:underline">
                  documentation service page
                </Link>
                . For corridor context, explore{" "}
                <Link href="/locations" className="font-semibold text-forest hover:underline">
                  location guides
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <WorkTogether />
      </main>
      <Footer />
    </>
  );
}
