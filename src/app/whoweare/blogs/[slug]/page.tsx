import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";

import { Footer, Header } from "@/components/landing";
import { Container } from "@/components/layout";
import BlogCard from "@/components/whoweare/blogs/BlogCard";
import BlogsCta from "@/components/whoweare/blogs/BlogsCta";
import ArticleBody from "@/components/whoweare/blogs/article/ArticleBody";
import ArticleProgress from "@/components/whoweare/blogs/article/ArticleProgress";
import ArticleShare from "@/components/whoweare/blogs/article/ArticleShare";
import ArticleToc from "@/components/whoweare/blogs/article/ArticleToc";
import routes from "@/config/routes";
import { blogPosts } from "@/data/blogs";
import {
  formatDate,
  getAdjacentPosts,
  getHeadings,
  getPostBySlug,
  getRelatedPosts,
  postHref,
  readingMinutes,
} from "@/lib/blog";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/** Only the slugs in data/blogs.ts exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Article not found" };

  return {
    title: `${post.title} | Kalycor Insights`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: [post.cover],
    },
  };
}

/**
 * A single article: header with byline, wide cover, a sticky contents list
 * beside a comfortable reading column, then author, previous/next and
 * related reading.
 */
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const headings = getHeadings(post);
  const related = getRelatedPosts(post, 3);
  const { newer, older } = getAdjacentPosts(post);

  return (
    <main>
      <Header />
      <ArticleProgress targetId="article-body" />

      <article>
        {/* Header */}
        <header className="bg-background pb-10 pt-12 md:pb-14 md:pt-16">
          <Container size="narrow">
            <nav aria-label="Breadcrumb" className="text-small text-muted">
              <Link
                href={routes.whoWeAre.blogs}
                className="inline-flex items-center gap-1.5 font-heading font-semibold transition-colors duration-base hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All insights
              </Link>
            </nav>

            <p className="mt-8 inline-block rounded-pill bg-teal-100 px-3 py-1 font-heading text-micro font-semibold uppercase tracking-kicker text-teal-800">
              {post.category}
            </p>

            <h1 className="mt-5 font-heading text-[clamp(32px,4.8vw,56px)] font-bold leading-[1.08] tracking-tight text-heading">
              {post.title}
            </h1>

            <p className="mt-6 font-editorial text-[clamp(19px,2vw,22px)] italic leading-[1.6] text-paragraph">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-line py-5">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-inverse font-heading text-small font-bold text-inverse-fg"
                >
                  K
                </span>
                <div>
                  <p className="font-heading text-small font-semibold text-heading">
                    {post.author}
                  </p>
                  <p className="text-caption text-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true"> &middot; </span>
                    {readingMinutes(post)} min read
                  </p>
                </div>
              </div>

              <ArticleShare title={post.title} />
            </div>
          </Container>
        </header>

        {/* Cover */}
        <Container>
          <div className="relative aspect-[16/8] overflow-hidden rounded-panel shadow-float">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1136px, 100vw"
            />
          </div>
        </Container>

        {/* Reading column with sticky contents */}
        <div className="bg-background py-14 md:py-20">
          <Container>
            <div className="mx-auto grid max-w-[64rem] gap-12 lg:grid-cols-[13rem_minmax(0,42rem)] lg:justify-center lg:gap-16">
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <ArticleToc headings={headings} />
                </div>
              </aside>

              <div id="article-body">
                {/* Key takeaways */}
                <div className="mb-10 rounded-card border border-teal-200 bg-teal-50 p-6 md:p-7">
                  <p className="flex items-center gap-2 font-heading text-caption font-semibold uppercase tracking-kicker text-teal-800">
                    <Lightbulb className="h-4 w-4" aria-hidden="true" />
                    Key takeaways
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {post.takeaways.map((takeaway) => (
                      <li
                        key={takeaway}
                        className="flex items-start gap-3 text-body-sm leading-7 text-heading"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>

                <ArticleBody blocks={post.body} />

                {/* Author */}
                <div className="mt-14 flex items-start gap-5 rounded-card border border-line bg-surface p-6">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-inverse font-heading text-h4 font-bold text-inverse-fg"
                  >
                    K
                  </span>
                  <div>
                    <p className="font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
                      Written by
                    </p>
                    <p className="mt-1 font-heading text-h4 font-bold text-heading">
                      {post.author}
                    </p>
                    <p className="mt-1 text-small leading-6 text-paragraph">
                      {post.authorRole}. Perspectives on people, business, and the
                      changing world of work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Previous / next */}
        {(newer || older) && (
          <nav
            aria-label="More articles"
            className="border-y border-line bg-surface"
          >
            <Container className="grid md:grid-cols-2">
              {older ? (
                <Link
                  href={postHref(older.slug)}
                  className="group flex flex-col gap-2 py-8 transition-colors duration-base hover:text-accent md:pr-10"
                >
                  <span className="inline-flex items-center gap-2 font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
                    <ArrowLeft
                      className="h-4 w-4 transition-transform duration-base group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                    Previous article
                  </span>
                  <span className="font-heading text-h3 font-bold leading-snug text-heading group-hover:text-accent">
                    {older.title}
                  </span>
                </Link>
              ) : (
                <span aria-hidden="true" />
              )}

              {newer ? (
                <Link
                  href={postHref(newer.slug)}
                  className="group flex flex-col gap-2 border-t border-line py-8 transition-colors duration-base md:items-end md:border-l md:border-t-0 md:pl-10 md:text-right"
                >
                  <span className="inline-flex items-center gap-2 font-heading text-caption font-semibold uppercase tracking-kicker text-muted">
                    Next article
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-base group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-heading text-h3 font-bold leading-snug text-heading group-hover:text-accent">
                    {newer.title}
                  </span>
                </Link>
              ) : null}
            </Container>
          </nav>
        )}

        {/* Related reading */}
        <section className="bg-surface-alt py-16 md:py-20">
          <Container>
            <h2 className="font-heading text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              Keep reading
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <BlogCard post={item} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </article>

      <BlogsCta />
      <Footer />
    </main>
  );
}
