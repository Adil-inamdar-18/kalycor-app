/* --------------------------------------------------------------------------
   Diversity & Inclusion content.
   The initiative and pledge wording is DRAFT copy written from the approach
   already described on the site. Review it with your People team so every
   line reflects what Kalycor actually does before publishing.
   -------------------------------------------------------------------------- */

export const diversityHero = {
  kicker: "Diversity & Inclusion",
  headingLead: "Different perspectives.",
  headingAccent: "Stronger possibilities.",
  body: "We believe diverse people, experiences, and perspectives create stronger teams, better ideas, and meaningful opportunities.",
  primaryLabel: "See our commitments",
  primaryHref: "#commitments",
  secondaryLabel: "Explore careers",
  secondaryHref: "/opportunities/join-us",
  badge: {
    title: "Every voice counts",
    text: "Respected, heard and given room to grow.",
  },
  images: {
    main: {
      src: "/images/opportunities/join-us.jpg",
      alt: "Colleagues from different backgrounds working together at laptops",
    },
    tall: {
      src: "/images/approach-new2.jpeg",
      alt: "A Kalycor team member smiling while working",
    },
    small: {
      src: "/images/opportunities/referral-program.jpg",
      alt: "A diverse team collaborating around a table",
    },
  },
} as const;

export const diversityBelonging = {
  kicker: "Our Commitment",
  statementLead: "Inclusion is more than representation.",
  statementAccent: "It is where people feel they belong.",
  paragraphs: [
    "At Kalycor, we believe that every individual brings unique experiences, perspectives, and strengths to the workplace.",
    "Our approach is built around creating an environment where people are respected, heard, and given opportunities to contribute and grow.",
    "We work with people and organizations to build stronger workplaces where differences become a source of collaboration, innovation, and progress.",
  ],
  feelings: ["Respected", "Heard", "Valued", "Included", "Empowered"],
} as const;

export interface PillarItem {
  number: string;
  title: string;
  description: string;
  practices: readonly string[];
}

export interface DiversityPillarsContent {
  id: string;
  kicker: string;
  heading: string;
  items: readonly PillarItem[];
}

export const diversityPillars: DiversityPillarsContent = {
  id: "commitments",
  kicker: "What Inclusion Means to Us",
  heading: "Four commitments behind every decision.",
  items: [
    {
      number: "01",
      title: "Equal opportunity",
      description:
        "We believe opportunities should be accessible to people based on their capabilities, potential, and contributions.",
      practices: [
        "Role requirements focused on skills that matter",
        "Consistent, structured evaluation of every candidate",
        "Clear, open communication at each stage",
      ],
    },
    {
      number: "02",
      title: "Respect for every perspective",
      description:
        "Different experiences and viewpoints help teams understand challenges from new angles and create better solutions.",
      practices: [
        "Space for people to challenge and build on ideas",
        "Listening before deciding",
        "Recognition that strengths look different in different people",
      ],
    },
    {
      number: "03",
      title: "Inclusive collaboration",
      description:
        "We encourage environments where people can share ideas, collaborate openly, and contribute with confidence.",
      practices: [
        "Meetings and channels where every voice can be heard",
        "Flexible ways of working that support different needs",
        "Shared ownership of outcomes across teams",
      ],
    },
    {
      number: "04",
      title: "Continuous growth",
      description:
        "We support opportunities for people to develop their skills, expand their capabilities, and build meaningful careers.",
      practices: [
        "Access to learning and development pathways",
        "Feedback that helps people move forward",
        "Career conversations that look beyond the current role",
      ],
    },
  ],
};

export interface InitiativeItem {
  title: string;
  description: string;
}

export interface InitiativeGroup {
  id: "candidates" | "clients" | "team";
  label: string;
  intro: string;
  items: readonly InitiativeItem[];
}

export interface DiversityInitiativesContent {
  kicker: string;
  heading: string;
  body: string;
  groups: readonly InitiativeGroup[];
}

export const diversityInitiatives: DiversityInitiativesContent = {
  kicker: "Inclusion in Action",
  heading: "How belonging shows up in our work.",
  body: "Inclusion is not a single program. It runs through how we hire, how we advise, and how we work together.",
  groups: [
    {
      id: "candidates",
      label: "For candidates",
      intro: "Every professional deserves a fair path to the right role.",
      items: [
        {
          title: "Skills-first matching",
          description:
            "We look at capability and potential first, so strong candidates are not filtered out by background alone.",
        },
        {
          title: "Transparent process",
          description:
            "Clear expectations and honest feedback at every step, so no one is left guessing.",
        },
        {
          title: "Global talent pathways",
          description:
            "Programs that connect professionals across borders with opportunities that fit their goals.",
        },
      ],
    },
    {
      id: "clients",
      label: "For clients",
      intro: "We help organizations build teams that reflect the world they serve.",
      items: [
        {
          title: "Inclusive job design",
          description:
            "Guidance on writing roles and requirements that attract a broader, stronger pool of talent.",
        },
        {
          title: "Broader talent reach",
          description:
            "Sourcing that looks beyond familiar networks to find capable people others may overlook.",
        },
        {
          title: "Workforce flexibility",
          description:
            "Flexible workforce models that open doors for people who need different ways of working.",
        },
      ],
    },
    {
      id: "team",
      label: "For our team",
      intro: "The culture we describe to clients is the one we practice ourselves.",
      items: [
        {
          title: "Open communication",
          description:
            "Regular, honest conversations where every team member can raise ideas and concerns.",
        },
        {
          title: "Learning and development",
          description:
            "Support for people to build new skills and take on new challenges as they grow.",
        },
        {
          title: "Respectful workplace",
          description:
            "A shared standard of respect that applies to how we treat colleagues, clients, and candidates.",
        },
      ],
    },
  ],
};

export const diversityProgress = {
  kicker: "Impact & Accountability",
  heading: "Belonging is a practice, so we keep it honest.",
  body: "We hold ourselves to a simple loop: listen to people, look at the evidence, act on what we learn, and share our progress.",
  steps: [
    {
      title: "Listen",
      description: "Hear directly from our people, candidates, and partners.",
    },
    {
      title: "Measure",
      description: "Look at where opportunity and experience are uneven.",
    },
    {
      title: "Act",
      description: "Turn what we learn into changes in how we work.",
    },
    {
      title: "Share",
      description: "Report progress openly, including where we fall short.",
    },
  ],
  pledgeTitle: "Our pledge",
  pledges: [
    "We will treat every person with respect and dignity.",
    "We will make opportunity accessible on the strength of capability and potential.",
    "We will listen to feedback and act on it.",
    "We will keep learning, and keep improving.",
  ],
} as const;

export const diversityCta = {
  kicker: "Let's Connect",
  heading: "Build a more inclusive future with us.",
  body: "Whether you are looking for new opportunities or building stronger teams, Kalycor can help you connect people, capabilities, and possibilities.",
  image: "/images/opportunities/submit-resume.jpg",
  imageAlt: "Two professionals in conversation at an office desk",
  paths: [
    {
      title: "I am looking for opportunities",
      description: "Explore roles and programs built around your strengths.",
      label: "Join Kalycor",
      href: "/opportunities/join-us",
    },
    {
      title: "I am building a team",
      description: "Talk to us about inclusive hiring and workforce solutions.",
      label: "Hire with us",
      href: "/for-business",
    },
  ],
} as const;
