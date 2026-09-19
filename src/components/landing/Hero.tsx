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
}

/**
 * One audience panel inside the hero.
 * Same component is used for businesses and job seekers.
 */
function HeroPanel({ tag, title, cta, id, className }: HeroPanelProps) {
  return (
    <div
      id={id}
      tabIndex={id ? -1 : undefined}
      className={cn(
        "group relative overflow-hidden",
        "px-6 py-6 text-left",
        "transition-all duration-slow",
        "hover:z-[3] hover:-translate-y-1",
        "hover:shadow-panel",
        "tp:px-7 tp:py-7",
        className,
      )}
    >
      {/* Subtle panel glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 transition-opacity duration-slow
          group-hover:opacity-100
          bg-gradient-to-br
          from-white/[0.08]
          via-transparent
          to-transparent
        "
      />

      <div className="relative z-[1]">
        <div className="mb-3 font-heading text-caption font-medium uppercase tracking-wide opacity-80">
          {tag}
        </div>

        <h2 className="max-w-[12ch] text-[clamp(28px,3.4vw,42px)] leading-[1.08] text-inherit">
          {title}
        </h2>

        <Link
          href={cta.href}
          className="
            mt-5 inline-flex items-center gap-2
            border-b border-current
            pb-1
            font-heading text-[13px] font-semibold
            transition-all duration-fast
          "
        >
          <span>{cta.label}</span>

          <span
            className="
              text-base leading-none
              transition-transform duration-fast
              group-hover:translate-x-1.5
            "
          >
            →
          </span>
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
        relative isolate
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
            h-full w-full
            object-cover
            object-center
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
    absolute inset-0 z-[1]
    bg-primary/0
  "
      />

      {/* ADDITIONAL SUBTLE GRADIENT */}
      <div
        className="
    pointer-events-none
    absolute inset-0 z-[1]
    bg-gradient-to-b
    from-primary/25
    via-primary/30
    to-primary/60
  "
      />

      {/* HERO CONTENT */}
      <Container className="relative z-[2]">
        <div
          className="
            flex min-h-[calc(100svh-76px)]
            flex-col
            justify-center
            py-16
            tp:py-20
          "
        >
          {/* Main heading */}
          <h1
            className="
              mx-auto
              max-w-[900px]
              text-center
              font-heading
              text-[clamp(42px,7vw,86px)]
              font-medium
              leading-[0.98]
              tracking-tight
              text-primary-fg
            "
          >
            Your Next Possibility
            <br />
            Starts Here
          </h1>

          {/* AUDIENCE PANELS */}
          <div
            className="
              mx-auto mt-12 w-full
              max-w-[1100px]
              overflow-hidden
              border border-primary-fg/20
              bg-primary/30
              backdrop-blur-[6px]
              tp:grid tp:grid-cols-2
            "
          >
            <HeroPanel
              tag="For Businesses"
              title="Find Amazing Talent"
              cta={site.ctas.exploreSolutions}
              className="
                border-b
                border-primary-fg/20
                bg-inverse/90
                text-background
                tp:border-b-0
                tp:border-r
              "
            />

            <HeroPanel
              id="dream-job-cta"
              tag="For Job Seekers"
              title="Find Your Dream Job"
              cta={site.ctas.findOpportunity}
              className="
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
          absolute bottom-7 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-2
          text-primary-fg/60
          tp:flex
        "
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.18em]">
          Scroll
        </span>

        <span className="h-8 w-px bg-primary-fg/40" />
      </div>
    </section>
  );
}

export default Hero;
