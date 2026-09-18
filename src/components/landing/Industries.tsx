"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Container } from "@/components/layout";

import { getLandingData } from "@/services/siteService";

import { anchors } from "@/config/routes";

export function Industries() {
  const { industries } = getLandingData();

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target?.closest("[data-industries-accordion]")) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

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
          className="mx-auto w-full max-w-[1100px]"
          data-industries-accordion
        >
          <div className="border-t border-sand-300">
            {industries.map((industry, index) => (
              <details
                key={industry.title}
                open={openIndex === index}
                onMouseEnter={() => setOpenIndex(index)}
                className="group border-b border-sand-200"
              >
                {/* INDUSTRY TITLE */}
                <summary
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenIndex(openIndex === index ? null : index);
                  }}
                  className="
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    gap-4
                    py-5
                    font-heading
                    text-[15px]
                    font-normal
                    text-sky-700
                    transition-all
                    duration-slow
                    group-hover:text-navy-900
                    tl:py-6
                    tl:text-[17px]
                  "
                >
                  <span
                    className="
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
                      duration-slow
                      group-hover:bg-paper-50
                      group-open:rotate-45
                      group-open:bg-paper-50
                    "
                  >
                    +
                  </span>

                  {industry.title}
                </summary>

                {/* OPEN CONTENT */}
                <div
                  className="
                    grid
                    grid-rows-[0fr]
                    opacity-0
                    transition-[grid-template-rows,opacity]
                    duration-[400ms]
                    ease-out
                    group-open:grid-rows-[1fr]
                    group-open:opacity-100
                  "
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-6
                        pb-7
                        pt-2
                        tl:grid-cols-2
                        tl:items-center
                        tl:gap-10
                        tl:pb-10
                        tl:pt-4
                      "
                    >
                      {/* CONTENT LEFT */}
                      <div className="order-2 tl:order-1">
                        <p
                          className="
                            max-w-[600px]
                            text-body-sm
                            leading-body
                            text-paragraph
                            tl:pr-4
                          "
                        >
                          {industry.body}
                        </p>
                      </div>

                      {/* IMAGE RIGHT */}
                      <div
                        className="
                          order-1
                          h-[220px]
                          w-full
                          overflow-hidden
                          rounded-[7px]
                          bg-divider-100
                          tl:order-2
                          tl:h-[280px]
                        "
                      >
                        <Image
                          src={industry.image}
                          alt={industry.alt}
                          width={1200}
                          height={800}
                          loading="lazy"
                          className="
                            block
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-slower
                            ease-out-expo
                            group-hover:scale-[1.03]
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Industries;
