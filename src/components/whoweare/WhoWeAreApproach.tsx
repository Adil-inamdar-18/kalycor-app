import { Container } from "@/components/layout";
import { whoWeAreApproach } from "@/data/whoweare";

export default function WhoWeAreApproach() {
  return (
    <section className="bg-[#141A32] py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {whoWeAreApproach.kicker}
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              {whoWeAreApproach.heading}
            </h2>

            <p className="mt-6 max-w-md leading-7 text-white/70">
              {whoWeAreApproach.body}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2">
            {whoWeAreApproach.steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#141A32] p-7 md:p-8"
              >
                <span className="text-sm font-medium text-white/40">
                  {step.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}