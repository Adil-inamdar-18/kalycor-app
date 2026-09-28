import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

export function IndustryProcess({
  process,
}: {
  process: IndustryPage['process'];
}) {
  return (
    <Section as="section" tone="inverse">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {process.kicker}
          </p>

          <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-inverse-fg">
            {process.heading}
          </h2>

          <p className="mt-6 max-w-xl text-body-lg leading-8 text-inverse-fg/65">
            {process.description}
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line, desktop only */}
          <div
            className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-inverse-fg/15 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-inverse font-heading text-h4 font-semibold text-accent">
                  {step.number}
                </div>

                <h3 className="mt-6 text-h3 font-semibold leading-tight text-inverse-fg">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[26ch] text-body-sm leading-7 text-inverse-fg/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustryProcess;
