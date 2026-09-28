import {
  AlertTriangle,
  Building2,
  Cctv,
  Compass,
  Cpu,
  Globe,
  HardHat,
  Home,
  Settings,
  Ship,
  ShieldCheck,
  Sprout,
  Tractor,
  Truck,
  Users,
  Warehouse,
  Wheat,
  type LucideIcon,
} from 'lucide-react';

import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

/**
 * Picks an icon from the focus-area label so the industry data stays a plain
 * list of strings. First matching rule wins; anything unmatched falls back
 * to the cycle below.
 */
const iconRules: ReadonlyArray<[RegExp, LucideIcon]> = [
  [/surveillance/i, Cctv],
  [/risk/i, AlertTriangle],
  [/workforce/i, Users],
  [/equipment/i, Tractor],
  [/food/i, Wheat],
  [/agritech|technology/i, Cpu],
  [/warehous/i, Warehouse],
  [/supply chain|logistics/i, Truck],
  [/import|export/i, Ship],
  [/sourcing/i, Compass],
  [/global|trade/i, Globe],
  [/construction/i, HardHat],
  [/residential|property/i, Home],
  [/corporate|commercial/i, Building2],
  [/facilit/i, Settings],
  [/farm|agricultur/i, Sprout],
  [/security/i, ShieldCheck],
];

const fallbackIcons: readonly LucideIcon[] = [
  Building2,
  ShieldCheck,
  AlertTriangle,
  Settings,
  Cctv,
  Users,
];

function iconFor(area: string, index: number): LucideIcon {
  return (
    iconRules.find(([pattern]) => pattern.test(area))?.[1] ??
    fallbackIcons[index % fallbackIcons.length]
  );
}

export function IndustryOverview({
  overview,
}: {
  overview: IndustryPage['overview'];
}) {
  return (
    <Section id={overview.id} as="section" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          {/* Heading */}
          <div>
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {overview.kicker}
            </p>

            <h2 className="max-w-md text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {overview.heading}
            </h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-accent" aria-hidden="true" />

            <p className="mt-6 max-w-lg text-body-lg leading-8 text-muted">
              {overview.paragraph}
            </p>
          </div>

          {/* Focus areas */}
          <div>
            <p className="font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
              Where We Focus
            </p>
            <div className="mb-6 mt-3 h-[3px] w-16 rounded-full bg-accent" aria-hidden="true" />

            <ul className="grid gap-4 sm:grid-cols-2">
              {overview.areas.map((area, index) => {
                const Icon = iconFor(area, index);

                return (
                  <li
                    key={area}
                    className="flex items-center gap-4 rounded-pill border border-line bg-surface py-3 pl-3 pr-6 shadow-tile transition-all duration-slow hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-float"
                  >
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-100 text-heading"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>

                    <span className="font-heading text-body-sm font-semibold text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-body-sm font-medium leading-snug text-heading">
                      {area}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustryOverview;