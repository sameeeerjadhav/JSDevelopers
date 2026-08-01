type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-navy/8 bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
