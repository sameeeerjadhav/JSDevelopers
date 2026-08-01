import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-24 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-navy">
          Project not found
        </h1>
        <p className="mt-4 text-muted">
          That project page doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-block bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-navy"
        >
          Back to projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
