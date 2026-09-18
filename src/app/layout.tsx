import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Playfair_Display } from 'next/font/google';
import { site } from '@/config/site';

/*
 * Root layout.
 *
 * Loads the one global stylesheet (design tokens + a small base layer) and
 * the three font families, exposed as CSS variables so the token system in
 * globals.css can point --font-body / --font-heading / --font-display at
 * them. Each route sets data-surface on its own wrapper, which is what
 * re-themes every shared component for that page.
 */

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
