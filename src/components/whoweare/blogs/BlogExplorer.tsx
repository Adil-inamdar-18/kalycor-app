'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { BlogCategory, BlogPost } from '@/data/blogs';
import { clsx } from 'clsx';

import BlogCard from './BlogCard';

interface BlogExplorerProps {
  posts: readonly BlogPost[];
  categories: readonly BlogCategory[];
  /** Hidden while browsing "All" because it is already featured above. */
  featuredSlug?: string;
}

const ALL = 'All' as const;

/** Category chips + search + card grid. */
export default function BlogExplorer({
  posts,
  categories,
  featuredSlug,
}: BlogExplorerProps) {
  const [category, setCategory] = useState<BlogCategory | typeof ALL>(ALL);
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    posts.forEach((p) => map.set(p.category, (map.get(p.category) ?? 0) + 1));
    return map;
  }, [posts]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const browsingEverything = category === ALL && q === '';

    return posts.filter((post) => {
      if (browsingEverything && post.slug === featuredSlug) return false;
      if (category !== ALL && post.category !== category) return false;
      if (q === '') return true;
      return `${post.title} ${post.description} ${post.category}`
        .toLowerCase()
        .includes(q);
    });
  }, [posts, category, query, featuredSlug]);

  const chips: readonly (BlogCategory | typeof ALL)[] = [ALL, ...categories];

  return (
    <Section as="section" id="articles" tone="page" className="scroll-mt-24 bg-surface-alt">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-heading text-h2 font-bold leading-[1.1] tracking-tight text-heading">
            Latest articles
          </h2>

          <label className="relative block w-full lg:max-w-xs">
            <span className="sr-only">Search articles</span>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              className="w-full rounded-pill border border-line bg-surface py-3 pl-11 pr-4 text-small text-heading placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </label>
        </div>

        <div
          role="group"
          aria-label="Filter by topic"
          className="mt-6 flex flex-wrap gap-2"
        >
          {chips.map((chip) => {
            const isActive = chip === category;
            const count = chip === ALL ? posts.length : counts.get(chip) ?? 0;

            return (
              <button
                key={chip}
                type="button"
                aria-pressed={isActive}
                disabled={count === 0}
                onClick={() => setCategory(chip)}
                className={clsx(
                  'rounded-pill border px-4 py-2 font-heading text-small font-semibold transition-colors duration-base disabled:opacity-40',
                  isActive
                    ? 'border-inverse bg-inverse text-inverse-fg'
                    : 'border-line bg-surface text-paragraph hover:border-accent hover:text-accent'
                )}
              >
                {chip}
                <span
                  className={clsx(
                    'ml-2 text-micro',
                    isActive ? 'text-inverse-fg/60' : 'text-muted'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'article' : 'articles'} shown
        </p>

        {visible.length > 0 ? (
          <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((post) => (
                <motion.li
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={post} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        ) : (
          <div className="mt-10 rounded-card border border-dashed border-line bg-surface px-6 py-16 text-center">
            <p className="font-heading text-h3 font-bold text-heading">
              No articles found
            </p>
            <p className="mt-2 text-paragraph">
              Try a different topic or search term.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory(ALL);
                setQuery('');
              }}
              className="mt-6 rounded-button border border-line px-5 py-2.5 font-heading text-small font-semibold text-heading transition-colors duration-base hover:border-accent hover:text-accent"
            >
              Clear filters
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
