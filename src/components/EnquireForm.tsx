"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { MandalaBackground } from "@/components/MandalaBackground";
import { getAttribution } from "@/lib/attribution";
import { hasConsent } from "@/lib/consent";
import { projects, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "mt-2 w-full border border-navy/15 bg-white px-4 py-3.5 text-sm text-navy outline-none transition focus:border-[#e8c84a]";

export function EnquireForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [project, setProject] = useState(projects[0]?.name ?? "");

  useEffect(() => {
    const saved = sessionStorage.getItem("interestedProject");
    if (saved) setProject(saved);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);
    const trackingAllowed = hasConsent("analytics") || hasConsent("marketing");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          project: data.get("project"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          attribution: trackingAllowed ? getAttribution() : null,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      trackEvent("generate_lead", { project: String(data.get("project") ?? "") });
      form.reset();
      setProject(projects[0]?.name ?? "");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="enquire" className="relative overflow-hidden bg-white py-16 md:py-24">
      <MandalaBackground tone="white" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-4">
            <span className="block h-px w-10 bg-[#e8c84a] sm:w-14" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b8922e] sm:text-sm">
              Enquire
            </p>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Book a site visit or request a callback
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base md:text-lg">
            Share your details and preferred project. Our team responds on call
            or WhatsApp — usually the same day.
          </p>

          <div className="mt-8 space-y-4 border-l-2 border-[#e8c84a] pl-5">
            <p className="text-sm text-navy">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                Phone
              </span>
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="mt-1 inline-block font-semibold hover:text-forest"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-navy">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8922e]">
                Email
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 inline-block font-semibold break-all hover:text-forest"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="text-sm text-muted">
              Prefer WhatsApp?{" "}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-forest hover:underline"
              >
                Message us directly
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="border border-[#e8c84a]/40 bg-[#f7f5ef] p-6 sm:p-8 md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-navy">
              Full name
              <input
                required
                name="name"
                className={fieldClass}
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-medium text-navy">
              Phone
              <input
                required
                name="phone"
                type="tel"
                pattern="[0-9+\-\s]{10,15}"
                className={fieldClass}
                placeholder="10-digit mobile"
              />
            </label>
            <label className="block text-sm font-medium text-navy sm:col-span-2">
              Email <span className="font-normal text-muted">(optional)</span>
              <input
                name="email"
                type="email"
                className={fieldClass}
                placeholder="you@email.com"
              />
            </label>
            <label className="block text-sm font-medium text-navy sm:col-span-2">
              Interested project
              <select
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className={fieldClass}
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="General enquiry">General enquiry</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-navy sm:col-span-2">
              Message
              <textarea
                name="message"
                rows={4}
                className={`${fieldClass} resize-none`}
                placeholder="Plot size, budget, preferred visit date…"
              />
            </label>
          </div>

          <label className="mt-5 flex items-start gap-3 text-sm text-muted">
            <input
              required
              name="consent"
              type="checkbox"
              className="mt-1 h-4 w-4 accent-[#b8922e]"
            />
            <span>
              I agree to be contacted by JS Garden Developers about my enquiry
              and understand my details will be handled as described in the{" "}
              <Link href="/privacy" className="text-forest underline hover:no-underline">
                privacy policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-7 w-full bg-navy py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-navy-deep disabled:opacity-60 sm:text-sm"
          >
            {status === "loading" ? "Sending…" : "Submit enquiry"}
          </button>

          {status === "success" && (
            <p className="mt-3 text-sm font-medium text-forest">
              Thanks — we received your enquiry and will call you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm font-medium text-red-600">
              Something went wrong. Please call or WhatsApp us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
