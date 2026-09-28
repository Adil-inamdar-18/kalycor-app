import { Container, Section } from '@/components/layout';

import { cn } from '@/lib/utils';

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

        {/* Bento grid — first card is featured and spans two rows on desktop */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {solutions.items.map((item, index) => (
            <article
              key={item.number}
              className={cn(
                'group relative flex flex-col justify-between overflow-hidden rounded-card border border-inverse-fg/10 bg-inverse-fg/[0.04] p-7 transition-all duration-slow hover:-translate-y-1 hover:border-accent/40 hover:bg-inverse-fg/[0.08] sm:p-8',
                index === 0 && 'sm:col-span-2 lg:col-span-2 lg:row-span-2'
              )}
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

              <div className="mt-10">
                <h3
                  className={cn(
                    'max-w-md text-h3 font-semibold leading-tight text-inverse-fg',
                    index === 0 && 'sm:text-[1.75rem] lg:text-[2rem]'
                  )}
                >
                  {item.title}
                </h3>

                <p className="mt-4 max-w-lg text-body leading-7 text-inverse-fg/60 transition-colors duration-slow group-hover:text-inverse-fg/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default IndustrySolutions;
