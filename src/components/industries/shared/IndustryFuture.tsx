import { Container, Section } from '@/components/layout';
import type { IndustryPage } from '@/types';

export function IndustryFuture({ future }: { future: IndustryPage['future'] }) {
  return (
    <Section as="section" tone="inverse" spacing="lg" className="relative overflow-hidden">
      <Container>
        <div className="relative min-h-[480px] overflow-hidden rounded-panel border border-inverse-fg/10 bg-inverse-fg/[0.03]">
          {/* Background decoration */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-accent/20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-inverse-fg/10"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative flex min-h-[480px] items-center px-7 py-16 sm:px-12 lg:px-16">
            <div className="max-w-4xl">
              <p className="mb-5 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
                {future.kicker}
              </p>

              <h2 className="text-display font-semibold leading-[1.05] tracking-tight text-inverse-fg">
                {future.title.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < future.title.length - 1 && <br />}
                  </span>
                ))}
              </h2>

              <p className="mt-8 max-w-2xl text-body-lg leading-8 text-inverse-fg/65">
                {future.description}
              </p>
            </div>
          </div>

          {/* Accent */}
          <div className="absolute bottom-8 right-8 hidden h-16 w-16 items-center justify-center rounded-full border border-accent/40 text-accent sm:flex">
            <span className="text-xl" aria-hidden="true">
              ↗
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustryFuture;
