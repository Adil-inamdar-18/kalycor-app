import Image from 'next/image';
import { Container } from '@/components/layout';
import type { ReachUsPageData } from '@/types/reach-us';

export function ReachUsHero({
  hero,
}: {
  hero: ReachUsPageData['hero'];
}) {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-primary text-primary-fg sm:min-h-[680px]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/55" />
      </div>

      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-primary-fg/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-accent/30"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex min-h-[620px] max-w-4xl flex-col justify-center py-24 sm:min-h-[680px]">
          <p className="mb-5 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {hero.kicker}
          </p>

          <h1 className="max-w-4xl text-h1 font-medium leading-[1.05] tracking-tight text-primary-fg">
            {hero.title.map((line, index) => (
              <span key={line}>
                {line}
                {index < hero.title.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div
            className="mt-7 h-px w-16 bg-accent"
            aria-hidden="true"
          />

          <p className="mt-7 max-w-2xl text-body-lg leading-8 text-primary-fg/70">
            {hero.description}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ReachUsHero;