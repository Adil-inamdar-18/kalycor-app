'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { aboutCta } from '@/data/aboutUs';

type AboutCtaProps = typeof aboutCta;

export function AboutCta(content: AboutCtaProps) {
  return (
    <Section as="section" tone="surface" className="bg-surface-alt">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative grid overflow-hidden rounded-3xl bg-inverse text-inverse-fg lg:grid-cols-2"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full bg-accent/25 blur-[110px]"
            animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.06, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative px-7 py-12 md:px-12 md:py-16">
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight">
              {content.heading}
            </h2>

            <p className="mt-6 max-w-xl text-body-lg leading-8 text-inverse-fg/70">
              {content.body}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={content.primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-accent px-7 py-3.5 font-heading text-button font-semibold text-primary-fg hover:bg-teal-700"
                >
                  {content.primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={content.secondaryHref}
                  className="inline-flex items-center justify-center rounded-button border border-inverse-fg/30 px-7 py-3.5 font-heading text-button font-semibold text-inverse-fg hover:border-inverse-fg hover:bg-inverse-fg/10"
                >
                  {content.secondaryLabel}
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-inverse via-inverse/20 to-transparent max-lg:bg-gradient-to-b" />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default AboutCta;