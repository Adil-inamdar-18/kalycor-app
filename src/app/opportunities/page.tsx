import { redirect } from "next/navigation";

import { routes } from "@/config/routes";

/** The Opportunities menu lands on Join Us; there is no separate overview page. */
export default function OpportunitiesPage() {
  redirect(routes.opportunities.joinUs);
}
