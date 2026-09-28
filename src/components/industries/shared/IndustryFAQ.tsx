'use client';

import { useState } from 'react';

import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

export function IndustryFAQ({ faq }: { faq: IndustryPage['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {faq.kicker}
            </p>

            <h2 className="max-w-md text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
              {faq.heading}
            </h2>

            <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />

            <p className="mt-6 max-w-md text-body-lg leading-8 text-muted">
              {faq.description}
            </p>
          </div>

          {/* Accordion */}
          <div className="overflow-hidden rounded-card border border-line bg-surface-alt">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="border-b border-line last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                  >
                    <span
                      className={`text-body font-medium transition-colors duration-300 sm:text-body-lg ${
                        isOpen ? 'text-accent' : 'text-heading'
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-body transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-accent text-accent'
                          : 'border-line text-muted'
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <p className="px-6 pb-6 text-body-sm leading-7 text-muted sm:px-8 sm:text-body">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustryFAQ;
