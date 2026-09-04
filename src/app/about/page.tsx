import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MandalaBackground } from "@/components/MandalaBackground";
import { TrustStrip } from "@/components/TrustStrip";
import { WorkTogether } from "@/components/WorkTogether";
import { siteConfig } from "@/lib/site";

const title = "About Us";
const description =
  "Learn about Jeevan Sagar Garden Developers — Bengaluru's trusted plot developers with 12+ years of experience.";

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
      <main className="overflow-x-hidden">
        <div className="relative bg-white">
          <MandalaBackground tone="white" layout="band" />

          {/* Hero */}
          <section className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-20">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-xs sm:tracking-[0.22em]">
                <span
                  className="block h-px w-8 bg-[#e8c84a] sm:w-14"
                  aria-hidden
                />
                About us
              </p>
              <h1 className="mt-3 max-w-3xl text-[1.65rem] font-bold leading-[1.12] tracking-tight text-navy sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                About {siteConfig.shortName}
                <span className="mt-1 block text-[1.35rem] font-semibold text-navy/80 sm:mt-2 sm:text-[1.75rem] md:text-3xl lg:text-[2.35rem]">
                  Leadership & legacy
                </span>
              </h1>
            </div>

            <div className="relative z-10 mx-auto mt-6 max-w-7xl px-4 pb-12 sm:mt-10 sm:px-5 sm:pb-20 md:px-8 md:pb-28 lg:mt-12">
              <div className="relative flex flex-col lg:block">
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-navy sm:aspect-[16/10] md:aspect-[2/1] lg:aspect-[21/9] lg:w-[68%]">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
                    alt="JS Garden Developers team in discussion"
                    fill
                    priority
                    sizes="(min-width: 1024px) 68vw, 100vw"
                    className="object-cover object-[center_28%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy/10 lg:to-navy/20" />
                </div>

                <div className="relative z-10 -mt-10 w-full bg-navy px-5 py-7 text-white shadow-[0_24px_50px_-24px_rgba(10,31,61,0.5)] sm:-mt-16 sm:px-8 sm:py-10 md:-mt-20 md:px-10 md:py-12 lg:absolute lg:bottom-8 lg:right-0 lg:mt-0 lg:w-[min(44%,28rem)] xl:w-[30rem]">
                  <p className="text-[13px] font-semibold leading-snug text-white sm:text-base md:text-lg">
                    {siteConfig.legalName} develops residential plots for
                    families and investors who want clarity — not pressure
                    sales.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-[15px]">
                    For over a decade we have planned and delivered MPA-approved
                    and RERA-registered villa plot layouts across
                    Bengaluru&apos;s eastern corridors — Whitefield, Malur and
                    Hoskote — with paperwork explained in plain language.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-[15px]">
                    {siteConfig.iso}. A Bengaluru office you can walk into, and
                    a team that stays with you from first site visit to
                    registration.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e8c84a] transition hover:text-white sm:mt-9 sm:text-sm"
                  >
                    Connect with our team
                    <span
                      aria-hidden
                      className="transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="relative py-12 sm:py-20 md:py-24">
            <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 sm:gap-12 sm:px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-xs sm:tracking-[0.22em]">
                  <span
                    className="block h-px w-8 bg-[#e8c84a] sm:w-12"
                    aria-hidden
                  />
                  Our story
                </p>
                <h2 className="mt-3 text-xl font-bold leading-[1.15] tracking-tight text-navy sm:mt-4 sm:text-3xl md:text-4xl">
                  From land acquisition to keys in hand
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
                  Our work sits at the intersection of land acquisition,
                  approvals and buyer guidance. Live portfolio projects near
                  Whitefield, Malur and Hoskote come with bankers and
                  documentation pathways explained upfront.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:text-lg">
                  Visit our office on Old Madras Road, K.R. Puram — or start with
                  a WhatsApp message. We&apos;re happy to walk the land with you
                  before you decide.
                </p>
                <Link
                  href="/projects"
                  className="group mt-7 inline-flex min-h-11 items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-forest sm:mt-8 sm:text-sm"
                >
                  View our projects
                  <span
                    className="block h-px w-10 bg-forest transition group-hover:w-14"
                    aria-hidden
                  />
                </Link>
              </div>

              <div className="relative order-1 aspect-[4/3] overflow-hidden bg-navy lg:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
                  alt="Residential development in Bengaluru"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Principles */}
          <section className="relative py-12 sm:py-20 md:py-24">
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              aria-hidden
            >
              <div className="absolute -right-8 top-8 hidden h-40 w-40 md:block">
                <div className="absolute right-0 top-0 h-px w-32 rotate-[25deg] bg-[#e8c84a]/80" />
                <div className="absolute right-4 top-6 h-px w-24 rotate-[25deg] bg-[#e8c84a]/50" />
              </div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:text-xs sm:tracking-[0.22em]">
                <span
                  className="block h-px w-8 bg-[#e8c84a] sm:w-12"
                  aria-hidden
                />
                What guides our work
              </p>
              <h2 className="mt-3 max-w-3xl text-xl font-bold leading-[1.15] tracking-tight text-navy sm:mt-4 sm:text-3xl md:text-4xl">
                Principles we don&apos;t compromise on
              </h2>

              <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="border-t border-navy/10 pt-5 sm:pt-6"
                  >
                    <p className="text-xs font-semibold tracking-[0.18em] text-leaf">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2.5 text-base font-bold text-navy sm:mt-3 sm:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <TrustStrip />
        <WorkTogether />
      </main>
      <Footer />
    </>
  );
}
