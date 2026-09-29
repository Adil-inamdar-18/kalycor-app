'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { SolutionBenefitsContent } from '@/types';

export function CareerBenefits(content: SolutionBenefitsContent) {
  return (
    <Section as="section" tone="inverse" className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-40 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {content.kicker}
            </p>

            <h2 className="max-w-xl text-h2 font-bold leading-[1.1] tracking-tight text-inverse-fg">
              {content.heading}
            </h2>

            <p className="mt-6 max-w-xl text-body-lg leading-8 text-inverse-fg/70">
              {content.body}
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="rounded-2xl border border-inverse-fg/10 bg-inverse-fg/[0.04] p-7 md:p-9"
          >
            {content.points.map((point) => (
              <motion.li
                key={point}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="flex items-start gap-4 border-b border-inverse-fg/10 py-5 first:pt-0 last:border-0 last:pb-0"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary-fg">
                  <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                </span>

                <p className="leading-7 text-inverse-fg/85">{point}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}

export default CareerBenefits;