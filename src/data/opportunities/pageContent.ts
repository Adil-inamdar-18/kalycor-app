/**
 * Extra content for the redesigned Opportunities pages.
 * PLACEHOLDER COPY: events, FAQ answers and hiring steps are sample content
 * for the layouts — replace with real details before launch.
 */

export const joinSteps = [
  { title: "Apply or introduce yourself", body: "Pick an open role or share your resume." },
  { title: "Conversation", body: "A short chat about your goals and experience." },
  { title: "Team match", body: "We look at where your skills fit best." },
  { title: "Welcome", body: "Onboarding and a clear first few weeks." },
] as const;

export const referralFaq = [
  { q: "Who can refer someone?", a: "Anyone. Clients, colleagues, friends and past candidates are all welcome to refer talent." },
  { q: "Does the person need to know I'm referring them?", a: "Yes. Only share details of someone who has agreed to be contacted by Kalycor." },
  { q: "What happens after I submit?", a: "Our team reviews the profile against current and upcoming roles and reaches out to the candidate if there is a fit." },
] as const;

export const assistanceAudiences = [
  {
    key: "professional",
    label: "I'm a professional",
    lead: "Exploring a role in another market?",
    steps: [
      "Tell us your skills, experience and where you want to work.",
      "We match you with organizations hiring across markets.",
      "We introduce you and support the conversation.",
      "We stay in touch as you plan next steps.",
    ],
  },
  {
    key: "organization",
    label: "We're an organization",
    lead: "Looking for talent beyond one market?",
    steps: [
      "Share the roles, skills and timelines you are working with.",
      "We search our global talent network for relevant profiles.",
      "Shortlisted professionals are introduced to your team.",
      "We support the connection through to next steps.",
    ],
  },
] as const;

export const assistanceRegions = ["Asia-Pacific", "Middle East", "Europe", "North America", "Africa"] as const;

export const eventTypes = ["Career", "Networking", "Industry", "Community"] as const;
export type EventType = (typeof eventTypes)[number];

export interface KalycorEvent {
  id: string;
  title: string;
  type: EventType;
  format: "In person" | "Virtual";
  date: string; // ISO yyyy-mm-dd
  time: string;
  location: string;
  blurb: string;
}

export const eventsList: readonly KalycorEvent[] = [
  { id: "career-open-day", title: "Kalycor Career Open Day", type: "Career", format: "In person", date: "2026-10-17", time: "10:00 AM – 3:00 PM", location: "Nagpur", blurb: "Meet our recruiters, discuss open roles and get resume feedback." },
  { id: "talent-networking", title: "Talent & Business Networking Evening", type: "Networking", format: "In person", date: "2026-11-05", time: "6:00 PM – 8:30 PM", location: "Mumbai", blurb: "An evening for professionals and hiring teams to connect." },
  { id: "global-hiring-talk", title: "Hiring Across Borders: A Live Panel", type: "Industry", format: "Virtual", date: "2026-11-19", time: "4:00 PM – 5:00 PM IST", location: "Online", blurb: "Practical conversations on building teams across markets." },
  { id: "community-meetup", title: "Community Career Meetup", type: "Community", format: "In person", date: "2026-12-06", time: "11:00 AM – 1:00 PM", location: "Bangalore", blurb: "Informal meetup for early-career and returning professionals." },
  { id: "resume-clinic", title: "Resume Clinic Workshop", type: "Career", format: "Virtual", date: "2026-09-12", time: "5:00 PM – 6:00 PM IST", location: "Online", blurb: "Hands-on session on presenting your experience clearly." },
  { id: "industry-roundtable", title: "Industry Roundtable", type: "Industry", format: "In person", date: "2026-08-22", time: "3:00 PM – 5:00 PM", location: "Pune", blurb: "Hiring leaders share what they look for in candidates." },
] as const;
