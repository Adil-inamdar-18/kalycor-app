import { anchors, routes } from "@/config/routes";
import { joinUsValues } from "@/data/opportunities/joinUs";
import {
  aboutMilestones,
  aboutServices,
  aboutStory,
  aboutValues,
} from "@/data/aboutUs";

/* --------------------------------------------------------------------------
   /whoweare — main "Who We Are" overview page.
   Story, services, values and milestones are read from the existing About /
   Join Us data, so the overview never drifts from those pages.
   -------------------------------------------------------------------------- */

const solutionsHref = `${routes.home}${anchors.landing.solutions}`;

export const whoWeAreHero = {
  kicker: "Who We Are",
  heading: "Connecting People, Businesses & Opportunities.",
  body: "Kalycor connects people, businesses, and opportunities through smarter solutions built for a changing world.",
  /** Shown while the video loads, and instead of it for reduced motion. */
  image: "/images/opportunities/referral-program.jpg",
  imageAlt: "Kalycor professionals collaborating around a table",
  video: "/videos/Workforce creation & deployment.mp4",
  primaryLabel: "Explore Our Solutions",
  primaryHref: solutionsHref,
  secondaryLabel: "Contact Us",
  secondaryHref: anchors.landing.contact,
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

export const whoWeAreStory = {
  kicker: aboutStory.kicker,
  heading: aboutStory.heading,
  paragraphs: aboutStory.paragraphs.slice(0, 2),
  image: aboutStory.image,
  imageAlt: aboutStory.imageAlt,
  secondaryImage: "/images/approach-new3.jpeg",
  secondaryImageAlt: "A team meeting around a conference table",
  linkLabel: "Read Our Full Story",
  linkHref: routes.whoWeAre.aboutUs,
} as const;

export const whoWeAreHighlights = {
  kicker: "Kalycor at a Glance",
  heading: aboutMilestones.heading,
  items: aboutMilestones.items,
} as const;

const capabilityHrefs = [
  routes.solutions.workforce,
  routes.solutions.recruitmentPlacement,
  routes.solutions.professionalServices,
  routes.solutions.technologySolutions,
] as const;

export const whoWeAreCapabilities = {
  kicker: aboutServices.kicker,
  heading: "One partner across changing needs.",
  body: "From building teams to placing talent and delivering technology, our solutions are shaped around what each organization actually needs.",
  items: aboutServices.items.map((item, index) => ({
    title: item.title,
    description: item.description,
    href: capabilityHrefs[index],
  })),
  linkLabel: "View All Solutions",
  linkHref: solutionsHref,
} as const;

export const whoWeAreValues = {
  kicker: aboutValues.kicker,
  heading: aboutValues.heading,
  items: aboutValues.items.map(({ title, description }) => ({
    title,
    description,
  })),
} as const;

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

export const whoWeAreCulture = {
  kicker: "People & Culture",
  heading: joinUsValues.heading,
  body: "Our people bring different skills, experiences, and perspectives to the work we do, and we are always interested in meeting people who want to contribute and grow.",
  image: "/images/approach-new4.jpeg",
  imageAlt: "The Kalycor team standing together in an office",
  points: joinUsValues.items
    .slice(0, 3)
    .map(({ title, description }) => ({ title, description })),
  primaryLabel: "Join Our Team",
  primaryHref: routes.opportunities.joinUs,
  secondaryLabel: "Diversity & Inclusion",
  secondaryHref: routes.whoWeAre.diversityInclusion,
} as const;

export const whoWeAreLinks = {
  kicker: "Explore Kalycor",
  heading: "Discover More About Who We Are",
  items: [
    {
      title: "About Us",
      description: "Discover our story, values, and the people behind Kalycor.",
      href: routes.whoWeAre.aboutUs,
      image: "/images/opportunities/submit-resume.jpg",
      imageAlt: "Two colleagues in conversation in an office",
    },
    {
      title: "Diversity and Inclusion",
      description:
        "Learn how we create opportunities through an inclusive approach.",
      href: routes.whoWeAre.diversityInclusion,
      image: "/images/approach-new1.jpeg",
      imageAlt: "Colleagues greeting each other with a handshake",
    },
    {
      title: "Corporate Social Responsibility",
      description:
        "Explore how we contribute to communities and create positive impact.",
      href: routes.whoWeAre.corporateSocialResponsibility,
      image: "/images/Sustainable.jpg",
      imageAlt: "Hands holding a small plant beside a sustainability report",
    },
    {
      title: "Blogs",
      description: "Explore insights, ideas, and perspectives from Kalycor.",
      href: routes.whoWeAre.blogs,
      image: "/images/opportunities/global-talent-center.jpg",
      imageAlt: "A glowing network of skills and talent icons",
    },
  ],
} as const;

export const whoWeAreCta = {
  kicker: "Let's Connect",
  heading: "Ready to Build What Comes Next?",
  body: "Whether you are looking for the right talent, exploring new opportunities, or building a smarter workforce strategy, Kalycor is here to help.",
  image: "/images/opportunities/global-talent-assistance.jpg",
  primaryLabel: "Contact Us",
  primaryHref: anchors.landing.contact,
  secondaryLabel: "Explore Solutions",
  /** Was a bare "#solutions", which does not exist on this page. */
  secondaryHref: solutionsHref,
  audience: [
    { prompt: "Hiring?", label: "Hire Talent", href: routes.business },
    { prompt: "Looking for work?", label: "Find a Job", href: routes.jobs },
  ],
} as const;
