import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { TrustStrip } from "@/components/TrustStrip";
import { WorkTogether } from "@/components/WorkTogether";
import { siteConfig } from "@/lib/site";

const title = "About Us";
const description =
  "Learn about Jeevan Sagar Garden Developers — Bengaluru’s trusted plot developers with 12+ years of experience.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

const pillars = [
  {
    title: "Integrity first",
    body: "Transparent pricing, clear survey details and honest advice on what a plot can and cannot deliver.",
  },
  {
    title: "Corridor focus",
    body: "We specialise in Whitefield, Malur, Hoskote and nearby growth belts — not every pin on the map.",
  },
  {
    title: "Buyer accompaniment",
    body: "From first WhatsApp to site visit and registration support, you deal with people who know the layout.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="A Bengaluru developer built on land, paperwork and trust"
          description={`${siteConfig.legalName} develops residential plots for families and investors who want clarity — not pressure sales.`}
        />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
                Who we are
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                For over a decade we have planned and delivered residential
                layouts across Bengaluru’s expanding eastern and peripheral
                corridors. Our work sits at the intersection of land acquisition,
                approvals and buyer guidance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Today our live portfolio includes MPA-approved and
                RERA-registered villa plot projects near Whitefield, Malur and
                Hoskote — with bankers and documentation pathways explained
                upfront.
              </p>
              <Link
                href="/projects"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-forest"
              >
                See our projects
                <span className="block h-px w-10 bg-forest" aria-hidden />
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
                alt="Bright residential interior"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              What guides our work
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className="border-t border-navy/10 pt-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-leaf">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WorkTogether />
      </main>
      <Footer />
    </>
  );
}
