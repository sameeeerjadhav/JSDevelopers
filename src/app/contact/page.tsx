import type { Metadata } from "next";
import { EnquireForm } from "@/components/EnquireForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | JS Garden Developers",
  description:
    "Visit our K.R. Puram office, call, WhatsApp, or enquire online for plot site visits across Bengaluru.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let’s plan your site visit"
          description="Reach us by phone, WhatsApp, email, or visit our Old Madras Road office in K.R. Puram."
        />

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
                Office & map
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted md:text-base">
                <p>
                  <span className="font-semibold text-navy">Address</span>
                  <br />
                  {siteConfig.address}
                </p>
                <p>
                  <span className="font-semibold text-navy">Phone</span>
                  <br />
                  <a
                    href={`tel:+91${siteConfig.phone}`}
                    className="text-forest hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-navy">Email</span>
                  <br />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-forest hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-navy">WhatsApp</span>
                  <br />
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:underline"
                  >
                    Chat with our team
                  </a>
                </p>
              </div>

              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-forest"
              >
                Open in Google Maps
                <span className="block h-px w-10 bg-forest" aria-hidden />
              </a>
            </div>

            <div className="min-h-[320px] overflow-hidden border border-navy/10 bg-sand md:min-h-[420px]">
              <iframe
                title="JS Garden Developers office location"
                src={siteConfig.mapEmbedUrl}
                className="h-full min-h-[320px] w-full border-0 md:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <EnquireForm />
      </main>
      <Footer />
    </>
  );
}
