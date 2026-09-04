import type { Metadata } from "next";
import Image from "next/image";
import { EnquireForm } from "@/components/EnquireForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MandalaBackground } from "@/components/MandalaBackground";
import { siteConfig } from "@/lib/site";

const title = "Contact Us";
const description =
  "Visit our K.R. Puram office, call, WhatsApp, or enquire online for plot site visits across Bengaluru.";

const HERO_IMAGE =
  "/projects/js-lakeview-garden/hero-entrance-2.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

const quickContacts = [
  {
    label: "Call us",
    value: siteConfig.phoneDisplay,
    href: `tel:+91${siteConfig.phone}`,
    icon: "phone" as const,
  },
  {
    label: "WhatsApp",
    value: "Chat with our team",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
    icon: "whatsapp" as const,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "email" as const,
  },
  {
    label: "Visit office",
    value: "K.R. Puram, Bengaluru",
    href: siteConfig.mapLink,
    external: true,
    icon: "pin" as const,
  },
];

function ContactIcon({ type }: { type: (typeof quickContacts)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
    "aria-hidden": true as const,
  };

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3A2 2 0 0 1 18 19 14.5 14.5 0 0 1 3.5 4.5 2 2 0 0 1 6.5 3.5Z" />
      </svg>
    );
  }
  if (type === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M12 3.5a8 8 0 0 0-6.9 12.1L4 20.5l5-1.1A8 8 0 1 0 12 3.5Z" />
        <path d="M9.2 9.4c.3-.6.5-.6.8-.6h.6c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.1-.2.3 0 .5.4.6 1 1.2 1.6 1.6.2.1.4.1.5 0l.5-.4c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .5-.6.8-.5.3-1.2.4-1.8.2A8.3 8.3 0 0 1 9 11.2c-.2-.6-.1-1.3.2-1.8Z" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
        <path d="m4.5 7.5 7.5 6 7.5-6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header variant="overlay" />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative min-h-[52svh] overflow-hidden md:min-h-[62svh]">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/55 to-navy/30"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 sm:pb-16 md:pb-20">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-4">
                <span className="block h-px w-10 bg-[#e8c84a] sm:w-14" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e8c84a] sm:text-sm">
                  Contact us
                </p>
              </div>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Let’s plan your site visit
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/85 sm:text-base md:text-lg">
                Reach us by phone, WhatsApp, email, or visit our Old Madras Road
                office in K.R. Puram.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#enquire"
                  className="bg-[#e8c84a] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy transition hover:bg-[#f0d45a] sm:text-sm"
                >
                  Enquire now
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/70 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 sm:text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick contact strip */}
        <section className="relative overflow-hidden border-b border-navy/8 bg-white">
          <MandalaBackground tone="white" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-px bg-navy/8 sm:grid-cols-2 lg:grid-cols-4">
            {quickContacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex gap-4 bg-white px-5 py-7 transition hover:bg-sand sm:px-6 sm:py-8"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-[#e8c84a]/70 text-[#b8922e] transition group-hover:bg-[#e8c84a]/15">
                  <ContactIcon type={item.icon} />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8922e]">
                    {item.label}
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold text-navy sm:text-[15px]">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Office + map */}
        <section className="relative overflow-hidden bg-[#f3f1ea] py-14 sm:py-20">
          <MandalaBackground tone="sand" className="opacity-50" />
          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex items-center gap-4">
              <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
              <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-[#b8922e] sm:text-sm">
                Office & map
              </p>
              <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-stretch lg:gap-10">
              <div className="overflow-hidden border border-[#e8c84a]/50 bg-white">
                <iframe
                  title="JS Garden Developers office location"
                  src={siteConfig.mapEmbedUrl}
                  className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[460px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col justify-center border border-[#e8c84a]/40 bg-white px-6 py-8 sm:px-8 sm:py-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8922e]">
                  Head office
                </p>
                <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
                  {siteConfig.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {siteConfig.address}
                </p>

                <dl className="mt-8 space-y-4 border-t border-navy/10 pt-6 text-sm">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:+91${siteConfig.phone}`}
                        className="font-semibold text-navy hover:text-forest"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-semibold text-navy hover:text-forest break-all"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                      Certification
                    </dt>
                    <dd className="mt-1 font-semibold text-navy">{siteConfig.iso}</dd>
                  </div>
                </dl>

                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-forest sm:text-sm"
                >
                  Open in Google Maps
                  <span className="block h-px w-10 bg-forest" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        <EnquireForm />
      </main>
      <Footer />
    </>
  );
}
