import { Container } from "@/components/layout";
import { aboutStory } from "@/data/aboutUs";

export default function AboutStory() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {aboutStory.kicker}
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
              {aboutStory.heading}
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-base leading-8 text-heading md:text-lg">
              {aboutStory.body}
            </p>

            {aboutStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}