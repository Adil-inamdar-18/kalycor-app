'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import type { aboutCulture } from '@/data/aboutUs';

type AboutCultureProps = typeof aboutCulture;

export function AboutCulture(content: AboutCultureProps) {
  return (
    <Section as="section" tone="page">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <span
              className="absolute -bottom-5 -left-5 h-full w-full rounded-t-[10rem] rounded-b-3xl border-2 border-accent/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-float">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 34vw, 90vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {content.heading}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '7rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 h-1 rounded-full bg-accent"
              aria-hidden="true"
            />

            <div className="mt-8 space-y-5">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body leading-8 text-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutCulture;