'use client';

import { motion } from 'framer-motion';
import { getBusinessData } from '@/services/siteService';

const ease = [0.22, 1, 0.36, 1] as const;

export function WhyKalycor() {
  const { whyKalycorData } = getBusinessData();
  return (
    <section className="relative overflow-hidden bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
            Our Principles
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {whyKalycorData.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-plum/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyKalycorData.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="group relative bg-offwhite p-8 transition-colors duration-300 hover:bg-cream lg:p-10"
            >
              <span className="block text-5xl font-semibold text-plum/15 transition-colors duration-300 group-hover:text-brand/30 lg:text-6xl">
                {item.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-muted">
                {item.description}
              </p>
              {/* Bottom accent line */}
              <div className="mt-8 h-[2px] w-12 bg-brand/30 transition-all duration-300 group-hover:w-full group-hover:bg-brand" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
