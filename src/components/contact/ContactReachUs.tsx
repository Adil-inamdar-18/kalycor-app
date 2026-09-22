import Image from 'next/image';

import { Container, Section } from '@/components/layout';
import { contactPage } from '@/data/contact';

export function ContactReachUs() {
  const { reachUs } = contactPage;

  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {reachUs.kicker}
          </p>

          <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
            {reachUs.heading}
          </h2>

          <p className="mt-6 max-w-2xl text-body-lg leading-8 text-muted">
            {reachUs.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reachUs.items.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className="group overflow-hidden rounded-card border border-line bg-surface transition-all duration-slow hover:-translate-y-1 hover:border-accent/50 hover:shadow-card"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-slow group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative p-7 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-heading text-caption font-medium tabular-nums text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-lg text-muted transition-all duration-slow group-hover:border-accent/40 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-h3 font-semibold leading-tight text-heading transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>

                <p className="mt-4 text-body leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-body-sm font-semibold text-heading transition-colors duration-300 group-hover:text-accent">
                  <span>{item.label}</span>

                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <div
                  className="mt-7 h-px w-10 bg-line transition-all duration-slow group-hover:w-16 group-hover:bg-accent"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ContactReachUs;