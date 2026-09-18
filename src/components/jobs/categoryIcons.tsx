// One icon per trending-search category, matching the original inline SVGs
// exactly. Note: in the source markup the Automotive/Energy icons share the
// same paths, and the Banking/Retail icons share the same paths too — that
// duplication is preserved here rather than "fixed", per the migration
// brief (don't redesign or alter the original's decisions).

export function AerospaceIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[45px] w-[45px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 31L28 11" />
      <path d="M21 14L28 11L25 18" />
      <path d="M10 29L18 31L13 37Z" />
      <circle cx="32" cy="24" r="3" />
      <circle cx="38" cy="31" r="2" />
      <circle cx="25" cy="35" r="2" />
      <path d="M34 15L39 10" />
      <path d="M39 15L34 10" />
    </svg>
  );
}

export function AutomotiveIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[45px] w-[45px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="21" r="12" />
      <circle cx="24" cy="21" r="7" />
      <circle cx="24" cy="21" r="2" />
      <path d="M24 33V42" />
      <path d="M18 42H30" />
      <path d="M20 38H28" />
    </svg>
  );
}

export function BankingIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[45px] w-[45px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L24 10L41 17Z" />
      <path d="M10 18H38" />
      <path d="M13 19V34" />
      <path d="M20 19V34" />
      <path d="M28 19V34" />
      <path d="M35 19V34" />
      <path d="M9 35H39" />
      <path d="M6 39H42" />
    </svg>
  );
}

// Same shape as AutomotiveIcon in the original source.
export function EnergyIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[45px] w-[45px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="21" r="12" />
      <circle cx="24" cy="21" r="7" />
      <circle cx="24" cy="21" r="2" />
      <path d="M24 33V42" />
      <path d="M18 42H30" />
      <path d="M20 38H28" />
    </svg>
  );
}

export function PharmaIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[45px] w-[45px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 7L37 14V24C37 32 31 38 24 41C17 38 11 32 11 24V14Z" />
      <path d="M24 17V31" />
      <path d="M17 24H31" />
    </svg>
  );
}

// Same shape as BankingIcon in the original source.
export function RetailIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-[45px] w-[45px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L24 10L41 17Z" />
      <path d="M10 18H38" />
      <path d="M13 19V34" />
      <path d="M20 19V34" />
      <path d="M28 19V34" />
      <path d="M35 19V34" />
      <path d="M9 35H39" />
      <path d="M6 39H42" />
    </svg>
  );
}
