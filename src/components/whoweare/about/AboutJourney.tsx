'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import type { AboutJourneyContent } from '@/data/aboutUs';
import { cn } from '@/lib/utils';

import { Kicker } from '../shared/Kicker';

export function AboutJourney(content: AboutJourneyContent) {
  const listRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 70%', 'end 70%'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section
      as="section"
      id="journey"
      tone="page"
      className="scroll-mt-32 overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Kicker className="mb-4 justify-center">{content.kicker}</Kicker>
          <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
            {content.heading}
          </h2>
          <p className="mt-5 text-body-lg leading-8 text-paragraph">
            {content.body}
          </p>
        </motion.div>

        <div className="relative">
          {/* Track + scroll-drawn progress line */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-line md:left-1/2"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress, transformOrigin: 'top' }}
            className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 bg-accent md:left-1/2"
          />

          <ol ref={listRef} className="relative space-y-10 md:space-y-14">
            {content.chapters.map((chapter, index) => {
              const isLeft = index % 2 === 0;

              return (
                <li
                  key={chapter.title}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-20 md:pl-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-7 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-accent bg-background md:left-1/2"
                  />

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      'rounded-card border border-line bg-surface p-6 shadow-raised transition-shadow duration-slow hover:shadow-float md:p-8',
                      isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-2'
                    )}
                  >
                    <p className="font-heading text-caption font-semibold uppercase tracking-kicker text-accent">
                      {chapter.period}
                    </p>
                    <h3 className="mt-2 text-h3 font-bold leading-tight text-heading">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 leading-7 text-paragraph">
                      {chapter.description}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

export default AboutJourney;
