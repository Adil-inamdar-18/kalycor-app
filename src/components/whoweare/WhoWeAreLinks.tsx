import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { whoWeAreLinks as links } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

export default function WhoWeAreLinks() {
  return (
    <Section as="section" id="explore" tone="surface" className="scroll-mt-20">
      <Container>
        <Reveal className="max-w-2xl">
          <Kicker>{links.kicker}</Kicker>

          <h2 className="mt-5 text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
            {links.heading}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {links.items.map((link, index) => (
            <li key={link.title}>
              <Reveal delay={index * 0.08} className="h-full">
                <Link
                  href={link.href}
                  className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-card bg-primary p-6 transition-shadow duration-slow hover:shadow-card"
                >
                  <Image
                    src={link.image}
                    alt={link.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="-z-10 object-cover transition-transform duration-slower group-hover:scale-105"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/60 to-primary/10"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-primary-fg/40 text-primary-fg transition-all duration-slow group-hover:border-primary-fg group-hover:bg-primary-fg group-hover:text-primary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>

                  <h3 className="font-heading text-xl font-semibold leading-tight text-primary-fg">
                    {link.title}
                  </h3>

                  <p className="mt-2 text-small leading-6 text-primary-fg/80">
                    {link.description}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}