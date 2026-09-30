'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { whoWeAreStory as story } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

export default function WhoWeAreStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // The main photo drifts a little slower than the page as it scrolls by.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const drift = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

  return (
    <Section as="section" id="story" tone="page" className="scroll-mt-20 pt-0">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Photos */}
          <Reveal from="left" className="relative mb-10 lg:mb-0">
            <div
              ref={ref}
              className="relative aspect-[4/3] overflow-hidden rounded-card shadow-float"
            >
              <motion.div
                style={reduceMotion ? undefined : { y: drift }}
                className="absolute inset-x-0 -inset-y-[8%]"
              >
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="absolute -bottom-10 -right-2 aspect-[4/3] w-[46%] overflow-hidden rounded-card border-[6px] border-background shadow-float sm:-right-6">
              <Image
                src={story.secondaryImage}
                alt={story.secondaryImageAlt}
                fill
                sizes="(min-width: 1024px) 24vw, 46vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal from="right" delay={0.1}>
            <Kicker>{story.kicker}</Kicker>

            <h2 className="mt-5 text-h2 font-semibold leading-[1.1] tracking-tight text-heading">
              {story.heading}
            </h2>

            <div className="mt-7 space-y-5 text-body-lg leading-8 text-muted">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Button
              href={story.linkHref}
              variant="outline"
              className="mt-9"
            >
              {story.linkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}