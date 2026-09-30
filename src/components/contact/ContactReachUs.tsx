import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { contactPage } from '@/data/contact';

import { ContactSectionHeader } from './ContactSectionHeader';

export function ContactReachUs() {
  const { reachUs } = contactPage;

  return (
    <Section as="section" id="help" tone="surface" className="scroll-mt-20">
      <Container>
        <ContactSectionHeader
          kicker={reachUs.kicker}
          heading={reachUs.heading}
          description={reachUs.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
          {reachUs.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition-all duration-slow hover:-translate-y-1 hover:border-accent/50 hover:shadow-card"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-surface-alt">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-slower group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-h3 font-semibold leading-tight text-heading transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>

                <p className="mt-3 text-body leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-auto pt-7">
                  <span className="flex items-center justify-between border-t border-line pt-5 text-body-sm font-semibold text-heading transition-colors duration-300 group-hover:text-accent">
                    {item.label}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ContactReachUs;