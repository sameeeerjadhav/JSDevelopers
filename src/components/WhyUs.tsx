import Link from "next/link";

const reasons = [
  {
    title: "Local corridor expertise",
    body: "We focus on Whitefield, Malur and Hoskote — corridors where connectivity and land value actually move together.",
  },
  {
    title: "Approvals first",
    body: "MPA-approved and RERA-registered layouts where applicable, with documentation explained before you book a visit.",
  },
  {
    title: "Direct developer access",
    body: "Speak to the team that knows the survey numbers, bankers and registration path — not a revolving call centre.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              Why choose us
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-5xl">
              A developer relationship, not a brochure chase
            </h2>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-forest"
            >
              About the company
              <span className="block h-px w-10 bg-forest" aria-hidden />
            </Link>
          </div>
          <p className="max-w-xl text-muted md:text-lg">
            Jeevan Sagar Garden Developers exists for buyers who want clear
            plots, clear paperwork, and a team that stays reachable after the
            first WhatsApp message.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="border-t border-navy/10 pt-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-leaf">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
