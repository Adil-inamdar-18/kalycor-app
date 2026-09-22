import { Container, Section } from "@/components/layout";

import type { IndustryPage } from "@/types";

export function IndustryOverview({
  overview,
}: {
  overview: IndustryPage["overview"];
}) {
  return (
    <Section id={overview.id} as="section" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Heading */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {overview.kicker}
            </p>

            <h2 className="max-w-xl text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
              {overview.heading}
            </h2>

            <div className="mt-6 hidden h-px w-20 bg-accent lg:block" />
          </div>

          {/* Content */}
          <div>
            <p className="max-w-3xl text-body-lg leading-8 text-paragraph">
              {overview.paragraph}
            </p>

            <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
              {overview.areas.map((area, index) => (
                <div
                  key={area}
                  className="group flex min-h-[72px] items-center gap-4 border-b border-line transition-colors duration-300 hover:border-accent"
                >
                  <span className="shrink-0 font-heading text-caption font-medium tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-body font-medium text-heading transition-colors duration-300 group-hover:text-accent">
                    {area}
                  </span>

                  <span
                    className="ml-auto h-px w-0 bg-accent transition-all duration-300 group-hover:w-6"
                    aria-hidden="true"
                  />
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
