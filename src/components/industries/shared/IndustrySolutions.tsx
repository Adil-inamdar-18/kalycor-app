import { Container, Section } from '@/components/layout';
import type { IndustryPage } from '@/types';

export function IndustrySolutions({
  solutions,
}: {
  solutions: IndustryPage['solutions'];
}) {
  return (
    <Section id={solutions.id} as="section" tone="inverse">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {solutions.kicker}
          </p>

          <h2 className="text-h2 font-semibold leading-tight tracking-tight text-inverse-fg">
            {solutions.heading}
          </h2>

          <p className="mt-6 max-w-2xl text-body-lg leading-8 text-inverse-fg/65">
            {solutions.description}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-inverse-fg/10 bg-inverse-fg/10 md:grid-cols-2">
          {solutions.items.map((item) => (
            <div
              key={item.number}
              className="group bg-inverse p-7 transition-colors duration-slow hover:bg-inverse-fg/[0.05] sm:p-9 lg:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-heading text-caption font-medium text-accent">
                  {item.number}
                </span>

                <span className="text-2xl text-inverse-fg/30 transition-transform duration-slow group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </div>

              <h3 className="mt-10 text-h3 font-semibold text-inverse-fg sm:text-[1.75rem]">
                {item.title}
              </h3>

              <p className="mt-4 max-w-lg text-body leading-7 text-inverse-fg/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default IndustrySolutions;
