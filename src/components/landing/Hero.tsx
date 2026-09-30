import Link from "next/link";

import { Container } from "@/components/layout";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

import type { LinkItem } from "@/types";

interface HeroPanelProps {
  tag: string;
  title: string;
  cta: LinkItem;
  id?: string;
  className?: string;
  buttonClassName?: string;
}

/**
 * One audience panel inside the hero.
 * Same component is used for businesses and job seekers.
 */
function HeroPanel({ tag, title, cta, id, className, buttonClassName }: HeroPanelProps) {
  return (
    <div
      id={id}
      tabIndex={id ? -1 : undefined}
      className={cn(
        "group relative flex flex-col overflow-hidden",
        "px-5 py-5 text-left",
        "transition-all duration-slow",
        "hover:z-[3] hover:-translate-y-0.5",
        "hover:shadow-panel",
        "sm:px-6 sm:py-6",
        className,
      )}
    >
      {/* Subtle panel glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-slow group-hover:opacity-100"
      />

      <div className="relative z-[1] flex h-full flex-col">
        <div className="mb-2 font-heading text-caption font-medium uppercase tracking-wide opacity-80">
          {tag}
        </div>

        <h2 className="max-w-[12ch] text-[clamp(22px,5.5vw,32px)] leading-[1.1] text-inherit">
          {title}
        </h2>

        {/* CTA: solid button, same square radius as the rest of the site */}
        <Link
          href={cta.href}
          className={cn(
            "mt-5 inline-flex w-fit items-center gap-3",
            "rounded-button border px-4 py-2.5",
            "font-heading text-[13px] font-semibold leading-none",
            "transition-colors duration-fast",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
            buttonClassName,
          )}
        >
          <span>{cta.label}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-4 w-4 shrink-0 transition-transform duration-fast group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-[calc(100svh-76px)]
        overflow-hidden
        bg-primary
        text-primary-fg
      "
    >
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="
            h-full
            w-full
            object-cover
            object-[50%_50%]
            sm:object-center
          "
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* VIDEO OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-primary/25
        "
      />

      {/* ADDITIONAL SUBTLE GRADIENT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-b
          from-primary/15
          via-primary/25
          to-primary/50
        "
      />

      {/* HERO CONTENT */}
      <Container className="relative z-[2]">
        <div
          className="
            flex
            min-h-[calc(100svh-76px)]
            flex-col
            justify-center
            py-12
            sm:py-14
            tp:py-20
          "
        >
          {/* MAIN HEADING */}
          <h1
            className="
              mx-auto
              w-full
              max-w-[900px]
              px-2
              text-center
              font-heading
              text-[clamp(38px,10vw,86px)]
              font-medium
              leading-[0.98]
              tracking-tight
              text-primary-fg
              sm:px-0
            "
          >
            Your Next Possibility
            <br />
            Starts Here
          </h1>

          {/* AUDIENCE PANELS */}
          <div
            className="
              mx-auto
              mt-8
              w-full
              grid
              max-w-[880px]
              gap-4
              sm:mt-8
              sm:gap-5
              tp:mt-9
              tp:grid-cols-2
              tp:gap-6
            "
          >
            {/* BUSINESS PANEL */}
            <HeroPanel
              tag="For Businesses"
              title="Find Amazing Talent"
              cta={site.ctas.exploreSolutions}
              buttonClassName="border-background bg-background text-inverse hover:bg-transparent hover:text-background"
              className="
                border
                border-primary-fg/20
                bg-inverse/90
                text-background
              "
            />

            {/* JOB SEEKER PANEL */}
            <HeroPanel
              id="dream-job-cta"
              tag="For Job Seekers"
              title="Find Your Dream Job"
              cta={site.ctas.findOpportunity}
              buttonClassName="border-primary-fg bg-primary-fg text-primary hover:bg-transparent hover:text-primary-fg"
              className="
                border
                border-primary-fg/20
                bg-primary/90
                text-primary-fg
              "
            />
          </div>
        </div>
      </Container>

      {/* BOTTOM SCROLL INDICATOR */}
      <div
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-primary-fg/60
          tp:flex
        "
      >
        <span
          className="
            text-[11px]
            font-medium
            uppercase
            tracking-[0.18em]
          "
        >
          Scroll
        </span>

        <span className="h-8 w-px bg-primary-fg/40" />
      </div>
    </section>
  );
}

export default Hero;