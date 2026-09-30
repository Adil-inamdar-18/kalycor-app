import Link from 'next/link';
import {
  ArrowUpRight,
  Briefcase,
  Cpu,
  UserCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { whoWeAreCapabilities as capabilities } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

// Same order as the items in data/aboutUs.ts: workforce, recruitment,
// professional services, technology.
const icons: readonly LucideIcon[] = [Users, UserCheck, Briefcase, Cpu];

export default function WhoWeAreCapabilities() {
  return (
    <Section
      as="section"
      id="capabilities"
      tone="surface"
      className="scroll-mt-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal from="left">
              <Kicker>{capabilities.kicker}</Kicker>

              <h2 className="mt-5 text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
                {capabilities.heading}
              </h2>

              <p className="mt-6 max-w-md text-body-lg leading-8 text-muted">
                {capabilities.body}
              </p>

              <Button
                href={capabilities.linkHref}
                variant="solid"
                className="mt-9"
              >
                {capabilities.linkLabel}
              </Button>
            </Reveal>
          </div>

          <ul className="border-t border-line">
            {capabilities.items.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <li key={item.title} className="border-b border-line">
                  <Reveal delay={index * 0.08}>
                    <Link
                      href={item.href}
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 px-2 py-7 transition-all duration-slow hover:bg-surface-alt sm:gap-7 sm:px-4"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-accent transition-colors duration-slow group-hover:border-accent group-hover:bg-accent group-hover:text-primary-fg">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <span className="block transition-transform duration-slow group-hover:translate-x-1">
                        <span className="block font-heading text-[22px] font-semibold leading-tight text-heading transition-colors duration-300 group-hover:text-accent">
                          {item.title}
                        </span>
                        <span className="mt-2 block max-w-xl text-body leading-7 text-muted">
                          {item.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        className="h-5 w-5 text-muted transition-all duration-slow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}