/**
 * Shared content types used by the data layer and the components.
 */

/** A navigation / footer link. */
export interface LinkItem {
  label: string;
  href: string;

  /** Open in a new tab. */
  external?: boolean;
}

/** A titled group of links (footer columns, mega-menu groups). */
export interface LinkGroup {
  title: string;
  links: readonly LinkItem[];
}

/* -------------------------------------------------------------- landing -- */

export type NavMenuLayout = 'split' | 'grid' | 'list';

export interface NavMenu {
  key: string;
  label: string;
  kicker?: string;
  description: string;
  layout: NavMenuLayout;
  groups?: readonly LinkGroup[];
  links?: readonly LinkItem[];
  panelImage?: string;
  panelImageAlt?: string;
  panelDescription?: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
  pills: readonly string[];

  /** Optional card media: a short looping video, shown instead of the image. */
  video?: string;
}

/* ---------------------------------------------------- solution pages -- */
/** Shared content shape for the reusable solution-detail template — the
 *  five sections every `/solutions/<slug>` page is built from. */
export interface SolutionHeroContent {
  kicker: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface SolutionIntroContent {
  kicker: string;
  heading: string;
  paragraphs: readonly string[];
}

export interface SolutionCapabilityItem {
  number: string;
  title: string;
  description: string;
}

export interface SolutionCapabilitiesContent {
  kicker: string;
  heading: string;
  items: readonly SolutionCapabilityItem[];
}

export interface SolutionBenefitsContent {
  kicker: string;
  heading: string;
  body: string;
  points: readonly string[];
}

export interface SolutionCtaContent {
  kicker: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export interface SolutionPageContent {
  hero: SolutionHeroContent;
  intro: SolutionIntroContent;
  capabilities: SolutionCapabilitiesContent;
  benefits: SolutionBenefitsContent;
  cta: SolutionCtaContent;
}

/* --------------------------------------------------- opportunities pages -- */
/** Shared content shape for the reusable opportunities-portal template —
 *  the sections every `/opportunities` / `/opportunities/<slug>` page is
 *  built from. Mirrors the Solution*Content shapes above by design, so the
 *  two template families stay easy to reason about together. */
export interface OpportunityHeroContent {
  kicker: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface OpportunityIntroContent {
  kicker: string;
  heading: string;
  paragraphs: readonly string[];
}

/** A grid item that can optionally act as a link to another opportunities
 *  page — used by the hub page's "Explore Opportunities" grid so each
 *  pathway card is real portal navigation, not just decorative copy. */
export interface OpportunityGridItem extends NumberedItem {
  href?: string;
}

export interface OpportunityGridContent {
  kicker: string;
  heading: string;
  items: readonly OpportunityGridItem[];
}

export interface OpportunityBenefitsContent {
  kicker: string;
  heading: string;
  body: string;
  points: readonly string[];
}

export interface OpportunityCtaContent {
  kicker: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}


export interface ApproachPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;

  /** Tailwind classes that place the photo in the editorial composition. */
  position: string;
}

export interface Industry {
  title: string;
  image: string;
  alt: string;
  body: string;
}

export type Stat =
  | { type: 'count'; count: number; label: string }
  | { type: 'badge'; icon: string; badge: string; note: string };

export interface Review {
  quote: string;
  initials: string;
  name: string;
}

export interface SocialLink {
  label: string;
  short: string;
  href: string;
}

/* ----------------------------------------------------------------- jobs -- */

export type JobType =
  | 'Full-time'
  | 'Part-time'
  | 'Contract'
  | 'Internship';

export interface Job {
  title: string;
  company: string;
  location: string;
  experience: string;
  type: JobType;
  category: string;

  /** ISO date, e.g. "2026-09-15". */
  date: string;
}

export type SortKey = 'latest' | 'oldest' | 'title' | 'company';

export interface SortOption {
  value: SortKey;
  label: string;
}

/* ------------------------------------------------------------ industries -- */

export interface NumberedItem {
  number: string;
  title: string;
  description: string;
}

export interface IndustryPage {
  slug: string;

  /** Nav-facing name, e.g. "Agriculture". */
  name: string;

  metaTitle: string;
  metaDescription: string;

  hero: {
    image: string;
    kicker: string;
    title: readonly string[];
    description: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    /** Index of the title line rendered with the green gradient. */
    accentLine?: number;
    /** Two small floating cards over the image (icon = lucide name key). */
    badges?: readonly { icon: string; title: string; subtitle: string }[];
    /** Feature row shown under the buttons. */
    highlights?: readonly { icon: string; label: string }[];
    /** Video for the "Watch Our Story" button. Button hidden when omitted. */
    storyVideo?: string;
  };

  overview: {
    id: string;
    kicker: string;
    heading: string;
    paragraph: string;
    areas: readonly string[];
  };

  stats: {
    kicker: string;
    heading: string;
    items: readonly { value: string; label: string }[];
  };

  process: {
    kicker: string;
    heading: string;
    description: string;
    steps: readonly {
      number: string;
      title: string;
      description: string;
      /** Optional card photo; falls back to a shared default. */
      image?: string;
    }[];
  };

  solutions: {
    id: string;
    kicker: string;
    heading: string;
    description: string;
    items: readonly NumberedItem[];
  };

  caseStudy: {
    kicker: string;
    heading: string;
    client: string;
    challenge: string;
    approach: string;
    results: readonly { value: string; label: string }[];
  };

  areas: {
    kicker: string;
    heading: string;
    description: string;
    items: readonly NumberedItem[];
  };

  testimonials: {
    kicker: string;
    heading: string;
    items: readonly { quote: string; name: string; role: string }[];
  };

  future: {
    kicker: string;
    title: readonly string[];
    description: string;
  };

  whyKalycor: {
    kicker: string;
    heading: string;
    description: string;
    items: readonly NumberedItem[];
  };

  faq: {
    kicker: string;
    heading: string;
    description: string;
    items: readonly { question: string; answer: string }[];
  };

  cta: {
    kicker: string;
    title: readonly string[];
    description: string;
    buttonLabel: string;
  };
}

export type TrendingIconKey =
  | 'aerospace'
  | 'automotive'
  | 'banking'
  | 'energy'
  | 'pharma'
  | 'retail';

export interface TrendingCategory {
  category: string;
  icon: TrendingIconKey;

  /** The original markup breaks some labels over two lines. */
  label: readonly string[];
}