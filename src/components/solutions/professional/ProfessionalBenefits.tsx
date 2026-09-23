import { Check } from "lucide-react";

import { Container } from "@/components/layout";
import { professionalBenefits } from "@/data/solutions/professionalServices";

export default function ProfessionalBenefits() {
  return (
    <section className="bg-[#141A32] py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {professionalBenefits.kicker}
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {professionalBenefits.heading}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              {professionalBenefits.body}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-9">
            <div className="space-y-6">
              {professionalBenefits.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Check size={15} />
                  </span>

                  <p className="leading-7 text-white/80">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}