// Industry page content. Industry names, talent domains, workforce strategies
// and proof points are based on the Collabera industry pages:
//   https://www.collabera.com/banking-financial-services-and-insurance/
//   https://www.collabera.com/healthcare-pharma-and-lifesciences/
//   https://www.collabera.com/telecom-media-and-technology/
//   https://www.collabera.com/energy-oil-and-gas/
//   https://www.collabera.com/semiconductor/
//
// URLs are never hard-coded here — they come from src/config/routes.ts,
// matching the pattern used by src/data/landing.ts and src/data/business.ts.

import { crossLinks } from "@/config/routes";
import type { IndustryPage } from "@/types";

const contactCta = { label: "Talk to Our Team", href: crossLinks.contact };

const contactCtaAlt = {
  label: "Start a Conversation",
  href: crossLinks.contact,
};

/** Shared "why Kalycor" block, worded per industry. */
function buildWhy(industry: string, heading: string) {
  return {
    kicker: "Why Kalycor",
    heading,
    description: `We bring together people, expertise, and technology to help ${industry} organizations hire faster, adapt to change, and build for what’s next.`,
    items: [
      {
        number: "01",
        title: "Industry-Focused Talent",
        description: `Connect with professionals who understand the demands of the ${industry} landscape.`,
      },
      {
        number: "02",
        title: "Flexible Workforce Solutions",
        description:
          "Contract, direct placement, and managed models that adapt to changing business needs.",
      },
      {
        number: "03",
        title: "Technology-Enabled Hiring",
        description:
          "Tech-driven talent matching that supports precise hiring decisions and shorter time-to-fill.",
      },
      {
        number: "04",
        title: "Scalable Business Support",
        description:
          "Solutions that grow alongside your organization and its changing requirements.",
      },
      {
        number: "05",
        title: "Long-Term Partnership",
        description:
          "A partner focused on understanding your goals and supporting sustainable growth.",
      },
    ],
  };
}

/* ------------------------------------------------------------------ BFSI -- */

export const bfsi: IndustryPage = {
  slug: "bfsi",
  name: "Banking, Financial Services & Insurance",

  metaTitle: "Banking, Financial Services & Insurance",

  metaDescription:
    "Specialized talent for banks, financial institutions, and insurers navigating digital transformation, regulatory change, and cybersecurity.",

  hero: {
    image: "/images/banking-finance.jpg",
    kicker: "Banking, Financial Services & Insurance",
    title: ["Specialized Talent.", "Financial Confidence."],
    accentLine: 1,

    highlights: [
      { icon: "users", label: "Wealth & Global Banking" },
      { icon: "shield", label: "Risk & Compliance" },
      { icon: "settings", label: "Digital Banking" },
      { icon: "sprout", label: "Insurance & Underwriting" },
    ],

    description:
      "With financial institutions facing digital transformation, regulatory shifts, and cybersecurity concerns, the demand for specialized talent has never been greater. We help you drive innovation, ensure compliance, and enhance customer experiences.",

    primaryCta: {
      label: "Explore Our Solutions",
      href: "#bfsi-solutions",
    },

    secondaryCta: contactCta,
  },

  stats: {
    kicker: "BFSI at a Glance",
    heading: "Our largest industry focus",

    items: [
      { value: "10+", label: "Years of industry experience" },
      { value: "400+", label: "Global clients" },
      { value: "5000+", label: "Active candidates" },
      {
        value: "10,000+",
        label: "Qualified BFSI candidates ready for immediate deployment",
      },
    ],
  },

  overview: {
    id: "bfsi-overview",
    kicker: "BFSI Industry",
    heading: "Hiring Demands in Banking, Financial Services & Insurance",

    paragraph:
      "BFSI is the cornerstone of our business and our largest industry focus. Organizations need professionals with deep industry knowledge to drive innovation, ensure compliance, and enhance customer experiences.",

    areas: [
      "Wealth Management & Global Banking",
      "Capital Markets & Risk Management",
      "Retail & Consumer Banking",
      "Insurance & Underwriting",
      "Cybersecurity & Data Protection",
      "Fintech & Digital Banking",
    ],
  },

  process: {
    kicker: "How We Work",

    heading: "From Brief to Placed Talent in BFSI",

    description:
      "A clear process for putting the right BFSI professionals in place as fast as your business needs them.",

    steps: [
      {
        number: "01",
        title: "Understand the Need",
        description:
          "We learn your regulatory environment, technology stack, and the financial roles that matter most.",
        image: "/images/BFSI-1.jpg",
      },
      {
        number: "02",
        title: "Source & Screen",
        description:
          "We tap our BFSI talent network and vet candidates for domain knowledge and compliance readiness.",
        image: "/images/BFSI-2.jpg",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Selected professionals are onboarded and placed quickly, ready to contribute from day one.",
        image: "/images/BFSI-3.jpg",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We adjust team size and skill mix as projects, regulations, and demand evolve.",
        image: "/images/BFSI-4.jpg",
      },
    ],
  },

  solutions: {
    id: "bfsi-solutions",
    kicker: "What We Do",
    heading: "Scalable Workforce Strategies for Finance & Banking",

    description:
      "Customized hiring solutions that help BFSI organizations stay agile.",

    items: [
      {
        number: "01",
        title: "Rapid Talent Deployment",
        description: "Quickly hiring for in-demand financial roles.",
      },
      {
        number: "02",
        title: "Regulatory-Ready Workforce",
        description: "Experts who align with compliance standards.",
      },
      {
        number: "03",
        title: "Flexible Staffing Models",
        description:
          "Contract, direct placement, and managed service solutions.",
      },
    ],
  },

  areas: {
    kicker: "Our Focus Areas",
    heading: "Specialized Talent for an Evolving Industry",

    description:
      "Top-tier talent solutions across key financial domains and emerging technologies.",

    items: [
      {
        number: "01",
        title: "Wealth Management & Global Banking",
        description: "Advisors, financial analysts, and fintech talent.",
      },
      {
        number: "02",
        title: "Capital Markets & Risk Management",
        description:
          "Compliance specialists, risk analysts, and fraud prevention experts.",
      },
      {
        number: "03",
        title: "Retail & Consumer Banking",
        description:
          "Payment solutions, lending professionals, and digital banking specialists.",
      },
      {
        number: "04",
        title: "Insurance & Underwriting",
        description:
          "Claims processing, actuarial science, and policy administration.",
      },
      {
        number: "05",
        title: "AI, Data & Cloud",
        description:
          "Machine learning, data visualization and engineering, cloud computing, and mobile development.",
      },
      {
        number: "06",
        title: "Security & Emerging Tech",
        description:
          "Cybersecurity and data protection, UI/UX for fintech, blockchain, IoT, and quantum computing.",
      },
    ],
  },

  successStories: {
    kicker: "A Trusted Partner in BFSI Talent",
    heading: "Best-in-class talent for leading financial institutions",

    items: [
      {
        value: "Top 5",
        label:
          "Supplier for a leading U.S. multinational financial services company",
      },
      {
        value: "#1",
        label: "Supplier for a major American bank holding company",
      },
      {
        value: "2,000+",
        label:
          "BFSI professionals placed across the U.S. and Canada last year",
      },
      {
        value: "10,000+",
        label:
          "Active, qualified BFSI candidates ready for immediate deployment",
      },
    ],
  },

  future: {
    kicker: "The Future of Financial Services",
    title: ["From Transactions", "to Transformation."],

    description:
      "We help financial organizations adapt to technology, regulation, and customer expectations by connecting the right people with the right opportunities.",
  },

  whyKalycor: buildWhy("BFSI", "Built for Banking. Ready for Change."),

  faq: {
    kicker: "Common Questions",
    heading: "BFSI Staffing, Answered",

    description:
      "Straight answers to what financial institutions most often ask us before they hire.",

    items: [
      {
        question: "Can you hire quickly for in-demand financial roles?",
        answer:
          "Yes. Our rapid talent deployment approach draws on a large pool of qualified BFSI candidates so critical roles are filled without long delays.",
      },
      {
        question: "Do your professionals understand regulatory requirements?",
        answer:
          "We place experts who align with compliance standards across risk, capital markets, banking, and insurance functions.",
      },
      {
        question: "Which engagement models do you offer?",
        answer:
          "Contract, direct placement, and managed service solutions, so you can choose the model that fits each project.",
      },
      {
        question: "Can you supply emerging-technology talent for fintech?",
        answer:
          "We supply experts in machine learning and AI, cybersecurity, cloud and mobile development, blockchain and digital banking, and more.",
      },
    ],
  },

  cta: {
    kicker: "Let’s Get Started",
    title: ["Strengthen Your", "Financial Workforce."],

    description:
      "Let’s build the talent strategy that helps your business scale, innovate, and stay competitive.",

    buttonLabel: contactCtaAlt.label,
  },
};

/* ------------------------------------------------------------- Healthcare -- */

export const healthcare: IndustryPage = {
  slug: "healthcare-pharma-lifesciences",
  name: "Healthcare, Pharma & Life Sciences",

  metaTitle: "Healthcare, Pharma & Life Sciences",

  metaDescription:
    "Workforce solutions for healthcare and life sciences organizations advancing research, optimizing care delivery, and ensuring compliance.",

  hero: {
    image: "/images/healthcare-pherma.jpg",
    kicker: "Healthcare, Pharma & Life Sciences",
    title: ["Advancing Care.", "Powering Innovation."],
    accentLine: 1,

    highlights: [
      { icon: "settings", label: "Healthcare IT" },
      { icon: "sprout", label: "Life Sciences & Biopharma" },
      { icon: "shield", label: "Regulatory Compliance" },
      { icon: "users", label: "Product Development" },
    ],

    description:
      "Driven by digital transformation, regulatory shifts, and patient-centered innovation, healthcare and life sciences organizations need specialized talent to advance research, optimize care delivery, and ensure compliance.",

    primaryCta: {
      label: "Explore Our Solutions",
      href: "#healthcare-solutions",
    },

    secondaryCta: contactCta,
  },

  stats: {
    kicker: "Healthcare & Life Sciences at a Glance",
    heading: "Specialized talent at scale",

    items: [
      { value: "29+", label: "Years of industry experience" },
      { value: "14M", label: "Pre-screened candidates" },
      { value: "65%", label: "Of clients are Fortune 500" },
      {
        value: "3",
        label:
          "Core sectors: Healthcare IT, Life Sciences, Product Development",
      },
    ],
  },

  overview: {
    id: "healthcare-overview",
    kicker: "Healthcare, Pharma & Life Sciences",
    heading: "Hiring Demands in Healthcare, Pharma & Life Sciences",

    paragraph:
      "The healthcare and life sciences industry is evolving rapidly, driven by digital transformation, regulatory shifts, and patient-centered innovation. Securing specialized talent is essential to advancing research, optimizing care delivery, and ensuring compliance.",

    areas: [
      "Healthcare IT & Digital Transformation",
      "Life Sciences & Biopharma",
      "Healthcare Product Development",
      "AI, Cloud & Cybersecurity",
      "Virtual Trials & R&D",
      "Regulatory Compliance",
    ],
  },

  process: {
    kicker: "How We Work",

    heading: "From Brief to Placed Talent in Healthcare & Life Sciences",

    description:
      "A clear process for putting the right healthcare and life sciences professionals in place as fast as your business needs them.",

    steps: [
      {
        number: "01",
        title: "Understand the Need",
        description:
          "We learn your research goals, care-delivery model, and the regulated roles you need to fill.",
        image: "/images/Healthcare-1.jpg",
      },
      {
        number: "02",
        title: "Source & Screen",
        description:
          "We tap our talent network and vet candidates for specialized skills and compliance readiness.",
        image: "/images/health-2.jpg",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Selected professionals are onboarded and placed quickly with the speed and precision your programs require.",
        image: "/images/health-3.jpg",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We rapidly scale teams up or down as market shifts and program needs change.",
        image: "/images/health-4.jpg",
      },
    ],
  },

  solutions: {
    id: "healthcare-solutions",
    kicker: "What We Do",
    heading: "Agile Workforce Strategies for Healthcare & Life Sciences",

    description:
      "Flexible workforce solutions that adapt to shifting industry needs.",

    items: [
      {
        number: "01",
        title: "Scalable Teams",
        description: "Rapidly scale teams based on market shifts.",
      },
      {
        number: "02",
        title: "Specialized Professionals",
        description: "Immediate access to highly specialized professionals.",
      },
      {
        number: "03",
        title: "Compliance Expertise",
        description:
          "Experts who ensure adherence to evolving industry standards.",
      },
    ],
  },

  areas: {
    kicker: "Our Focus Areas",
    heading: "Specialized Talent for an Evolving Industry",

    description:
      "Workforce solutions across key healthcare and life sciences sectors.",

    items: [
      {
        number: "01",
        title: "Healthcare IT & Digital Transformation",
        description: "AI, cloud computing, and cybersecurity.",
      },
      {
        number: "02",
        title: "Life Sciences & Biopharma",
        description: "Virtual trials, R&D, and regulatory compliance.",
      },
      {
        number: "03",
        title: "Healthcare Product Development",
        description: "Training, research, and medical technology.",
      },
    ],
  },

  successStories: {
    kicker: "A Trusted Partner in Healthcare Talent",
    heading: "Experience that Fortune 500 clients rely on",

    items: [
      { value: "29+", label: "Years of industry experience" },
      { value: "14M", label: "Pre-screened candidates in our network" },
      { value: "65%", label: "Of our clients are Fortune 500 companies" },
    ],
  },

  future: {
    kicker: "The Future of Healthcare",
    title: ["From Research", "to Real-World Care."],

    description:
      "We help healthcare and life sciences organizations adapt to evolving standards and patient expectations by connecting the right people with the right opportunities.",
  },

  whyKalycor: buildWhy(
    "healthcare and life sciences",
    "Built for Care. Ready for Discovery.",
  ),

  faq: {
    kicker: "Common Questions",
    heading: "Healthcare & Life Sciences Staffing, Answered",

    description:
      "Straight answers to what healthcare and life sciences organizations most often ask us before they hire.",

    items: [
      {
        question: "Can you scale teams as market conditions shift?",
        answer:
          "Yes. We help you rapidly scale teams up or down based on market shifts and program needs.",
      },
      {
        question: "Do you support regulatory and compliance roles?",
        answer:
          "We provide experts who ensure adherence to evolving industry standards, including regulatory compliance in life sciences.",
      },
      {
        question: "What technology talent do you cover in healthcare?",
        answer:
          "Healthcare IT and digital transformation, including AI, cloud computing, and cybersecurity professionals.",
      },
      {
        question: "Can you support R&D and virtual trial teams?",
        answer:
          "Our life sciences and biopharma talent covers virtual trials, R&D, and regulatory compliance.",
      },
    ],
  },

  cta: {
    kicker: "Let’s Get Started",
    title: ["Hire Top Healthcare", "& Life Sciences Talent."],

    description:
      "High-impact talent with the speed, precision, and expertise needed to drive transformation.",

    buttonLabel: contactCtaAlt.label,
  },
};

/* -------------------------------------------------- Telecom, Media & Tech -- */

export const tmt: IndustryPage = {
  slug: "telecom-media-technology",
  name: "Telecom, Media & Technology",

  metaTitle: "Telecom, Media & Technology",

  metaDescription:
    "Workforce solutions for telecom, media, and technology companies scaling quickly, protecting digital assets, and optimizing digital experiences.",

  hero: {
    image: "/images/telecom-media.jpg",
    kicker: "Telecom, Media & Technology",
    title: ["Connecting Industries.", "Scaling What’s Next."],
    accentLine: 1,

    highlights: [
      { icon: "settings", label: "Network Infrastructure" },
      { icon: "shield", label: "Cybersecurity" },
      { icon: "sprout", label: "Media Technologies" },
      { icon: "users", label: "Software & Hardware" },
    ],

    description:
      "The TMT industry is advancing rapidly, driven by 5G expansion, AI-driven content, IoT adoption, and cloud computing. We connect you with specialized talent who can keep pace with innovation.",

    primaryCta: {
      label: "Explore Our Solutions",
      href: "#tmt-solutions",
    },

    secondaryCta: contactCta,
  },

  stats: {
    kicker: "TMT at a Glance",
    heading: "Proven with leading telecom and technology firms",

    items: [
      { value: "10+", label: "Years of industry experience" },
      { value: "400+", label: "Global clients" },
      { value: "5000+", label: "Active candidates" },
      {
        value: "500+",
        label:
          "Professionals placed for one multinational telecom corporation",
      },
    ],
  },

  overview: {
    id: "tmt-overview",
    kicker: "TMT Industry",
    heading: "Hiring Demands in Telecom, Media & Technology",

    paragraph:
      "Companies must scale quickly, protect digital assets, and optimize digital experiences. Finding specialized talent who can keep pace with innovation is essential for long-term success.",

    areas: [
      "Telecom & Network Infrastructure",
      "Cybersecurity & Data Protection",
      "Media & Content Technologies",
      "Software & Hardware Engineering",
      "5G, IoT & Cloud Computing",
      "AI-Driven Content",
    ],
  },

  process: {
    kicker: "How We Work",

    heading: "From Brief to Placed Talent in Telecom, Media & Technology",

    description:
      "A clear process for putting the right telecom, media, and technology professionals in place as fast as your business needs them.",

    steps: [
      {
        number: "01",
        title: "Understand the Need",
        description:
          "We learn your product roadmap, network environment, and the technical roles driving it.",
        image: "/images/tele-1.jpg",
      },
      {
        number: "02",
        title: "Source & Screen",
        description:
          "AI-powered matching surfaces candidates, which we vet for hands-on technical depth.",
        image: "/images/tele-2.jpg",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Selected professionals are onboarded and placed quickly on fast-moving digital projects.",
        image: "/images/tele-3.jpg",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We adjust team size and skills as projects, launches, and demand evolve.",
        image: "/images/tele-4.jpg",
      },
    ],
  },

  solutions: {
    id: "tmt-solutions",
    kicker: "What We Do",
    heading: "Scalable Workforce Strategies for Tech & Media",

    description:
      "Flexible workforce solutions that adapt to shifting industry needs.",

    items: [
      {
        number: "01",
        title: "Rapid Talent Deployment",
        description: "Hiring experts for fast-moving digital projects.",
      },
      {
        number: "02",
        title: "Flexible Engagement Models",
        description:
          "Contract, direct placement, and project-based staffing.",
      },
      {
        number: "03",
        title: "Tech-Driven Talent Matching",
        description:
          "AI-powered recruitment for precise hiring decisions.",
      },
    ],
  },

  areas: {
    kicker: "Our Focus Areas",
    heading: "Specialized Talent for an Evolving Industry",

    description:
      "Workforce solutions across the key sectors of telecom, media, and technology.",

    items: [
      {
        number: "01",
        title: "Telecom & Network Infrastructure",
        description: "LTE, RF engineering, VoIP, and mobile apps.",
      },
      {
        number: "02",
        title: "Cybersecurity & Data Protection",
        description:
          "Safeguarding digital assets and network integrity.",
      },
      {
        number: "03",
        title: "Media & Content Technologies",
        description:
          "AI-driven streaming and interactive experiences.",
      },
      {
        number: "04",
        title: "Software & Hardware Engineering",
        description:
          "Product development, testing, and integration.",
      },
    ],
  },

  successStories: {
    kicker: "A Trusted Partner in TMT Talent",
    heading:
      "Specialized professionals for leading telecom, media, and tech firms",

    items: [
      {
        value: "#1",
        label:
          "Vendor for 3 years at a telecommunications & semiconductor equipment company",
      },
      {
        value: "300+",
        label:
          "Professionals deployed globally for a wireless telecommunications provider",
      },
      {
        value: "500+",
        label:
          "Professionals placed for a multinational telecom corporation, a top 3 vendor among 5,000+ suppliers",
      },
    ],
  },

  future: {
    kicker: "The Future of TMT",
    title: ["From Connectivity", "to Experience."],

    description:
      "We help telecom, media, and technology companies scale with the pace of innovation by connecting the right people with the right projects.",
  },

  whyKalycor: buildWhy(
    "telecom, media, and technology",
    "Built for Speed. Ready to Scale.",
  ),

  faq: {
    kicker: "Common Questions",
    heading: "TMT Staffing, Answered",

    description:
      "Straight answers to what telecom, media, and technology companies most often ask us before they hire.",

    items: [
      {
        question: "Can you staff fast-moving digital projects?",
        answer:
          "Yes. Our rapid talent deployment approach is built for hiring experts for fast-moving digital projects.",
      },
      {
        question: "Which engagement models do you offer?",
        answer:
          "Contract, direct placement, and project-based staffing.",
      },
      {
        question: "Do you place telecom and network engineers?",
        answer:
          "We place talent across LTE, RF engineering, VoIP, and mobile apps, alongside cybersecurity and data protection specialists.",
      },
      {
        question: "How do you match candidates to roles?",
        answer:
          "We use AI-powered recruitment and tech-driven matching to support precise hiring decisions.",
      },
    ],
  },

  cta: {
    kicker: "Let’s Get Started",
    title: ["Build Your Future", "Workforce Today."],

    description:
      "High-impact talent with the speed, precision, and expertise needed to drive transformation.",

    buttonLabel: contactCtaAlt.label,
  },
};

/* ------------------------------------------------------------ Energy, Oil -- */

export const energy: IndustryPage = {
  slug: "energy-oil-gas",
  name: "Energy, Oil & Gas",

  metaTitle: "Energy, Oil & Gas",

  metaDescription:
    "Specialized talent for energy companies balancing traditional operations with clean energy transitions and digital infrastructure.",

  hero: {
    image: "/images/Energy, OilGas.jpg",
    kicker: "Energy, Oil & Gas",
    title: ["Fueling Progress.", "Powering What’s Next."],
    accentLine: 1,

    highlights: [
      { icon: "settings", label: "Upstream to Downstream" },
      { icon: "sprout", label: "Renewable Energy" },
      { icon: "shield", label: "Energy Cybersecurity" },
      { icon: "users", label: "Engineering & Infrastructure" },
    ],

    description:
      "From clean energy transitions to digital infrastructure, the energy sector is undergoing major shifts. We connect you with skilled professionals to manage traditional operations while leading the future of renewables.",

    primaryCta: {
      label: "Explore Our Solutions",
      href: "#energy-solutions",
    },

    secondaryCta: contactCta,
  },

  stats: {
    kicker: "Energy at a Glance",
    heading: "Flexible talent for a changing industry",

    items: [
      { value: "10+", label: "Years of industry experience" },
      { value: "400+", label: "Global clients" },
      { value: "5000+", label: "Active candidates" },
      {
        value: "30%",
        label: "Staffing cost reduction delivered for an energy client",
      },
    ],
  },

  overview: {
    id: "energy-overview",
    kicker: "Energy, Oil & Gas Industry",
    heading: "Hiring Demands in Energy, Oil & Gas",

    paragraph:
      "The energy sector is undergoing major shifts, from clean energy transitions to digital infrastructure. Companies need skilled professionals to manage traditional operations while leading the future of renewables.",

    areas: [
      "Upstream, Midstream & Downstream Operations",
      "Renewable Energy & Sustainability",
      "Energy Technology & Digital Transformation",
      "Engineering & Infrastructure",
      "Smart Grid Technology",
      "Cybersecurity in Energy Infrastructure",
    ],
  },

  process: {
    kicker: "How We Work",

    heading: "From Brief to Placed Talent in Energy, Oil & Gas",

    description:
      "A clear process for putting the right energy professionals in place as fast as your business needs them.",

    steps: [
      {
        number: "01",
        title: "Understand the Need",
        description:
          "We learn your operations, project timelines, and the field, technical, and engineering roles you need.",
        image: "/images/oilgas-1.jpg",
      },
      {
        number: "02",
        title: "Source & Screen",
        description:
          "We tap our energy talent network and vet candidates for technical skills and site readiness.",
        image: "/images/oilgas-2.jpg",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Selected professionals are onboarded and placed across your sites and projects.",
        image: "/images/oilgas-3.jpg",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We adjust staffing as energy demand, projects, and market conditions change.",
        image: "/images/oilgas-4.jpg",
      },
    ],
  },

  solutions: {
    id: "energy-solutions",
    kicker: "What We Do",
    heading: "Scalable Workforce Strategies for Energy",

    description:
      "Flexible workforce solutions to meet industry fluctuations.",

    items: [
      {
        number: "01",
        title: "Adaptable Workforce Planning",
        description:
          "On-demand hiring for changing energy demands.",
      },
      {
        number: "02",
        title: "Renewable Energy Talent Pipelines",
        description:
          "Specialists in sustainability and alternative energy.",
      },
      {
        number: "03",
        title: "Flexible Staffing Solutions",
        description:
          "Contract, direct placement, and hybrid models.",
      },
    ],
  },

  areas: {
    kicker: "Our Focus Areas",
    heading: "Specialized Talent for an Evolving Industry",

    description:
      "Top-tier energy professionals and innovation talent across the energy value chain.",

    items: [
      {
        number: "01",
        title: "Upstream, Midstream & Downstream Operations",
        description: "Exploration, refining, and distribution.",
      },
      {
        number: "02",
        title: "Renewable Energy & Sustainability",
        description:
          "Solar, wind, and alternative energy solutions.",
      },
      {
        number: "03",
        title: "Energy Technology & Digital Transformation",
        description:
          "AI-driven analytics, IoT, and cybersecurity.",
      },
      {
        number: "04",
        title: "Engineering & Infrastructure",
        description:
          "Pipeline, drilling, and site development.",
      },
      {
        number: "05",
        title: "Smart Grid & Analytics",
        description:
          "Smart grid technology and AI & data analytics that optimize energy distribution, consumption, and forecasting.",
      },
      {
        number: "06",
        title: "Infrastructure Security & Sustainable Engineering",
        description:
          "Protecting critical operational systems and building eco-friendly energy solutions.",
      },
    ],
  },

  successStories: {
    kicker: "Success Stories",
    heading:
      "Workforce results for energy and infrastructure clients",

    items: [
      {
        value: "30%",
        label:
          "Reduction in staffing costs while improving efficiency",
      },
      {
        value: "Renewables",
        label:
          "Workforce strategies developed for renewable energy initiatives",
      },
      {
        value: "Large-scale",
        label:
          "Infrastructure projects staffed with critical engineers and project managers",
      },
    ],
  },

  future: {
    kicker: "The Future of Energy",
    title: ["From Fuel", "to Future."],

    description:
      "We help energy companies scale efficiently, adapt to market shifts, and drive innovation by connecting the right people with the right opportunities.",
  },

  whyKalycor: buildWhy(
    "energy",
    "Built for Energy. Ready for Transition.",
  ),

  faq: {
    kicker: "Common Questions",
    heading: "Energy Staffing, Answered",

    description:
      "Straight answers to what energy, oil, and gas companies most often ask us before they hire.",

    items: [
      {
        question: "Can you hire on demand as energy needs change?",
        answer:
          "Yes. Adaptable workforce planning gives you on-demand hiring for changing energy demands.",
      },
      {
        question: "Do you have renewable energy talent?",
        answer:
          "We build renewable energy talent pipelines with specialists in sustainability, solar, wind, and alternative energy.",
      },
      {
        question:
          "Can you support engineering and infrastructure projects?",
        answer:
          "We place engineers and project managers for pipeline, drilling, and site development projects.",
      },
      {
        question: "Which staffing models are available?",
        answer:
          "Contract, direct placement, and hybrid models.",
      },
    ],
  },

  cta: {
    kicker: "Let’s Get Started",
    title: ["Fuel Progress with", "the Right Talent."],

    description:
      "Specialized workforce solutions that help energy companies scale efficiently and adapt to market shifts.",

    buttonLabel: contactCtaAlt.label,
  },
};

/* ------------------------------------------------------------ Semiconductor -- */

export const semiconductor: IndustryPage = {
  slug: "semiconductor",
  name: "Semiconductor",

  metaTitle: "Semiconductor",

  metaDescription:
    "Specialized talent across chip design, verification, embedded systems, and manufacturing for semiconductor and technology organizations.",

  hero: {
    image: "/images/semi-conductor.jpg",
    kicker: "Semiconductor",
    title: ["Specialized Talent.", "Semiconductor Growth."],
    accentLine: 1,

    highlights: [
      { icon: "settings", label: "Chip Design" },
      { icon: "shield", label: "Verification" },
      { icon: "sprout", label: "Embedded Systems" },
      { icon: "users", label: "Manufacturing" },
    ],

    description:
      "The semiconductor industry sits at the heart of global innovation, powering everything from consumer electronics to AI and advanced computing. We deliver specialized talent that accelerates innovation and product development.",

    primaryCta: {
      label: "Explore Our Solutions",
      href: "#semiconductor-solutions",
    },

    secondaryCta: contactCta,
  },

  stats: {
    kicker: "Semiconductor at a Glance",
    heading: "High-precision talent, delivered at speed",

    items: [
      {
        value: "30+",
        label:
          "Years of expertise sourcing talent for Fortune 500 and Global 1000 organizations",
      },
      {
        value: "14M+",
        label: "Professionals in our global talent network",
      },
      {
        value: "#1",
        label:
          "Vendor for 3 years at a telecom & semiconductor equipment company",
      },
      {
        value: "100+",
        label:
          "Consultants placed for that client, with 60+ converted to full-time",
      },
    ],
  },

  overview: {
    id: "semiconductor-overview",
    kicker: "Semiconductor Industry",
    heading: "Specialized Talent for Semiconductor Growth",

    paragraph:
      "We partner with leading semiconductor and technology organizations to deliver specialized talent across chip design, verification, embedded systems, and manufacturing, helping accelerate innovation and product development.",

    areas: [
      "Chip Design",
      "Verification",
      "Embedded Systems",
      "Manufacturing",
      "Product Development",
      "Advanced Computing & AI",
    ],
  },

  process: {
    kicker: "How We Work",

    heading: "From Brief to Placed Talent in Semiconductor",

    description:
      "A clear process for putting the right semiconductor professionals in place as fast as your business needs them.",

    steps: [
      {
        number: "01",
        title: "Understand the Need",
        description:
          "We learn your design flow, product roadmap, and the niche roles that gate your schedule.",
        image:
          "/images/semiconductor-1.jpg",
      },
      {
        number: "02",
        title: "Source & Screen",
        description:
          "We tap specialized talent pipelines and vet candidates for deep technical expertise.",
        image:
          "/images/semiconductor-2.jpg",
      },
      {
        number: "03",
        title: "Deploy the Team",
        description:
          "Selected professionals are onboarded and placed with reduced time-to-fill.",
        image:
          "/images/semiconductor-3.jpg",
      },
      {
        number: "04",
        title: "Support & Scale",
        description:
          "We adjust team size and skill mix as tape-outs, products, and demand evolve.",
        image:
          "/images/semiconductor-4.jpg",
      },
    ],
  },

  solutions: {
    id: "semiconductor-solutions",
    kicker: "What We Do",
    heading: "Hiring Solutions that Scale with Speed and Precision",

    description:
      "Customized hiring solutions that help semiconductor organizations scale.",

    items: [
      {
        number: "01",
        title: "Rapid Talent Deployment",
        description:
          "Quickly hire for niche semiconductor roles with reduced time-to-fill.",
      },
      {
        number: "02",
        title: "Specialized Talent Pipelines",
        description:
          "Talent skilled in chip design, verification, embedded systems, and manufacturing.",
      },
    ],
  },

  areas: {
    kicker: "Our Focus Areas",
    heading: "Specialized Talent for a High-Precision Industry",

    description:
      "Top-tier semiconductor talent across critical domains.",

    items: [
      {
        number: "01",
        title: "Chip Design",
        description:
          "Specialists who help design the chips behind modern computing.",
      },
      {
        number: "02",
        title: "Verification",
        description:
          "Professionals who validate designs before they reach production.",
      },
      {
        number: "03",
        title: "Embedded Systems",
        description:
          "Engineers who build the systems that bring devices to life.",
      },
      {
        number: "04",
        title: "Manufacturing",
        description:
          "Talent supporting precise, high-volume semiconductor production.",
      },
    ],
  },

  successStories: {
    kicker: "A Trusted Partner in Semiconductor Talent",
    heading:
      "Long-term partnerships with leading global organizations",

    items: [
      {
        value: "#1",
        label:
          "Vendor for 3 years at a telecommunications & semiconductor equipment company",
      },
      {
        value: "100+",
        label: "Consultants placed",
      },
      {
        value: "60+",
        label: "Consultants converted to full-time",
      },
    ],
  },

  future: {
    kicker: "The Future of Semiconductors",
    title: ["From Silicon", "to Solutions."],

    description:
      "From chip design to manufacturing and embedded systems, we help semiconductor organizations access the specialized talent needed to innovate, scale, and stay competitive.",
  },

  whyKalycor: buildWhy(
    "semiconductor",
    "Built for Precision. Ready to Scale.",
  ),

  faq: {
    kicker: "Common Questions",
    heading: "Semiconductor Staffing, Answered",

    description:
      "Straight answers to what semiconductor organizations most often ask us before they hire.",

    items: [
      {
        question: "Can you fill niche semiconductor roles quickly?",
        answer:
          "Yes. Our rapid talent deployment approach is designed to reduce time-to-fill for niche semiconductor roles.",
      },
      {
        question: "Which semiconductor domains do you cover?",
        answer:
          "Chip design, verification, embedded systems, and manufacturing.",
      },
      {
        question:
          "Do you support both product and manufacturing teams?",
        answer:
          "We deliver talent across the product development lifecycle, from design through manufacturing.",
      },
      {
        question:
          "How do you maintain specialized talent pipelines?",
        answer:
          "We build and maintain pipelines of professionals with deep semiconductor skills so clients can scale with speed and precision.",
      },
    ],
  },

  cta: {
    kicker: "Let’s Get Started",
    title: ["Strengthen Your", "Semiconductor Workforce."],

    description:
      "Access the specialized talent needed to innovate, scale, and stay competitive.",

    buttonLabel: contactCtaAlt.label,
  },
};

/** Every industry page, keyed by its URL slug (`/industries/[slug]`). */
export const industryPages = {
  bfsi,
  "healthcare-pharma-lifesciences": healthcare,
  "telecom-media-technology": tmt,
  "energy-oil-gas": energy,
  semiconductor,
} as const satisfies Record<string, IndustryPage>;

export type IndustrySlug = keyof typeof industryPages;