import { Container, Section } from "@/components/layout";

import type { IndustryPage } from "@/types";

export function IndustryFuture({ future }: { future: IndustryPage["future"] }) {
  return (
    <Section
      as="section"
      tone="inverse"
      spacing="lg"
      className="relative overflow-hidden"
    >
      <Container>
        <div className="relative min-h-[480px] overflow-hidden rounded-panel border border-inverse-fg/10 bg-inverse-fg/[0.03]">
          {/* Background decoration */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-accent/20 transition-transform duration-slow"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-inverse-fg/10"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute right-20 top-20 h-32 w-32 rounded-full bg-accent/[0.04] blur-3xl"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative flex min-h-[480px] items-center px-7 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-5 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
                {future.kicker}
              </p>

              <h2 className="text-display font-semibold leading-[1.02] tracking-tight text-inverse-fg">
                {future.title.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < future.title.length - 1 && <br />}
                  </span>
                ))}
              </h2>

              <div
                className="mt-7 h-px w-16 bg-accent sm:mt-8"
                aria-hidden="true"
              />

              <p className="mt-7 max-w-2xl text-body-lg leading-8 text-inverse-fg/65 sm:mt-8">
                {future.description}
              </p>
            </div>
          </div>

          {/* Accent Arrow */}
          <div
            className="absolute bottom-7 right-7 hidden h-16 w-16 items-center justify-center rounded-full border border-accent/40 text-accent transition-all duration-slow hover:border-accent hover:bg-accent hover:text-inverse sm:flex"
            aria-hidden="true"
          >
            <span className="text-xl transition-transform duration-slow hover:translate-x-0.5 hover:-translate-y-0.5">
              ↗
            </span>
          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 h-0.5 w-24 bg-accent sm:w-32"
            aria-hidden="true"
          />
        </div>
      </Container>
    </Section>
  );
}

export default IndustryFuture;
