export interface LinkItem {
  label: string;
  href: string;

  external?: boolean;
}

export interface LinkGroup {
  title: string;
  links: readonly LinkItem[];
}

export type NavMenuLayout = "split" | "grid" | "list" | "businesses";

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

  video?: string;
}

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

  objectPosition?: string;

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

export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

export interface Job {
  title: string;
  company: string;
  location: string;
  experience: string;
  type: JobType;
  category: string;

  date: string;
}

export type SortKey = "latest" | "oldest" | "title" | "company";

export interface SortOption {
  value: SortKey;
  label: string;
}

export interface NumberedItem {
  number: string;
  title: string;
  description: string;
}

export interface IndustryPage {
  slug: string;

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

    accentLine?: number;

    badges?: readonly {
      icon: string;
      title: string;
      subtitle: string;
    }[];

    highlights?: readonly {
      icon: string;
      label: string;
    }[];

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
    items: readonly {
      value: string;
      label: string;
    }[];
  };

  process: {
    kicker: string;
    heading: string;
    description: string;

    steps: readonly {
      number: string;
      title: string;
      description: string;

      image: string;
    }[];
  };

  solutions: {
    id: string;
    kicker: string;
    heading: string;
    description: string;
    items: readonly NumberedItem[];
  };

  caseStudy?: {
    kicker: string;
    heading: string;
    client: string;
    challenge: string;
    approach: string;
    results: readonly {
      value: string;
      label: string;
    }[];
  };

  successStories: {
    kicker: string;
    heading: string;
    items: readonly {
      value: string;
      label: string;
    }[];
  };

  areas: {
    kicker: string;
    heading: string;
    description: string;
    items: readonly NumberedItem[];
  };

  testimonials?: {
    kicker: string;
    heading: string;
    items: readonly {
      quote: string;
      name: string;
      role: string;
    }[];
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
    items: readonly {
      question: string;
      answer: string;
    }[];
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

  label: readonly string[];
}
