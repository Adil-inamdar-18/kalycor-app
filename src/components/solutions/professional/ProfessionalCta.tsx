import Link from "next/link";

import { Container } from "@/components/layout";
import { professionalCta } from "@/data/solutions/professionalServices";

export default function ProfessionalCta() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-[#141A32] px-7 py-12 text-white md:px-12 md:py-16 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {professionalCta.kicker}
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {professionalCta.heading}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {professionalCta.body}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={professionalCta.primaryHref}
                className="inline-flex items-center justify-center rounded-md bg-[#e9c176] px-6 py-3 text-sm font-semibold text-[#141A32] transition-colors duration-300 hover:bg-[#ffdea5]"
              >
                {professionalCta.primaryLabel}
              </Link>

              <Link
                href={professionalCta.secondaryHref}
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                {professionalCta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
