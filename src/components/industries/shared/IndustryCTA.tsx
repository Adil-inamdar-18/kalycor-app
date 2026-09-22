import { Button } from "@/components/ui";

import { Container, Section } from "@/components/layout";

import { crossLinks } from "@/config/routes";

import type { IndustryPage } from "@/types";

export function IndustryCTA({ cta }: { cta: IndustryPage["cta"] }) {
  return (
    <Section as="section" tone="inverse">
      <Container>
        <div className="relative overflow-hidden rounded-panel bg-accent px-7 py-14 text-primary-fg sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative circles */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-primary-fg/10"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-32 -right-8 h-80 w-80 rounded-full border border-primary-fg/10"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-10 left-1/3 h-40 w-40 rounded-full bg-primary-fg/[0.04] blur-3xl"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative max-w-4xl">
            <p className="mb-5 font-heading text-kicker font-semibold uppercase tracking-kicker text-primary-fg/70">
              {cta.kicker}
            </p>

            <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-primary-fg">
              {cta.title.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < cta.title.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <div
              className="mt-7 h-px w-16 bg-primary-fg/50"
              aria-hidden="true"
            />

            <p className="mt-7 max-w-2xl text-body-lg leading-8 text-primary-fg/80">
              {cta.description}
            </p>

            <div className="mt-9">
              <Button
                href={crossLinks.contact}
                variant="light"
                size="lg"
                className="bg-inverse text-inverse-fg shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-inverse/90"
              >
                {cta.buttonLabel}
                <span
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Button>
            </div>
          </div>

          {/* Arrow */}
          <div
            className="absolute bottom-8 right-8 hidden h-16 w-16 items-center justify-center rounded-full border border-primary-fg/20 text-primary-fg transition-all duration-slow hover:border-primary-fg/50 hover:bg-primary-fg/10 sm:flex"
            aria-hidden="true"
          >
            <span className="text-2xl transition-transform duration-slow hover:-translate-y-0.5 hover:translate-x-0.5">
              ↗
            </span>
          </div>

          {/* Bottom accent */}
          <div
            className="absolute bottom-0 left-0 h-0.5 w-24 bg-primary-fg/40 sm:w-32"
            aria-hidden="true"
          />
        </div>
      </Container>
    </Section>
  );
}

export default IndustryCTA;
