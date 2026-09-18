'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  highlightedWord?: string;
  subheading?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  heading,
  highlightedWord,
  subheading,
  align = 'left',
  className,
  light = false,
}: SectionHeadingProps) {
  const parts = highlightedWord
    ? heading.split(highlightedWord)
    : [heading];

  return (
    <div
      className={cn(
        'flex flex-col gap-6',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={cn(
            'text-sm font-medium uppercase tracking-[0.18em]',
            light ? 'text-lavender' : 'text-brand'
          )}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={cn(
          'text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl',
          light ? 'text-cream' : 'text-ink',
          align === 'center' && 'max-w-3xl text-balance'
        )}
      >
        {highlightedWord ? (
          <>
            {parts[0]}
            <span className="font-serif-display italic text-brand">
              {highlightedWord}
            </span>
            {parts[1]}
          </>
        ) : (
          heading
        )}
      </motion.h2>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={cn(
            'max-w-2xl text-base leading-relaxed sm:text-lg',
            light ? 'text-cream/70' : 'text-gray-muted',
            align === 'center' && 'mx-auto'
          )}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
