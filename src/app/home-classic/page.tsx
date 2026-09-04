import { AboutUsSection } from "@/components/AboutUsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroClassic } from "@/components/HeroClassic";
import { MandalaBackground } from "@/components/MandalaBackground";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyUs } from "@/components/WhyUs";
import { WorkTogether } from "@/components/WorkTogether";

export const metadata = {
  title: "Classic homepage (archived)",
  robots: { index: false, follow: false },
};

/** Archived homepage — PCL-style hero carousel version saved for reference. */
export default function HomeClassicPage() {
  return (
    <main className="overflow-x-hidden">
      <Header variant="overlay" />
      <HeroClassic />
      <div className="relative bg-white">
        <MandalaBackground tone="white" layout="band" />
        <AboutUsSection />
        <ProjectsShowcase showListings={false} />
      </div>
      <TrustStrip />
      <WhyUs />
      <WorkTogether />
      <Footer />
    </main>
  );
}
