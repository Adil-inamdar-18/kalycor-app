import { Container, Section } from '@/components/layout';
import type { IndustryPage } from '@/types';

export function IndustryOverview({
  overview,
}: {
  overview: IndustryPage['overview'];
}) {
  return (
    <Section id={overview.id} as="section" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Heading */}
          <div>
            <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {overview.kicker}
            </p>

            <h2 className="max-w-xl text-h2 font-semibold leading-tight tracking-tight text-heading">
              {overview.heading}
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="max-w-3xl text-body-lg leading-8 text-paragraph">
              {overview.paragraph}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {overview.areas.map((area, index) => (
                <div
                  key={area}
                  className="group flex items-center gap-4 border-b border-line py-5"
                >
                  <span className="font-heading text-caption font-medium text-accent">
                    0{index + 1}
                  </span>

                  <span className="text-body font-medium text-heading transition-colors group-hover:text-accent">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustryOverview;
