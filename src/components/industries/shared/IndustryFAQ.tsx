'use client';

import { useId, useState } from 'react';
import { Minus, Plus } from 'lucide-react';

import { Container, Section } from '@/components/layout';

import type { IndustryPage } from '@/types';

/** No transitions, scroll effects or animation anywhere in this section, by design. */
export function IndustryFAQ({ faq }: { faq: IndustryPage['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <div>
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {faq.kicker}
            </p>

            <h2 className="max-w-md text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {faq.heading}
            </h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-accent" aria-hidden="true" />

            <p className="mt-6 max-w-md text-body-lg leading-8 text-muted">
              {faq.description}
            </p>
          </div>

          {/* Questions */}
          <div className="flex flex-col gap-4">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;

              return (
                <div
                  key={item.question}
                  className={`rounded-2xl border ${
                    isOpen
                      ? 'border-accent/40 bg-surface shadow-tile'
                      : 'border-line bg-surface-alt hover:border-accent/30'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-8"
                    >
                      <span className="flex items-center gap-4">
                        <span className="hidden font-heading text-body-sm font-semibold text-accent sm:inline">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-body font-semibold leading-snug text-heading sm:text-body-lg">
                          {item.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          isOpen
                            ? 'bg-accent text-primary-fg'
                            : 'bg-teal-100 text-teal-700'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-6 sm:pl-[calc(2rem+2.25rem)] sm:pr-8"
                    >
                      <p className="text-body-sm leading-7 text-muted sm:text-body">
                        {item.answer}
                      </p>
                    </div>
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