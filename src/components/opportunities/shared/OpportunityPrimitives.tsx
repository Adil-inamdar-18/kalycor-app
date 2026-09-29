import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";

import { routes } from "@/config/routes";
import { heroMedia, type HeroMedia } from "@/data/opportunities/heroMedia";
import { cn } from "@/lib/utils";
import OpportunityHero, { type HeroAction } from "./OpportunityHero";

/* -------------------------------------------------------------------------
   Small building blocks shared by every Opportunities page.
   Keeping the refined look (pill buttons, soft cards, eyebrow labels,
   ring-focus inputs) in one file means a tweak here restyles all six pages.
   ------------------------------------------------------------------------- */

export function Crumb({ label = "Join Us" }: { label?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-caption text-muted">
      <Link href={routes.opportunities.home} className="hover:text-primary">Opportunities</Link>
      <span className="mx-2">/</span>
      <span className="text-heading">{label}</span>
    </nav>
  );
}

/**
 * Top-of-page hero for task-focused pages (forms, search, agenda). It is the
 * same hero the other Opportunities pages use, so every page opens the same way.
 */
export function PageHeader({
  crumb,
  kicker,
  title,
  body,
  media = heroMedia.fallback,
  actions,
  children,
}: {
  crumb: string;
  kicker?: string;
  title: string;
  body?: string;
  media?: HeroMedia;
  actions?: readonly HeroAction[];
  children?: ReactNode;
}) {
  return (
    <OpportunityHero
      crumb={crumb}
      kicker={kicker ?? crumb}
      heading={title}
      body={body ?? ""}
      image={media.image}
      video={"video" in media ? media.video : undefined}
      actions={actions}
    >
      {children}
    </OpportunityHero>
  );
}

/** Small uppercase label above a section heading. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "mb-4 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-primary",
        className
      )}
    >
      <span aria-hidden className="h-0.5 w-8 rounded-full bg-accent" />
      {children}
    </p>
  );
}

/** Shared card surface: soft radius, hairline border, gentle lift on hover. */
export const cardCls =
  "rounded-2xl border border-line bg-surface shadow-raised transition-all duration-base";
export const cardHoverCls = "hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-float";

const btnBase =
  "group inline-flex items-center justify-center gap-2 rounded-pill font-heading font-semibold transition-all duration-base disabled:pointer-events-none disabled:opacity-55";
const btnVariants = {
  solid:
    "bg-primary text-primary-fg shadow-[0_12px_26px_-12px_hsl(var(--primary)/0.7)] hover:-translate-y-0.5 hover:bg-primary-hover",
  outline:
    "border border-primary/25 bg-surface text-primary hover:border-primary hover:bg-primary hover:text-primary-fg",
} as const;
const btnSizes = {
  sm: "px-5 py-2 text-caption",
  md: "px-7 py-3 text-button",
  lg: "px-8 py-3.5 text-body",
} as const;

type OppButtonProps = {
  children: ReactNode;
  variant?: keyof typeof btnVariants;
  size?: keyof typeof btnSizes;
  block?: boolean;
  /** Adds a small arrow that nudges forward on hover. */
  arrow?: boolean;
  /** Icon shown before the label. */
  icon?: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
  | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
);

/** Pill button used across the Opportunities pages (link or <button>). */
export function OppButton({
  children,
  variant = "solid",
  size = "md",
  block,
  arrow,
  icon,
  className,
  href,
  ...rest
}: OppButtonProps) {
  const classes = cn(btnBase, btnSizes[size], btnVariants[variant], block && "w-full", className);
  const content = (
    <>
      {icon}
      {children}
      {arrow ? (
        <ArrowRight className="size-4 transition-transform duration-base group-hover:translate-x-1" aria-hidden />
      ) : null}
    </>
  );

  if (typeof href === "string") {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonRest.type ?? "button"} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}

export const inputCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-[15px] text-paragraph outline-none transition-all duration-base placeholder:text-muted hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10";

export function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-small font-semibold text-heading">{label}</span>
      {children}
    </label>
  );
}

export function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-pill border px-4 py-1.5 text-[13px] font-semibold transition-all duration-base",
        active
          ? "border-primary bg-primary text-primary-fg shadow-[0_8px_18px_-10px_hsl(var(--primary)/0.8)]"
          : "border-line bg-surface text-muted hover:border-primary/50 hover:text-primary"
      )}
    >
      {children}
    </button>
  );
}

export function Done({ title, body }: { title: string; body: string }) {
  return (
    <div
      role="status"
      className="rounded-3xl border border-line bg-surface p-10 text-center shadow-float"
    >
      <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary">
        <Check className="size-7" aria-hidden />
      </span>
      <h2 className="mt-5 text-h3 font-semibold text-heading">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-body-sm text-muted">{body}</p>
    </div>
  );
}
