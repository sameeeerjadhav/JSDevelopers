import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MandalaBackground } from "@/components/MandalaBackground";
import { PageHero } from "@/components/PageHero";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { WorkTogether } from "@/components/WorkTogether";

const title = "Our Projects";
const description =
  "Explore villa plots, ongoing layouts and growth corridors from JS Garden Developers across Whitefield, Malur and Hoskote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
  twitter: { title, description },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-white">
        {/* One continuous mandala band — avoids cuts between hero and listings */}
        <div className="relative bg-white">
          <MandalaBackground tone="white" layout="band" />
          <PageHero
            eyebrow="Our Projects"
            title="Land portfolios built for Bengaluru’s next chapter"
            description="Browse live listings with approvals, corridor context and direct enquiry."
            withMandala={false}
          />
          <ProjectsShowcase showListings />
        </div>
        <WorkTogether />
      </main>
      <Footer />
    </>
  );
}
