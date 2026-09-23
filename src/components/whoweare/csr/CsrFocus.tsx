import { Container } from "@/components/layout";
import { csrFocus } from "@/data/csr";

export default function CsrFocus() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {csrFocus.kicker}
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {csrFocus.heading}
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {csrFocus.items.map((item) => (
              <div
                key={item.number}
                className="bg-background p-7 md:p-8"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
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