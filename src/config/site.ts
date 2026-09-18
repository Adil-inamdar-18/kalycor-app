import { crossLinks, routes } from './routes';

/**
 * Brand-level configuration: naming, copy for the shared CTAs and the
 * social links. Pages read from here instead of hard-coding strings.
 */
export const site = {
  name: 'Kalycor',
  /** The wordmark is rendered in two differently coloured halves. */
  nameParts: ['Kaly', 'cor'] as const,
  tagline: "Shaping What's Next",
  description:
    'Kalycor connects people, businesses, and opportunities through solutions built for a changing world.',
  logo: {
    src: '/images/logo.png',
    width: 58,
    height: 58,
    alt: 'Kalycor logo',
  },
  ctas: {
    hireTalent: { label: 'Hire Talent', href: crossLinks.hireTalent },
    findJob: { label: 'Find a Job', href: crossLinks.findJob },
    findJobShort: { label: 'Find Job', href: crossLinks.findJob },
    exploreSolutions: { label: 'Explore Solutions', href: crossLinks.hireTalent },
    findOpportunity: { label: 'Find Your Opportunity', href: crossLinks.findJob },
    exploreOpportunities: {
      label: 'Explore Opportunities',
      href: crossLinks.findJob,
    },
  },
  routes,
} as const;

export default site;
