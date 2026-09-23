import { Container } from "@/components/layout";
import { aboutValues } from "@/data/aboutUs";

export default function AboutValues() {
  return (
    <section className="bg-[#141A32] py-20 text-white md:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            {aboutValues.kicker}
          </p>

          <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            {aboutValues.heading}
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {aboutValues.items.map((item) => (
            <article
              key={item.number}
              className="bg-[#141A32] p-7 transition-colors duration-300 hover:bg-white/[0.06] md:p-8"
            >
              <span className="text-sm font-semibold tracking-[0.15em] text-white/50">
                {item.number}
              </span>

              <h3 className="mt-8 text-xl font-semibold md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}