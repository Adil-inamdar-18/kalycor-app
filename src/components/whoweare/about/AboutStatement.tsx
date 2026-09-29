'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import type { aboutStatement } from '@/data/aboutUs';

type AboutStatementProps = typeof aboutStatement;

export function AboutStatement(content: AboutStatementProps) {
  return (
    <Section as="section" tone="page" className="bg-surface-alt">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ show: { transition: { staggerChildren: 0.18 } } }}
            className="order-2 space-y-8 lg:order-1"
          >
            {content.statements.map((statement, index) => (
              <motion.p
                key={statement}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className={
                  index === 0
                    ? 'text-h3 font-bold leading-snug text-heading'
                    : 'border-l-4 border-accent pl-6 text-body-lg leading-8 text-paragraph'
                }
              >
                {statement}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2"
          >
            <span
              className="absolute -bottom-5 -right-5 h-28 w-28 rounded-br-[3rem] border-b-4 border-r-4 border-accent"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-bl-[6rem] rounded-tr-[6rem] rounded-br-3xl rounded-tl-3xl shadow-float">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutStatement;