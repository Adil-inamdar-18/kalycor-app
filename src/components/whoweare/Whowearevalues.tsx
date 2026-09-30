'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Handshake,
  Heart,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { whoWeAreValues as values } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

// Same order as aboutValues: People First, Integrity, Partnership, Possibility.
const icons: readonly LucideIcon[] = [Heart, ShieldCheck, Handshake, Sparkles];

export default function WhoWeAreValues() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      as="section"
      id="values"
      tone="transparent"
      className="scroll-mt-20 bg-surface-alt"
    >
      <Container>
        <Reveal className="max-w-3xl">
          <Kicker>{values.kicker}</Kicker>

          <h2 className="mt-5 text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
            {values.heading}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <li key={item.title}>
                <Reveal delay={index * 0.1}>
                  <div className="relative border-t border-line pt-7">
                    {/* The accent rule draws itself as the value scrolls in. */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute -top-px left-0 h-0.5 w-16 origin-left bg-accent"
                      initial={reduceMotion ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{
                        duration: 0.8,
                        delay: 0.25 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <Icon className="h-7 w-7 text-accent" aria-hidden="true" />

                    <h3 className="mt-5 font-heading text-[22px] font-semibold leading-tight text-heading">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-body leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}