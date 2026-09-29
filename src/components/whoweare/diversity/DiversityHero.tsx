'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

import { Container } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { diversityHero } from '@/data/diversityInclusion';

import { Kicker } from '../shared/Kicker';

/**
 * A warm, light, split hero — text on the left, a mosaic of real people on
 * the right — the pattern inclusive-employer careers sites tend to use.
 */
export default function DiversityHero() {
  const { images } = diversityHero;

  return (
    <section className="relative isolate overflow-hidden bg-background">
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[520px] w-[520px] rounded-full bg-teal-100 blur-[110px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-sky-100 blur-[110px]"
      />

      <Container className="grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Kicker className="mb-6">{diversityHero.kicker}</Kicker>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-h1 font-bold tracking-tight text-heading"
          >
            {diversityHero.headingLead}{' '}
            <span className="font-display font-medium italic text-accent">
              {diversityHero.headingAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-xl text-body-lg leading-8 text-paragraph"
          >
            {diversityHero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href={diversityHero.primaryHref}
              size="lg"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
              className="flex-row-reverse"
            >
              {diversityHero.primaryLabel}
            </Button>
            <Button href={diversityHero.secondaryHref} variant="outline" size="lg">
              {diversityHero.secondaryLabel}
            </Button>
          </motion.div>
        </div>

        {/* Photo mosaic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto grid w-full max-w-xl grid-cols-[1.1fr_0.9fr] grid-rows-[1fr_1fr] gap-4"
        >
          <div className="relative row-span-2 min-h-[420px] overflow-hidden rounded-t-[8rem] rounded-b-3xl shadow-float">
            <Image
              src={images.tall.src}
              alt={images.tall.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 26vw, 55vw"
            />
          </div>

          <div className="relative min-h-[200px] overflow-hidden rounded-3xl shadow-float">
            <Image
              src={images.main.src}
              alt={images.main.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, 45vw"
            />
          </div>

          <div className="relative min-h-[200px] overflow-hidden rounded-3xl rounded-br-[4rem] shadow-float">
            <Image
              src={images.small.src}
              alt={images.small.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, 45vw"
            />
          </div>

          {/* Floating belonging badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 bottom-8 flex max-w-[15rem] items-start gap-3 rounded-card border border-line bg-surface p-4 shadow-glass sm:-left-8"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary-fg">
              <Heart className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-small font-bold text-heading">
                {diversityHero.badge.title}
              </p>
              <p className="mt-0.5 text-caption leading-5 text-muted">
                {diversityHero.badge.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
