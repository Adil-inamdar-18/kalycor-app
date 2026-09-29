'use client';

import { motion } from 'framer-motion';
import { Puzzle, Quote, Target, type LucideIcon } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { SolutionIntroContent } from '@/types';

/**
 * Short eyebrow + icon for each supporting paragraph, in order. If a page
 * has more or fewer supporting paragraphs than this, the extras render
 * plainly and the list is never indexed out of range.
 */
const pointMeta: ReadonlyArray<{ label: string; icon: LucideIcon }> = [
  { label: 'Our Approach', icon: Puzzle },
  { label: 'The Outcome', icon: Target },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function TechnologyIntro(content: SolutionIntroContent) {
  const [lead, ...rest] = content.paragraphs;

  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
          >
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {content.kicker}
            </p>

            <h2 className="max-w-md text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {content.heading}
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '7rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 h-1 rounded-full bg-accent"
              aria-hidden="true"
            />
          </motion.div>

          {/* Copy */}
          <div className="max-w-3xl">
            {lead && (
              <motion.blockquote
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                variants={fadeUp}
                className="relative rounded-2xl border border-line bg-surface-alt p-7 sm:p-9"
              >
                <Quote
                  className="h-8 w-8 text-accent/30"
                  fill="currentColor"
                  aria-hidden="true"
                />
                <p className="mt-4 text-body-lg font-medium leading-8 text-heading">
                  {lead}
                </p>
              </motion.blockquote>
            )}

            {rest.length > 0 && (
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {rest.map((paragraph, index) => {
                  const meta = pointMeta[index];
                  const Icon = meta?.icon ?? Puzzle;

                  return (
                    <motion.div
                      key={paragraph}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                      variants={fadeUp}
                      className="rounded-2xl border border-line bg-surface p-6 shadow-tile transition-all duration-slow hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>

                      {meta && (
                        <p className="mt-4 font-heading text-caption font-semibold uppercase tracking-kicker text-accent">
                          {meta.label}
                        </p>
                      )}

                      <p className="mt-2 text-body-sm leading-7 text-paragraph">
                        {paragraph}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default TechnologyIntro;