import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Container } from '@/components/layout';
import { formatDate, getSortedPosts, postHref, readingMinutes } from '@/lib/blog';

import { Kicker } from '../shared/Kicker';

/** Featured story plus two "top stories" — the classic magazine front page. */
export default function BlogFeatured() {
  const [lead, ...others] = getSortedPosts();
  const topStories = others.slice(0, 2);

  if (!lead) return null;

  return (
    <section className="bg-background py-14 md:py-20">
      <Container>
        <Kicker className="mb-8">Featured</Kicker>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          {/* Lead story */}
          <article className="group">
            <Link href={postHref(lead.slug)} className="block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-panel shadow-float">
                <Image
                  src={lead.cover}
                  alt={lead.coverAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-[700ms] group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 700px, 100vw"
                />
              </div>

              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-muted">
                <span className="rounded-pill bg-teal-100 px-3 py-1 font-heading text-micro font-semibold uppercase tracking-kicker text-teal-800">
                  {lead.category}
                </span>
                <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{readingMinutes(lead)} min read</span>
              </p>

              <h2 className="mt-4 font-display text-[clamp(28px,3.4vw,42px)] font-medium leading-[1.15] tracking-tight text-heading transition-colors duration-base group-hover:text-accent">
                {lead.title}
              </h2>
              <p className="mt-4 max-w-2xl text-body-lg leading-8 text-paragraph">
                {lead.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-heading text-button font-semibold text-accent">
                Read the story
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-base group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </article>

          {/* Top stories */}
          <aside aria-label="Top stories" className="lg:border-l lg:border-line lg:pl-14">
            <h2 className="font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
              Top stories
            </h2>
            <ol className="mt-6 divide-y divide-line">
              {topStories.map((post, index) => (
                <li key={post.slug} className="py-6 first:pt-0 last:pb-0">
                  <Link href={postHref(post.slug)} className="group/story flex gap-5">
                    <span
                      aria-hidden="true"
                      className="font-display text-[40px] font-medium italic leading-none text-teal-200"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-heading text-micro font-semibold uppercase tracking-kicker text-accent">
                        {post.category}
                      </p>
                      <h3 className="mt-1.5 font-heading text-h3 font-bold leading-snug text-heading transition-colors duration-base group-hover/story:text-accent">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-caption text-muted">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span aria-hidden="true"> &middot; </span>
                        {readingMinutes(post)} min read
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </Container>
    </section>
  );
}
