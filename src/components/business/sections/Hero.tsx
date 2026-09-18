'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ButtonLink } from '@/components/business/shared/Button';
import { getBusinessData } from '@/services/siteService';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { heroData } = getBusinessData();
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-offwhite pt-16 lg:pt-20"
    >
      {/* Abstract curved background lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg
          className="absolute right-0 top-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M 800 0 Q 1100 200 900 400 T 1000 800"
            stroke="hsl(284, 58%, 16%)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 850 0 Q 1150 250 950 450 T 1050 800"
            stroke="hsl(273, 43%, 44%)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.path
            d="M 900 0 Q 1200 300 1000 500 T 1100 800"
            stroke="hsl(276, 42%, 67%)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: 'easeInOut', delay: 0.6 }}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-8 lg:px-10">
        {/* Left — text content */}
        <div className="lg:col-span-6 xl:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6"
          >
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
              Kalycor
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Shaping
            <br />
            <span className="font-serif-display italic text-brand">
              What&rsquo;s Next.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-gray-muted"
          >
            {heroData.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href={heroData.primaryCtaHref} variant="primary" size="lg">
              {heroData.primaryCta}
            </ButtonLink>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
            >
              <ButtonLink
                href={heroData.secondaryCtaHref}
                variant="outline"
                size="lg"
              >
                {heroData.secondaryCta}
              </ButtonLink>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.2 }}
          className="relative lg:col-span-6 xl:col-span-7"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4.5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroData.image}
              alt={heroData.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Purple accent block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-lg bg-plum lg:block"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -top-4 -right-4 hidden h-20 w-20 rounded-full border-2 border-brand/30 lg:block"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-brand" />
        </motion.div>
      </motion.div>
    </section>
  );
}
