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

            <h2 className="max-w-lg text-h2 font-semibold leading-tight tracking-tight text-heading">
              {whyKalycor.heading}
            </h2>

            <p className="mt-6 max-w-md text-body-lg leading-8 text-muted">
              {whyKalycor.description}
            </p>
          </div>

          {/* Strengths */}
          <div className="divide-y divide-line border-y border-line">
            {whyKalycor.items.map((item) => (
              <div
                key={item.number}
                className="group grid gap-5 py-8 sm:grid-cols-[70px_1fr] sm:py-10"
              >
                <span className="font-heading text-caption font-medium text-accent">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-h3 font-semibold text-heading transition-colors group-hover:text-accent sm:text-[1.5rem]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-body-sm leading-7 text-muted sm:text-body">
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
