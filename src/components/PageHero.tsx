import { MandalaBackground } from "@/components/MandalaBackground";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Soft mandala watermark — on by default for branded inner pages */
  withMandala?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  withMandala = true,
}: PageHeroProps) {
  return (
    <section className="relative border-b border-navy/8 bg-transparent">
      {withMandala ? (
        <div className="absolute inset-0 overflow-hidden">
          <MandalaBackground tone="white" />
        </div>
      ) : null}

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:py-16 md:px-8 md:py-20 lg:py-24">
        {eyebrow ? (
          <div className="relative overflow-hidden">
            <div className="relative flex min-h-7 items-center sm:min-h-8">
              <span
                aria-hidden
                className="absolute left-0 top-1/2 h-[3px] w-12 -translate-y-1/2 bg-[#e8c84a] sm:w-16 md:h-1 md:w-20"
              />
              <p className="relative pl-[4rem] text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:pl-[5.25rem] sm:text-xs sm:tracking-[0.22em]">
                {eyebrow}
              </p>
            </div>
          </div>
        ) : null}

        <h1 className="mt-5 max-w-3xl text-2xl font-bold leading-[1.12] tracking-tight text-navy sm:mt-6 sm:text-3xl md:text-4xl lg:text-[3.25rem] lg:leading-[1.08]">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            {description}
          </p>
        ) : null}

        <div
          className="mt-8 h-px w-16 bg-gradient-to-r from-forest to-transparent sm:mt-10 sm:w-24"
          aria-hidden
        />
      </div>
    </section>
  );
}
