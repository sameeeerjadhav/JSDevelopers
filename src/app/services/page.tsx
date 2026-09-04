import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHub } from "@/components/SectionHub";
import { servicePages } from "@/lib/section-pages";

const title = "Services";
const description =
  "Buying support, documentation guidance and after-sales care from JS Garden Developers across Bengaluru.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          eyebrow="Services"
          title="Support at every step of your plot journey"
          description="From first site visit through paperwork and registration — our Bengaluru team is with you."
        />
        <SectionHub basePath="/services" sections={servicePages} />
      </main>
      <Footer />
    </>
  );
}
