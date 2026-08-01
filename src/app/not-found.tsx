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
        <h1 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 text-muted">
          The link may be broken, or the page may have moved. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-navy"
          >
            Back home
          </Link>
          <Link
            href="/projects"
            className="border border-forest px-6 py-3 text-sm font-semibold uppercase tracking-wide text-forest hover:bg-mist"
          >
            Browse projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
