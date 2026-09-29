export const aboutHero = {
  kicker: "About Kalycor",
  heading: "Built Around People. Driven by Possibility.",
  image: "/images/hero.jpg",
  imageAlt: "Kalycor professionals collaborating",
} as const;

export const aboutIntro = {
  leadStart: "Kalycor brings together ",
  leadHighlight: "people, businesses, and opportunities",
  leadEnd:
    " through smarter solutions. Our people-first, solution-driven approach helps organizations find the right talent and capabilities, and helps professionals find opportunities where they can grow.",
  statement:
    "We specialize in workforce solutions, recruitment and placement, professional services, and technology solutions, shaped around the needs of every organization we work with.",
} as const;

export const aboutStory = {
  kicker: "Our Story",
  heading: "Understanding Needs. Creating Connections. Building What Comes Next.",
  image: "/images/opportunities/join-us.jpg",
  imageAlt: "Kalycor colleagues collaborating at a shared workstation",
  paragraphs: [
    "The world of work and business continues to change. Organizations need the right people, capabilities, and technology to adapt, while professionals need opportunities that align with their skills and ambitions.",
    "Kalycor exists at the intersection of these needs. We bring people and businesses together through solutions designed around real-world challenges.",
    "From workforce solutions and recruitment to professional services and technology, our focus remains on creating connections that lead to meaningful outcomes.",
  ],
} as const;


export const aboutServices = {
  kicker: "What We Do",
  heading: "Creating Meaningful Impact.",
  items: [
    {
      number: "01",
      title: "Workforce Solutions",
      description:
        "Flexible workforce solutions that help organizations build and manage teams around changing business requirements.",
    },
    {
      number: "02",
      title: "Recruitment & Placement",
      description:
        "Connecting organizations with people whose skills, experience, and ambitions align with the right opportunities.",
    },
    {
      number: "03",
      title: "Professional Services",
      description:
        "Specialized expertise and support designed to help organizations address business and operational needs.",
    },
    {
      number: "04",
      title: "Technology Solutions",
      description:
        "Technology-driven solutions that help businesses improve processes, capabilities, and opportunities for growth.",
    },
  ],
} as const;

export const aboutValues = {
  kicker: "Our Foundation",
  heading: "Our values define how we work and lead.",
  items: [
    {
      number: "01",
      title: "People First",
      description:
        "We put people and meaningful relationships at the center of what we do.",
    },
    {
      number: "02",
      title: "Integrity",
      description:
        "We believe trust is built through transparency, accountability, and consistent actions.",
    },
    {
      number: "03",
      title: "Partnership",
      description:
        "We work alongside our clients, candidates, and partners to create lasting value.",
    },
    {
      number: "04",
      title: "Possibility",
      description:
        "We remain open to new ideas, opportunities, and better ways of solving challenges.",
    },
  ],
} as const;


export const aboutCta = {
  heading: "Shaping the Future of Work.",
  body: "Whether you are looking for talent, exploring opportunities, or building a smarter workforce strategy, Kalycor is here to help you reach your goals.",
  image: "/images/approach-new1.jpeg",
  imageAlt: "Two professionals shaking hands",
  primaryLabel: "Explore Our Solutions",
  primaryHref: "/#solutions",
  secondaryLabel: "Contact Us",
  secondaryHref: "/contact",
} as const;

/* --------------------------------------------------------------------------
   DRAFT COPY — the sections below were written from what the site already
   says about Kalycor. Review the mission/vision wording, replace the journey
   chapters with your real history (add a `period` such as a year), and add
   real leader names/roles before publishing.
   -------------------------------------------------------------------------- */

export const aboutMissionVision = {
  kicker: "Purpose",
  heading: "Why we exist, and where we are headed.",
  mission: {
    label: "Our Mission",
    text: "To connect people, businesses, and opportunities through smarter solutions designed for a changing world.",
    detail:
      "We are dedicated to building strong teams, meaningful relationships, and lasting value for the clients and professionals we serve.",
  },
  vision: {
    label: "Our Vision",
    text: "A world of work where every organization has the capabilities it needs and every professional has room to grow.",
    detail:
      "We see a future where the right connection between talent and opportunity is the rule, not the exception.",
  },
} as const;

export interface JourneyChapter {
  period: string;
  title: string;
  description: string;
}

export interface AboutJourneyContent {
  kicker: string;
  heading: string;
  body: string;
  chapters: readonly JourneyChapter[];
}

export const aboutJourney: AboutJourneyContent = {
  kicker: "Our Journey",
  heading: "From a simple idea to a connected network.",
  body: "Every chapter has been shaped by the same question: how do we help the right people and the right organizations find each other?",
  chapters: [
    {
      period: "Chapter 01",
      title: "The starting point",
      description:
        "Kalycor began with a simple observation: organizations need the right people and capabilities, and professionals need opportunities that match their ambitions.",
    },
    {
      period: "Chapter 02",
      title: "Building around people",
      description:
        "We put fit first. Recruitment and placement grew from a commitment to understand candidates and clients before making a single introduction.",
    },
    {
      period: "Chapter 03",
      title: "Widening what we offer",
      description:
        "Workforce solutions, professional services, and technology joined recruitment, so clients could rely on one partner across changing needs.",
    },
    {
      period: "Chapter 04",
      title: "Reaching more industries",
      description:
        "Our approach travelled well, from agriculture and import-export to real estate and security, adapting to each sector\u2019s realities.",
    },
    {
      period: "Chapter 05",
      title: "Connecting talent globally",
      description:
        "Global talent programs opened new pathways for professionals and new sources of capability for organizations.",
    },
    {
      period: "Today",
      title: "Shaping what comes next",
      description:
        "We keep listening, learning, and building smarter solutions for a world of work that never stands still.",
    },
  ],
};

export interface MilestoneItem {
  /** Numeric values animate as counters; `text` is shown when there is no number. */
  value?: number;
  text?: string;
  label: string;
  note: string;
}

export interface AboutMilestonesContent {
  kicker: string;
  heading: string;
  items: readonly MilestoneItem[];
}

/* The numbers below mirror the "Kalycor at a glance" stats on the home page. */
export const aboutMilestones: AboutMilestonesContent = {
  kicker: "Key Milestones",
  heading: "Where we stand today.",
  items: [
    {
      value: 10,
      label: "Industries served",
      note: "From agriculture to real estate",
    },
    {
      value: 6,
      label: "Core solution areas",
      note: "Built around real business needs",
    },
    {
      value: 4,
      label: "Service lines",
      note: "Workforce, recruitment, professional, technology",
    },
    {
      text: "Fit-first",
      label: "Placement philosophy",
      note: "Every match starts with genuine fit",
    },
  ],
};

export interface LeaderItem {
  role: string;
  focus: string;
  /** Add a real name and it appears on the card automatically. */
  name?: string;
}

export interface AboutLeadershipContent {
  kicker: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  leaders: readonly LeaderItem[];
}

export const aboutLeadership: AboutLeadershipContent = {
  kicker: "Leadership",
  heading: "The people who steer Kalycor.",
  body: "Our leaders set the direction, protect the culture, and stay close to the clients and professionals we serve.",
  image: "/images/approach-new4.jpeg",
  imageAlt: "The Kalycor leadership team standing together",
  leaders: [
    {
      role: "Chief Executive Officer",
      focus: "Sets the direction for Kalycor and champions our people-first approach.",
    },
    {
      role: "Head of Operations",
      focus: "Keeps delivery consistent and dependable across every solution area.",
    },
    {
      role: "Head of Talent & Recruitment",
      focus: "Leads how we find, assess, and match professionals with the right roles.",
    },
    {
      role: "Head of Technology",
      focus: "Guides the platforms and tools that make our solutions smarter.",
    },
  ],
};
