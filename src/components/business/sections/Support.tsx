'use client';

import { motion } from 'framer-motion';
import { AnimatedImage } from '@/components/business/shared/AnimatedImage';
import { getBusinessData } from '@/services/siteService';

const ease = [0.22, 1, 0.36, 1] as const;

export function Support() {
  const { supportData } = getBusinessData();
  return (
    <section className="relative overflow-hidden bg-plum py-24 lg:py-32">
      {/* Curved line graphics */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <path
            d="M 0 200 Q 400 50 800 250 T 1200 150"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 0 450 Q 400 300 800 500 T 1200 400"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 0 650 Q 400 500 800 700 T 1200 600"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-lavender">
            Human Connection
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {supportData.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/60">
            {supportData.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-lg">
              <AnimatedImage
                src={supportData.largeImage}
                alt={supportData.largeImageAlt}
                className="aspect-[16/10] w-full rounded-lg lg:aspect-[16/11]"
              />
            </div>
          </motion.div>

          {/* Right column: small image + content block */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="overflow-hidden rounded-lg"
            >
              <AnimatedImage
                src={supportData.smallImage}
                alt={supportData.smallImageAlt}
                className="aspect-[16/10] w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="rounded-lg border border-cream/15 p-8"
            >
              <h3 className="text-2xl font-semibold text-cream">
                {supportData.blockTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-cream/60">
                {supportData.blockBody}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
