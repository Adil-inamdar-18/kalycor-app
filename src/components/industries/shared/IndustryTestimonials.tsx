import { Quote, Star } from 'lucide-react';

import { Container, Section } from '@/components/layout';

import { cn } from '@/lib/utils';

import type { IndustryPage } from '@/types';

/** "Portfolio Manager" -> "PM" */
function initials(text: string) {
  return text
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}

export function IndustryTestimonials({
  testimonials,
}: {
  testimonials: IndustryPage['testimonials'];
}) {
  return (
    <Section as="section" tone="inverse" className="relative overflow-hidden">
      {/* Soft glows */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {testimonials.kicker}
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
          </p>

          <h2 className="text-h2 font-bold leading-[1.08] tracking-tight text-inverse-fg">
            {testimonials.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((item, index) => {
            const featured = index === 1;

            return (
              <figure
                key={item.name}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-slow hover:-translate-y-1',
                  featured
                    ? 'border-accent/50 bg-gradient-to-b from-accent/15 to-inverse-fg/[0.03] shadow-deep'
                    : 'border-inverse-fg/10 bg-inverse-fg/[0.04] hover:border-accent/40 hover:bg-inverse-fg/[0.07]'
                )}
              >
                {/* Top accent line */}
                <span
                  className={cn(
                    'absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent to-transparent transition-opacity duration-slow',
                    featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  )}
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent"
                    aria-hidden="true"
                  >
                    <Quote className="h-5 w-5 fill-current" />
                  </span>

                  <div className="flex gap-1 text-accent" role="img" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-6 flex-1 text-body-lg leading-8 text-inverse-fg/90">
                  {item.quote}
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-inverse-fg/10 pt-6">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-body-sm font-semibold text-primary-fg"
                    aria-hidden="true"
                  >
                    {initials(item.name)}
                  </span>

                  <div>
                    <div className="font-heading text-body font-semibold text-inverse-fg">
                      {item.name}
                    </div>
                    <div className="mt-0.5 text-body-sm text-inverse-fg/55">
                      {item.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default IndustryTestimonials;