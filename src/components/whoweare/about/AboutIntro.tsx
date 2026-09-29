'use client';

import { motion } from 'framer-motion';

import { Container } from '@/components/layout';
import type { aboutIntro } from '@/data/aboutUs';

type AboutIntroProps = typeof aboutIntro;

export function AboutIntro(content: AboutIntroProps) {
  return (
    <section className="relative z-20 bg-background pb-20 md:pb-28">
      <Container>
        {/* Overlapping lead card, sits over the bottom edge of the hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative -mt-28 overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-float md:p-12 lg:p-14"
        >
          <span
            className="absolute inset-y-0 left-0 w-1.5 bg-accent"
            aria-hidden="true"
          />
          <p className="max-w-4xl text-body-lg leading-9 text-paragraph md:text-xl md:leading-10">
            {content.leadStart}
            <strong className="font-bold text-heading">
              {content.leadHighlight}
            </strong>
            {content.leadEnd}
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-16 max-w-4xl text-center text-h3 font-bold leading-snug tracking-tight text-heading md:mt-20"
        >
          {content.statement}
        </motion.h2>

        {/* Divider: line — mark — line */}
        <div
          className="mx-auto mt-14 flex max-w-3xl items-center gap-4"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-line" />
          <span className="h-3 w-3 rotate-45 bg-accent" />
          <span className="h-px flex-1 bg-line" />
        </div>
      </Container>
    </section>
  );
}

export default AboutIntro;