import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

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

export const metadata: Metadata = {
  title: "JS Garden Developers | Premium Residential Plots in Bengaluru",
  description:
    "RERA-registered premium villa plots near Whitefield, Malur & Hoskote. Trusted Bengaluru developers with 12+ years of experience.",
  keywords: [
    "residential plots Bengaluru",
    "villa plots Whitefield",
    "JS Garden Developers",
    "plots Malur",
    "RERA plots Bangalore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
