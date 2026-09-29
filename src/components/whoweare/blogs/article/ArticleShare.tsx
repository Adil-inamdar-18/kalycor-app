'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Link2, Linkedin, Twitter } from 'lucide-react';

interface ArticleShareProps {
  title: string;
}

const buttonClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-paragraph transition-colors duration-base hover:border-accent hover:text-accent';

/** Copy link + share to LinkedIn / X. Uses the live page URL on click. */
export default function ArticleShare({ title }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — nothing sensible to do */
    }
  };

  const open = (base: string) => {
    window.open(base, '_blank', 'noopener,noreferrer,width=600,height=560');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
        Share
      </span>

      <button type="button" onClick={copy} className={buttonClass} aria-label="Copy link">
        {copied ? (
          <Check className="h-4 w-4 text-success" aria-hidden="true" />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden="true" />
        )}
      </button>

      <button
        type="button"
        className={buttonClass}
        aria-label="Share on LinkedIn"
        onClick={() =>
          open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              window.location.href
            )}`
          )
        }
      >
        <Linkedin className="h-4 w-4" aria-hidden="true" />
      </button>

      <button
        type="button"
        className={buttonClass}
        aria-label="Share on X"
        onClick={() =>
          open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.href
            )}&text=${encodeURIComponent(title)}`
          )
        }
      >
        <Twitter className="h-4 w-4" aria-hidden="true" />
      </button>

      <span className="sr-only" role="status" aria-live="polite">
        {copied ? 'Link copied' : ''}
      </span>
    </div>
  );
}
