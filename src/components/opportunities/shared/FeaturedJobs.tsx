import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout";
import { JobCard } from "@/components/jobs/JobCard";
import { getJobsData } from "@/services/siteService";
import { routes } from "@/config/routes";

const FEATURED_COUNT = 4;

export default function FeaturedJobs() {
  const { jobs } = getJobsData();
  const featured = [...jobs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, FEATURED_COUNT);

  if (featured.length === 0) return null;

  return (
    <section className="bg-background py-20 md:py-20">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Open Roles
            </p>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-heading md:text-4xl">
              Featured opportunities, updated regularly.
            </h2>
          </div>

          <Link
            href={routes.opportunities.searchJobs}
            className="inline-flex shrink-0 items-center gap-2 text-body-sm font-semibold text-primary hover:text-primary-hover"
          >
            View all {jobs.length} open roles
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-3.5">
          {featured.map((job) => (
            <JobCard job={job} key={`${job.title}-${job.company}-${job.date}`} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={routes.opportunities.searchJobs}
            className="inline-flex items-center justify-center rounded-pill border border-primary px-7 py-3 text-button font-semibold text-primary transition-colors duration-base hover:bg-primary hover:text-primary-fg"
          >
            Browse All Jobs
          </Link>
        </div>
      </Container>
    </section>
  );
}
