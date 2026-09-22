import { Container, Section } from "@/components/layout";

import type { IndustryPage } from "@/types";

export function IndustryAreas({ areas }: { areas: IndustryPage["areas"] }) {
  return (
    <Section as="section" tone="surface">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {areas.kicker}
            </p>

            <h2 className="text-h2 font-semibold leading-tight tracking-tight text-heading">
              {areas.heading}
            </h2>
          </div>

          <p className="max-w-md text-body leading-7 text-muted">
            {areas.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.items.map((item) => (
            <div
              key={item.number}
              className="group relative min-h-[280px] overflow-hidden rounded-card border border-line bg-surface-alt p-7 transition-all duration-slow ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-md sm:p-8"
            >
              {/* Number */}
              <span className="relative z-10 font-heading text-caption font-medium text-accent">
                {item.number}
              </span>

              {/* Content */}
              <div className="relative z-10 mt-16">
                <h3 className="text-h3 font-semibold leading-tight text-heading">
                  {item.title}
                </h3>

                <p className="mt-4 text-body-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>

              {/* Decorative element */}
              <div
                className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full border border-accent/20 transition-transform duration-slower ease-out group-hover:scale-150"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default IndustryAreas;
