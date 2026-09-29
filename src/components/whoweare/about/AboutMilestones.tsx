'use client';

import { motion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import type { AboutMilestonesContent } from '@/data/aboutUs';

import { CountUp } from '../shared/CountUp';
import { Kicker } from '../shared/Kicker';

export function AboutMilestones(content: AboutMilestonesContent) {
  return (
    <Section
      as="section"
      id="milestones"
      tone="inverse"
      className="relative scroll-mt-32 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Kicker tone="light" className="mb-4">
              {content.kicker}
            </Kicker>
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-inverse-fg">
              {content.heading}
            </h2>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {content.items.map((item) => (
              <motion.li
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="group rounded-card border border-inverse-fg/10 bg-inverse-fg/[0.04] p-7 transition-colors duration-slow hover:border-accent/60 hover:bg-inverse-fg/[0.07]"
              >
                <p className="font-heading text-[clamp(40px,4.4vw,60px)] font-bold leading-none tracking-[-0.03em] text-inverse-fg">
                  {typeof item.value === 'number' ? (
                    <CountUp value={item.value} />
                  ) : (
                    item.text
                  )}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-5 block h-0.5 w-10 bg-accent transition-all duration-slow group-hover:w-20"
                />
                <p className="mt-4 font-heading text-h4 font-semibold text-inverse-fg">
                  {item.label}
                </p>
                <p className="mt-1 text-small leading-6 text-inverse-fg/60">
                  {item.note}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}

export default AboutMilestones;
