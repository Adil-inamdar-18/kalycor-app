/**
 * Central data-access layer.
 *
 * Every component reads site content through the three functions below
 * instead of importing `src/data/*` directly. Each one currently just
 * returns the matching static data module, so the frontend behaves exactly
 * as it does today.
 *
 * When the backend is ready, swap a function's body for a real fetch, e.g.:
 *
 *   export async function getBusinessData() {
 *     const res = await fetch(`${API_URL}/business`);
 *     return res.json();
 *   }
 *
 * Nothing outside this file has to change for synchronous callers — but an
 * async function can no longer be called directly from a Client Component
 * ("use client"). At that point, fetch it once in the route's Server
 * Component (e.g. `app/for-business/page.tsx`) and pass the result down as
 * props to the section components that need it, which is the standard
 * Next.js pattern for getting server-fetched data into client components.
 */

import * as landing from '@/data/landing';
import * as business from '@/data/business';
import * as jobsData from '@/data/jobs';

/** All content for the landing (`/`) route. */
export function getLandingData() {
  return landing;
}

/** All content for the `/for-business` route. */
export function getBusinessData() {
  return business;
}

/** All content for the `/jobs` route: listings plus filter/search UI data. */
export function getJobsData() {
  return jobsData;
}
