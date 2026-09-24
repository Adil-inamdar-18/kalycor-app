import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout";
import { blogPosts } from "@/data/blogs";

export default function BlogGrid() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group flex h-full flex-col rounded-2xl border border-line bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {post.category}
                </span>

                <span className="text-xs text-muted">
                  {post.date}
                </span>
              </div>

              <h2 className="mt-7 text-xl font-semibold leading-tight text-heading md:text-2xl">
                {post.title}
              </h2>

              <p className="mt-4 flex-1 leading-7 text-muted">
                {post.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
                Read More

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}