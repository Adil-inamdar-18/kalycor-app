/* --------------------------------------------------------------------------
   Blog content.

   Articles are draft editorial copy written to match the topics already
   listed on the site. Swap in your real articles (or wire this file to a
   CMS) — the listing page, category filters, and article pages all read from
   `blogPosts`, so adding an entry here publishes a new page automatically.
   -------------------------------------------------------------------------- */

export type BlogCategory =
  | "Workforce"
  | "Talent"
  | "Technology"
  | "Careers"
  | "Business"
  | "People";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: readonly string[] };

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  title: string;
  /** Short summary shown on cards and as the article standfirst. */
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  author: string;
  authorRole: string;
  cover: string;
  coverAlt: string;
  takeaways: readonly string[];
  body: readonly BlogBlock[];
}

export const blogsMasthead = {
  kicker: "Kalycor Insights",
  heading: "Ideas, insights",
  headingAccent: "& perspectives.",
  body: "Explore perspectives on people, business, workforce solutions, technology, careers, and the changing world of work.",
} as const;

export const blogCategories: readonly BlogCategory[] = [
  "Workforce",
  "Talent",
  "Technology",
  "Careers",
  "Business",
  "People",
];

const author = "Kalycor Editorial Team";
const authorRole = "Insights from across Kalycor";

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "building-workforce-strategies-for-a-changing-business-landscape",
    category: "Workforce",
    title: "Building Workforce Strategies for a Changing Business Landscape",
    description:
      "How organizations can adapt their workforce strategies to changing business needs and evolving talent expectations.",
    date: "2026-09-15",
    author,
    authorRole,
    cover: "/images/blog11.jpg",
    coverAlt: "A team reviewing plans and charts around a shared table",
    takeaways: [
      "Plan around the work that needs doing, not just the roles on an org chart.",
      "Build flexibility in from the start so the plan can move with the business.",
      "Treat people as the foundation of the strategy, not an input to it.",
    ],
    body: [
      {
        type: "p",
        text: "Business priorities rarely hold still for long. Markets shift, projects expand, and the skills a team needs this quarter may look different by the next. Workforce strategies built for a stable world can struggle to keep up.",
      },
      { type: "h2", text: "Start with the work, not the headcount" },
      {
        type: "p",
        text: "Traditional planning begins with the number of positions to fill. A more resilient approach begins with the outcomes the business needs and the capabilities required to deliver them. Once those are clear, the right mix of permanent hires, flexible talent, and specialist support becomes much easier to see.",
      },
      { type: "h2", text: "Build flexibility into the plan" },
      {
        type: "p",
        text: "Flexibility is easier to design in than to add later. That can mean combining core teams with contract or project-based talent, defining how capacity scales up or down, and agreeing early how new skills will be sourced when priorities change.",
      },
      {
        type: "quote",
        text: "A workforce strategy is only as strong as its ability to adapt.",
      },
      { type: "h2", text: "Keep people at the center" },
      {
        type: "p",
        text: "The best strategies do not treat people as interchangeable resources. Clear expectations, meaningful work, and room to grow help organizations attract and keep the talent they rely on, whatever shape the team takes.",
      },
      {
        type: "p",
        text: "Review the plan regularly. A strategy that is revisited as conditions change will always outperform one that was perfect on the day it was written.",
      },
    ],
  },
  {
    slug: "connecting-the-right-talent-with-the-right-opportunity",
    category: "Talent",
    title: "Connecting the Right Talent With the Right Opportunity",
    description:
      "Why meaningful connections between people and organizations can create stronger and more sustainable outcomes.",
    date: "2026-08-20",
    author,
    authorRole,
    cover: "/images/opportunities/submit-resume.jpg",
    coverAlt: "A candidate and a hiring manager talking across a desk",
    takeaways: [
      "Fit is about more than skills on paper: it includes goals, environment, and working style.",
      "Understanding both sides before making an introduction leads to better matches.",
      "Lasting placements benefit the professional and the organization.",
    ],
    body: [
      {
        type: "p",
        text: "A resume can show what someone has done. It rarely shows what they want to do next, how they like to work, or the kind of team where they will thrive. Yet those are often the details that decide whether a placement succeeds.",
      },
      { type: "h2", text: "Look beyond the job description" },
      {
        type: "p",
        text: "Job descriptions list requirements, but the real picture is broader. Team dynamics, pace of work, growth opportunities, and the organization\u2019s direction all shape whether a role is a good fit. Talking through these openly helps both sides make better decisions.",
      },
      {
        type: "quote",
        text: "The strongest matches begin with genuine understanding on both sides.",
      },
      { type: "h2", text: "Why fit-first pays off" },
      {
        type: "p",
        text: "When a professional joins an organization that matches their skills and ambitions, they contribute sooner and stay longer. For the organization, that means less disruption, stronger teams, and a better return on every hiring decision.",
      },
      {
        type: "list",
        items: [
          "Clarify what success looks like in the first year.",
          "Share honest information about the team and the role.",
          "Check for alignment on goals as well as on skills.",
        ],
      },
    ],
  },
  {
    slug: "technology-that-helps-businesses-move-forward",
    category: "Technology",
    title: "Technology That Helps Businesses Move Forward",
    description:
      "Exploring how technology and smarter solutions can help organizations improve efficiency and create new possibilities.",
    date: "2026-07-14",
    author,
    authorRole,
    cover: "/images/opportunities/global-talent-center.jpg",
    coverAlt: "A hand touching a glowing network of connected icons",
    takeaways: [
      "Start from the business problem, then choose the technology.",
      "Small, well-chosen improvements often beat large, complex overhauls.",
      "Technology works best when people are ready and supported to use it.",
    ],
    body: [
      {
        type: "p",
        text: "It is easy to be drawn to the newest tool. The organizations that get the most from technology, however, tend to start somewhere less exciting: a clear understanding of the problem they are trying to solve.",
      },
      { type: "h2", text: "Begin with the problem" },
      {
        type: "p",
        text: "Whether the goal is to reduce manual effort, improve visibility, or serve customers faster, defining the outcome first keeps technology decisions grounded. It also makes success measurable, which is what allows an investment to be judged fairly.",
      },
      { type: "h2", text: "Favor steady progress" },
      {
        type: "p",
        text: "Not every improvement needs to be transformational. Automating a repetitive task or connecting two disconnected systems can free up meaningful time, and those gains build confidence for larger changes later.",
      },
      {
        type: "quote",
        text: "The right technology quietly removes friction from the way people already work.",
      },
      { type: "h2", text: "Prepare the people" },
      {
        type: "p",
        text: "Even the best platform delivers little if the people using it are unsure or unsupported. Training, clear ownership, and open feedback loops turn a new tool into a real capability.",
      },
    ],
  },
  {
    slug: "building-a-career-around-possibility",
    category: "Careers",
    title: "Building a Career Around Possibility",
    description:
      "Practical perspectives for professionals looking to develop their skills and discover new career opportunities.",
    date: "2026-06-18",
    author,
    authorRole,
    cover: "/images/jobs-hero.png",
    coverAlt: "A professional smiling at a laptop in a bright modern workspace",
    takeaways: [
      "Treat your career as a series of experiments, not a fixed path.",
      "Skills you can carry between roles are your most durable asset.",
      "Ask for feedback and conversations early, before you need them.",
    ],
    body: [
      {
        type: "p",
        text: "Few careers follow a straight line anymore. Roles evolve, industries change, and the skills that matter most keep shifting. That can feel uncertain, but it also opens up more paths than earlier generations of professionals had.",
      },
      { type: "h2", text: "Invest in portable skills" },
      {
        type: "p",
        text: "Communication, problem solving, and the ability to learn quickly travel with you from role to role. Pair them with a few deeper specialties and you have a foundation that stays valuable as the market changes.",
      },
      {
        type: "quote",
        text: "Curiosity is one of the most reliable career strategies there is.",
      },
      { type: "h2", text: "Stay open to what is next" },
      {
        type: "p",
        text: "Some of the best opportunities come from unexpected conversations. Keeping your profile current, talking to people in roles you find interesting, and saying yes to stretch projects all widen the range of possibilities in front of you.",
      },
      {
        type: "list",
        items: [
          "Set aside regular time to learn something new.",
          "Keep an up-to-date record of your achievements.",
          "Build relationships before you need them.",
        ],
      },
    ],
  },
  {
    slug: "from-business-challenges-to-smarter-solutions",
    category: "Business",
    title: "From Business Challenges to Smarter Solutions",
    description:
      "Understanding business challenges and creating solutions that are designed around real organizational needs.",
    date: "2026-05-12",
    author,
    authorRole,
    cover: "/images/approach-new3.jpeg",
    coverAlt: "A group of colleagues in a meeting at a boardroom table",
    takeaways: [
      "A well-defined challenge is half of the solution.",
      "Solutions designed around real needs are adopted faster and last longer.",
      "Involve the people who will use the solution from the very beginning.",
    ],
    body: [
      {
        type: "p",
        text: "Every organization has challenges that are easy to describe but hard to solve. Capacity gaps, skills shortages, and stretched processes all show up in familiar ways, yet the root cause is often less obvious.",
      },
      { type: "h2", text: "Define the real challenge" },
      {
        type: "p",
        text: "Before designing a solution, it helps to ask what is actually happening and why. Speaking with the people closest to the work often reveals constraints that are invisible from the top, and those insights shape a far better answer.",
      },
      { type: "h2", text: "Design around real needs" },
      {
        type: "p",
        text: "Generic answers rarely fit specific situations. Solutions that respect an organization\u2019s size, culture, and goals are easier to adopt, easier to maintain, and more likely to deliver results that last.",
      },
      {
        type: "quote",
        text: "The best solutions feel obvious in hindsight because they were built around the real problem.",
      },
      {
        type: "p",
        text: "Finally, keep listening after the solution is live. Needs change, and a good solution changes with them.",
      },
    ],
  },
  {
    slug: "why-people-remain-at-the-center-of-business",
    category: "People",
    title: "Why People Remain at the Center of Business",
    description:
      "A people-first perspective on building stronger teams, better relationships, and long-term business value.",
    date: "2026-04-09",
    author,
    authorRole,
    cover: "/images/approach-new4.jpeg",
    coverAlt: "A team of five professionals standing together and smiling",
    takeaways: [
      "Strong relationships underpin strong results.",
      "Teams perform best when people feel respected and heard.",
      "Long-term value is built through trust, not transactions.",
    ],
    body: [
      {
        type: "p",
        text: "Tools, processes, and platforms keep evolving, but the fundamentals of business have not changed: it is people who build, decide, serve, and connect. Organizations that remember this tend to build stronger, more resilient teams.",
      },
      { type: "h2", text: "Relationships drive results" },
      {
        type: "p",
        text: "Trust makes everything else easier. When colleagues, clients, and partners trust each other, communication is clearer, problems surface earlier, and collaboration comes naturally.",
      },
      {
        type: "quote",
        text: "Businesses do not create value on their own. People do.",
      },
      { type: "h2", text: "Create space to contribute" },
      {
        type: "p",
        text: "People do their best work when they feel respected and heard. Clear expectations, honest feedback, and opportunities to grow help every team member contribute with confidence.",
      },
      {
        type: "list",
        items: [
          "Listen first and act on what you hear.",
          "Recognize contribution, not just outcomes.",
          "Invest in long-term relationships over short-term wins.",
        ],
      },
    ],
  },
];

export const blogsCta = {
  kicker: "Stay Connected",
  heading: "Keep exploring what comes next.",
  body: "Discover more about Kalycor, our solutions, and the people and ideas shaping the future of work.",
  primaryLabel: "Explore Solutions",
  primaryHref: "/#solutions",
  secondaryLabel: "Contact Us",
  secondaryHref: "/contact",
} as const;
