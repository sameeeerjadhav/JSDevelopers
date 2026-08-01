import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyUs } from "@/components/WhyUs";
import { WorkTogether } from "@/components/WorkTogether";

export default function HomePage() {
  return (
    <main>
      <Header variant="overlay" />
      <Hero />
      <ProjectsShowcase showListings={false} />
      <TrustStrip />
      <WhyUs />
      <WorkTogether />
      <Footer />
    </main>
  );
}
