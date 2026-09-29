'use client';

import { useEffect, useState } from 'react';

import { Container } from '@/components/layout';
import { clsx } from 'clsx';

const links = [
  { id: 'story', label: 'Our story' },
  { id: 'mission', label: 'Mission & vision' },
  { id: 'values', label: 'Values' },
  { id: 'journey', label: 'Journey' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'leadership', label: 'Leadership' },
] as const;

/**
 * Sticky in-page navigation, as seen on long corporate "About" pages.
 * Highlights the section currently in view and jumps on click.
 */
export function AboutSubnav() {
  const [active, setActive] = useState<string>(links[0].id);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[76px] z-[150] border-b border-line bg-background/95 backdrop-blur-[8px]"
    >
      <Container>
        <ul className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <li key={link.id} className="shrink-0">
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={clsx(
                    'relative block rounded-button px-4 py-2 font-heading text-small font-medium transition-colors duration-base',
                    isActive
                      ? 'text-heading'
                      : 'text-muted hover:text-heading'
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={clsx(
                      'absolute inset-x-4 -bottom-2 h-0.5 rounded-full bg-accent transition-opacity duration-base',
                      isActive ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}

export default AboutSubnav;
