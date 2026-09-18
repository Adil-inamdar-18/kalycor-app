'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'light' | 'ghost';
type Size = 'default' | 'lg';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-plum text-cream hover:bg-plum/90',
  secondary:
    'bg-brand text-white hover:bg-brand/85',
  outline:
    'border border-plum/30 text-plum hover:border-plum hover:bg-plum hover:text-cream',
  light:
    'bg-cream text-plum hover:bg-white',
  ghost:
    'text-plum hover:text-brand',
};

const sizeStyles: Record<Size, string> = {
  default: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'default',
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Shared <Button> supplies the markup; this page keeps its own
          Tailwind look, so the built-in styling is switched off. */}
      <Button
        href={href}
        onClick={onClick}
        unstyled
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
      >
        {children}
      </Button>
    </motion.div>
  );
}
