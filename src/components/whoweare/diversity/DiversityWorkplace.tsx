import { Check } from "lucide-react";

import { Container } from "@/components/layout";
import { diversityWorkplace } from "@/data/diversityInclusion";

export default function DiversityWorkplace() {
  return (
    <section className="bg-[#141A32] py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {diversityWorkplace.kicker}
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {diversityWorkplace.heading}
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-white/70 md:text-lg">
              {diversityWorkplace.body}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {diversityWorkplace.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 border-t border-white/15 pt-5"
                >
                  <Check
                    size={18}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0 text-[#e9c176]"
                  />

                  <p className="text-sm leading-6 text-white/80 md:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}