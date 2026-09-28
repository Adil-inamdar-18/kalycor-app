import { Container } from '@/components/layout';

import type { IndustryPage } from '@/types';

/**
 * A floating proof-point strip that overlaps the bottom edge of the hero,
 * rather than a full-width band — keeps the page from reading as a stack
 * of identical horizontal sections.
 */
export function IndustryStats({ stats }: { stats: IndustryPage['stats'] }) {
  return (
    <div className="relative z-10 -mt-8 sm:-mt-12 lg:-mt-16">
      <Container>
        <div className="overflow-hidden rounded-panel bg-inverse text-inverse-fg shadow-deep">
          <div className="flex items-center justify-between gap-4 border-b border-inverse-fg/10 px-6 py-5 sm:px-8">
            <p className="font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {stats.kicker}
            </p>

            <p className="hidden max-w-xs text-right text-body-sm text-inverse-fg/60 sm:block">
              {stats.heading}
            </p>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-inverse-fg/10 lg:grid-cols-4 lg:divide-y-0">
            {stats.items.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col gap-2 px-6 py-7 transition-colors duration-slow hover:bg-inverse-fg/[0.04] sm:px-8"
              >
                <span className="font-heading text-[clamp(26px,3vw,38px)] font-bold leading-none tracking-tight text-accent transition-transform duration-slow group-hover:-translate-y-0.5">
                  {item.value}
                </span>

                <span className="max-w-[20ch] text-body-sm leading-6 text-inverse-fg/65">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default IndustryStats;
