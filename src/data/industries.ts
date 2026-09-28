// All copy and links below are taken verbatim from the original industry
// page components. URLs are never hard-coded here — they come from
// src/config/routes.ts, matching the pattern used by src/data/landing.ts
// and src/data/business.ts.

import { crossLinks } from "@/config/routes";
import type { IndustryPage } from "@/types";

const contactCta = { label: "Talk to Our Team", href: crossLinks.contact };
const contactCtaAlt = {
  label: "Start a Conversation",
  href: crossLinks.contact,
};

export const agriculture: IndustryPage = {
  slug: "agriculture",
  name: "Agriculture",
  metaTitle: "Agriculture",
  metaDescription:
    "Connecting agriculture businesses with the people, technology, and solutions they need to build more efficient, sustainable, and resilient operations.",
  hero: {
    image: "/images/industries/agriculture.jpeg",
    kicker: "Agriculture",
    title: ["Empowering Agriculture.", "Growing What’s Next."],
    description:
      "Connecting agriculture businesses with the people, technology, and solutions they need to build more efficient, sustainable, and resilient operations.",
    primaryCta: {
      label: "Explore Our Solutions",
      href: "#agriculture-solutions",
    },
    secondaryCta: contactCta,
  },
  overview: {
    id: "agriculture-overview",
    kicker: "Agriculture Industry",
    heading: "Agriculture in a Changing World",
    paragraph:
      "Agriculture is evolving rapidly. From modern farming and food production to agricultural technology and supply-chain operations, businesses need adaptable talent and smarter solutions to keep pace with changing demands.",
    areas: [
      "Agricultural Operations",
      "Food Production & Processing",
      "AgriTech",
      "Supply Chain & Logistics",
      "Farm & Field Operations",
      "Agricultural Equipment & Technology",
    ],
  },
  solutions: {
    id: "agriculture-solutions",
    kicker: "What We Do",
    heading: "Solutions Built for Agriculture",
    description:
      "From people and processes to technology and growth, our solutions help agriculture businesses adapt, scale, and move forward.",
    items: [
      {
        number: "01",
        title: "Workforce Solutions",
        description:
          "Build reliable teams for agricultural operations, production, logistics, and support functions.",
      },
      {
        number: "02",
        title: "Recruitment & Placement",
        description:
          "Connect with skilled professionals across agriculture, food production, technology, and management.",
      },
      {
        number: "03",
        title: "Professional Services",
        description:
          "Access specialized expertise to improve processes, operations, and business performance.",
      },
      {
        number: "04",
        title: "Technology Solutions",
        description:
          "Support digital transformation through technology-driven solutions designed for modern agriculture.",
      },
    ],
  },
  areas: {
    kicker: "Our Focus Areas",
    heading: "Where We Create Impact",
    description:
      "Supporting the people, operations, and technology shaping the future of agriculture.",
    items: [
      {
        number: "01",
        title: "Farming & Cultivation",
        description:
          "Supporting modern farming operations with the people and solutions needed for efficient cultivation.",
      },
      {
        number: "02",
        title: "Agricultural Equipment",
        description:
          "Helping organizations support equipment, machinery, maintenance, and technology-driven agricultural operations.",
      },
      {
        number: "03",
        title: "Food Processing",
        description:
          "Connecting businesses with talent and solutions across food production, processing, packaging, and operations.",
      },
      {
        number: "04",
        title: "Supply Chain",
        description:
          "Supporting the movement of agricultural products through efficient logistics, distribution, and supply-chain operations.",
      },
      {
        number: "05",
        title: "AgriTech",
        description:
          "Supporting technology-driven agriculture through digital solutions, innovation, and specialized talent.",
      },
      {
        number: "06",
        title: "Agricultural Operations",
        description:
          "Providing workforce and business solutions across the diverse operational needs of the agriculture industry.",
      },
    ],
  },
  future: {
    kicker: "The Future of Agriculture",
    title: ["From Field", "to Future."],
    description:
      "We help agriculture organizations adapt to changing markets, evolving technology, and workforce demands by connecting the right people and solutions with the right opportunities.",
  },
  whyKalycor: {
    kicker: "Why Kalycor",
    heading: "People, Expertise & Technology",
    description:
      "We bring together people, expertise, and technology to help agriculture businesses respond to today’s challenges and build for tomorrow.",
    items: [
      {
        number: "01",
        title: "Industry-Focused Talent",
        description:
          "Connect with people who understand the demands of agriculture and its evolving business landscape.",
      },
      {
        number: "02",
        title: "Flexible Workforce Solutions",
        description:
          "Build teams that can adapt to changing operational needs, business cycles, and growth requirements.",
      },
      {
        number: "03",
        title: "Technology-Enabled Operations",
        description:
          "Support modern agriculture with technology-driven solutions that improve efficiency and connectivity.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Access solutions that can grow alongside your organization and changing business requirements.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "Work with a partner focused on understanding your goals and supporting sustainable growth.",
      },
    ],
  },
  cta: {
    kicker: "Let’s Grow Together",
    title: ["Ready to Grow", "What’s Next?"],
    description: "Let’s build smarter agriculture solutions together.",
    buttonLabel: contactCtaAlt.label,
  },
};

export const importExport: IndustryPage = {
  slug: "import-export",
  name: "Import & Export",
  metaTitle: "Import & Export",
  metaDescription:
    "Connecting businesses, people, and opportunities across global markets through smarter trade, supply chain, and business solutions.",
  hero: {
    image: "/images/industries/import-export.jpeg",
    kicker: "Import & Export",
    title: ["Connecting Markets.", "Moving What’s Next."],
    description:
      "Connecting businesses, people, and opportunities across global markets through smarter trade, supply chain, and business solutions.",
    primaryCta: {
      label: "Explore Our Solutions",
      href: "#import-export-solutions",
    },
    secondaryCta: contactCta,
  },
  overview: {
    id: "import-export-overview",
    kicker: "Import & Export Industry",
    heading: "Connecting Business Across Borders",
    paragraph:
      "Global trade is constantly evolving. Businesses need reliable people, efficient processes, and adaptable solutions to navigate international markets, supply chains, and changing customer demands.",
    areas: [
      "Global Trade & Distribution",
      "Import & Export Operations",
      "Supply Chain & Logistics",
      "International Sourcing",
      "Warehousing & Fulfillment",
      "Trade Technology & Solutions",
    ],
  },
  solutions: {
    id: "import-export-solutions",
    kicker: "What We Do",
    heading: "Solutions for a Connected World",
    description:
      "From workforce and recruitment to professional and technology solutions, we help businesses operate confidently across markets.",
    items: [
      {
        number: "01",
        title: "Workforce Solutions",
        description:
          "Build dependable teams across trade operations, logistics, warehousing, customer support, and business functions.",
      },
      {
        number: "02",
        title: "Recruitment & Placement",
        description:
          "Connect businesses with skilled professionals across international trade, supply chain, logistics, and management.",
      },
      {
        number: "03",
        title: "Professional Services",
        description:
          "Access specialized expertise to improve trade processes, operational efficiency, and business performance.",
      },
      {
        number: "04",
        title: "Technology Solutions",
        description:
          "Enable smarter trade and supply-chain operations through technology-driven solutions and digital capabilities.",
      },
    ],
  },
  areas: {
    kicker: "Our Focus Areas",
    heading: "Where We Create Impact",
    description:
      "Supporting the people, processes, and technology that keep global trade moving.",
    items: [
      {
        number: "01",
        title: "Global Trade & Distribution",
        description:
          "Supporting businesses involved in moving products and services across domestic and international markets.",
      },
      {
        number: "02",
        title: "Import & Export Operations",
        description:
          "Helping organizations manage the people and operational capabilities required for efficient trade activities.",
      },
      {
        number: "03",
        title: "Supply Chain & Logistics",
        description:
          "Supporting connected supply chains through workforce, operational, and technology-driven solutions.",
      },
      {
        number: "04",
        title: "International Sourcing",
        description:
          "Helping businesses connect with the resources, suppliers, and capabilities needed to operate across markets.",
      },
      {
        number: "05",
        title: "Warehousing & Fulfillment",
        description:
          "Supporting efficient warehouse and fulfillment operations through adaptable teams and business solutions.",
      },
      {
        number: "06",
        title: "Trade Technology & Solutions",
        description:
          "Enabling modern trade operations with technology and digital solutions designed for a connected global economy.",
      },
    ],
  },
  future: {
    kicker: "The Future of Global Trade",
    title: ["From Local", "to Global."],
    description:
      "We help businesses navigate changing markets, evolving supply chains, and new opportunities by connecting the right people, processes, and solutions.",
  },
  whyKalycor: {
    kicker: "Why Kalycor",
    heading: "People, Expertise & Technology",
    description:
      "We bring together people, expertise, and technology to help businesses operate more effectively in an increasingly connected global economy.",
    items: [
      {
        number: "01",
        title: "Global Trade Expertise",
        description:
          "Connect with people and solutions that understand the complexities of modern trade and international business.",
      },
      {
        number: "02",
        title: "Flexible Workforce Solutions",
        description:
          "Build adaptable teams across logistics, operations, warehousing, customer support, and business functions.",
      },
      {
        number: "03",
        title: "Connected Operations",
        description:
          "Support smoother operations by bringing people, processes, and technology together across the supply chain.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Access solutions that can adapt as your business expands into new markets and opportunities.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "Work with a partner focused on understanding your business and supporting sustainable growth across markets.",
      },
    ],
  },
  cta: {
    kicker: "Let’s Move Forward",
    title: ["Ready to Move", "What’s Next?"],
    description:
      "Let’s build smarter solutions for a more connected global business.",
    buttonLabel: contactCtaAlt.label,
  },
};

export const realEstate: IndustryPage = {
  slug: "realestate",
  name: "Real Estate",
  metaTitle: "Real Estate",
  metaDescription:
    "Connecting real estate businesses with the people, expertise, and solutions needed to create stronger properties, operations, and opportunities.",
  hero: {
    image: "/images/industries/realestate.jpeg",
    kicker: "Real Estate",
    title: ["Building Opportunities.", "Shaping What’s Next."],
    description:
      "Connecting real estate businesses with the people, expertise, and solutions needed to create stronger properties, operations, and opportunities.",
    primaryCta: {
      label: "Explore Our Solutions",
      href: "#real-estate-solutions",
    },
    secondaryCta: contactCta,
  },
  overview: {
    id: "real-estate-overview",
    kicker: "Real Estate Industry",
    heading: "Real Estate in a Changing Market",
    paragraph:
      "The real estate industry is evolving through changing customer expectations, new technologies, and growing operational demands. Businesses need capable people, efficient processes, and adaptable solutions to keep properties and projects moving forward.",
    areas: [
      "Property Development",
      "Commercial Real Estate",
      "Residential Real Estate",
      "Property Management",
      "Construction & Infrastructure",
      "Facilities & Operations",
    ],
  },
  solutions: {
    id: "real-estate-solutions",
    kicker: "What We Do",
    heading: "Solutions for a Changing Property Landscape",
    description:
      "From workforce and recruitment to professional and technology solutions, we help real estate businesses build stronger operations and create better opportunities.",
    items: [
      {
        number: "01",
        title: "Workforce Solutions",
        description:
          "Build dependable teams across property management, facilities, construction support, customer service, and business operations.",
      },
      {
        number: "02",
        title: "Recruitment & Placement",
        description:
          "Connect real estate organizations with skilled professionals across property, facilities, construction, sales, and management functions.",
      },
      {
        number: "03",
        title: "Professional Services",
        description:
          "Access specialized expertise to improve property operations, project support, workforce management, and business performance.",
      },
      {
        number: "04",
        title: "Technology Solutions",
        description:
          "Enable smarter property and business operations through technology-driven solutions and digital capabilities.",
      },
    ],
  },
  areas: {
    kicker: "Our Focus Areas",
    heading: "Where We Create Impact",
    description:
      "Supporting the people, processes, and technology that help real estate businesses build, manage, and grow.",
    items: [
      {
        number: "01",
        title: "Property Development",
        description:
          "Supporting development teams with people and operational solutions that help move property projects forward.",
      },
      {
        number: "02",
        title: "Commercial Real Estate",
        description:
          "Helping commercial property businesses build capable teams and efficient operations across their portfolios.",
      },
      {
        number: "03",
        title: "Residential Real Estate",
        description:
          "Supporting residential property organizations with workforce and business solutions across their operations.",
      },
      {
        number: "04",
        title: "Property Management",
        description:
          "Helping property management teams improve day-to-day operations, tenant support, facilities, and service delivery.",
      },
      {
        number: "05",
        title: "Construction & Infrastructure",
        description:
          "Connecting businesses with workforce and operational capabilities needed to support construction and infrastructure projects.",
      },
      {
        number: "06",
        title: "Facilities & Operations",
        description:
          "Supporting efficient property and facility operations through dependable teams, processes, and technology.",
      },
    ],
  },
  future: {
    kicker: "The Future of Real Estate",
    title: ["From Property", "to Possibility."],
    description:
      "We help real estate businesses adapt to changing markets by connecting the right people, processes, and technology to create stronger operations and new opportunities.",
  },
  whyKalycor: {
    kicker: "Why Kalycor",
    heading: "People, Expertise & Technology",
    description:
      "We bring together people, expertise, and technology to help real estate businesses operate more effectively and create opportunities for sustainable growth.",
    items: [
      {
        number: "01",
        title: "Real Estate Industry Understanding",
        description:
          "Connect with people and solutions that understand the operational needs of modern property and real estate businesses.",
      },
      {
        number: "02",
        title: "Flexible Workforce Solutions",
        description:
          "Build adaptable teams across property management, facilities, construction support, customer service, and business operations.",
      },
      {
        number: "03",
        title: "Connected Operations",
        description:
          "Bring people, processes, and technology together to support smoother property and facility operations.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Access flexible solutions that can adapt as your property portfolio, projects, and operational requirements grow.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "Work with a partner focused on understanding your business and supporting sustainable growth across the real estate lifecycle.",
      },
    ],
  },
  cta: {
    kicker: "Let’s Build Together",
    title: ["Ready to Build", "What’s Next?"],
    description:
      "Let’s create smarter real estate solutions that turn opportunities into lasting growth.",
    buttonLabel: contactCtaAlt.label,
  },
};

export const security: IndustryPage = {
  slug: "security",
  name: "Security",
  metaTitle: "Security",
  metaDescription:
    "Connecting businesses with people, technology, and solutions that help create safer, more resilient, and better-prepared environments.",
  hero: {
    image: "/images/industries/security.jpeg",
    kicker: "Security",
    title: ["Protecting What Matters.", "Securing What’s Next."],
    description:
      "Connecting businesses with people, technology, and solutions that help create safer, more resilient, and better-prepared environments.",
    primaryCta: { label: "Explore Our Solutions", href: "#security-solutions" },
    secondaryCta: contactCta,
  },
  overview: {
    id: "security-overview",
    kicker: "Security Industry",
    heading: "Security in a Changing World",
    paragraph:
      "Businesses today need more than traditional security measures. They need dependable people, strong processes, and adaptable solutions that help protect their workplaces, facilities, assets, and operations.",
    areas: [
      "Corporate & Workplace Security",
      "Security Operations",
      "Risk Management",
      "Facility & Asset Protection",
      "Technology & Surveillance",
      "Security Workforce Solutions",
    ],
  },
  solutions: {
    id: "security-solutions",
    kicker: "What We Do",
    heading: "Solutions Built for Safer Operations",
    description:
      "From workforce and recruitment to professional and technology solutions, we help organizations build stronger and more resilient security operations.",
    items: [
      {
        number: "01",
        title: "Workforce Solutions",
        description:
          "Build dependable security and support teams across facilities, workplaces, operations, and business environments.",
      },
      {
        number: "02",
        title: "Recruitment & Placement",
        description:
          "Connect organizations with qualified professionals for security, operations, facility management, and related functions.",
      },
      {
        number: "03",
        title: "Professional Services",
        description:
          "Access specialized expertise to strengthen operational processes, workforce management, and security programs.",
      },
      {
        number: "04",
        title: "Technology Solutions",
        description:
          "Support modern security operations with technology-driven solutions that improve visibility, efficiency, and coordination.",
      },
    ],
  },
  areas: {
    kicker: "Our Focus Areas",
    heading: "Where We Create Impact",
    description:
      "Supporting the people, processes, and technology that help organizations create safer and more resilient environments.",
    items: [
      {
        number: "01",
        title: "Corporate & Workplace Security",
        description:
          "Supporting organizations with dependable people and operational solutions for safer workplaces and business environments.",
      },
      {
        number: "02",
        title: "Security Operations",
        description:
          "Helping businesses strengthen day-to-day security operations through capable teams, processes, and coordinated support.",
      },
      {
        number: "03",
        title: "Risk Management",
        description:
          "Supporting organizations in identifying operational risks and building processes that improve preparedness and resilience.",
      },
      {
        number: "04",
        title: "Facility & Asset Protection",
        description:
          "Helping protect facilities, properties, equipment, and valuable business assets through structured operational support.",
      },
      {
        number: "05",
        title: "Technology & Surveillance",
        description:
          "Enabling modern security environments through technology-driven solutions, monitoring capabilities, and digital tools.",
      },
      {
        number: "06",
        title: "Security Workforce Solutions",
        description:
          "Connecting organizations with adaptable talent for security, facility operations, support functions, and related business needs.",
      },
    ],
  },
  future: {
    kicker: "The Future of Security",
    title: ["From Protection", "to Preparedness."],
    description:
      "We help organizations prepare for changing risks and operational challenges by connecting the right people, processes, and technology.",
  },
  whyKalycor: {
    kicker: "Why Kalycor",
    heading: "People, Expertise & Technology",
    description:
      "We bring together people, expertise, and technology to help organizations build safer, stronger, and more resilient operations.",
    items: [
      {
        number: "01",
        title: "Security Industry Understanding",
        description:
          "Connect with people and solutions that understand the operational needs of modern security and workplace environments.",
      },
      {
        number: "02",
        title: "Reliable Workforce Solutions",
        description:
          "Build dependable teams across security operations, facilities, support functions, and business environments.",
      },
      {
        number: "03",
        title: "Technology-Enabled Operations",
        description:
          "Bring people, processes, and technology together to support more connected and efficient security operations.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Access flexible solutions that can adapt as your facilities, workforce, and operational requirements evolve.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "Work with a partner focused on understanding your organization and supporting sustainable operational improvement.",
      },
    ],
  },
  cta: {
    kicker: "Let’s Build a Safer Future",
    title: ["Ready to Secure", "What’s Next?"],
    description:
      "Let’s build smarter security solutions for a safer and more resilient business environment.",
    buttonLabel: contactCtaAlt.label,
  },
};

/** Every industry page, keyed by its URL slug (`/industries/[slug]`). */
export const industryPages = {
  agriculture,
  "import-export": importExport,
  realestate: realEstate,
  security,
} as const satisfies Record<string, IndustryPage>;

export type IndustrySlug = keyof typeof industryPages;
