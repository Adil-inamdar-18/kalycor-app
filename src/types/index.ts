/** Shared content types used by the data layer and the components. */

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

export type NavMenuLayout = "split" | "grid" | "list";

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
  | { type: "count"; count: number; label: string }
  | { type: "badge"; icon: string; badge: string; note: string };

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

export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

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

export type SortKey = "latest" | "oldest" | "title" | "company";

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
    kicker: string;
    title: readonly string[];
    description: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
  };
  overview: {
    id: string;
    kicker: string;
    heading: string;
    paragraph: string;
    areas: readonly string[];
  };
  solutions: {
    id: string;
    kicker: string;
    heading: string;
    description: string;
    items: readonly NumberedItem[];
  };
  areas: {
    kicker: string;
    heading: string;
    description: string;
    items: readonly NumberedItem[];
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
  cta: {
    kicker: string;
    title: readonly string[];
    description: string;
    buttonLabel: string;
  };
}

export type TrendingIconKey =
  | "aerospace"
  | "automotive"
  | "banking"
  | "energy"
  | "pharma"
  | "retail";

export interface TrendingCategory {
  category: string;
  icon: TrendingIconKey;
  /** The original markup breaks some labels over two lines. */
  label: readonly string[];
}
