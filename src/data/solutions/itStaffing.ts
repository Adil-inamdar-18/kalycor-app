import type { SolutionPageContent } from "@/types";

export const itStaffing: SolutionPageContent = {
  hero: {
    kicker: "IT Staffing",
    heading: "Technical Talent That Already Understands the Stack.",
    body: "We connect organizations with skilled technology professionals, helping teams move faster on projects that depend on the right expertise.",
    image: "/images/hero.jpg",
    imageAlt: "IT professional working at a workstation",
  },

  intro: {
    kicker: "IT Staffing",
    heading: "Technology Talent, Ready When You Need It.",
    paragraphs: [
      "Technology needs move quickly, and finding professionals with the right technical depth can slow projects down at exactly the wrong moment.",
      "Kalycor connects organizations with vetted technology professionals across development, infrastructure, data, and support roles.",
      "We match skills to requirements carefully, so teams get talent that can contribute from day one, not just fill a seat.",
    ],
  },

  capabilities: {
    kicker: "Our Capabilities",
    heading: "Technical Talent Across the Roles You Need.",
    items: [
      {
        number: "01",
        title: "Software & Application Talent",
        description:
          "Developers and engineers matched to your stack, from front-end and back-end roles to full product teams.",
      },
      {
        number: "02",
        title: "Infrastructure & Cloud Support",
        description:
          "Professionals experienced in modern infrastructure, cloud platforms, and the systems that keep them running.",
      },
      {
        number: "03",
        title: "Data & Analytics Roles",
        description:
          "Talent who can turn data into decisions, from analysts and engineers to specialized platform experts.",
      },
      {
        number: "04",
        title: "Contract, Contract-to-Hire & Direct Hire",
        description:
          "Flexible engagement models that match how your team actually needs to bring technology talent on board.",
      },
    ],
  },

  benefits: {
    kicker: "Why IT Staffing",
    heading: "Talent That Keeps Technical Projects Moving.",
    body: "Delays on technical projects rarely come from a lack of ideas — they come from a lack of the right people. We help close that gap quickly.",
    points: [
      "Vetted technology professionals across specialties",
      "Faster access to hard-to-find technical skills",
      "Flexible engagement models for changing project needs",
      "Support that scales with your technology roadmap",
    ],
  },

  cta: {
    kicker: "Let's Connect",
    heading: "Get the Technical Talent Your Roadmap Needs.",
    body: "Whether you need a single specialist or a full project team, Kalycor can help you find technology talent that fits.",
    primaryLabel: "Contact Us",
    primaryHref: "/#contact",
    secondaryLabel: "Explore Opportunities",
    secondaryHref: "/#jobs",
  },
};

export default itStaffing;
