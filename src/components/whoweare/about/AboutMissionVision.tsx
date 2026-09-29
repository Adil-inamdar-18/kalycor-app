'use client';

import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { aboutMissionVision } from '@/data/aboutUs';

import { Kicker } from '../shared/Kicker';

type AboutMissionVisionProps = typeof aboutMissionVision;

export function AboutMissionVision(content: AboutMissionVisionProps) {
  return (
    <Section
      as="section"
      id="mission"
      tone="page"
      className="scroll-mt-32 bg-surface-alt"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <Kicker className="mb-4">{content.kicker}</Kicker>
          <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
            {content.heading}
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Mission — dark, confident */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-panel bg-inverse p-8 text-inverse-fg md:p-12"
          >
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[100px]"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-fg">
              <Target className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <p className="relative mt-8 font-heading text-kicker font-semibold uppercase tracking-kicker text-teal-200">
              {content.mission.label}
            </p>
            <p className="relative mt-4 font-heading text-h3 font-semibold leading-snug md:text-[26px] md:leading-[1.3]">
              {content.mission.text}
            </p>
            <p className="relative mt-6 leading-8 text-inverse-fg/70">
              {content.mission.detail}
            </p>
          </motion.article>

          {/* Vision — light, forward-looking */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative overflow-hidden rounded-panel border border-line bg-surface p-8 md:p-12"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1.5 bg-accent"
            />
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <Eye className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <p className="mt-8 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {content.vision.label}
            </p>
            <p className="mt-4 font-display text-h3 italic leading-snug text-heading md:text-[28px] md:leading-[1.3]">
              {content.vision.text}
            </p>
            <p className="mt-6 leading-8 text-paragraph">
              {content.vision.detail}
            </p>
          </motion.article>
        </div>
      </Container>
    </Section>
  );
}

export default AboutMissionVision;
