'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/business/shared/SectionHeading';
import { AnimatedImage } from '@/components/business/shared/AnimatedImage';
import { getBusinessData } from '@/services/siteService';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

export function Solutions() {
  const { solutionsData } = getBusinessData();
  return (
    <section id="solutions" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          heading={solutionsData.heading}
          subheading={solutionsData.subheading}
          className="mb-16 max-w-3xl"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutionsData.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className={cn(
                'group relative overflow-hidden rounded-lg border border-plum/10 bg-offwhite transition-all duration-300 hover:border-plum/25 hover:shadow-lg',
                i % 2 === 1 && 'md:mt-12'
              )}
            >
              <div className="flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <AnimatedImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="aspect-[16/10] w-full"
                  />
                  {/* Purple overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-plum/0 transition-colors duration-500 group-hover:bg-plum/10" />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-4 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-plum sm:text-2xl">
                      {item.title}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-plum/15 text-plum transition-all duration-300 group-hover:bg-plum group-hover:text-cream">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-gray-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
