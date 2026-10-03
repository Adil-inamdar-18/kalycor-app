'use client';

import { motion } from 'framer-motion';

import { Container } from '@/components/layout';
import { csrFocus, csrPurpose } from '@/data/csr';

import { Kicker } from '../shared/Kicker';

export default function CsrPurpose() {
  return (
    <section className="bg-background pb-20 md:pb-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Kicker className="mb-4">{csrPurpose.kicker}</Kicker>
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {csrPurpose.heading}
            </h2>

            {/* Quick links to each focus area */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {csrFocus.areas.map((area) => (
                <li key={area.id}>
                  <a
                    href={`#${area.id}`}
                    className="inline-block rounded-pill border border-line bg-surface px-4 py-2 font-heading text-small font-semibold text-paragraph transition-colors duration-base hover:border-accent hover:text-accent"
                  >
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-5">
            {csrPurpose.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={
                  index === 0
                    ? 'text-h3 font-semibold leading-snug text-heading'
                    : 'text-body-lg leading-8 text-paragraph'
                }
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
