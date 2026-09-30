'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import type { SolutionHeroContent } from '@/types';

const stats = [
  { value: '500+', label: 'Professionals placed' },
  { value: '18', label: 'States supported' },
  { value: '92%', label: 'Client retention' },
] as const;

export function WorkforceHero(content: SolutionHeroContent) {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-inverse">
      <Image
        src={content.image}
        alt={content.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-inverse via-inverse/25 to-inverse/10" />

      {/* Floating accent glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/25 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <Container className="relative z-10 flex min-h-[640px] flex-col justify-center py-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {content.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-inverse-fg sm:text-5xl lg:text-6xl"
        >
          {content.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-body-lg leading-8 text-inverse-fg/75"
        >
          {content.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9"
        >
          <Button
            href="/#contact"
            size="lg"
            className="rounded-pill bg-accent text-primary-fg hover:bg-teal-700"
            icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          >
            Talk to Our Team
          </Button>
        </motion.div>

        {/* Stat strip */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 flex max-w-xl flex-wrap gap-x-10 gap-y-6 border-t border-inverse-fg/15 pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl font-bold text-accent">
                {stat.value}
              </dd>
              <dd className="mt-1 text-caption text-inverse-fg/60">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}

export default WorkforceHero;