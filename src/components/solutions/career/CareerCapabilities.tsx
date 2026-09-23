import { Container } from "@/components/layout";
import { careerCapabilities } from "@/data/solutions/careerOpportunities";

export default function CareerCapabilities() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {careerCapabilities.kicker}
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {careerCapabilities.heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {careerCapabilities.items.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-border bg-background p-7 md:p-8"
            >
              <p className="mb-6 text-sm font-semibold tracking-[0.15em] text-primary">
                {item.number}
              </p>

              <h3 className="text-2xl font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}