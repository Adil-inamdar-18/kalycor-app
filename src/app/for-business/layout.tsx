import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: `${site.name} for Business | ${site.tagline}`,
  description:
    'Kalycor connects people, businesses, and opportunities through smarter solutions built for a changing world.',
  openGraph: {
    title: `${site.name} for Business | ${site.tagline}`,
    description:
      'We connect people, businesses, and opportunities through smarter solutions built for a changing world.',
    type: 'website',
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-surface="business"
      className="min-h-screen bg-background font-sans text-paragraph antialiased"
    >
      {children}
    </div>
  );
}
