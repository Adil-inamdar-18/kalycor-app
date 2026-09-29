import { redirect } from "next/navigation";

import { routes } from "@/config/routes";

/** Search Jobs is the existing /jobs page; nothing separate lives here. */
export default function SearchJobsPage() {
  redirect(routes.jobs);
}
