import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** Vertical rhythm. All three come from --section-py* in globals.css. */
  spacing?: 'none' | 'sm' | 'default' | 'lg';
  /** Background treatment. */
  tone?: 'transparent' | 'page' | 'surface' | 'inverse' | 'accent';
}

const spacings: Record<NonNullable<SectionProps['spacing']>, string> = {
  none: '',
  sm: 'py-section-sm',
  default: 'py-section',
  lg: 'py-section-lg',
};

const tones: Record<NonNullable<SectionProps['tone']>, string> = {
  transparent: '',
  page: 'bg-background',
  surface: 'bg-surface',
  inverse: 'bg-inverse text-inverse-fg',
  accent: 'bg-secondary text-primary-fg',
};

/** Page section with tokenised vertical rhythm and background. */
export function Section({
  as: Tag = 'section',
  spacing = 'default',
  tone = 'transparent',
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag className={cn(spacings[spacing], tones[tone], className)} {...rest}>
      {children}
    </Tag>
  );
}

export default Section;
