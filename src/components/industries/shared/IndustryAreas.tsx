import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

export function IndustryAreas({ areas }: { areas: IndustryPage['areas'] }) {
  return (
    <Section as="section" tone="surface" className="overflow-hidden">
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
      </Container>

      {/* Horizontal scroll rail */}
      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:px-[max(theme(spacing.6),calc((100vw-theme(maxWidth.container))/2+theme(spacing.6)))] [&::-webkit-scrollbar]:hidden">
        {areas.items.map((item) => (
          <div
            key={item.number}
            className="group relative flex min-h-[280px] w-[260px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-card border border-line bg-surface-alt p-7 transition-all duration-slow hover:-translate-y-1 hover:border-accent/40 hover:shadow-float sm:w-[280px] sm:p-8"
          >
            {/* Number */}
            <span className="relative z-10 font-heading text-caption font-medium text-accent">
              {item.number}
            </span>

            {/* Content */}
            <div className="relative z-10">
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

      <Container>
        <p className="mt-2 text-caption text-muted sm:hidden">
          Swipe to see more →
        </p>
      </Container>
    </Section>
  );
}

export default IndustryAreas;
