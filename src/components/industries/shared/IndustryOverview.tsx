import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

export function IndustryOverview({
  overview,
}: {
  overview: IndustryPage['overview'];
}) {
  return (
    <Section id={overview.id} as="section" tone="surface" spacing="lg">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          {/* Heading */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {overview.kicker}
            </p>

            <h2 className="max-w-md text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
              {overview.heading}
            </h2>

            <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />

            <p className="mt-6 max-w-md text-body-lg leading-8 text-muted">
              {overview.paragraph}
            </p>
          </div>

          {/* Focus areas, as a pill cloud rather than bordered rows */}
          <div>
            <p className="mb-6 font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
              Where We Focus
            </p>

            <div className="flex flex-wrap gap-3">
              {overview.areas.map((area, index) => (
                <span
                  key={area}
                  className="group inline-flex items-center gap-2 rounded-pill border border-line bg-surface-alt px-5 py-3 text-body-sm font-medium text-heading transition-all duration-slow hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-primary-fg hover:shadow-float"
                >
                  <span className="font-heading text-caption text-accent transition-colors duration-slow group-hover:text-primary-fg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustryOverview;
