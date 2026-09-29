'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { Container } from '@/components/layout';

import type { aboutHero } from '@/data/aboutUs';

type AboutHeroProps = typeof aboutHero;

export function AboutHero(content: AboutHeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-inverse">
      {/* Background Video */}
    <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-hidden="true"
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/aboutus-hero.mp4" type="video/mp4" />
</video>

      {/* Video Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-inverse/85 via-inverse/55 to-inverse/20" />
      {/* Animated Accent */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/25 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen flex-col justify-center pb-40 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent"
        >
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          {content.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-inverse-fg sm:text-5xl lg:text-6xl"
        >
          {content.heading}
        </motion.h1>

        <motion.span
          aria-hidden="true"
          className="mt-12 flex h-10 w-10 items-center justify-center rounded-full border border-inverse-fg/30 text-inverse-fg/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </Container>
    </section>
  );
}

export default AboutHero;