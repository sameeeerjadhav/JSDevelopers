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

const HERO_IMAGE = "/projects/js-lakeview-garden/hero-entrance-2.jpg";

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
      <main className="overflow-x-clip">
        {/* Hero */}
        <section className="relative min-h-[min(28rem,70svh)] overflow-hidden sm:min-h-[52svh] md:min-h-[62svh]">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-deep/92 via-navy/60 to-navy/35"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-8 pt-24 sm:px-8 sm:pb-14 sm:pt-28 md:pb-20">
            <div className="mx-auto max-w-7xl min-w-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className="block h-px w-8 bg-[#e8c84a] sm:w-14"
                  aria-hidden
                />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e8c84a] sm:text-xs sm:tracking-[0.28em] md:text-sm">
                  Contact us
                </p>
              </div>
              <h1 className="mt-3 max-w-3xl text-[clamp(1.5rem,6.5vw,3.75rem)] font-bold leading-[1.15] tracking-tight text-white sm:mt-4">
                Let’s plan your site visit
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-base md:text-lg">
                Reach us by phone, WhatsApp, email, or visit our Old Madras Road
                office in K.R. Puram.
              </p>
              <div className="mt-5 flex w-full max-w-sm flex-col gap-2.5 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href="#enquire"
                  className="inline-flex min-h-11 w-full items-center justify-center bg-[#e8c84a] px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-navy transition hover:bg-[#f0d45a] sm:w-auto sm:px-6 sm:py-3.5 sm:text-xs sm:tracking-[0.14em] md:text-sm"
                >
                  Enquire now
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center border border-white/70 px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3.5 sm:text-xs sm:tracking-[0.14em] md:text-sm"
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
          <div className="relative z-10 mx-auto grid max-w-7xl divide-y divide-navy/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {quickContacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex min-w-0 items-start gap-3.5 bg-white px-4 py-5 transition hover:bg-sand sm:gap-4 sm:px-6 sm:py-8"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#e8c84a]/70 text-[#b8922e] transition group-hover:bg-[#e8c84a]/15 sm:h-11 sm:w-11">
                  <ContactIcon type={item.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-words text-sm font-semibold leading-snug text-navy sm:mt-1.5 sm:text-[15px]">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Office + map */}
        <section className="relative overflow-hidden bg-[#f3f1ea] py-10 sm:py-16 md:py-20">
          <MandalaBackground tone="sand" className="opacity-50" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
              <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8922e] sm:text-xs sm:tracking-[0.22em] md:text-sm">
                Office & map
              </p>
              <span className="block h-px flex-1 bg-[#c9a84a]/50" aria-hidden />
            </div>

            <div className="mt-7 grid min-w-0 gap-5 sm:mt-10 sm:gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-stretch lg:gap-10">
              <div className="overflow-hidden rounded-xl border border-[#e8c84a]/50 bg-white sm:rounded-2xl">
                <iframe
                  title="JS Garden Developers office location"
                  src={siteConfig.mapEmbedUrl}
                  className="h-[240px] w-full border-0 sm:h-[360px] md:h-[420px] lg:h-full lg:min-h-[460px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center rounded-xl border border-[#e8c84a]/40 bg-white px-4 py-6 sm:rounded-2xl sm:px-8 sm:py-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8922e] sm:text-xs sm:tracking-[0.2em]">
                  Head office
                </p>
                <h2 className="mt-2 text-[clamp(1.25rem,4.5vw,1.875rem)] font-bold leading-snug text-navy sm:mt-3">
                  {siteConfig.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
                  {siteConfig.address}
                </p>

                <dl className="mt-6 space-y-3.5 border-t border-navy/10 pt-5 text-sm sm:mt-8 sm:space-y-4 sm:pt-6">
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
                        className="break-all font-semibold text-navy hover:text-forest"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                      Certification
                    </dt>
                    <dd className="mt-1 font-semibold text-navy">
                      {siteConfig.iso}
                    </dd>
                  </div>
                </dl>

                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-forest sm:mt-8 sm:min-h-0 sm:gap-3 sm:text-xs sm:tracking-[0.14em] md:text-sm"
                >
                  Open in Google Maps
                  <span className="block h-px w-8 bg-forest sm:w-10" aria-hidden />
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
