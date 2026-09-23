import Link from "next/link";

import { Container } from "@/components/layout";
import { diversityCta } from "@/data/diversityInclusion";

export default function DiversityCta() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-[#141A32] px-7 py-12 md:px-12 md:py-16 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {diversityCta.kicker}
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {diversityCta.heading}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {diversityCta.body}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={diversityCta.primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-[#e9c176] px-7 py-3.5 text-sm font-semibold text-[#141A32] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {diversityCta.primaryLabel}
              </Link>

              <Link
                href={diversityCta.secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#141A32]"
              >
                {diversityCta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}