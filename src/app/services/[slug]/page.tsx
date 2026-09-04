import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionDetail } from "@/components/SectionDetail";
import { getServicePage, servicePages } from "@/lib/section-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return { title: "Service" };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: page.title, description: page.description, url: `/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <SectionDetail page={page} hubHref="/services" hubLabel="All services" />
      </main>
      <Footer />
    </>
  );
}
