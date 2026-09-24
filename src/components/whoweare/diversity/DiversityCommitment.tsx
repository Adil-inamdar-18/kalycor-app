import { Container } from "@/components/layout";
import { diversityCommitment } from "@/data/diversityInclusion";

export default function DiversityCommitment() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {diversityCommitment.kicker}
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {diversityCommitment.heading}
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {diversityCommitment.items.map((item) => (
              <div
                key={item.number}
                className="bg-background p-7 md:p-8"
              >
                <span className="text-sm font-medium text-muted">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold text-heading">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}