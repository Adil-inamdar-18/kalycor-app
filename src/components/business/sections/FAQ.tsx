'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ButtonLink } from '@/components/business/shared/Button';
import { AnimatedImage } from '@/components/business/shared/AnimatedImage';
import { getBusinessData } from '@/services/siteService';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  const { faqData } = getBusinessData();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading + accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {faqData.heading}
            </h2>

            <div className="mt-10 flex flex-col">
              {faqData.items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={item.question}
                    className="border-b border-plum/10"
                  >
                    <button
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={cn(
                          'text-base font-medium transition-colors duration-200 sm:text-lg',
                          isOpen ? 'text-plum' : 'text-ink/80'
                        )}
                      >
                        {item.question}
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
                          <p className="pb-5 pr-12 text-base leading-relaxed text-gray-muted">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <ButtonLink href={faqData.ctaHref} variant="secondary" size="lg">
                {faqData.ctaText}
              </ButtonLink>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="sticky top-32">
              <div className="overflow-hidden rounded-lg">
                <AnimatedImage
                  src={faqData.image}
                  alt={faqData.imageAlt}
                  className="aspect-[4/5] w-full rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
