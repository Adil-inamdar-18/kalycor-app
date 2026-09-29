'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { diversityProgress } from '@/data/diversityInclusion';

import { Kicker } from '../shared/Kicker';

/** Accountability: a four-step loop plus the pledge we hold ourselves to. */
export default function DiversityProgress() {
  return (
    <Section
      as="section"
      tone="inverse"
      className="relative overflow-hidden"
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Kicker tone="light" className="mb-4">
            {diversityProgress.kicker}
          </Kicker>
          <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-inverse-fg">
            {diversityProgress.heading}
          </h2>
          <p className="mt-5 text-body-lg leading-8 text-inverse-fg/70">
            {diversityProgress.body}
          </p>
        </motion.div>

        {/* The loop */}
        <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-inverse-fg/20 md:block"
          />
          {diversityProgress.steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative flex gap-5 md:block md:text-center"
            >
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent bg-inverse font-heading text-small font-bold text-teal-200 md:mx-auto">
                {index + 1}
              </span>
              <div>
                <h3 className="text-h3 font-bold text-inverse-fg md:mt-5">
                  {step.title}
                </h3>
                <p className="mt-2 leading-7 text-inverse-fg/70 md:mx-auto md:max-w-[16rem]">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* The pledge */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-panel border border-inverse-fg/10 bg-inverse-fg/[0.04] p-8 md:p-12"
        >
          <div className="flex items-center gap-3">
            <Quote className="h-6 w-6 text-teal-200" aria-hidden="true" />
            <h3 className="font-display text-h2 font-medium italic text-inverse-fg">
              {diversityProgress.pledgeTitle}
            </h3>
          </div>

          <ul className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {diversityProgress.pledges.map((pledge) => (
              <li
                key={pledge}
                className="border-t border-inverse-fg/15 pt-5 text-body-lg leading-8 text-inverse-fg/85"
              >
                {pledge}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
}
