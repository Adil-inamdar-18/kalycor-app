'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import { whoWeAreApproach as approach } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

export default function WhoWeAreApproach() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      as="section"
      id="approach"
      tone="transparent"
      className="scroll-mt-20 overflow-hidden bg-primary text-primary-fg"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal>
            <Kicker tone="light">{approach.kicker}</Kicker>

            <h2 className="mt-5 text-h2 font-semibold leading-[1.08] tracking-tight text-primary-fg">
              {approach.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-body-lg leading-8 text-primary-fg/75 lg:justify-self-end">
              {approach.body}
            </p>
          </Reveal>
        </div>

        {/* The four steps are a real sequence, so they are numbered and joined by a line. */}
        <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <motion.span
            aria-hidden="true"
            className="absolute left-6 right-6 top-6 hidden h-px origin-left bg-primary-fg/25 lg:block"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {approach.steps.map((step, index) => (
            <li key={step.number} className="relative">
              <Reveal delay={index * 0.12}>
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-teal-200/50 bg-primary font-heading text-small font-semibold text-teal-200">
                  {step.number}
                </span>

                <h3 className="mt-6 font-heading text-[26px] font-semibold leading-tight text-primary-fg">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[30ch] text-body leading-7 text-primary-fg/70">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}