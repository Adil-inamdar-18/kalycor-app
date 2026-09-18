"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container, Section } from "@/components/layout";
import { SectionTitle } from "@/components/ui";
import { getLandingData } from "@/services/siteService";
import { anchors } from "@/config/routes";

export function Services() {
  const { services } = getLandingData();

  const gridRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = Math.ceil(services.length / 4);

  // Move cards with arrows
  const slideCards = (direction: "left" | "right") => {
    const grid = gridRef.current;

    if (!grid) return;

    const card = grid.querySelector<HTMLElement>("article");

    if (!card) return;

    const gap = 24;
    const scrollAmount = (card.offsetWidth + gap) * 4;

    grid.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setActiveSlide((current) => {
      if (direction === "right") {
        return Math.min(current + 1, totalSlides - 1);
      }

      return Math.max(current - 1, 0);
    });
  };

  return (
    <Section id={anchors.landing.solutions.slice(1)}>
      <Container>
        {/* Section header */}
        <SectionTitle
          kicker="Our Suite of Services"
          title="Customized Solutions"
          description="From finding the right opportunities to helping organizations build stronger teams, Kalycor delivers flexible solutions designed around real-world needs."
          className="mb-8"
        />

        {/* Service cards */}
        <div
          ref={gridRef}
          className="
            flex
            gap-[18px]
            overflow-x-hidden
            overflow-y-visible
            pb-5
            pt-5
            sm:gap-6
            nav:gap-6
          "
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
                      href={anchors.landing.solutions}
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

        {/* Slider controls */}
        <div className="mt-2 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous services"
            disabled={activeSlide === 0}
            onClick={() => slideCards("left")}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-line
              bg-surface
              text-heading
              transition-all
              duration-fast
              hover:border-primary
              hover:bg-primary
              hover:text-primary-fg
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            ←
          </button>

          {/* Slide indicator */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`
                  h-2
                  w-2
                  rounded-full
                  transition-all
                  duration-fast
                  ${index === activeSlide ? "scale-125 bg-primary" : "bg-line"}
                `}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next services"
            disabled={activeSlide === totalSlides - 1}
            onClick={() => slideCards("right")}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-line
              bg-surface
              text-heading
              transition-all
              duration-fast
              hover:border-primary
              hover:bg-primary
              hover:text-primary-fg
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            →
          </button>
        </div>
      </Container>
    </Section>
  );
}

export default Services;
