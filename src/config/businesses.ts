import {
  Building2,
  Ship,
  ShieldCheck,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export interface Business {
  key: string;
  name: string;
  description: string;

  url: string;
  icon: LucideIcon;

  image: string;
}

const domain = (value: string | undefined, fallback: string) =>
  value && value.trim() ? value.trim() : fallback;

export const businesses: readonly Business[] = [
  {
    key: "agriculture",
    name: "Agriculture",
    description:
      "Sustainable farming, produce and agri-value-chain ventures built for long-term growth.",
    url: domain(
      process.env.NEXT_PUBLIC_AGRICULTURE_URL,
      "https://kalycor-agriculture.vercel.app/",
    ),
    icon: Sprout,
    image: "/images/agri.jpg",
  },
  {
    key: "import-export",
    name: "Import & Export",
    description:
      "Cross-border trade and sourcing that connects quality goods with global markets.",
    url: domain(
      process.env.NEXT_PUBLIC_IMPORT_EXPORT_URL,
      "https://kalycor-import-export.vercel.app/",
    ),
    icon: Ship,
    image: "/images/Export-Import.jpg",
  },
  {
    key: "security",
    name: "Security",
    description:
      "Trained, reliable security services that protect people, property and operations.",
    url: domain(
      process.env.NEXT_PUBLIC_SECURITY_URL,
      "https://kalycor-security.vercel.app/",
    ),
    icon: ShieldCheck,
    image: "/images/monitoring-sec.jpg",
  },
  {
    key: "real-estate",
    name: "Real Estate",
    description:
      "Property development and advisory focused on lasting value for owners and investors.",
    url: domain(
      process.env.NEXT_PUBLIC_REAL_ESTATE_URL,
      "https://kalycor-realestate.vercel.app/",
    ),
    icon: Building2,
    image: "/images/real-estate.jpg",
  },
];

export const businessesMenu = {
  heading: "Our Businesses",
  description: "Explore Kalycor's growing portfolio of businesses.",
} as const;

export const businessLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
