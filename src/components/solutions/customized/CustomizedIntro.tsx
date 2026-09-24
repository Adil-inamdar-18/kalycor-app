import { Container } from "@/components/layout";
import { customizedIntro } from "@/data/solutions/customizedSolutions";

export default function CustomizedIntro() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {customizedIntro.kicker}
            </p>

            <h2 className="max-w-md text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {customizedIntro.heading}
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-muted md:text-lg">
            {customizedIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}