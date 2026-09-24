import Link from "next/link";

import { Container } from "@/components/layout";
import { joinUsCta } from "@/data/opportunities/joinUs";

export default function JoinUsCta() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="rounded-3xl bg-[#141A32] px-6 py-14 text-center text-white sm:px-10 md:py-20 lg:px-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e9c176]">
            {joinUsCta.kicker}
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            {joinUsCta.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            {joinUsCta.body}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={joinUsCta.primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-[#e9c176] px-7 py-3.5 text-sm font-semibold text-[#141A32] transition hover:bg-[#ffdea5]"
            >
              {joinUsCta.primaryLabel}
            </Link>

            <Link
              href={joinUsCta.secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              {joinUsCta.secondaryLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}