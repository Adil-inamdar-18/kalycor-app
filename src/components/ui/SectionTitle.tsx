import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SectionTitleProps {
  /** Small label above the heading. */
  kicker?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
}

/** Kicker + heading + lead paragraph, used by most landing sections. */
export function SectionTitle({
  kicker,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'mx-auto max-w-[640px] text-center',
        className
      )}
    >
      {kicker && (
        <div className="mb-2.5 font-heading text-kicker font-semibold text-navy-950">
          {kicker}
        </div>
      )}
      <h2 className={cn('text-h2 text-heading', titleClassName)}>{title}</h2>
      {description && (
        <p className="mt-3.5 text-body text-paragraph">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;
