import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

export function IndustryAreas({ areas }: { areas: IndustryPage['areas'] }) {
  return (
    <Section as="section" tone="surface">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {areas.kicker}
            </p>

            <h2 className="text-h2 font-bold leading-[1.08] tracking-tight text-heading">
              {areas.heading}
            </h2>
          </div>

          <p className="max-w-md text-body leading-7 text-muted">
            {areas.description}
          </p>
        </div>

        {/* Cards: a plain grid so every card lines up and nothing is cut off */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.items.map((item) => (
            <article
              key={item.number}
              className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-surface-alt p-7 transition-all duration-slow hover:-translate-y-1 hover:border-accent/40 hover:bg-surface hover:shadow-float sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 font-heading text-body-sm font-semibold text-teal-700 transition-colors duration-slow group-hover:bg-accent group-hover:text-primary-fg">
                {item.number}
              </span>

              <h3 className="mt-6 text-h3 font-semibold leading-tight text-heading">
                {item.title}
              </h3>

              <p className="mt-3 text-body-sm leading-7 text-muted">
                {item.description}
              </p>

              {/* Accent line that grows on hover */}
              <span
                className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-slow group-hover:scale-x-100"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default IndustryAreas;