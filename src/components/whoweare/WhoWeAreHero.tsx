'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type MotionProps } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

import { Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { whoWeAreHero as hero } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhoWeAreHero() {
  const reduceMotion = useReducedMotion();

  // One entrance sequence for the whole hero; skipped for reduced motion.
  const enter = (delay: number): MotionProps =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-76px)] overflow-hidden bg-primary text-primary-fg"
    >
      {/* Background: the image paints first and stays as the fallback; the
          video plays over it and is left out for reduced motion. */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {!reduceMotion && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/30 md:via-primary/45 md:to-primary/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/70 to-transparent" />
      </div>

      <Container className="relative flex flex-col justify-center pb-28 pt-20 sm:pt-24">
        <div className="max-w-3xl">
          <motion.div {...enter(0)}>
            <Kicker tone="light">{hero.kicker}</Kicker>
          </motion.div>

          <motion.h1
            {...enter(0.08)}
            className="mt-6 text-h1 font-semibold tracking-tight text-primary-fg"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            {...enter(0.16)}
            className="mt-7 max-w-xl text-body-lg leading-8 text-primary-fg/85"
          >
            {hero.body}
          </motion.p>

          <motion.div
            {...enter(0.24)}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href={hero.primaryHref} variant="light" size="lg">
              {hero.primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button
              href={hero.secondaryHref}
              variant="outline"
              size="lg"
              className="!border-primary-fg/50 !text-primary-fg hover:!bg-primary-fg hover:!text-primary"
            >
              {hero.secondaryLabel}
            </Button>
          </motion.div>
        </div>
      </Container>

      <a
        href="#intro"
        aria-label="Scroll to introduction"
        className="absolute bottom-8 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-primary-fg/40 text-primary-fg transition-colors duration-300 hover:bg-primary-fg hover:text-primary"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}