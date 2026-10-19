import { redirect } from "next/navigation";

import { routes } from "@/config/routes";

export default function OpportunitiesPage() {
  redirect(routes.opportunities.joinUs);
}
