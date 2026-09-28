import { Container, Section } from '@/components/layout';

import { cn } from '@/lib/utils';

import type { IndustryPage } from '@/types';

export function IndustryTestimonials({
  testimonials,
}: {
  testimonials: IndustryPage['testimonials'];
}) {
  return (
    <Section as="section" tone="inverse">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {testimonials.kicker}
          </p>

          <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-inverse-fg">
            {testimonials.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <figure
              key={item.name}
              className={cn(
                'relative flex flex-col justify-between rounded-panel border border-inverse-fg/10 bg-inverse-fg/[0.04] p-8',
                index === 1 && 'lg:-translate-y-6 lg:bg-inverse-fg/[0.07] lg:shadow-deep'
              )}
            >
              <div>
                <span
                  aria-hidden="true"
                  className="font-display text-[56px] leading-none text-accent/30"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-1 text-body leading-7 text-inverse-fg/85">
                  {item.quote}
                </blockquote>
              </div>

              <figcaption className="mt-8 border-t border-inverse-fg/10 pt-5">
                <div className="font-heading text-body font-semibold text-inverse-fg">
                  {item.name}
                </div>
                <div className="mt-1 text-body-sm text-inverse-fg/55">
                  {item.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default IndustryTestimonials;
