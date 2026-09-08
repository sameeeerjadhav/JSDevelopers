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

export function WhyUs({ bare = false }: { bare?: boolean }) {
  return (
    <section
      className={`relative overflow-x-clip py-12 sm:py-16 md:py-24 lg:py-28 ${
        bare ? "" : "bg-white"
      }`}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="grid min-w-0 gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-forest sm:text-xs sm:tracking-[0.2em] md:text-sm">
              Why choose us
            </p>
            <h2 className="mt-2 max-w-xl text-[clamp(1.5rem,5.5vw,3rem)] font-semibold leading-[1.15] tracking-tight text-navy sm:mt-3">
              A developer relationship, not a brochure chase
            </h2>
            <Link
              href="/about"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest sm:mt-6 sm:min-h-0 sm:gap-3 sm:text-sm sm:tracking-[0.14em]"
            >
              About the company
              <span
                className="block h-px w-8 bg-forest sm:w-10"
                aria-hidden
              />
            </Link>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
            Jeevan Sagar Garden Developers exists for buyers who want clear
            plots, clear paperwork, and a team that stays reachable after the
            first WhatsApp message.
          </p>
        </div>

        <div className="mt-8 grid min-w-0 gap-0 sm:mt-10 sm:gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="min-w-0 border-t border-navy/10 py-5 sm:pt-6 sm:pb-0"
            >
              <p className="text-[10px] font-semibold tracking-[0.16em] text-leaf sm:text-xs sm:tracking-[0.18em]">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-[clamp(1.15rem,3.5vw,1.5rem)] font-semibold leading-snug text-navy sm:mt-3 md:text-2xl">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 md:text-base">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
