import Image from 'next/image';

import { Button } from '@/components/ui';
import { Container } from '@/components/layout';
import type { IndustryPage } from '@/types';

export function IndustryHero({ hero }: { hero: IndustryPage['hero'] }) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <Container>
        <div className="grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface-alt px-4 py-2 font-heading text-caption font-semibold uppercase tracking-kicker text-accent">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {hero.kicker}
            </span>

            <h1 className="mt-7 max-w-xl text-h1 font-medium leading-[1.05] tracking-tight text-heading">
              {hero.title.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < hero.title.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-lg text-body-lg leading-8 text-muted">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={hero.primaryCta.href} variant="solid" size="lg">
                {hero.primaryCta.label}
              </Button>

              <Button href={hero.secondaryCta.href} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="absolute -right-5 -top-5 hidden h-full w-full rounded-panel border border-line bg-surface-alt sm:block"
              aria-hidden="true"
            />

            <div className="relative h-[340px] overflow-hidden rounded-panel shadow-deep sm:h-[420px] lg:h-[520px]">
              <Image
                src={hero.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-inverse/50 via-transparent to-transparent" />
            </div>

            {/* Decorative accent */}
            <div
              className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full border border-accent/30 lg:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default IndustryHero;
