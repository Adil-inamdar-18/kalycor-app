import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import type { BlogPost } from '@/data/blogs';
import { formatDate, postHref, readingMinutes } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

/** Standard article card: cover, category, title, excerpt, date and read time. */
export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-all duration-slow hover:-translate-y-1 hover:shadow-float">
      <Link
        href={postHref(post.slug)}
        className="flex h-full flex-col focus-visible:outline-offset-[-3px]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-alt">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          />
          <span className="absolute left-4 top-4 rounded-pill bg-surface/95 px-3 py-1 font-heading text-micro font-semibold uppercase tracking-kicker text-heading">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-caption text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true"> &middot; </span>
            {readingMinutes(post)} min read
          </p>

          <h3 className="mt-3 font-heading text-h3 font-bold leading-snug text-heading transition-colors duration-base group-hover:text-accent">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-3 flex-1 text-body-sm leading-7 text-paragraph">
            {post.description}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-small font-semibold text-accent">
            Read article
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
