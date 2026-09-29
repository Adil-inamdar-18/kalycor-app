import { blogPosts, type BlogBlock, type BlogPost } from '@/data/blogs';
import { routes } from '@/config/routes';

/** URL of a single article. */
export const postHref = (slug: string) => `${routes.whoWeAre.blogs}/${slug}`;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Newest first. */
export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

/** "September 15, 2026" — pinned to UTC so server and browser always agree. */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function blockText(block: BlogBlock): string {
  return block.type === 'list' ? block.items.join(' ') : block.text;
}

/** Whole minutes to read, at ~220 words per minute, never below 1. */
export function readingMinutes(post: BlogPost): number {
  const words = post.body
    .map(blockText)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Stable id for a heading so the table of contents can link to it. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getHeadings(post: BlogPost): { id: string; text: string }[] {
  return post.body.flatMap((block) =>
    block.type === 'h2'
      ? [{ id: slugifyHeading(block.text), text: block.text }]
      : []
  );
}

/** Same-category posts first, topped up with the newest others. */
export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const others = getSortedPosts().filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...same, ...rest].slice(0, count);
}

/** Previous = the next-older article, next = the next-newer one. */
export function getAdjacentPosts(post: BlogPost) {
  const sorted = getSortedPosts();
  const index = sorted.findIndex((p) => p.slug === post.slug);
  return {
    newer: index > 0 ? sorted[index - 1] : undefined,
    older: index < sorted.length - 1 ? sorted[index + 1] : undefined,
  };
}
