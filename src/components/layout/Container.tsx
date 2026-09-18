import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Render as a different element — div (default), section, header, nav… */
  as?: ElementType;
  /**
   * `default` uses the surface's --container-max / --container-pad.
   * `wide` and `narrow` are the two exceptions the design actually needs.
   */
  size?: 'default' | 'wide' | 'narrow';
}

const sizes: Record<NonNullable<ContainerProps['size']>, string> = {
  default: 'max-w-container',
  wide: 'max-w-[1380px]',
  narrow: 'max-w-3xl',
};

/**
 * Width-constrained wrapper used by every section on all three pages.
 * Width and padding come from global variables, so changing
 * `--container-max` in globals.css moves every container at once.
 */
export function Container({
  as: Tag = 'div',
  size = 'default',
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-[calc(100%-2*var(--container-gutter))] px-container-pad',
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Container;
