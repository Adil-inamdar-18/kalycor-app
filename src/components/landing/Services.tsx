"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { SectionTitle } from "@/components/ui";
import { getLandingData } from "@/services/siteService";
import { anchors } from "@/config/routes";

/**
 * Fixed hit-area around each card. Hover is read from this element (which
 * never moves) while the inner card does the lift/scale, so the cursor can
 * never "fall off" a moving card and retrigger hover. Also drives the video.
 */
function ServiceCardShell({ children }: { children: React.ReactNode }) {
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const handleEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    event.currentTarget.querySelector("video")?.play().catch(() => {});
  };

  const handleLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const video = event.currentTarget.querySelector("video");
    if (!video) return;

    video.pause();

    // Rewind only after the card has finished settling back, so the frame
    // never changes while the image is still animating.
    resetTimer.current = setTimeout(() => {
      video.currentTime = 0;
    }, 350);
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="
        svc-shell
        group/shell
        relative
        z-[1]
        flex
        flex-[0_0_82vw]
        hover:z-[100]
        sm:flex-[0_0_340px]
        nav:flex-[0_0_calc((100%_-_72px)/4)]
      "
    >
      {children}
    </div>
  );
}

export function Services() {
  const { services, servicePillHref } = getLandingData();
  const gridRef = useRef<HTMLDivElement>(null);

  const targetRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // One eased scroll loop shared by arrows + mouse wheel, so scrolling never
  // fights itself (no stacked smooth-scroll queues = no jitter).
  const animateTo = useCallback((target: number) => {
    const grid = gridRef.current;
    if (!grid) return;

    const max = grid.scrollWidth - grid.clientWidth;
    targetRef.current = Math.max(0, Math.min(max, target));

    if (frameRef.current !== null) return;

    const step = () => {
      const el = gridRef.current;
      if (!el) {
        frameRef.current = null;
        return;
      }

      const diff = targetRef.current - el.scrollLeft;

      if (Math.abs(diff) < 0.5) {
        el.scrollLeft = targetRef.current;
        frameRef.current = null;
        return;
      }

      el.scrollLeft += diff * 0.18;
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
  }, []);

  // Move cards with arrows
  const slideCards = (direction: "left" | "right") => {
    const grid = gridRef.current;
    if (!grid) return;

    const card = grid.querySelector<HTMLElement>("article");
    if (!card) return;

    const gap = 24;
    const scrollAmount = (card.offsetWidth + gap) * 4;
    const max = grid.scrollWidth - grid.clientWidth;
    const base = frameRef.current !== null ? targetRef.current : grid.scrollLeft;

    if (direction === "right") {
      animateTo(base >= max - 10 ? 0 : base + scrollAmount);
    } else {
      animateTo(base <= 10 ? max : base - scrollAmount);
    }
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Native, non-passive wheel listener (React's onWheel is passive, so
    // preventDefault there is ignored and the page scrolls at the same time).
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      const max = grid.scrollWidth - grid.clientWidth;
      const base =
        frameRef.current !== null ? targetRef.current : grid.scrollLeft;
      const atStart = base <= 0 && event.deltaY < 0;
      const atEnd = base >= max && event.deltaY > 0;

      // Let the page scroll normally once the carousel hits either end.
      if (atStart || atEnd) return;

      event.preventDefault();
      animateTo(base + event.deltaY);
    };

    // While the list is moving, cards sweeping under a still cursor must not
    // trigger hover on/off (that was the flicker). Re-enabled right after.
    const onScroll = () => {
      grid.dataset.scrolling = "true";
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        delete grid.dataset.scrolling;
      }, 140);
    };

    grid.addEventListener("wheel", onWheel, { passive: false });
    grid.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      grid.removeEventListener("wheel", onWheel);
      grid.removeEventListener("scroll", onScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [animateTo]);

  return (
    <Section id={anchors.landing.solutions.slice(1)}>
      <Container>
        <SectionTitle
          kicker="Our Suite of Services"
          title="Customized Solutions"
          description="From finding the right opportunities to helping organizations build stronger teams, Kalycor delivers flexible solutions designed around real-world needs."
          className="mb-8"
        />

        <div className="relative mb-16 xl:mb-0">
          {/* Left arrow */}
          <button
            type="button"
            aria-label="Previous services"
            onClick={() => slideCards("left")}
            className="
              absolute
              left-[calc(50%-52px)]
              -bottom-14
              z-[20]
              xl:bottom-auto
              xl:top-1/2
              flex
              h-11
              w-11
              xl:-translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-line
              bg-surface
              text-heading
              shadow-md
              transition-all
              duration-fast
              hover:border-primary
              hover:bg-primary
              hover:text-primary-fg
              xl:left-[-64px]
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Service cards */}
          <div
            ref={gridRef}
            className="
              -mb-3
              -mt-3
              flex
              gap-[18px]
              overflow-x-auto
              overflow-y-visible
              pb-8
              pt-8
              scrollbar-none
              data-[scrolling=true]:[&_.svc-shell]:pointer-events-none
              sm:gap-6
              nav:gap-6
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto",
            }}
          >
            {services.map((service) => (
              /* Stable hit-area: never moves, so hover can't flicker when the
                 card lifts away from the cursor. It also owns the sizing. */
              <ServiceCardShell key={service.title}>
                <article
                  className="
                    svc-card
                    relative
                    flex
                    min-h-[390px]
                    flex-1
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-line
                    bg-surface-alt
                    transition-[transform,border-color]
                    duration-slow
                    ease-[var(--ease)]
                    will-change-transform
                    [backface-visibility:hidden]
                    isolate
                    group-hover/shell:-translate-y-3
                    group-hover/shell:scale-[1.045]
                    group-hover/shell:border-transparent
                    sm:min-h-[410px]
                    nav:min-h-[420px]
                  "
                >
                  {/* Image / video */}
                  <div className="relative isolate overflow-hidden">
                    {service.video ? (
                      <video
                        src={service.video}
                        poster={service.image}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-label={service.alt}
                        className="
                          block
                          h-[175px]
                          w-full
                          object-cover
                          transition-transform
                          duration-slow
                          ease-[var(--ease)]
                          will-change-transform
                          [backface-visibility:hidden]
                          group-hover:scale-[1.06]
                        "
                      />
                    ) : (
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="
                          block
                          h-[175px]
                          w-full
                          object-cover
                          transition-transform
                          duration-slow
                          ease-[var(--ease)]
                          will-change-transform
                          [backface-visibility:hidden]
                          group-hover:scale-[1.06]
                        "
                      />
                    )}
                  </div>

                  {/* Card content */}
                  <div className="flex flex-grow flex-col px-5 pb-5 pt-5">
                    <h3 className="mb-[9px] text-h3 text-secondary">
                      {service.title}
                    </h3>

                    <p className="mb-4 flex-grow text-small text-paragraph">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-[9px]">
                      {service.pills.map((pill) => (
                        <Link
                          key={pill}
                          href={
                            servicePillHref[pill] ?? anchors.landing.solutions
                          }
                          className="
                            inline-block
                            rounded-pill
                            bg-secondary
                            px-4
                            py-[8px]
                            font-heading
                            text-micro
                            font-medium
                            text-white
                            transition-colors
                            duration-fast
                            hover:bg-navy-950
                          "
                        >
                          {pill}
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              </ServiceCardShell>
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Next services"
            onClick={() => slideCards("right")}
            className="
              absolute
              right-[calc(50%-52px)]
              -bottom-14
              z-[20]
              xl:bottom-auto
              xl:top-1/2
              flex
              h-11
              w-11
              xl:-translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-line
              bg-surface
              text-heading
              shadow-md
              transition-all
              duration-fast
              hover:border-primary
              hover:bg-primary
              hover:text-primary-fg
              xl:right-[-64px]
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </Container>
    </Section>
  );
}

export default Services;