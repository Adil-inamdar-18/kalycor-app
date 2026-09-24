import type { SolutionPageContent } from "@/types";

export const managedCapacity: SolutionPageContent = {
  hero: {
    kicker: "Managed Capacity",
    heading: "Dedicated Teams, Managed for Consistent Delivery.",
    body: "We provide managed teams of skilled professionals, giving organizations reliable capacity without the overhead of managing it directly.",
    image: "/images/hero.jpg",
    imageAlt: "Team lead reviewing project progress with a managed team",
  },

  intro: {
    kicker: "Managed Capacity",
    heading: "Capacity You Can Count On, Fully Managed.",
    paragraphs: [
      "Some workforce needs call for more than individual hires — they call for a dedicated team that can be managed as a single, reliable unit.",
      "Kalycor's managed capacity model provides skilled professionals along with the oversight, structure, and accountability to keep them performing.",
      "You get consistent output and a single point of accountability, without adding management overhead to your own team.",
    ],
  },

  capabilities: {
    kicker: "Our Capabilities",
    heading: "Dedicated Teams, End-to-End Management.",
    items: [
      {
        number: "01",
        title: "Dedicated Team Formation",
        description:
          "Assembling a team of professionals matched to your requirements and ways of working.",
      },
      {
        number: "02",
        title: "Delivery Oversight",
        description:
          "Ongoing management of performance, quality, and output against agreed expectations.",
      },
      {
        number: "03",
        title: "Scalable Capacity",
        description:
          "The ability to flex team size up or down as workloads and priorities shift.",
      },
      {
        number: "04",
        title: "Single Point of Accountability",
        description:
          "One clear point of contact for performance, reporting, and resolving issues quickly.",
      },
    ],
  },

  benefits: {
    kicker: "Why Managed Capacity",
    heading: "Reliable Output Without the Management Load.",
    body: "Managing a team well takes time and structure of its own. We take that on, so you get consistent delivery without the overhead.",
    points: [
      "A dedicated team matched to your needs",
      "Consistent delivery with built-in oversight",
      "Capacity that scales with your workload",
      "One point of accountability for performance",
    ],
  },

  cta: {
    kicker: "Let's Connect",
    heading: "Get Capacity You Don't Have to Manage Alone.",
    body: "Whether you need a small dedicated team or a larger managed capability, Kalycor can help you scale with confidence.",
    primaryLabel: "Contact Us",
    primaryHref: "/#contact",
    secondaryLabel: "Explore Opportunities",
    secondaryHref: "/#jobs",
  },
};

export default managedCapacity;
