import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

export function IndustryCaseStudy({
  caseStudy,
}: {
  caseStudy: IndustryPage['caseStudy'];
}) {
  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="overflow-hidden rounded-panel border border-line bg-surface-alt">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-16">
            {/* Story */}
            <div>
              <p className="font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
                {caseStudy.kicker}
              </p>

              <h2 className="mt-4 max-w-xl text-h2 font-semibold leading-[1.1] tracking-tight text-heading">
                {caseStudy.heading}
              </h2>

              <p className="mt-4 text-body-sm font-semibold uppercase tracking-wide text-muted">
                {caseStudy.client}
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
                    The Challenge
                  </p>
                  <p className="mt-2 max-w-xl text-body leading-7 text-paragraph">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <p className="font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
                    Our Approach
                  </p>
                  <p className="mt-2 max-w-xl text-body leading-7 text-paragraph">
                    {caseStudy.approach}
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center gap-1 rounded-card bg-surface p-8 shadow-float sm:p-10">
              <p className="mb-4 font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
                The Results
              </p>

              {caseStudy.results.map((result) => (
                <div
                  key={result.label}
                  className="border-b border-line py-5 last:border-0"
                >
                  <div className="font-heading text-h1 font-bold leading-none text-accent">
                    {result.value}
                  </div>
                  <div className="mt-2 text-body-sm text-muted">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustryCaseStudy;
