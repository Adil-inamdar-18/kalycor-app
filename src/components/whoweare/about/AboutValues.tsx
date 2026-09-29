'use client';

import { motion } from 'framer-motion';
import {
  Handshake,
  Heart,
  Lightbulb,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { aboutValues } from '@/data/aboutUs';

type AboutValuesProps = typeof aboutValues;

const iconRules: ReadonlyArray<[RegExp, LucideIcon]> = [
  [/people/i, Heart],
  [/integrity/i, ShieldCheck],
  [/partnership/i, Handshake],
  [/possibility/i, Lightbulb],
];

const fallbackIcons: readonly LucideIcon[] = [Heart, ShieldCheck, Handshake, Lightbulb];

function iconFor(title: string, index: number): LucideIcon {
  return (
    iconRules.find(([pattern]) => pattern.test(title))?.[1] ??
    fallbackIcons[index % fallbackIcons.length]
  );
}

export function AboutValues(content: AboutValuesProps) {
  return (
    <Section as="section" tone="inverse" className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {content.kicker}
            </p>

            <h2 className="max-w-md text-h2 font-bold leading-[1.1] tracking-tight text-inverse-fg">
              {content.heading}
            </h2>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.14 } } }}
            className="divide-y divide-inverse-fg/10 rounded-2xl border border-inverse-fg/10 bg-inverse-fg/[0.04] px-7 md:px-9"
          >
            {content.items.map((item, index) => {
              const Icon = iconFor(item.title, index);

              return (
                <motion.li
                  key={item.number}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.45 }}
                  className="flex items-start gap-5 py-7"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary-fg">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="text-h4 font-bold leading-tight text-inverse-fg">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-inverse-fg/70">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}

export default AboutValues;