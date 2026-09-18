"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "@/components/layout";
import { getLandingData } from "@/services/siteService";
import { anchors } from "@/config/routes";

export function Industries() {
  const { industries } = getLandingData();

  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target?.closest("[data-industries-accordion]")) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const activeIndustry = industries[activeIndex];

  if (!activeIndustry) {
    return null;
  }

  return (
    <section
      id={anchors.landing.industries.slice(1)}
      className="bg-background py-[70px] tl:py-[100px]"
    >
      <Container>
        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 max-w-[800px] text-center tl:mb-16">
          <div className="font-editorial text-[40px] font-normal italic leading-[1.05] tracking-[-1.8px] text-heading tl:text-[clamp(40px,4.5vw,60px)]">
            Innovation Across{" "}
            <span className="font-heading font-normal not-italic text-navy-900">
              Industries
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-[700px] text-body leading-[1.55] text-paragraph">
            With 30+ years of expertise, we specialize in sourcing high-quality
            talent for Fortune 500 and Global 1000 organizations across key
            sectors such as:
          </p>
        </div>

        {/* INDUSTRIES */}
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1200px]
            grid-cols-1
            gap-10
            tl:grid-cols-[1fr_0.85fr]
            tl:items-start
            tl:gap-[70px]
          "
          data-industries-accordion
        >
          {/* LEFT SIDE */}
          <div className="border-t border-sand-300">
            {industries.map((industry, index) => {
              const isOpen = openIndex === index;
              const isActive = activeIndex === index;

              return (
                <div
                  key={industry.title}
                  className="border-b border-sand-200"
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setOpenIndex(index);
                  }}
                >
                  {/* TITLE */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      setOpenIndex(isOpen ? null : index);
                    }}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      gap-4
                      py-5
                      text-left
                      font-heading
                      text-[15px]
                      font-normal
                      text-sky-700
                      transition-colors
                      duration-slow
                      hover:text-navy-900
                      tl:py-6
                      tl:text-[17px]
                    "
                  >
                    <span
                      className={`
                        grid
                        h-[27px]
                        w-[27px]
                        flex-[0_0_27px]
                        place-items-center
                        rounded-full
                        border
                        border-steel-300
                        text-[17px]
                        font-light
                        leading-none
                        text-sky-700
                        transition-all
                        duration-[400ms]
                        ${isOpen ? "rotate-45 bg-paper-50 text-navy-900" : ""}
                      `}
                    >
                      +
                    </span>

                    <span
                      className={`
                        transition-transform
                        duration-[400ms]
                        ${isActive ? "translate-x-1 text-navy-900" : ""}
                      `}
                    >
                      {industry.title}
                    </span>
                  </button>

                  {/* CONTENT */}
                  <div
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-[450ms]
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-7 pl-[43px] pr-4 pt-1 tl:pb-8">
                        <p className="max-w-[650px] text-body-sm leading-body text-paragraph">
                          {industry.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            className="
              relative
              hidden
              h-[420px]
              w-full
              overflow-hidden
              rounded-[7px]
              bg-divider-100
              tl:block
              tl:h-[480px]
            "
          >
            <Image
              key={activeIndustry.image}
              src={activeIndustry.image}
              alt={activeIndustry.alt}
              width={1200}
              height={800}
              priority={activeIndex === 0}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-all
                duration-[500ms]
                ease-out
                hover:scale-[1.03]
              "
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-black/5" />

            {/* IMAGE TITLE */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                bg-gradient-to-t
                from-black/60
                to-transparent
                px-7
                pb-7
                pt-20
              "
            >
              <div className="font-heading text-[20px] font-medium text-white">
                {activeIndustry.title}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Industries;
