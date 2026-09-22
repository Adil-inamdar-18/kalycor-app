/**
 * Every URL in the site lives here. Change a path once and every header,
 * footer, hero and CTA across the three pages follows.
 */
export const routes = {
  home: '/',
  jobs: '/jobs',
  business: '/for-business',
  industries: {
    agriculture: '/industries/agriculture',
    importExport: '/industries/import-export',
    realEstate: '/industries/realestate',
    security: '/industries/security',
  },
} as const;

/** In-page anchors, per page. */
export const anchors = {
  landing: {
    home: '#home',
    solutions: '#solutions',
    industries: '#industries',
    whoWeAre: '#who-we-are',
    opportunities: '#opportunities',
    contact: '/contact',
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
    contact: '/contact',
  },
} as const;

/** Cross-page links (landing ➝ jobs / for-business and back). */
export const crossLinks = {
  findJob: routes.jobs,
  hireTalent: routes.business,
  backHome: routes.home,
  contactOnHome: `${routes.home}${anchors.landing.contact}`,
  /** The real contact form lives on /for-business — used by pages (like
   *  industries) that don't have a contact section of their own. */
  contact: `${routes.business}${anchors.business.contact}`,
} as const;

export default routes;
