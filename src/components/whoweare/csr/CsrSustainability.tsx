'use client';

import { motion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import { csrSustainability } from '@/data/csr';

import { CountUp } from '../shared/CountUp';
import { Kicker } from '../shared/Kicker';

/** Commitments shown as progress against a target, drawn as animated bars. */
export default function CsrSustainability() {
  return (
    <Section
      as="section"
      tone="inverse"
      className="relative overflow-hidden"
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <Kicker tone="light" className="mb-4">
              {csrSustainability.kicker}
            </Kicker>
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-inverse-fg">
              {csrSustainability.heading}
            </h2>
            <p className="mt-5 text-body-lg leading-8 text-inverse-fg/70">
              {csrSustainability.body}
            </p>
          </motion.div>

          <ul className="space-y-8">
            {csrSustainability.commitments.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-card border border-inverse-fg/10 bg-inverse-fg/[0.04] p-6 md:p-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-h4 font-semibold text-inverse-fg">
                    {item.label}
                  </h3>
                  <p className="shrink-0 font-heading text-h3 font-bold text-inverse-fg">
                    <CountUp value={item.progress} suffix="%" />
                  </p>
                </div>
                <p className="mt-1 text-small text-inverse-fg/60">{item.detail}</p>

                <div
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={item.progress}
                  aria-label={item.label}
                  className="mt-5 h-2 overflow-hidden rounded-pill bg-inverse-fg/15"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-pill bg-accent"
                  />
                </div>
                <p className="mt-2 text-micro font-semibold uppercase tracking-kicker text-teal-200">
                  {item.target}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
