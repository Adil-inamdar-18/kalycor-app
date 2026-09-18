"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout";

import { getLandingData } from "@/services/siteService";

const cellBorders =
  "border-t border-inverse-fg/[0.14] first:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(2n)]:border-l tl:border-t-0 tl:[&:not(:first-child)]:border-l";

export function Stats() {
  const { stats } = getLandingData();

  const counters = stats.flatMap((stat) =>
    stat.type === "count" ? [stat] : []
  );

  const sectionRef = useRef<HTMLElement>(null);

  const [values, setValues] = useState<number[]>(() =>
    counters.map(() => 0)
  );

  // Start counters when the section enters the screen
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    let animated = false;

    const timers: ReturnType<typeof setInterval>[] = [];

    const animateStats = () => {
      if (animated) return;

      animated = true;

      if (reduceMotion) {
        setValues(counters.map((counter) => counter.count));
        return;
      }

      counters.forEach((counter, index) => {
        let current = 0;

        const step = Math.max(1, Math.round(counter.count / 30));

        const timer = setInterval(() => {
          current += step;

          if (current >= counter.count) {
            current = counter.count;
            clearInterval(timer);
          }

          setValues((prev) => {
            const next = [...prev];
            next[index] = current;
            return next;
          });
        }, 30);

        timers.push(timer);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) animateStats();
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timers.forEach(clearInterval);
    };
  }, []);

  let counterIndex = -1;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-inverse
        pb-14
        pt-14
        text-center
        text-inverse-fg
        sm:pb-16
        sm:pt-16
        tl:pb-[72px]
        tl:pt-[72px]
        before:pointer-events-none
        before:absolute
        before:left-1/2
        before:top-[-360px]
        before:h-[560px]
        before:w-[560px]
        before:-translate-x-1/2
        before:rounded-full
        before:border
        before:border-primary/[0.08]
        before:content-['']
        after:pointer-events-none
        after:absolute
        after:inset-0
        after:bg-gradient-to-b
        after:from-primary/[0.035]
        after:to-transparent
        after:content-['']
      "
    >
      <Container className="relative z-[1]">
        {/* Section intro */}
        <div className="mb-2 font-heading text-body italic text-inverse-fg/60">
          We believe in what we do
        </div>

        <div className="mb-8 font-heading text-caption font-bold tracking-[0.18em] text-inverse-fg/60 sm:mb-10">
          KALYCOR AT A GLANCE
        </div>

        {/* Stats grid */}
        <div
          className="
            grid
            grid-cols-1
            overflow-hidden
            border-y
            border-inverse-fg/[0.14]
            sm:grid-cols-2
            tl:grid-cols-4
          "
        >
          {stats.map((stat) => {
            if (stat.type === "count") {
              counterIndex += 1;

              const index = counterIndex;

              return (
                <div
                  key={stat.label}
                  className={`
                    group
                    relative
                    flex
                    min-h-[135px]
                    flex-col
                    items-center
                    justify-center
                    px-5
                    py-7
                    transition-all
                    duration-slow
                    hover:bg-inverse-fg/[0.035]
                    sm:min-h-[155px]
                    sm:px-6
                    ${cellBorders}
                  `}
                >
                  <div
                    className="
                      font-heading
                      text-[clamp(42px,4.5vw,64px)]
                      font-bold
                      leading-none
                      tracking-[-0.045em]
                      text-inverse-fg/60
                      transition-transform
                      duration-slow
                      group-hover:-translate-y-1
                    "
                  >
                    {values[index]}
                  </div>

                  <div
                    className="
                      mt-3
                      max-w-[18ch]
                      text-small
                      leading-[1.4]
                      text-inverse-fg/60
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={stat.badge}
                className={`
                  group
                  relative
                  flex
                  min-h-[135px]
                  flex-col
                  items-center
                  justify-center
                  px-5
                  py-7
                  transition-all
                  duration-slow
                  hover:bg-inverse-fg/[0.035]
                  sm:min-h-[155px]
                  sm:px-6
                  ${cellBorders}
                `}
              >
                <div
                  className="
                    mb-3
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-primary/30
                    font-heading
                    text-body
                    text-primary
                    transition-all
                    duration-slow
                    group-hover:border-primary/60
                    group-hover:bg-primary/[0.06]
                  "
                >
                  {stat.icon}
                </div>

                <span
                  className="
                    inline-flex
                    min-h-10
                    items-center
                    justify-center
                    rounded-pill
                    border
                    border-inverse-fg/[0.22]
                    bg-inverse-fg/[0.025]
                    px-4
                    py-2
                    font-heading
                    text-[14px]
                    font-semibold
                    text-background
                    transition-all
                    duration-fast
                    group-hover:border-inverse-fg/[0.32]
                  "
                >
                  <span
                    aria-hidden
                    className="mr-2 text-small text-primary"
                  >
                    ✓
                  </span>

                  {stat.badge}
                </span>

                <div className="mt-3 text-micro text-inverse-fg/[0.45]">
                  {stat.note}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Stats;
