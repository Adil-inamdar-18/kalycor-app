'use client';

import { motion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import { diversityBelonging } from '@/data/diversityInclusion';

import { Kicker } from '../shared/Kicker';

export default function DiversityBelonging() {
  return (
    <Section as="section" tone="surface">
      <Container size="narrow" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <Kicker className="mb-6 justify-center">
            {diversityBelonging.kicker}
          </Kicker>
          <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-medium leading-[1.15] tracking-tight text-heading">
            {diversityBelonging.statementLead}{' '}
            <span className="italic text-accent">
              {diversityBelonging.statementAccent}
            </span>
          </h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {diversityBelonging.feelings.map((feeling) => (
            <motion.li
              key={feeling}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              className="rounded-pill border border-teal-200 bg-teal-50 px-5 py-2 font-heading text-small font-semibold text-teal-800"
            >
              {feeling}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-left">
          {diversityBelonging.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-body-lg leading-8 text-paragraph"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
