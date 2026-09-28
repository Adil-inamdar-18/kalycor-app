import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

export function IndustrySolutions({
  solutions,
}: {
  solutions: IndustryPage['solutions'];
}) {
  return (
    <Section id={solutions.id} as="section" tone="inverse">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {solutions.kicker}
          </p>

          <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-inverse-fg">
            {solutions.heading}
          </h2>

          <p className="mt-6 max-w-2xl text-body-lg leading-8 text-inverse-fg/65">
            {solutions.description}
          </p>
        </div>

        {/* Solution Cards */}
        <div className="mt-14 grid overflow-hidden rounded-card border border-inverse-fg/10 bg-inverse-fg/10 md:grid-cols-2">
          {solutions.items.map((item) => (
            <article
              key={item.number}
              className="group relative bg-inverse p-7 transition-colors duration-slow hover:bg-inverse-fg/[0.05] sm:p-9 lg:p-10"
            >
              {/* Accent line */}
              <div
                className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-slow group-hover:w-full"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-6">
                <span className="font-heading text-caption font-medium tabular-nums text-accent">
                  {item.number}
                </span>

                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-inverse-fg/10 text-lg text-inverse-fg/40 transition-all duration-slow group-hover:border-accent/40 group-hover:text-accent"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <h3 className="mt-10 max-w-md text-h3 font-semibold leading-tight text-inverse-fg sm:text-[1.75rem]">
                {item.title}
              </h3>

              <p className="mt-4 max-w-lg text-body leading-7 text-inverse-fg/60 transition-colors duration-slow group-hover:text-inverse-fg/75">
                {item.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-10 h-px w-10 bg-inverse-fg/10 transition-all duration-slow group-hover:w-16 group-hover:bg-accent/60"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default IndustrySolutions;