'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { csrFocus } from '@/data/csr';
import { cn } from '@/lib/utils';

import { CountUp } from '../shared/CountUp';
import { Kicker } from '../shared/Kicker';

/**
 * Each focus area is a full-width "chapter" — photo, what we do, and the
 * measurable outcome — alternating sides down the page.
 */
export default function CsrFocusAreas() {
  return (
    <Section
      as="section"
      id={csrFocus.id}
      tone="page"
      className="scroll-mt-24 bg-surface-alt"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <Kicker className="mb-4">{csrFocus.kicker}</Kicker>
          <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
            {csrFocus.heading}
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {csrFocus.areas.map((area, index) => {
            const imageRight = index % 2 === 1;

            return (
              <article
                key={area.id}
                id={area.id}
                className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <motion.div
                  initial={{ opacity: 0, x: imageRight ? 28 : -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className={cn('relative', imageRight && 'lg:order-2')}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-panel shadow-float">
                    <Image
                      src={area.image}
                      alt={area.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 560px, 100vw"
                    />
                  </div>

                  {/* Outcome badge */}
                  <div
                    className={cn(
                      'absolute -bottom-6 rounded-card border border-line bg-surface px-6 py-4 shadow-glass',
                      imageRight ? 'left-4 md:-left-6' : 'right-4 md:-right-6'
                    )}
                  >
                    <p className="font-heading text-[34px] font-bold leading-none tracking-[-0.03em] text-accent">
                      <CountUp
                        value={area.outcome.value}
                        prefix={area.outcome.prefix}
                        suffix={area.outcome.suffix}
                      />
                    </p>
                    <p className="mt-1.5 text-caption text-muted">
                      {area.outcome.label}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: imageRight ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <p className="font-heading text-caption font-bold tracking-kicker text-accent">
                    {area.number}
                  </p>
                  <h3 className="mt-2 text-h2 font-bold leading-[1.1] tracking-tight text-heading">
                    {area.title}
                  </h3>
                  <p className="mt-5 text-body-lg leading-8 text-paragraph">
                    {area.description}
                  </p>

                  <p className="mt-8 font-heading text-caption font-semibold uppercase tracking-kicker text-heading">
                    Key initiatives
                  </p>
                  <ul className="mt-4 space-y-3">
                    {area.initiatives.map((initiative) => (
                      <li key={initiative} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className="leading-7 text-paragraph">
                          {initiative}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
