import { Building2, Ship, ShieldCheck, Sprout, type LucideIcon } from "lucide-react";

/**
 * "Our Businesses" — independent businesses operated under the Kalycor brand.
 *
 * These are NOT staffing solutions or industries. Each one has its own
 * website on its own domain, so `url` is always an absolute external URL and
 * is opened in a new tab.
 *
 * Domains come from environment variables (see `.env.example`). Each variable
 * is read with a literal `process.env.NEXT_PUBLIC_*` access, which is what
 * lets Next.js inline it into the client bundle.
 *
 * To add a business: add an entry to `businesses` below (and, optionally, an
 * env var). The header mega menu, mobile menu and footer all render from this
 * list, so nothing else needs to change.
 */

export interface Business {
  /** Stable identifier (used for React keys / analytics). */
  key: string;
  name: string;
  description: string;
  /** Absolute URL of the business's own website. */
  url: string;
  icon: LucideIcon;
  /** Card background photo (path under /public). */
  image: string;
}

/** Falls back to the default domain when the env var is unset or blank. */
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
      "https://kalycoragriculture.com",
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
      "https://kalycorexport.com",
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
      "https://kalycorsecurity.com",
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
      "https://kalycorrealestate.com",
    ),
    icon: Building2,
    image: "/images/real-estate.jpg",
  },
];

/** Copy for the "Our Businesses" mega menu. */
export const businessesMenu = {
  heading: "Our Businesses",
  description: "Explore Kalycor's growing portfolio of businesses.",
} as const;

/** Security attributes for every link out to a business website. */
export const businessLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;