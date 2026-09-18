'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}

export function AnimatedImage({
  src,
  alt,
  className,
  imgClassName,
  sizes,
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={cn('overflow-hidden', className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        className={cn(
          'h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]',
          imgClassName
        )}
        loading="lazy"
      />
    </motion.div>
  );
}
