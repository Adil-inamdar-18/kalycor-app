import type { SolutionPageContent } from "@/types";

export const talentAcquisition: SolutionPageContent = {
  hero: {
    kicker: "Talent Acquisition",
    heading: "Finding the Leaders and Talent That Move You Forward.",
    body: "We connect organizations with exceptional leaders and critical talent, helping them build the teams that drive growth and shape long-term success.",
    image: "/images/hero.jpg",
    imageAlt: "Recruiter reviewing candidate profiles",
  },

  intro: {
    kicker: "Talent Acquisition",
    heading: "The Right Leaders. The Right Talent. The Right Fit.",
    paragraphs: [
      "Finding exceptional talent takes more than a job posting — it takes a deep understanding of your business, your culture, and the role a hire needs to play.",
      "Kalycor partners with organizations to identify, engage, and secure leaders and critical talent who can make an immediate and lasting impact.",
      "Our approach combines industry expertise, an extensive talent network, and a rigorous process to help you hire with confidence.",
    ],
  },

  capabilities: {
    kicker: "Our Capabilities",
    heading: "A Search Process Built Around Your Business.",
    items: [
      {
        number: "01",
        title: "Executive & Leadership Search",
        description:
          "Identifying and engaging senior leaders whose experience and vision align with where your organization is headed.",
      },
      {
        number: "02",
        title: "Critical Talent Sourcing",
        description:
          "Reaching beyond active job seekers to find specialized professionals with the exact skills your roles demand.",
      },
      {
        number: "03",
        title: "Structured Screening & Assessment",
        description:
          "A rigorous evaluation process that looks at skills, experience, and fit before a candidate ever reaches you.",
      },
      {
        number: "04",
        title: "Offer & Onboarding Support",
        description:
          "Helping close the loop with competitive offer guidance and a smooth transition into the role.",
      },
    ],
  },

  benefits: {
    kicker: "Why Talent Acquisition",
    heading: "Hiring That Drives Growth, Not Just Headcount.",
    body: "Every hire shapes where your organization is headed. We focus on finding talent that fits your business today and can grow with it tomorrow.",
    points: [
      "Access to exceptional leaders and specialized talent",
      "A search process built around your specific needs",
      "Faster time-to-hire without compromising on fit",
      "Support that continues through onboarding",
    ],
  },

  cta: {
    kicker: "Let's Connect",
    heading: "Build the Team That Drives What's Next.",
    body: "Whether you're hiring a single leader or building out a critical function, Kalycor can help you find the right talent.",
    primaryLabel: "Contact Us",
    primaryHref: "/#contact",
    secondaryLabel: "Explore Opportunities",
    secondaryHref: "/#jobs",
  },
};

export default talentAcquisition;
