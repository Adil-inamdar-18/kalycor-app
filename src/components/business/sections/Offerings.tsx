'use client';

import { motion } from 'framer-motion';
import { getBusinessData } from '@/services/siteService';

const ease = [0.22, 1, 0.36, 1] as const;

export function Offerings() {
  const { offeringsData } = getBusinessData();
  return (
    <section className="relative overflow-hidden bg-plum py-24 lg:py-32">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <path d="M 0 100 Q 300 300 600 200 T 1200 400" stroke="white" strokeWidth="1" fill="none" />
          <path d="M 0 300 Q 300 500 600 400 T 1200 600" stroke="white" strokeWidth="1" fill="none" />
          <path d="M 0 500 Q 300 700 600 600 T 1200 800" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-lavender">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {offeringsData.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offeringsData.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
               
              </div>
              {/* Content */}
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="text-lg font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
