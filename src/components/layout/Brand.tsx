import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { site } from '@/config/site';

export interface BrandProps {
  /** Where the lock-up links to. Defaults to the site root. */
  href?: string;
  /** The mark: an <Image>, an inline SVG, anything. Omit for wordmark only. */
  mark?: ReactNode;
  markOnly?: boolean;
  className?: string;
  markClassName?: string;
  nameClassName?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
  'aria-label'?: string;
}

/**
 * Logo + two-tone wordmark. Size, gap and colours come from the --brand-*
 * variables, so each surface dresses the same component differently.
 */
export function Brand({
  href = site.routes.home,
  mark,
  markOnly = false,
  className,
  markClassName,
  nameClassName,
  primaryClassName,
  secondaryClassName,
  'aria-label': ariaLabel = `${site.name} home`,
}: BrandProps) {
  const [first, second] = site.nameParts;

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex shrink-0 items-center gap-[var(--brand-gap)] no-underline',
        className
      )}
      aria-label={ariaLabel}
    >
      {mark ? (
        <span
          className={cn(
            'inline-flex h-[var(--brand-mark)] w-[var(--brand-mark)] shrink-0 items-center justify-center [&_img]:h-full [&_img]:w-full [&_img]:object-contain [&_svg]:h-full [&_svg]:w-full',
            markClassName
          )}
        >
          {mark}
        </span>
      ) : null}
      {!markOnly && (
        <span
          className={cn(
            'whitespace-nowrap font-[family-name:var(--brand-font)] text-[length:var(--brand-size)] font-bold leading-none tracking-[var(--brand-tracking)]',
            nameClassName
          )}
        >
          <span className={cn('text-brand-primary', primaryClassName)}>
            {first}
          </span>
          <span className={cn('text-brand-secondary', secondaryClassName)}>
            {second}
          </span>
        </span>
      )}
    </Link>
  );
}

export default Brand;
