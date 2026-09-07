import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicesHub } from "@/components/ServicesHub";
import { servicePages } from "@/lib/section-pages";

const title = "Services";
const description =
  "Buying support, documentation guidance and after-sales care from JS Garden Developers across Bengaluru.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

export default function ServicesPage() {
  return (
    <>
      <Header variant="overlay" />
      <main className="overflow-x-hidden">
        <ServicesHub sections={servicePages} />
      </main>
      <Footer />
    </>
  );
}
