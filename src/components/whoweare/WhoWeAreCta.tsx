import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { whoWeAreCta as cta } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

export default function WhoWeAreCta() {
  return (
    <section
      id="connect"
      className="relative isolate overflow-hidden bg-primary text-primary-fg"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={cta.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/60" />
      </div>

      <Container className="relative py-section lg:py-section-lg">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Kicker tone="light" className="justify-center">
            {cta.kicker}
          </Kicker>

          <h2 className="mt-6 text-[clamp(34px,4.8vw,60px)] font-semibold leading-[1.05] tracking-tight text-primary-fg">
            {cta.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-body-lg leading-8 text-primary-fg/80">
            {cta.body}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={cta.primaryHref} variant="light" size="lg">
              {cta.primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button
              href={cta.secondaryHref}
              variant="outline"
              size="lg"
              className="!border-primary-fg/50 !text-primary-fg hover:!bg-primary-fg hover:!text-primary"
            >
              {cta.secondaryLabel}
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 border-t border-primary-fg/20 pt-7 text-body-sm">
            {cta.audience.map((item) => (
              <li key={item.label} className="text-primary-fg/70">
                {item.prompt}{' '}
                <Link
                  href={item.href}
                  className="font-semibold text-primary-fg underline-offset-4 transition-colors duration-300 hover:text-teal-200 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}