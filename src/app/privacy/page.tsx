import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

const title = "Privacy Policy";
const description =
  "How JS Garden Developers collects, uses, and protects your personal data when you visit this site or enquire about a project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy" },
  twitter: { title, description },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-navy/10 py-8 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-semibold text-navy md:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description="Last updated 1 August 2026. This page explains what we collect, why, and the choices you have."
        />

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Section title="Who this policy covers">
              <p>
                This policy applies to visitors of {siteConfig.shortName}&apos;s website,
                operated by {siteConfig.legalName}. It explains how we handle personal data
                under India&apos;s Digital Personal Data Protection Act, 2023 (DPDPA) and
                general good practice.
              </p>
            </Section>

            <Section title="What we collect">
              <p>
                <strong className="text-navy">Enquiry details.</strong> When you submit the
                enquiry form, call, or message us on WhatsApp, we collect your name, phone
                number, email (optional), the project you&apos;re interested in, and any
                message you write.
              </p>
              <p>
                <strong className="text-navy">Cookies and site usage.</strong> With your
                consent (see the cookie banner, reopenable anytime via &quot;Manage cookie
                preferences&quot; in the footer), we use analytics cookies to understand
                which pages and projects visitors explore, and marketing cookies to show
                relevant ads and follow up with people who&apos;ve shown interest.
                Necessary cookies for security and core site function are always on.
              </p>
              <p>
                <strong className="text-navy">Enquiry attribution.</strong> If you&apos;ve
                accepted analytics or marketing cookies, a submitted enquiry may also
                include which page you landed on, which site referred you, and campaign
                parameters (such as which ad or search result you clicked) — this helps us
                understand which channels bring genuine buyers.
              </p>
            </Section>

            <Section title="How we use it">
              <p>
                To respond to your enquiry, arrange site visits, share project and pricing
                details, and — only where you&apos;ve consented — to personalise marketing
                and measure which channels work. We do not sell your personal data.
              </p>
            </Section>

            <Section title="Who we share it with">
              <p>
                Enquiry notifications are delivered to our team via our email provider
                (Resend). Where you&apos;ve accepted the relevant cookies, anonymised or
                pseudonymised usage data may be shared with Google (Analytics, Ads) and
                Meta (Facebook/Instagram) for analytics and advertising. We don&apos;t share
                your contact details with these platforms unless you interact with an ad
                that they attribute back to your own visit.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                You can withdraw cookie consent at any time from the footer. To access,
                correct, or request deletion of personal data you&apos;ve shared with us
                (for example, an enquiry you submitted), email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-forest hover:underline">
                  {siteConfig.email}
                </a>{" "}
                or call{" "}
                <a href={`tel:+91${siteConfig.phone}`} className="text-forest hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
                . We&apos;ll respond within a reasonable time.
              </p>
            </Section>

            <Section title="Data retention">
              <p>
                We keep enquiry details for as long as needed to respond to you and
                maintain our sales records, or as required by law, after which they&apos;re
                deleted or anonymised.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                {siteConfig.legalName}
                <br />
                {siteConfig.address}
                <br />
                <Link href="/contact" className="text-forest hover:underline">
                  Contact page
                </Link>
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
