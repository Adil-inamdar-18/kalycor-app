import Link from 'next/link';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'solid' | 'outline' | 'light' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Colours, radius, font and transitions all resolve from the --btn-*
 * variables in globals.css, which each surface re-declares. That is why one
 * <Button> can look navy-square on the landing page, navy-rounded on the job
 * board and plum on the business page without any per-page CSS.
 */
const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button font-heading font-medium leading-tight transition-colors duration-fast disabled:pointer-events-none disabled:opacity-55 aria-disabled:pointer-events-none aria-disabled:opacity-55';

const variants: Record<ButtonVariant, string> = {
  solid:
    'border border-btn-solid bg-btn-solid text-btn-solid-fg hover:border-btn-solid-hover hover:bg-btn-solid-hover',
  outline:
    'border border-btn-outline-border bg-transparent text-btn-outline-fg hover:bg-btn-outline-hover hover:text-btn-outline-hover-fg',
  light:
    'border border-btn-light bg-btn-light text-btn-light-fg hover:border-btn-light-hover hover:bg-btn-light-hover',
  ghost:
    'border border-transparent bg-transparent text-current hover:text-primary',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-caption',
  md: 'px-6 py-[13px] text-button',
  lg: 'px-[34px] py-[15px] text-body',
};

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Stretch to the full width of the parent. */
  block?: boolean;
  /** Shown before the label. */
  icon?: ReactNode;
  /** Replaces the label with a spinner and blocks interaction. */
  loading?: boolean;
  /** Drop the built-in look and keep only the classes passed in. */
  unstyled?: boolean;
  className?: string;
}

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function Spinner() {
  return (
    <span
      aria-hidden
      className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'solid',
    size = 'md',
    block = false,
    icon,
    loading = false,
    unstyled = false,
    className,
    ...rest
  } = props;

  const classes = unstyled
    ? className
    : // `sizes[size]` comes before `variants[variant]` on purpose: the size
      // classes include this project's custom font-size tokens
      // (text-caption / text-button / text-body), which tailwind-merge
      // doesn't recognise as font sizes and instead treats as text-color
      // utilities. Ordering the variant's real text color last means it's
      // the one tailwind-merge keeps when it (incorrectly) dedupes the two.
      cn(base, sizes[size], variants[variant], block && 'w-full', className);

  const content = (
    <>
      {loading ? <Spinner /> : icon}
      {children}
    </>
  );

  if (typeof props.href === 'string') {
    const { href, ...anchorRest } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const isInternal = href.startsWith('/');

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={buttonRest.type ?? 'button'}
      className={classes}
      disabled={buttonRest.disabled ?? loading}
      {...buttonRest}
    >
      {content}
    </button>
  );
}

export default Button;
