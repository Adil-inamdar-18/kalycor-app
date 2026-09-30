'use client';

import { motion } from 'framer-motion';

import { Container } from '@/components/layout';
import type { aboutIntro } from '@/data/aboutUs';

type AboutIntroProps = typeof aboutIntro;

export function AboutIntro(content: AboutIntroProps) {
  return (
    <section className="relative z-20 bg-background pb-16 pt-12 md:pb-24 md:pt-16">
      <Container>
        {/* Card sits below the hero with breathing room */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative grid overflow-hidden rounded-3xl border border-line bg-white shadow-float lg:grid-cols-12"
        >
          {/* Lead */}
          <div className="flex items-center px-6 py-9 sm:px-10 sm:py-11 md:px-14 md:py-14 lg:col-span-7 lg:pr-12">
            <p className="font-heading text-[clamp(20px,2vw,27px)] font-normal leading-[1.5] tracking-tight text-navy-900/70">
              {content.leadStart}
              <strong className="font-semibold text-navy-900">
                {content.leadHighlight}
              </strong>
              {content.leadEnd}
            </p>
          </div>

          {/* Statement */}
          <div className="relative flex items-center overflow-hidden bg-navy-900 px-6 py-9 text-white sm:px-10 sm:py-11 md:px-14 md:py-14 lg:col-span-5 lg:px-12">
            {/* Soft glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/25 blur-[90px]"
            />

            <div className="relative flex flex-col gap-5">
              <span
                className="h-3.5 w-3.5 rotate-45 bg-accent"
                aria-hidden="true"
              />
              <h2 className="text-[clamp(16px,1.35vw,19px)] font-medium leading-[1.7] text-white/90">
                {content.statement}
              </h2>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default AboutIntro;