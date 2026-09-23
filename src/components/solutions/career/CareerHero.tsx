import Image from "next/image";

import { Container } from "@/components/layout";
import { careerHero } from "@/data/solutions/careerOpportunities";

export default function CareerHero() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden">
      <Image
        src={careerHero.image}
        alt={careerHero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#141A32]/75" />

      <Container className="relative z-10 flex min-h-[560px] items-center py-20 md:py-28">
        <div className="max-w-4xl text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            {careerHero.kicker}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {careerHero.heading}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {careerHero.body}
          </p>
        </div>
      </Container>
    </section>
  );
}