'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import { Container } from '@/components/layout';
import { csrDraftNotice, csrHero } from '@/data/csr';

import { CountUp } from '../shared/CountUp';
import { Kicker } from '../shared/Kicker';

/**
 * Impact-report style hero: a full-bleed photo with the headline, and a
 * row of headline KPIs sitting on the seam with the next section.
 */
export default function CsrHero() {
  return (
    <section className="relative isolate bg-background pb-20 md:pb-28">
      <div className="relative min-h-[600px] overflow-hidden bg-inverse">
        <Image
          src={csrHero.image}
          alt={csrHero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-inverse/90 via-inverse/65 to-inverse/25"
        />
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/25 blur-[120px]"
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <Container className="relative z-10 flex min-h-[600px] flex-col justify-center pb-40 pt-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Kicker tone="light" className="mb-5">
              {csrHero.kicker}
            </Kicker>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-inverse-fg sm:text-5xl lg:text-6xl"
          >
            {csrHero.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-body-lg leading-8 text-inverse-fg/80"
          >
            {csrHero.body}
          </motion.p>

          <motion.a
            href={csrHero.primaryHref}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 inline-flex w-fit items-center gap-2 font-heading text-button font-semibold text-inverse-fg underline-offset-8 hover:underline"
          >
            {csrHero.primaryLabel}
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </Container>
      </div>

      {/* KPI strip overlapping the hero */}
      <Container className="relative z-20">
        <motion.dl
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="-mt-24 grid grid-cols-2 overflow-hidden rounded-panel border border-line bg-surface shadow-deep md:-mt-20 lg:grid-cols-4"
        >
          {csrHero.kpis.map((kpi, index) => (
            <div
              key={kpi.label}
              className={
                'flex flex-col justify-center p-6 md:p-8 ' +
                (index > 0 ? 'lg:border-l lg:border-line ' : '') +
                (index % 2 === 1 ? 'border-l border-line ' : '') +
                (index > 1 ? 'border-t border-line lg:border-t-0 ' : '')
              }
            >
              <dt className="order-2 mt-3 text-small leading-5 text-paragraph">
                {kpi.label}
              </dt>
              <dd className="order-1 font-heading text-[clamp(32px,3.6vw,48px)] font-bold leading-none tracking-[-0.03em] text-heading">
                <CountUp value={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>

        
      </Container>
    </section>
  );
}
