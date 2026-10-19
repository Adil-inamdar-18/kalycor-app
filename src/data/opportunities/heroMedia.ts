export interface HeroMedia {
  video?: string;
  image: string;
}

export const heroMedia = {
  joinUs: {
    video: "/videos/technology-and-platform.mp4",
    image: "/images/opportunities/join-us.jpg",
  },
  submitResume: {
    video: "/videos/Scaled Hiring.mp4",
    image: "/images/opportunities/submit-resume.jpg",
  },
  referralProgram: {
    video: "/videos/Workforce creation & deployment.mp4",
    image: "/images/opportunities/referral-program.jpg",
  },
  globalTalentCenter: {
    video: "/videos/talent.mp4",
    image: "/images/opportunities/global-talent-center.jpg",
  },
  globalTalentAssistance: {
    video: "/videos/Technology & platform.mp4",
    image: "/images/opportunities/global-talent-assistance.jpg",
  },
  events: {
    video: "/videos/flexible work solution.mp4",
    image: "/images/opportunities/events.jpg",
  },

  fallback: {
    video: "/videos/technology-and-platform.mp4",
    image: "/images/opportunities/join-us.jpg",
  },
} as const satisfies Record<string, HeroMedia>;
