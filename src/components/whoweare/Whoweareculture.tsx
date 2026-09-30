import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { whoWeAreCulture as culture } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

export default function WhoWeAreCulture() {
  return (
    <Section as="section" id="culture" tone="page" className="scroll-mt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal from="left">
            <Kicker>{culture.kicker}</Kicker>

            <h2 className="mt-5 text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
              {culture.heading}
            </h2>

            <p className="mt-6 max-w-xl text-body-lg leading-8 text-muted">
              {culture.body}
            </p>

            <ul className="mt-9 space-y-5">
              {culture.points.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>

                  <p className="text-body leading-7 text-muted">
                    <span className="font-semibold text-heading">
                      {point.title}.
                    </span>{' '}
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={culture.primaryHref} variant="solid">
                {culture.primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>

              <Button href={culture.secondaryHref} variant="outline">
                {culture.secondaryLabel}
              </Button>
            </div>
          </Reveal>

          <Reveal from="right" delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-card border border-accent/40"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-float sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={culture.image}
                alt={culture.imageAlt}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}