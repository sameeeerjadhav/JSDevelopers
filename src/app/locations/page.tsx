import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHub } from "@/components/SectionHub";
import { locationPages } from "@/lib/section-pages";

const title = "Locations";
const description =
  "Explore villa plot corridors across Whitefield, Malur and Hoskote with JS Garden Developers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/locations" },
  openGraph: { title, description, url: "/locations" },
  twitter: { title, description },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          eyebrow="Locations"
          title="Growth corridors we know deeply"
          description="Residential land across Bengaluru’s eastern belt — where connectivity and approvals align."
        />
        <SectionHub basePath="/locations" sections={locationPages} />
      </main>
      <Footer />
    </>
  );
}
