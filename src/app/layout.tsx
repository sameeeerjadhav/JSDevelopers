import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "JS Garden Developers | Premium Residential Plots in Bengaluru";
const description =
  "RERA-registered premium villa plots near Whitefield, Malur & Hoskote. Trusted Bengaluru developers with 12+ years of experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description,
  keywords: [
    "residential plots Bengaluru",
    "villa plots Whitefield",
    "JS Garden Developers",
    "plots Malur",
    "RERA plots Bangalore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.shortName,
    title,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/logo-dark.png",
    apple: "/logo-dark.png",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteConfig.legalName,
  alternateName: siteConfig.shortName,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/logo-dark.png`,
  logo: `${siteConfig.siteUrl}/logo-dark.png`,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560036",
    addressCountry: "IN",
  },
  areaServed: ["Whitefield", "Malur", "Hoskote", "Bengaluru"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
