export const submitResumeHero = {
  kicker: "Submit Resume",
  heading: "Put Your Experience in Front of the Right Opportunities.",
  body: "Share your resume with Kalycor and let your skills, experience, and career goals connect with relevant opportunities.",
  image: "/images/hero.jpg",
  imageAlt: "Professional preparing a resume",
} as const;

export const submitResumeIntro = {
  kicker: "Share Your Profile",
  heading: "Your Experience Can Open New Possibilities.",
  paragraphs: [
    "Your resume tells the story of your experience, capabilities, and professional journey. Sharing it with Kalycor helps us understand where your profile may fit.",
    "We connect professionals with organizations across different industries and work to identify opportunities that align with relevant skills and experience.",
    "Submit your resume and keep your profile connected to future opportunities.",
  ],
} as const;

export const submitResumeProcess = {
  kicker: "What Happens Next",
  heading: "A Simple Way to Stay Connected.",
  items: [
    {
      number: "01",
      title: "Submit Your Resume",
      description:
        "Share your latest resume and provide the information needed to understand your professional profile.",
    },
    {
      number: "02",
      title: "Profile Review",
      description:
        "Our team reviews your experience, skills, and background to understand potential opportunities.",
    },
    {
      number: "03",
      title: "Opportunity Matching",
      description:
        "When relevant opportunities arise, your profile can be considered based on the requirements of the role.",
    },
    {
      number: "04",
      title: "Connect",
      description:
        "If there is a relevant match, we can help connect you with the appropriate opportunity.",
    },
  ],
} as const;

export const submitResumeBenefits = {
  kicker: "Why Submit Your Resume",
  heading: "Keep the Door Open to Future Opportunities.",
  body: "Even when the right opportunity is not available today, staying connected can create possibilities for tomorrow.",
  points: [
    "Keep your professional profile connected with Kalycor",
    "Be considered for relevant future opportunities",
    "Connect your experience with organizations across industries",
    "Create another pathway for career opportunities",
  ],
} as const;

export const submitResumeCta = {
  kicker: "Stay Connected",
  heading: "Ready to Share Your Profile?",
  body: "Submit your resume and take another step toward discovering opportunities that match your experience and ambitions.",
  primaryLabel: "Submit Resume",
  primaryHref: "#resume-form",
  secondaryLabel: "Search Jobs",
  secondaryHref: "/opportunities/search-jobs",
} as const;
