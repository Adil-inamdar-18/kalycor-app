import { Footer, Header } from '@/components/landing';
import { JobBoard } from '@/components/jobs';
import { anchors } from '@/config/routes';

export default function JobsPage() {
  return (
    <>
      <Header />
      <main id={anchors.jobs.top.slice(1)}>
        <JobBoard />
      </main>
      <Footer />
    </>
  );
}
