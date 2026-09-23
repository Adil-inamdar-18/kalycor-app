import { anchors, routes } from "@/config/routes";

export const whoWeAreHero = {
  kicker: "Who We Are",
  heading: "Connecting People, Businesses & Opportunities.",
  body: "Kalycor connects people, businesses, and opportunities through smarter solutions built for a changing world.",
  image: "/images/hero.jpg",
  imageAlt: "Kalycor professionals collaborating",
} as const;

export const whoWeAreIntro = {
  kicker: "About Kalycor",
  heading: "Built Around People. Driven by Possibility.",
  paragraphs: [
    "Kalycor connects people, businesses, and opportunities through solutions designed for a changing world.",
    "We bring together workforce solutions, recruitment, professional services, technology, and customized support to help organizations build stronger teams and create sustainable growth.",
    "Our approach is simple: understand what matters, connect the right people and capabilities, and build solutions that create meaningful results.",
  ],
} as const;

export const whoWeAreLinks = [
  {
    title: "About Us",
    description: "Discover our story, values, and the people behind Kalycor.",
    href: routes.whoWeAre.aboutUs,
  },
  {
    title: "Diversity and Inclusion",
    description:
      "Learn how we create opportunities through an inclusive approach.",
    href: routes.whoWeAre.diversityInclusion,
  },
  {
    title: "Corporate Social Responsibility",
    description:
      "Explore how we contribute to communities and create positive impact.",
    href: routes.whoWeAre.corporateSocialResponsibility,
  },
  {
    title: "Blogs",
    description: "Explore insights, ideas, and perspectives from Kalycor.",
    href: routes.whoWeAre.blogs,
  },
] as const;

export const whoWeAreApproach = {
  kicker: "Our Approach",
  heading: "Discover. Connect. Build. Grow.",
  body: "Every relationship starts with understanding. Our approach brings people, capabilities, and solutions together to create lasting opportunities.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand people, businesses, goals, and challenges before defining the right direction.",
    },
    {
      number: "02",
      title: "Connect",
      description:
        "We connect the right talent, expertise, technology, and opportunities to create meaningful relationships.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We develop practical solutions designed around real business and workforce needs.",
    },
    {
      number: "04",
      title: "Grow",
      description:
        "We focus on long-term value, stronger capabilities, and sustainable growth for our clients and people.",
    },
  ],
} as const;

export const whoWeAreCta = {
  kicker: "Let's Connect",
  heading: "Ready to Build What Comes Next?",
  body: "Whether you are looking for the right talent, exploring new opportunities, or building a smarter workforce strategy, Kalycor is here to help.",
  primaryLabel: "Contact Us",
  primaryHref: anchors.landing.contact,
  secondaryLabel: "Explore Solutions",
  secondaryHref: anchors.landing.solutions,
} as const;
