import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout";
import type { OpportunityGridContent } from "@/types";

export default function OpportunityGrid({ kicker, heading, items }: OpportunityGridContent) {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {kicker}
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) =>
            item.href ? (
              <Link
                key={item.number}
                href={item.href}
                className="group relative rounded-2xl border border-line bg-background p-7 shadow-raised transition-all duration-base hover:-translate-y-1 hover:border-primary/40 hover:shadow-float md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="mb-6 text-sm font-semibold tracking-[0.15em] text-primary">
                    {item.number}
                  </p>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-muted transition-all duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden
                  />
                </div>

                <h3 className="text-2xl font-semibold text-heading">{item.title}</h3>

                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              </Link>
            ) : (
              <article
                key={item.number}
                className="rounded-2xl border border-line bg-background p-7 md:p-8"
              >
                <p className="mb-6 text-sm font-semibold tracking-[0.15em] text-primary">
                  {item.number}
                </p>

                <h3 className="text-2xl font-semibold text-heading">{item.title}</h3>

                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              </article>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
