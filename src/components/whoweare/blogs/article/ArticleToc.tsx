'use client';

import { useEffect, useState } from 'react';

import { clsx } from 'clsx';

interface ArticleTocProps {
  headings: readonly { id: string; text: string }[];
}

/** "In this article" list that highlights the section being read. */
export default function ArticleToc({ headings }: ArticleTocProps) {
  const [active, setActive] = useState<string>(headings[0]?.id ?? '');

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="In this article">
      <p className="font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
        In this article
      </p>
      <ul className="mt-4 space-y-1 border-l border-line">
        {headings.map((heading) => {
          const isActive = heading.id === active;

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={clsx(
                  '-ml-px block border-l-2 py-1.5 pl-4 text-small leading-5 transition-colors duration-base',
                  isActive
                    ? 'border-accent font-semibold text-heading'
                    : 'border-transparent text-muted hover:text-heading'
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
