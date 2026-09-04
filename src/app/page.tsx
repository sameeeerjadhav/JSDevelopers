import { AboutUsSection } from "@/components/AboutUsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// import { KarnatakaPresence } from "@/components/KarnatakaPresence";
import { MandalaBackground } from "@/components/MandalaBackground";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { TrustStrip } from "@/components/TrustStrip";
import { VideoTextBrand } from "@/components/VideoTextBrand";
import { WhyUs } from "@/components/WhyUs";
import { WorkTogether } from "@/components/WorkTogether";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <TrustStrip />
      <VideoTextBrand />

      {/* One continuous mandala band — avoids cuts between white sections */}
      <div className="relative bg-white">
        <MandalaBackground tone="white" layout="band" />
        <AboutUsSection />
        <ProjectsShowcase showListings={false} />
        <WhyUs bare />
      </div>

      <WorkTogether />
      {/* Hidden for now — keep <KarnatakaPresence /> when ready to show again */}
      {/* <KarnatakaPresence /> */}
      <Footer />
    </main>
  );
}
