/* --------------------------------------------------------------------------
   Corporate Social Responsibility content.

   ⚠ ILLUSTRATIVE FIGURES — every number, target and progress value in this
   file is a placeholder so the layout can be reviewed. Replace them with
   verified results, then set `csrDraftNotice` to false to remove the small
   "illustrative figures" note that currently appears on the page.
   -------------------------------------------------------------------------- */

export const csrDraftNotice = true;

export interface Kpi {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const csrHero = {
  kicker: "Corporate Social Responsibility",
  heading: "Creating impact beyond business.",
  body: "We believe meaningful business growth goes hand in hand with creating positive impact for people, communities, and the world around us.",
  image: "/images/opportunities/events.jpg",
  imageAlt: "A team working together around a table covered in plans and laptops",
  primaryLabel: "See our focus areas",
  primaryHref: "#focus",
  kpis: [
    { value: 1500, suffix: "+", label: "Volunteer hours contributed" },
    { value: 12, label: "Community partners supported" },
    { value: 800, suffix: "+", label: "People helped into opportunity" },
    { value: 90, suffix: "%", label: "Hiring workflows now paperless" },
  ] as readonly Kpi[],
} as const;

export const csrPurpose = {
  kicker: "Our Responsibility",
  heading: "Business with a purpose.",
  paragraphs: [
    "At Kalycor, we believe organizations have an opportunity to contribute to the communities and people they serve.",
    "Corporate Social Responsibility is part of how we think about sustainable growth, meaningful relationships, and the long-term impact of our work.",
    "Through responsible practices, community engagement, and people-focused initiatives, we aim to create value that extends beyond business outcomes.",
  ],
} as const;

export interface FocusOutcome {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface FocusArea {
  id: string;
  number: string;
  title: string;
  description: string;
  initiatives: readonly string[];
  outcome: FocusOutcome;
  image: string;
  imageAlt: string;
}

export interface CsrFocusContent {
  id: string;
  kicker: string;
  heading: string;
  areas: readonly FocusArea[];
}

export const csrFocus: CsrFocusContent = {
  id: "focus",
  kicker: "Our Focus",
  heading: "Where we aim to make a difference.",
  areas: [
    {
      id: "people",
      number: "01",
      title: "People",
      description:
        "Supporting people through meaningful opportunities, professional growth, and stronger connections between talent and organizations.",
      initiatives: [
        "Career guidance and resume support for job seekers",
        "Skills and readiness workshops",
        "Referral pathways into open roles",
      ],
      outcome: { value: 800, suffix: "+", label: "People supported" },
      image: "/images/opportunities/join-us.jpg",
      imageAlt: "Colleagues helping each other at a shared workstation",
    },
    {
      id: "communities",
      number: "02",
      title: "Communities",
      description:
        "Contributing to communities through initiatives that encourage opportunity, development, and positive social impact.",
      initiatives: [
        "Volunteer days with local organizations",
        "Community hiring and mentoring events",
        "Partnerships with non-profit groups",
      ],
      outcome: { value: 1500, suffix: "+", label: "Volunteer hours" },
      image: "/images/opportunities/referral-program.jpg",
      imageAlt: "A group planning a community initiative together",
    },
    {
      id: "responsible-business",
      number: "03",
      title: "Responsible business",
      description:
        "Building relationships and delivering solutions with transparency, accountability, and long-term thinking.",
      initiatives: [
        "A clear code of conduct for our teams and partners",
        "Fair and transparent hiring practices",
        "Regular review of supplier and partner standards",
      ],
      outcome: { value: 100, suffix: "%", label: "Team members trained on our code" },
      image: "/images/approach-new3.jpeg",
      imageAlt: "A team meeting at a boardroom table",
    },
    {
      id: "sustainable-growth",
      number: "04",
      title: "Sustainable growth",
      description:
        "Encouraging growth that creates lasting value for our people, clients, partners, and communities.",
      initiatives: [
        "Digital-first processes that reduce paper and travel",
        "Support for local and agricultural livelihoods",
        "Long-term partnerships over short-term wins",
      ],
      outcome: { value: 90, suffix: "%", label: "Hiring workflows paperless" },
      image: "/images/industries/agriculture.jpeg",
      imageAlt: "Young seedlings growing in fertile soil",
    },
  ],
};

export interface Commitment {
  label: string;
  detail: string;
  progress: number;
  target: string;
}

export interface CsrSustainabilityContent {
  kicker: string;
  heading: string;
  body: string;
  commitments: readonly Commitment[];
}

export const csrSustainability: CsrSustainabilityContent = {
  kicker: "Sustainability",
  heading: "Progress we can measure.",
  body: "We set clear commitments, track them openly, and keep raising the bar. Here is where we stand against each one.",
  commitments: [
    {
      label: "Paperless hiring workflows",
      detail: "Applications, contracts and onboarding handled digitally.",
      progress: 90,
      target: "Target: 100%",
    },
    {
      label: "Remote-first candidate interviews",
      detail: "Reducing unnecessary travel for candidates and clients.",
      progress: 75,
      target: "Target: 85%",
    },
    {
      label: "Team members volunteering annually",
      detail: "Colleagues giving time to community causes.",
      progress: 60,
      target: "Target: 80%",
    },
    {
      label: "Partners meeting our standards review",
      detail: "Suppliers and partners assessed against our code.",
      progress: 70,
      target: "Target: 100%",
    },
  ],
};

export const csrInvolved = {
  kicker: "Get Involved",
  heading: "Impact works best when it is shared.",
  ways: [
    {
      title: "Partner with us",
      description:
        "Community organizations and non-profits can work with us on programs that create opportunity.",
    },
    {
      title: "Volunteer with our team",
      description:
        "Join our volunteer days and put your skills to work for local causes.",
    },
    {
      title: "Nominate an initiative",
      description:
        "Know a cause that deserves support? Tell us about it and we will take a look.",
    },
  ],
} as const;

export const csrCta = {
  kicker: "Let's Make an Impact",
  heading: "Build a future that creates value for everyone.",
  body: "Connect with Kalycor to explore opportunities, partnerships, and solutions that create meaningful and lasting impact.",
  primaryLabel: "Contact Us",
  primaryHref: "/contact",
  secondaryLabel: "Explore Solutions",
  secondaryHref: "/#solutions",
} as const;
