import type { Metadata } from 'next';
import { site } from '@/config/site';
import { Footer, Header } from '@/components/landing';
// UtilityBar is available in '@/components/landing' but currently disabled
// on the landing page (see the commented-out usage below). Re-add the
// import if it's switched back on.

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    'Kalycor connects people, businesses, and opportunities through solutions built for a changing world. Flexible workforce and talent solutions shaped around the challenge in front of you.',
  keywords: [
    'Kalycor',
    'talent solutions',
    'workforce solutions',
    'recruitment',
    'staffing',
    'global capability centers',
    'digital transformation',
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      'Kalycor connects people, businesses, and opportunities through solutions built for a changing world.',
    type: 'website',
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-surface="landing" className="min-h-screen bg-background text-paragraph">
      {/* <UtilityBar /> */}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
