import type { SVGProps } from 'react';

// Small reusable inline SVG icons used across the header, hero search,
// job cards and trending category cards. Kept as simple presentational
// components rather than an icon library, since the set is small and
// project-specific (matches the original inline SVGs 1:1).

export function SearchIconThin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16L21 21" />
    </svg>
  );
}

export function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M20 10.5C20 16 12 21 12 21S4 16 4 10.5A8 8 0 0 1 20 10.5Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12H19" />
      <path d="M13 6L19 12L13 18" />
    </svg>
  );
}
