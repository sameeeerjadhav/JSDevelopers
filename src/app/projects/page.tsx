import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { WorkTogether } from "@/components/WorkTogether";

export const metadata: Metadata = {
  title: "Our Projects | JS Garden Developers",
  description:
    "Explore villa plots, ongoing layouts and growth corridors from JS Garden Developers across Whitefield, Malur and Hoskote.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Projects"
          title="Land portfolios built for Bengaluru’s next chapter"
          description="Browse by category — then open live listings with approvals, corridor context and direct enquiry."
        />
        <ProjectsShowcase showListings />
        <WorkTogether />
      </main>
      <Footer />
    </>
  );
}
