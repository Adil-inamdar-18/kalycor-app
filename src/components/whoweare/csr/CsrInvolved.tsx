'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Handshake, Heart, Lightbulb, type LucideIcon } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { csrInvolved } from '@/data/csr';

import { Kicker } from '../shared/Kicker';

const icons: readonly LucideIcon[] = [Handshake, Heart, Lightbulb];

export default function CsrInvolved() {
  return (
    <Section as="section" tone="surface">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <Kicker className="mb-4 justify-center">{csrInvolved.kicker}</Kicker>
          <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
            {csrInvolved.heading}
          </h2>
        </motion.div>

        <ul className="grid gap-5 md:grid-cols-3">
          {csrInvolved.ways.map((way, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.li
                key={way.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Link
                  href="/contact"
                  className="group flex h-full flex-col rounded-card border border-line bg-background p-7 transition-all duration-slow hover:-translate-y-1 hover:border-accent hover:shadow-float"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition-colors duration-slow group-hover:bg-accent group-hover:text-primary-fg">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-h3 font-bold leading-tight text-heading">
                    {way.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-paragraph">
                    {way.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-heading text-small font-semibold text-accent">
                    Get in touch
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
