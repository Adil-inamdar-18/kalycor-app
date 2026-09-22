import type { ReachUsPageData } from '@/types/reach-us';

export const reachUsPage: ReachUsPageData = {
  hero: {
    image: '/images/reach-us/reach-us-hero.jpg',
    kicker: 'Reach Us',
    title: ['Let’s Find', 'the Right Way Forward.'],
    description:
      'Whether you are looking for talent, exploring your next career opportunity, or referring a candidate, we are here to connect you with the right team.',
  },

  options: [
    {
      id: 'find-talent',
      title: 'Find Talent',
      description:
        'Connect with our team to discover workforce and talent solutions designed around your business needs.',
      label: 'Find Talent',
      href: '/reach-us/find-talent',
      image: '/images/reach-us/find-talent.jpg',
    },
    {
      id: 'find-jobs',
      title: 'Find Jobs',
      description:
        'Explore career opportunities and connect with roles that match your skills, experience, and goals.',
      label: 'Find Jobs',
      href: '/reach-us/find-jobs',
      image: '/images/reach-us/find-jobs.jpg',
    },
    {
      id: 'refer-candidate',
      title: 'Refer a Candidate',
      description:
        'Know someone who could be a great fit? Refer a candidate and help connect them with the right opportunity.',
      label: 'Refer a Candidate',
      href: '/reach-us/refer-a-candidate',
      image: '/images/reach-us/refer-candidate.jpg',
    },
  ],
};

export default reachUsPage;