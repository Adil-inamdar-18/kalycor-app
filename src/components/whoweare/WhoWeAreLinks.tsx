import Link from "next/link";

import { Container } from "@/components/layout";
import { whoWeAreLinks } from "@/data/whoweare";

export default function WhoWeAreLinks() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Explore Kalycor
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Discover More About Who We Are
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {whoWeAreLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group bg-background p-8 transition-colors duration-300 hover:bg-primary md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary-foreground md:text-2xl">
                    {link.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/80">
                    {link.description}
                  </p>
                </div>

                <span className="text-2xl text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-foreground">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}