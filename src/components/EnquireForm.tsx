"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { getAttribution } from "@/lib/attribution";
import { hasConsent } from "@/lib/consent";
import { projects, siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

type Status = "idle" | "loading" | "success" | "error";

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
    <section id="enquire" className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            Enquire
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-5xl">
            Book a site visit or request a callback
          </h2>
          <p className="mt-4 max-w-md text-muted md:text-lg">
            Share your details and preferred project. Our team responds on call
            or WhatsApp — usually the same day.
          </p>
          <div className="mt-8 space-y-3 text-sm text-navy">
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a href={`tel:+91${siteConfig.phone}`} className="text-forest">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-forest">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl bg-white p-6 shadow-[0_30px_60px_-40px_rgba(10,31,61,0.45)] md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-navy">
              Full name
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl border border-navy/15 bg-sand px-4 py-3 outline-none transition focus:border-leaf"
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
                className="mt-2 w-full rounded-xl border border-navy/15 bg-sand px-4 py-3 outline-none transition focus:border-leaf"
                placeholder="10-digit mobile"
              />
            </label>
            <label className="block text-sm font-medium text-navy sm:col-span-2">
              Email <span className="font-normal text-muted">(optional)</span>
              <input
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-navy/15 bg-sand px-4 py-3 outline-none transition focus:border-leaf"
                placeholder="you@email.com"
              />
            </label>
            <label className="block text-sm font-medium text-navy sm:col-span-2">
              Interested project
              <select
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="mt-2 w-full rounded-xl border border-navy/15 bg-sand px-4 py-3 outline-none transition focus:border-leaf"
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
                rows={3}
                className="mt-2 w-full resize-none rounded-xl border border-navy/15 bg-sand px-4 py-3 outline-none transition focus:border-leaf"
                placeholder="Plot size, budget, preferred visit date…"
              />
            </label>
          </div>

          <label className="mt-4 flex items-start gap-3 text-sm text-muted">
            <input
              required
              name="consent"
              type="checkbox"
              className="mt-1 h-4 w-4 accent-leaf"
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
            className="mt-6 w-full rounded-full bg-navy py-3.5 text-sm font-semibold text-white transition hover:bg-navy-deep disabled:opacity-60"
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
