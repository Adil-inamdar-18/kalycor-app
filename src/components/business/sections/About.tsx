'use client';

import { motion } from 'framer-motion';
import { AnimatedImage } from '@/components/business/shared/AnimatedImage';
import { getBusinessData } from '@/services/siteService';

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const { aboutData } = getBusinessData();
  return (
    <section id="about" className="relative overflow-hidden bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-6"
          >
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
              Who We Are
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
              {aboutData.heading}
              <br />
              <span className="font-serif-display italic text-brand">
                {aboutData.headingLine2}
              </span>
            </h2>
            <div className="mt-8 space-y-6">
              {aboutData.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                  className="text-base leading-relaxed text-gray-muted sm:text-lg"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right — image (asymmetric, offset) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative lg:col-span-6"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <AnimatedImage
                  src={aboutData.image}
                  alt={aboutData.imageAlt}
                  className="aspect-[4/5] w-full rounded-lg"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-lg border-2 border-brand/20" />
              <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-lg bg-cream" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
