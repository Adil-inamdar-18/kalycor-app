/**
 * Every URL in the site lives here. Change a path once and every header,
 * footer, hero and CTA across the three pages follows.
 */
export const routes = {
  home: '/',
  jobs: '/jobs',
  business: '/for-business',
} as const;

/** In-page anchors, per page. */
export const anchors = {
  landing: {
    home: '#home',
    solutions: '#solutions',
    industries: '#industries',
    whoWeAre: '#who-we-are',
    opportunities: '#opportunities',
    contact: '#contact',
  },
  jobs: {
    top: '#top',
    jobs: '#jobs',
  },
  business: {
    home: '#home',
    solutions: '#solutions',
    services: '#services',
    about: '#about',
    contact: '#contact',
  },
} as const;

/** Cross-page links (landing ➝ jobs / for-business and back). */
export const crossLinks = {
  findJob: routes.jobs,
  hireTalent: routes.business,
  backHome: routes.home,
  contactOnHome: `${routes.home}${anchors.landing.contact}`,
} as const;

export default routes;
