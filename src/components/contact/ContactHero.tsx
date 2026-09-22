import Image from "next/image";

import { Container } from "@/components/layout";

export function ContactHero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-primary text-primary-fg sm:min-h-[680px]">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/contact/contact-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/55" />
      </div>

      {/* Decorative Elements */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-primary-fg/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-accent/30"
        aria-hidden="true"
      />

      {/* Content */}
      <Container className="relative">
        <div className="flex min-h-[620px] max-w-4xl flex-col justify-center py-24 sm:min-h-[680px]">
          <p className="mb-5 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            Get In Touch
          </p>

          <h1 className="max-w-4xl text-h1 font-medium leading-[1.05] tracking-tight text-primary-fg">
            Let&apos;s Connect
            <br />
            and Create What&apos;s Next.
          </h1>

          <div className="mt-7 h-px w-16 bg-accent" aria-hidden="true" />

          <p className="mt-7 max-w-2xl text-body-lg leading-8 text-primary-fg/70">
            Whether you&apos;re looking for talent, exploring new opportunities,
            or looking to work with us, our team is here to help you take the
            next step.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ContactHero;
