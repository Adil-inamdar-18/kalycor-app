import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: `${site.name} — Find Your Next Job`,
  description:
    'Discover roles that match your skills, experience and career goals. Search thousands of jobs across Technology, Banking, Healthcare, Retail and more.',
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-surface="jobs" className="min-h-screen bg-background text-paragraph">
      {children}
    </div>
  );
}
