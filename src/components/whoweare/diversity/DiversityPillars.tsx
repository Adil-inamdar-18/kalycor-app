'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { diversityPillars } from '@/data/diversityInclusion';
import { clsx } from 'clsx';

import { Kicker } from '../shared/Kicker';

/** Four commitments as an interactive tabbed explorer. */
export default function DiversityPillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = diversityPillars.items[activeIndex];

  return (
    <Section
      as="section"
      id={diversityPillars.id}
      tone="page"
      className="scroll-mt-24 bg-surface-alt"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <Kicker className="mb-4">{diversityPillars.kicker}</Kicker>
          <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
            {diversityPillars.heading}
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div
            role="tablist"
            aria-label={diversityPillars.heading}
            className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {diversityPillars.items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.number}
                  type="button"
                  role="tab"
                  id={`pillar-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls="pillar-panel"
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    'group flex shrink-0 items-center gap-4 rounded-card border px-5 py-4 text-left transition-all duration-base lg:w-full',
                    isActive
                      ? 'border-accent bg-surface shadow-float'
                      : 'border-line bg-surface/60 hover:border-accent/50 hover:bg-surface'
                  )}
                >
                  <span
                    className={clsx(
                      'font-heading text-caption font-bold tracking-kicker transition-colors duration-base',
                      isActive ? 'text-accent' : 'text-muted'
                    )}
                  >
                    {item.number}
                  </span>
                  <span className="font-heading text-h4 font-semibold leading-tight text-heading">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="pillar-panel"
            aria-labelledby={`pillar-tab-${activeIndex}`}
            className="relative overflow-hidden rounded-panel border border-line bg-surface p-8 shadow-raised md:p-12"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[180px] font-bold leading-none text-teal-50"
            >
              {active.number}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.number}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <h3 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
                  {active.title}
                </h3>
                <p className="mt-5 max-w-xl text-body-lg leading-8 text-paragraph">
                  {active.description}
                </p>

                <p className="mt-9 font-heading text-caption font-semibold uppercase tracking-kicker text-accent">
                  What this looks like
                </p>
                <ul className="mt-4 space-y-3">
                  {active.practices.map((practice) => (
                    <li key={practice} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="leading-7 text-paragraph">{practice}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
