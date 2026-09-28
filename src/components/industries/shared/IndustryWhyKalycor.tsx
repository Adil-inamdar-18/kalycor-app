import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

export function IndustryWhyKalycor({
  whyKalycor,
}: {
  whyKalycor: IndustryPage['whyKalycor'];
}) {
  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {whyKalycor.kicker}
            </p>

            <h2 className="max-w-lg text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
              {whyKalycor.heading}
            </h2>

            <div
              className="mt-6 h-px w-16 bg-accent"
              aria-hidden="true"
            />

            <p className="mt-6 max-w-md text-body-lg leading-8 text-muted">
              {whyKalycor.description}
            </p>
          </div>

          {/* Strengths */}
          <div className="overflow-hidden border-y border-line">
            {whyKalycor.items.map((item) => (
              <div
                key={item.number}
                className="group relative grid gap-5 border-b border-line py-8 last:border-b-0 sm:grid-cols-[70px_1fr] sm:py-10"
              >
                {/* Hover accent */}
                <div
                  className="absolute left-0 top-0 h-full w-0.5 bg-accent opacity-0 transition-opacity duration-slow group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Number */}
                <span className="font-heading text-caption font-medium tabular-nums text-accent transition-transform duration-slow group-hover:translate-x-1">
                  {item.number}
                </span>

                {/* Content */}
                <div>
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-h3 font-semibold leading-tight text-heading transition-colors duration-300 group-hover:text-accent sm:text-[1.5rem]">
                      {item.title}
                    </h3>

                    <span
                      className="mt-1 hidden shrink-0 text-lg text-muted/50 transition-all duration-slow group-hover:translate-x-1 group-hover:text-accent sm:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-body-sm leading-7 text-muted transition-colors duration-slow group-hover:text-body sm:text-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustryWhyKalycor;