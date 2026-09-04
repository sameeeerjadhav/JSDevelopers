import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionDetail } from "@/components/SectionDetail";
import { getLocationPage, locationPages } from "@/lib/section-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) return { title: "Location" };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/locations/${slug}` },
    openGraph: { title: page.title, description: page.description, url: `/locations/${slug}` },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getLocationPage(slug);
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
        <SectionDetail page={page} hubHref="/locations" hubLabel="All locations" />
      </main>
      <Footer />
    </>
  );
}
