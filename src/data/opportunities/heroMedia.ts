/**
 * Background media for the hero at the top of every Opportunities page.
 *
 * `video` plays muted + looped behind the hero copy. `image` is the poster:
 * it paints instantly (good for LCP), and it is the only thing shown to
 * visitors who prefer reduced motion. The videos already ship in
 * /public/videos (they are shared with the landing page); the posters are
 * frames from those same videos, in /public/images/opportunities.
 *
 * To swap a page's background, change the paths here — nothing else.
 */
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
  /** Fallback for any opportunity page without its own entry. */
  fallback: {
    video: "/videos/technology-and-platform.mp4",
    image: "/images/opportunities/join-us.jpg",
  },
} as const satisfies Record<string, HeroMedia>;
