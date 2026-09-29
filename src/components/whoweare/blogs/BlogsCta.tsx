import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout";
import { blogsCta } from "@/data/blogs";

import { Kicker } from "../shared/Kicker";

/** Slim editorial closing band, not a full banner. */
export default function BlogsCta() {
  return (
    <section className="border-t border-line bg-background py-16 md:py-20">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <Kicker className="mb-3">{blogsCta.kicker}</Kicker>
          <h2 className="font-display text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.15] tracking-tight text-heading">
            {blogsCta.heading}
          </h2>
          <p className="mt-3 leading-7 text-paragraph">{blogsCta.body}</p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href={blogsCta.primaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-button bg-btn-solid px-6 py-[13px] font-heading text-button font-medium text-btn-solid-fg transition-colors duration-fast hover:bg-btn-solid-hover"
          >
            {blogsCta.primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={blogsCta.secondaryHref}
            className="inline-flex items-center justify-center rounded-button border border-btn-outline-border px-6 py-[13px] font-heading text-button font-medium text-btn-outline-fg transition-colors duration-fast hover:bg-btn-outline-hover hover:text-btn-outline-hover-fg"
          >
            {blogsCta.secondaryLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
