'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { csrCta } from '@/data/csr';

import { Kicker } from '../shared/Kicker';

export default function CsrCta() {
  return (
    <Section as="section" tone="page" spacing="sm">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-teal-900 px-7 py-14 text-center text-white md:px-16 md:py-20"
        >
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200/25 blur-[100px]"
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative mx-auto max-w-2xl">
            <Kicker tone="light" rule={false} className="mb-4 justify-center">
              {csrCta.kicker}
            </Kicker>
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight">
              {csrCta.heading}
            </h2>
            <p className="mt-5 text-body-lg leading-8 text-white/75">
              {csrCta.body}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={csrCta.primaryHref}
                variant="light"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className="flex-row-reverse"
              >
                {csrCta.primaryLabel}
              </Button>
              <Link
                href={csrCta.secondaryHref}
                className="inline-flex items-center justify-center rounded-button border border-white/40 px-[34px] py-[15px] font-heading text-body font-medium text-white transition-colors duration-fast hover:border-white hover:bg-white/10"
              >
                {csrCta.secondaryLabel}
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
