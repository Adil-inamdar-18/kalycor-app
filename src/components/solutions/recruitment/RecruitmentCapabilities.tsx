import { Container } from "@/components/layout";
import { recruitmentCapabilities } from "@/data/solutions/recruitmentPlacement";

export default function RecruitmentCapabilities() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {recruitmentCapabilities.kicker}
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {recruitmentCapabilities.heading}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {recruitmentCapabilities.items.map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-line bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-semibold tracking-[0.15em] text-primary">
                  {item.number}
                </span>

                <span className="h-px w-12 bg-line transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
              </div>

              <h3 className="mt-8 text-xl font-semibold text-heading md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}