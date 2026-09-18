'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ButtonLink } from '@/components/business/shared/Button';
import { getBusinessData } from '@/services/siteService';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesAccordion() {
  const { servicesData } = getBusinessData();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const headingParts = servicesData.heading.split(servicesData.highlightedWord);

  return (
    <section id='services' className="relative overflow-hidden bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading + copy + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
              Services
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {headingParts[0]}
              <span className="font-serif-display italic text-brand">
                {servicesData.highlightedWord}
              </span>
              {headingParts[1]}
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-gray-muted sm:text-lg">
              {servicesData.subheading}
            </p>
            <div className="mt-10">
              <ButtonLink href={servicesData.ctaHref} variant="secondary" size="lg">
                {servicesData.ctaText}
              </ButtonLink>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="flex flex-col"
          >
            {servicesData.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.title}
                  className="border-b border-plum/10"
                >
                  <button
                    className="flex w-full items-center justify-between py-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        'text-lg font-medium transition-colors duration-200 sm:text-xl',
                        isOpen ? 'text-plum' : 'text-ink/80'
                      )}
                    >
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-200',
                        isOpen
                          ? 'border-brand bg-brand text-white'
                          : 'border-plum/20 text-plum'
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-base leading-relaxed text-gray-muted">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
