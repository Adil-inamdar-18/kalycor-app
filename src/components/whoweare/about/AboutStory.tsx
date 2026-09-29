'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import type { aboutStory } from '@/data/aboutUs';

type AboutStoryProps = typeof aboutStory;

export function AboutStory(content: AboutStoryProps) {
  return (
    <Section
      as="section"
      id="story"
      tone="page"
      className="scroll-mt-32 pt-16 md:pt-20"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <span
              className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[3rem] border-l-4 border-t-4 border-accent"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-br-[6rem] rounded-tl-[6rem] rounded-bl-3xl rounded-tr-3xl shadow-float">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {content.kicker}
            </p>

            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {content.heading}
            </h2>

            <div className="mt-6 space-y-5">
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

export default AboutStory;