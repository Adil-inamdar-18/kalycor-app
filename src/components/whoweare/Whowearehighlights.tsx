'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import { whoWeAreHighlights as highlights } from '@/data/whoweare';

import { CountUp } from './shared/CountUp';
import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

export default function WhoWeAreHighlights() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      as="section"
      tone="transparent"
      className="relative overflow-hidden bg-primary text-primary-fg"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-16 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[120px]"
        animate={
          reduceMotion ? undefined : { opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative">
        <Reveal className="max-w-2xl">
          <Kicker tone="light">{highlights.kicker}</Kicker>

          <h2 className="mt-5 text-h2 font-semibold leading-[1.08] tracking-tight text-primary-fg">
            {highlights.heading}
          </h2>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {highlights.items.map((item, index) => {
            const hasValue = 'value' in item && typeof item.value === 'number';

            return (
              <li key={item.label}>
                <Reveal
                  delay={index * 0.1}
                  className="h-full border-l border-primary-fg/20 pl-5 sm:pl-6"
                >
                  <p className="flex min-h-[64px] items-end font-heading font-semibold leading-none tracking-[-0.03em] text-primary-fg">
                    {hasValue ? (
                      <CountUp
                        value={item.value as number}
                        className="text-[clamp(44px,5vw,64px)]"
                      />
                    ) : (
                      <span className="text-[clamp(28px,3vw,40px)]">
                        {'text' in item ? item.text : null}
                      </span>
                    )}
                  </p>

                  <span
                    aria-hidden="true"
                    className="mt-5 block h-0.5 w-10 bg-teal-200"
                  />

                  <p className="mt-4 font-heading text-h4 font-semibold text-primary-fg">
                    {item.label}
                  </p>
                  <p className="mt-1 max-w-[24ch] text-small leading-6 text-primary-fg/65">
                    {item.note}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}