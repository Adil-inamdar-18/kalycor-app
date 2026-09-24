// All copy and links below are taken verbatim from the original landing page.
// URLs are never hard-coded here — they come from src/config/routes.ts.

import { anchors, crossLinks, routes } from "@/config/routes";
import type {
  ApproachPhoto,
  Industry,
  LinkGroup,
  LinkItem,
  NavMenu,
  Review,
  Service,
  SocialLink,
  Stat,
} from "@/types";

const a = anchors.landing;

export const utilityLinks: readonly LinkItem[] = [
  { label: "Hire Talent", href: crossLinks.hireTalent },
  { label: "Find a Job", href: crossLinks.findJob },
  { label: "Candidate Portal", href: a.contact },
];

export const solutionsGroups: readonly LinkGroup[] = [
  {
    title: "Leadership & Strategic Hiring",
    links: [
      {
        label: "Recruitment & Placement",
        href: routes.solutions.recruitmentPlacement,
      },
    ],
  },

  {
    title: "Flexible Workforce Experience",
    links: [
      {
        label: "Workforce Solutions",
        href: routes.solutions.workforce,
      },
    ],
  },

  {
    title: "Scaled Hiring",
    links: [
      {
        label: "Professional Services",
        href: routes.solutions.professionalServices,
      },
    ],
  },

  {
    title: "Technology & Platform",
    links: [
      {
        label: "Technology Solutions",
        href: routes.solutions.technologySolutions,
      },
    ],
  },

  {
    title: "Career Opportunities",
    links: [
      {
        label: "Career Opportunities",
        href: routes.solutions.careerOpportunities,
      },
    ],
  },

  {
    title: "WorkForce Creation & Deployment",
    links: [
      {
        label: "Customized Solutions",
        href: routes.solutions.customizedSolutions,
      },
    ],
  },
];

export const industriesNavLinks: readonly LinkItem[] = [
  { label: "Agriculture", href: routes.industries.agriculture },
  { label: "Import & Exports", href: routes.industries.importExport },
  { label: "Security", href: routes.industries.security },
  { label: "RealEstate", href: routes.industries.realEstate },
];

export const opportunitiesNavLinks: readonly LinkItem[] = [
  {
    label: "Join Us",
    href: routes.opportunities.joinUs,
  },
  {
    label: "Search Jobs",
    href: routes.opportunities.searchJobs,
  },
  {
    label: "Submit Resume",
    href: routes.opportunities.submitResume,
  },
  {
    label: "Referral Program",
    href: routes.opportunities.referralProgram,
  },
  {
    label: "Global Talent Assistance",
    href: routes.opportunities.globalTalentAssistance,
  },
  {
    label: "Kalycor Global Talent Center",
    href: routes.opportunities.globalTalentCenter,
  },
  {
    label: "Events",
    href: routes.opportunities.events,
  },
];

export const solutionsNavLinks: readonly LinkItem[] = [
  {
    label: "Workforce Solutions",
    href: routes.solutions.workforce,
  },
  {
    label: "Recruitment & Placement",
    href: routes.solutions.recruitmentPlacement,
  },
  {
    label: "Professional Services",
    href: routes.solutions.professionalServices,
  },
  {
    label: "Technology Solutions",
    href: routes.solutions.technologySolutions,
  },
  {
    label: "Career Opportunities",
    href: routes.solutions.careerOpportunities,
  },
  {
    label: "Customized Solutions",
    href: routes.solutions.customizedSolutions,
  },
];

export const whoWeAreNavLinks: readonly LinkItem[] = [
  {
    label: "About Us",
    href: routes.whoWeAre.aboutUs,
  },
  {
    label: "Diversity and Inclusion",
    href: routes.whoWeAre.diversityInclusion,
  },
  {
    label: "Corporate Social Responsibility",
    href: routes.whoWeAre.corporateSocialResponsibility,
  },
  {
    label: "Blogs",
    href: routes.whoWeAre.blogs,
  },
];

//  Main navigation. Header renders one <NavDropdown> per entry, so adding a
//  menu is a data change rather than a markup change.
export const navMenus: readonly NavMenu[] = [
  {
    key: "solutions",
    label: "Solutions",
    kicker: "Solutions",
    description:
      "Flexible solutions that connect people, capabilities, and opportunities around your business needs.",
    layout: "list",
    panelImage: "/images/approach-new1.jpeg",
    panelImageAlt: "Kalycor professionals collaborating",
    panelDescription:
      "From workforce solutions to technology and customized support, we help organizations build what comes next.",
    links: solutionsNavLinks,
  },

  {
    key: "industries",
    label: "Industries",
    kicker: "Industries",
    description:
      "Every industry has unique challenges, and having the right talent makes all the difference. We provide customized workforce solutions that help businesses stay competitive, adaptable, and ahead of the curve. With deep industry expertise and a vast talent network, we ensure you have the right people to drive efficiency, productivity, and long-term success. Wherever your business is headed, we’ll help you get there.",
    layout: "list",
    panelImage: "/images/approach-new3.jpeg",
    panelImageAlt: "Kalycor team collaborating",
    panelDescription:
      "Kalycor connects businesses with the right talent and workforce solutions, helping organizations build high-performing teams, improve efficiency, and create sustainable growth.",
    links: industriesNavLinks,
  },

  {
    key: "opportunities",
    label: "Opportunities",
    kicker: "Opportunities",
    description:
      "Explore opportunities, connect with the right talent, and take the next step toward your future.",
    layout: "list",
    panelImage: "/images/approach-new4.jpeg",
    panelImageAlt: "Professionals connecting and collaborating",
    panelDescription:
      "Whether you are searching for your next opportunity or looking for the right talent, Kalycor helps create meaningful connections between people and businesses.",
    links: opportunitiesNavLinks,
  },

  {
    key: "who-we-are",
    label: "Who We Are",
    kicker: "Who We Are",
    description:
      "Kalycor connects people, businesses, and opportunities through smarter solutions built for a changing world.",
    layout: "list",
    panelImage: "/images/approach-new1.jpeg",
    panelImageAlt: "Kalycor professionals collaborating",
    panelDescription:
      "We believe meaningful human connections create better opportunities, stronger teams, and lasting business impact.",
    links: whoWeAreNavLinks,
  },
];

export const mobileLinks: readonly LinkItem[] = [
  { label: "Home", href: a.home },
  { label: "Solutions", href: a.solutions },
  { label: "Industries", href: a.industries },
  { label: "Who We Are", href: a.whoWeAre },
  { label: "Opportunities", href: routes.opportunities.home },
  { label: "Contact", href: a.contact },
];

export const services: readonly Service[] = [
  {
    title: "Leadership & Strategic Hiring ",
    description:
      "We connect organizations with exceptional leaders and critical talent to drive growth and shape long-term success.",
    image: "",
    video: "/videos/technology-and-platform.mp4",
    alt: "Talent solutions professionals",
    pills: ["Talent Acquisition", "Workforce Solutions"],
  },
  {
    title: "Technology & Platform",
    description:
      "We enable smarter hiring with innovative technology and connected platforms that simplify and strengthen the recruitment process.",
    image: "",
    video: "/videos/Technology & platform.mp4",
    alt: "Technology and platform professionals",
    pills: ["IT Staffing", "Digital Delivery Support"],
  },

  {
    title: "Scalled Hiring",
    description:
      "We support technical delivery and modernization with talent that already understands the stack.",
    image: "",
    video: "/videos/Scaled Hiring.mp4",
    alt: "Technology and platform professionals",
    pills: ["IT Staffing", "Digital Delivery Support"],
  },

  {
    title: "Workforce Creation & Deployment",
    description:
      "We create and deploy talent pipelines designed for long-term impact.",
    image: "",
    video: "/videos/Workforce creation & deployment.mp4",

    alt: "Workforce team collaborating",
    pills: ["Hire, Train and Deploy (HTD)", "Managed Capacity"],
  },

  {
    title: "Talent & Platforms",
    description:
      "We connect businesses with skilled professionals and scalable talent solutions.",
    image: "",
    video: "/videos/talent.mp4",
    alt: "Talent solutions professionals",
    pills: ["Talent Acquisition", "Workforce Solutions"],
  },

  {
    title: "Flexible Workforce Solutions",
    description:
      "We connect you with skilled professionals and adaptable workforce solutions designed to meet your changing business needs.",
    image: "",
    video: "/videos/flexible work solution.mp4",

    alt: "Workforce team collaborating",
    pills: ["Hire, Train and Deploy (HTD)", "Managed Capacity"],
  },
];

/**
 * The four photos in the editorial "Our Approach" composition.
 * `position` holds the placement classes: the photos stack on mobile and
 * become an absolutely-positioned collage from 781px up.
 */
export const approachPhotos: readonly ApproachPhoto[] = [
  {
    src: "/images/approach-new1.jpeg",
    alt: "People collaborating at work",
    width: 177,
    height: 241,
    position:
      "h-[300px] tp:absolute tp:left-[2%] tp:top-[45px] tp:h-[241px] tp:w-[177px] dl:left-[4%]",
  },
  {
    src: "/images/approach-new2.jpeg",
    alt: "Professional at work",
    width: 176,
    height: 242,
    position:
      "h-[300px] tp:absolute tp:right-[2%] tp:top-[4px] tp:h-[242px] tp:w-[176px] dl:right-[4%]",
  },
  {
    src: "/images/approach-new3.jpeg",
    alt: "Diverse team together",
    width: 354,
    height: 199,
    position:
      "h-[220px] tp:absolute tp:bottom-0 tp:left-[2%] tp:h-[199px] tp:w-[354px] dl:left-[4%]",
  },
  {
    src: "/images/approach-new4.jpeg",
    alt: "People connecting and collaborating",
    width: 294,
    height: 188,
    position:
      "h-[220px] tp:absolute tp:bottom-0 tp:right-[2%] tp:h-[188px] tp:w-[294px] dl:right-[4%]",
  },
];

export const approachCopy = {
  kicker: "Our Approach",
  heading: "Creating Human Connection to Drive Meaningful Impact",
  body: "Our diverse, global talent helps clients transform every aspect of their business and achieve exceptional results. We achieve success through collaboration and the use of our digital platforms. With AI, our extensive talent network and in-depth learning solutions on the newest technologies, we provide the best Talentforce for today, tomorrow, and the next ERA.",
} as const;

export const industries: readonly Industry[] = [
  {
    title: "Agriculture",
    image: "/images/agriculture.jpeg",
    alt: "Modern business professionals and corporate environment",
    body: "Risk, operations, technology, and specialized talent for financial institutions navigating regulation, transformation, and growth.",
  },
  {
    title: "Security",
    image: "/images/security.jpeg",
    alt: "Healthcare professional in a modern clinical setting",
    body: "Clinical, administrative, technology, and specialized talent supporting healthcare and life-science organizations.",
  },
  {
    title: "RealEstate",
    image: "/images/property.jpeg",
    alt: "Technology team collaborating in an office",
    body: "Engineering, product, digital, and technology talent for teams building and modernizing connected experiences.",
  },
  {
    title: "Import & Exports",
    image: "/images/import-export.jpeg",
    alt: "Energy infrastructure and industrial operations",
    body: "Field, technical, engineering, and project talent supporting energy operations and evolving industry needs.",
  },
];

export const stats: readonly Stat[] = [
  { type: "count", count: 10, label: "Industries Served" },
  { type: "count", count: 6, label: "Core Solution Areas" },
  {
    type: "badge",
    icon: "✓",
    badge: "Fit-First Placements",
    note: "Built around genuine fit",
  },
  {
    type: "badge",
    icon: "+",
    badge: "People-First Approach",
    note: "Human connection drives impact",
  },
];

export const reviews: readonly Review[] = [
  {
    quote:
      "I had a great experience working with Stephen and Mayank. They were professional, responsive, and very supportive throughout the process.",
    initials: "ER",
    name: "Erla Ramya",
  },
  {
    quote:
      "Collabera helped me find a great opportunity at a leading employer where I reside. The onboarding process was smooth, and my contact while on assignment was very responsive and helpful.",
    initials: "KA",
    name: "Kyle Andersson",
  },
  {
    quote:
      "Collabera provided me with the right opportunity and a seamless experience in finding a new job. Raushan Kumar was consistently responsive in addressing any of my inquiries.",
    initials: "HM",
    name: "Hrithik Manda",
  },
];

export const footerSolutions: readonly LinkGroup[] = [
  {
    title: "Talent & Hiring",
    links: [{ label: "Recruitment & Placement", href: a.solutions }],
  },
  {
    title: "Flexible Workforce",
    links: [{ label: "Workforce Solutions", href: a.solutions }],
  },
  {
    title: "Scaled Delivery",
    links: [{ label: "Professional Services", href: a.solutions }],
  },
  {
    title: "Technology",
    links: [{ label: "Technology Solutions", href: a.solutions }],
  },
];

export const footerColumns: readonly LinkGroup[] = [
  {
    title: "Industries",
    links: [
      { label: "Technology", href: a.industries },
      { label: "Healthcare", href: a.industries },
      { label: "Finance & Banking", href: a.industries },
      { label: "Manufacturing", href: a.industries },
      { label: "Explore all industries", href: a.industries },
    ],
  },
  {
    title: "Opportunities",
    links: [
      { label: "Search Jobs", href: crossLinks.findJob },
      { label: "Submit Resume", href: crossLinks.findJob },
      { label: "Referral Program", href: a.opportunities },
      { label: "Global Talent Assistance", href: a.contact },
    ],
  },
  {
    title: "Who We Are",
    links: [
      { label: "Contact Us", href: a.contact },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
];

export const socialLinks: readonly SocialLink[] = [
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Instagram", short: "ig", href: "#" },
  { label: "Facebook", short: "fb", href: "#" },
  { label: "YouTube", short: "yt", href: "#" },
];
