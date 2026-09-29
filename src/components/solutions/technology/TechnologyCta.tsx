'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { SolutionCtaContent } from '@/types';

export function TechnologyCta(content: SolutionCtaContent) {
  return (
    <Section as="section" tone="surface">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-inverse px-7 py-12 text-inverse-fg md:px-12 md:py-16 lg:px-16"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-accent/25 blur-[110px]"
            animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.06, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative max-w-3xl">
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {content.kicker}
            </p>

            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight">
              {content.heading}
            </h2>

            <p className="mt-6 max-w-2xl text-body-lg leading-8 text-inverse-fg/70">
              {content.body}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={content.primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-accent px-7 py-3.5 font-heading text-button font-semibold text-primary-fg hover:bg-teal-700"
                >
                  {content.primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={content.secondaryHref}
                  className="inline-flex items-center justify-center rounded-button border border-inverse-fg/30 px-7 py-3.5 font-heading text-button font-semibold text-inverse-fg hover:border-inverse-fg hover:bg-inverse-fg/10"
                >
                  {content.secondaryLabel}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default TechnologyCta;