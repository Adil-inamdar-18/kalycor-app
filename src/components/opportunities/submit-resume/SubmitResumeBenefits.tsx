import { Check } from "lucide-react";

import { Container } from "@/components/layout";
import { submitResumeBenefits } from "@/data/opportunities/submitResume";

export default function SubmitResumeBenefits() {
  return (
    <section className="bg-[#141A32] py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e9c176]">
              {submitResumeBenefits.kicker}
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {submitResumeBenefits.heading}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {submitResumeBenefits.body}
            </p>

            <ul className="mt-8 space-y-5">
              {submitResumeBenefits.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 text-base text-white/85"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e9c176]/15 text-[#e9c176]">
                    <Check className="size-4" />
                  </span>

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}