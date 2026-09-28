import { Container, Section } from '@/components/layout';

import { cn } from '@/lib/utils';

import type { IndustryPage } from '@/types';

export function IndustryWhyKalycor({
  whyKalycor,
}: {
  whyKalycor: IndustryPage['whyKalycor'];
}) {
  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {whyKalycor.kicker}
          </p>

          <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
            {whyKalycor.heading}
          </h2>

          <p className="mt-6 max-w-xl text-body-lg leading-8 text-muted">
            {whyKalycor.description}
          </p>
        </div>

        {/* Bento grid of strengths */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyKalycor.items.map((item, index) => (
            <div
              key={item.number}
              className={cn(
                'group relative overflow-hidden rounded-card border border-line bg-surface-alt p-8 transition-all duration-slow hover:-translate-y-1 hover:border-accent/40 hover:shadow-float',
                index === 0 && 'sm:col-span-2 lg:col-span-1 lg:row-span-2'
              )}
            >
              <div className="relative z-10">
                <h3 className="max-w-[22ch] text-h3 font-semibold leading-tight text-heading transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm text-body-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>

              <div
                className="relative z-10 mt-8 h-px w-10 bg-line transition-all duration-slow group-hover:w-16 group-hover:bg-accent"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default IndustryWhyKalycor;