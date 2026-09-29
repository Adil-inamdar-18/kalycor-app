import Image from "next/image";

import { Container, Section } from "@/components/layout";

import type { IndustryPage } from "@/types";



export function IndustryProcess({
  process,
}: {
  process: IndustryPage["process"];
}) {
  return (
    <Section as="section" tone="inverse" className="relative overflow-hidden">
      {/* Soft glows */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-40 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {process.kicker}
            </p>

            <h2 className="text-h2 font-bold leading-[1.08] tracking-tight text-inverse-fg">
              {process.heading}
            </h2>
          </div>

          <p className="max-w-md text-body leading-7 text-inverse-fg/60">
            {process.description}
          </p>
        </div>

        {/* Flip cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => {
            const image = step.image;

            return (
              <div
                key={step.number}
                tabIndex={0}
                aria-label={`${step.number}. ${step.title}`}
                className="group h-[380px] rounded-2xl outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-accent sm:h-[400px]"
              >
                <div className="relative h-full w-full transition-transform duration-[800ms] ease-out-expo [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] motion-reduce:transition-none">
                  {/* Front */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-deep [backface-visibility:hidden]">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-inverse-fg/[0.10] to-inverse-fg/[0.03] p-7 shadow-deep backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="relative">
                      <h3 className="text-h3 font-semibold leading-tight text-inverse-fg">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-body-sm leading-7 text-inverse-fg/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default IndustryProcess;
