import type { Job } from '@/types';
import JobCard from './JobCard';

export function JobList({ jobs }: { jobs: readonly Job[] }) {
  return (
    <div className="grid gap-3.5">
      {jobs.map((job) => (
        <JobCard job={job} key={`${job.title}-${job.company}-${job.date}`} />
      ))}
    </div>
  );
}

export default JobList;
