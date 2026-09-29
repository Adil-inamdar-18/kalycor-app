import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface KickerProps {
  children: ReactNode;
  /** `light` is for dark backgrounds. */
  tone?: 'accent' | 'light';
  /** Show the short leading rule (default) or none. */
  rule?: boolean;
  className?: string;
}

/** The small uppercase label with a leading rule used across Who We Are. */
export function Kicker({
  children,
  tone = 'accent',
  rule = true,
  className,
}: KickerProps) {
  const color = tone === 'accent' ? 'text-accent' : 'text-teal-200';
  const line = tone === 'accent' ? 'bg-accent' : 'bg-teal-200';

  return (
    <p
      className={clsx(
        'flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker',
        color,
        className
      )}
    >
      {rule && <span className={clsx('h-px w-10', line)} aria-hidden="true" />}
      {children}
    </p>
  );
}

export default Kicker;
