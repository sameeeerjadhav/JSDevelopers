"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(6,20,40,0.88) 0%, rgba(6,20,40,0.55) 48%, rgba(6,20,40,0.35) 100%), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,158,99,0.22),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit rounded-md bg-white px-3 py-2 shadow-lg md:px-4 md:py-2.5"
        >
          <Image
            src="/logo-dark.png"
            alt="J.S. Garden Developers — ISO 9001 Certified Company"
            width={340}
            height={112}
            className="h-16 w-auto object-contain sm:h-20 md:h-24"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="max-w-2xl text-lg font-medium leading-relaxed text-white/90 md:text-xl"
        >
          RERA-ready residential plots on the Whitefield–Malur corridor —
          built for families who want land, not just listings.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-lg text-sm text-white/70 md:text-base"
        >
          Bengaluru developers with 12+ years, MPA-approved layouts, and clear
          paperwork from first call to registration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/projects"
            className="bg-leaf px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-forest"
          >
            View Projects
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in your residential plots.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/15"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
