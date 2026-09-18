import type { Job } from '@/types';
import { BriefcaseIcon, LocationIcon } from './icons';

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="relative grid grid-cols-1 gap-5 rounded-card border border-line border-l-thick border-l-primary bg-white p-6 shadow-raised transition-all duration-base hover:-translate-y-0.5 hover:border-steel-200 hover:border-l-primary hover:shadow-float sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-[25px]">
      <div>
        <div className="mb-[5px]">
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
            className="text-h3 font-semibold leading-[1.3] text-primary hover:text-primary-hover hover:underline"
          >
            {job.title}
          </a>
        </div>
        <div className="mb-[13px] text-small font-medium text-muted">{job.company}</div>
        <div className="flex flex-wrap items-center gap-3.5 text-caption text-muted">
          <span className="inline-flex items-center gap-1.5">
            <LocationIcon className="h-4 w-4 text-primary" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BriefcaseIcon className="h-4 w-4 text-primary" />
            {job.experience}
          </span>
          <span className="inline-flex min-h-[27px] items-center rounded-pill bg-primary-soft px-[11px] text-micro font-semibold text-primary">
            {job.type}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-start justify-between gap-[18px] sm:flex-col sm:items-end sm:justify-between">
        <span className="whitespace-nowrap rounded-pill bg-graphite-50 px-2.5 py-1.5 text-[11px] text-muted">
          Posted {formatDate(job.date)}
        </span>
        <a
          href="#"
          onClick={(event) => event.preventDefault()}
          className="inline-flex min-h-[39px] min-w-[105px] items-center justify-center rounded-pill border border-primary bg-primary px-[17px] text-caption font-semibold text-primary-fg transition-all duration-base hover:-translate-y-px hover:bg-primary-hover"
        >
          View Job
        </a>
      </div>
    </article>
  );
}

export default JobCard;
