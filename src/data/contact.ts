import type { ContactPageData } from "@/types/contact";

export const contactPage: ContactPageData = {
  hero: {
    image: "/images/contact/contact-the-hero.jpg",
    kicker: "Get In Touch",
    title: ["Let’s Connect", "and Create What’s Next."],
    description:
      "Whether you’re looking for talent, exploring new opportunities, or looking to work with us, our team is here to help you take the next step.",
  },

  offices: {
    kicker: "Our Offices",
    heading: "Connect With Us Across Locations.",
    description:
      "Our teams connect businesses, talent, and opportunities across key locations in India and around the world.",

    india: [
      {
        id: "mumbai",
        country: "India",
        city: "Mumbai",
        address: "Office address here",
        phone: "+91 XXX XXX XXXX",
        email: "contact@kalycor.com",
        mapUrl: "#",
      },
      {
        id: "pune",
        country: "India",
        city: "Pune",
        address: "Office address here",
        phone: "+91 XXX XXX XXXX",
        email: "contact@kalycor.com",
        mapUrl: "#",
      },
      {
        id: "nashik",
        country: "India",
        city: "Nashik",
        address: "Office address here",
        phone: "+91 XXX XXX XXXX",
        email: "contact@kalycor.com",
        mapUrl: "#",
      },
    ],

    international: [
      {
        id: "usa",
        country: "United States",
        city: "City Name",
        address: "Office address here",
        phone: "+1 XXX XXX XXXX",
        email: "contact@kalycor.com",
        mapUrl: "#",
      },
      {
        id: "uk",
        country: "United Kingdom",
        city: "City Name",
        address: "Office address here",
        phone: "+44 XXX XXX XXXX",
        email: "contact@kalycor.com",
        mapUrl: "#",
      },
    ],
  },

  reachUs: {
    kicker: "Reach Us",
    heading: "How Can We Help?",
    description:
      "Whether you are looking for talent, your next opportunity, or want to refer someone, we are here to help.",

  items: [
  {
    id: 'find-talent',
    title: 'Find Talent',
    description:
      'Looking for the right people for your business? Connect with our team to explore talent and workforce solutions.',
    href: '/for-business',
    label: 'Find Talent',
    image: '/images/contact/find-talents.jpg',
  },
  {
    id: 'find-jobs',
    title: 'Find Jobs',
    description:
      'Looking for your next opportunity? Explore career possibilities and connect with roles that match your goals.',
    href: '/jobs',
    label: 'Find Jobs',
    image: '/images/contact/find-jobss.jpg',
  },
  {
    id: 'refer-candidate',
    title: 'Refer a Candidate',
    description:
      'Know someone who could be a great fit? Refer a candidate and help connect talent with the right opportunity.',
    href: '/reach-us',
    label: 'Refer a Candidates',
    image: '/images/contact/refer-candidates.jpg',
  },
],
  },

  form: {
    kicker: "Send a Message",
    heading: "Tell Us How We Can Help.",
    description:
      "Share a few details and the right team will get back to you.",
    topics: [
      "Hiring talent",
      "Looking for a job",
      "Referring a candidate",
      "Something else",
    ],
  },
};

export default contactPage;