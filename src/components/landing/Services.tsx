"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { SectionTitle } from "@/components/ui";
import { getLandingData } from "@/services/siteService";
import { anchors } from "@/config/routes";

export function Services() {
  const { services, servicePillHref } = getLandingData();
  const gridRef = useRef<HTMLDivElement>(null);

  // Move cards with arrows
  const slideCards = (direction: "left" | "right") => {
    const grid = gridRef.current;
    if (!grid) return;

    const card = grid.querySelector<HTMLElement>("article");
    if (!card) return;

    const gap = 24;
    const scrollAmount = (card.offsetWidth + gap) * 4;

    if (direction === "right") {
      if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10) {
        grid.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        grid.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      if (grid.scrollLeft <= 10) {
        grid.scrollTo({
          left: grid.scrollWidth,
          behavior: "smooth",
        });
      } else {
        grid.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  // Mouse wheel scroll
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const grid = gridRef.current;
    if (!grid) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();

      grid.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id={anchors.landing.solutions.slice(1)}>
      <Container>
        <SectionTitle
          kicker="Our Suite of Services"
          title="Customized Solutions"
          description="From finding the right opportunities to helping organizations build stronger teams, Kalycor delivers flexible solutions designed around real-world needs."
          className="mb-8"
        />

        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            aria-label="Previous services"
            onClick={() => slideCards("left")}
            className="
              absolute
              left-[-58px]
              top-1/2
              z-[20]
              flex
              h-11
              w-11
              -translate-y-1/2
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
              sm:left-[-64px]
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
            onWheel={handleWheel}
            className="
              flex
              gap-[18px]
              overflow-x-auto
              overflow-y-visible
              pb-5
              pt-5
              scrollbar-none
              sm:gap-6
              nav:gap-6
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((service) => (
              <article
                key={service.title}
                onMouseEnter={(event) => {
                  event.currentTarget.querySelector("video")?.play();
                }}
                onMouseLeave={(event) => {
                  const video = event.currentTarget.querySelector("video");

                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
                className="
                  group
                  relative
                  z-[1]
                  flex
                  min-h-[390px]
                  flex-[0_0_82vw]
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-line
                  bg-surface-alt
                  transition-all
                  duration-slow
                  hover:z-[100]
                  hover:-translate-y-3
                  hover:scale-[1.045]
                  hover:border-transparent
                  sm:min-h-[410px]
                  sm:flex-[0_0_340px]
                  nav:min-h-[420px]
                  nav:flex-[0_0_calc((100%_-_72px)/4)]
                "
              >
                {/* Image / video */}
                <div className="relative overflow-hidden">
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
                        duration-[350ms]
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
                        duration-[350ms]
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
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Next services"
            onClick={() => slideCards("right")}
            className="
              absolute
              right-[-58px]
              top-1/2
              z-[20]
              flex
              h-11
              w-11
              -translate-y-1/2
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
              sm:right-[-64px]
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
