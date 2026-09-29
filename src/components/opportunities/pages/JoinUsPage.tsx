"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";

import { Container, Section } from "@/components/layout";
import { routes } from "@/config/routes";
import { heroMedia } from "@/data/opportunities/heroMedia";
import {
  joinUsBenefits,
  joinUsHero,
  joinUsIntro,
  joinUsValues,
} from "@/data/opportunities/joinUs";
import { joinSteps } from "@/data/opportunities/pageContent";
import { cn } from "@/lib/utils";
import OpportunityHero from "../shared/OpportunityHero";
import { Eyebrow } from "../shared/OpportunityPrimitives";

const photos = ["/images/opportunities/events.jpg", "/images/approach-1.jpg", "/images/approach-2.jpg"];

export default function JoinUsPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <OpportunityHero
        {...joinUsHero}
        {...heroMedia.joinUs}
        crumb="Join Us"
        actions={[
          { label: "See open roles", href: routes.opportunities.searchJobs },
          { label: "Share your resume", href: routes.opportunities.submitResume, variant: "ghost" },
        ]}
      />

      <section className="border-b border-line bg-surface">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Eyebrow>{joinUsIntro.kicker}</Eyebrow>
            <h2 className="text-h2 font-bold text-heading">{joinUsIntro.heading}</h2>
            <div className="mt-6 max-w-xl space-y-4 text-body-lg text-muted">
              {joinUsIntro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {photos.map((src, i) => (
              <div
                key={src}
                className={cn(
                  "relative overflow-hidden rounded-3xl bg-surface-alt shadow-float ring-1 ring-line/60",
                  i === 0 ? "row-span-2 min-h-[360px]" : "min-h-[174px]"
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 22vw, 45vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out-expo hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section tone="page">
        <Container>
          <Eyebrow>{joinUsValues.kicker}</Eyebrow>
          <h2 className="mb-10 max-w-2xl text-h2 font-bold text-heading">{joinUsValues.heading}</h2>
          <div className="flex flex-col gap-4 lg:h-[340px] lg:flex-row">
            {joinUsValues.items.map((v, i) => {
              const active = open === i;
              return (
                <button
                  key={v.title}
                  type="button"
                  aria-expanded={active}
                  onMouseEnter={() => setOpen(i)}
                  onFocus={() => setOpen(i)}
                  onClick={() => setOpen(i)}
                  className={cn(
                    "relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 text-left transition-all duration-slow lg:flex-1",
                    active
                      ? "border-primary bg-gradient-to-br from-primary via-primary to-navy-700 text-primary-fg shadow-deep lg:flex-[2.6]"
                      : "border-line bg-surface text-heading shadow-raised hover:border-primary/40"
                  )}
                >
                  {active ? (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-teal-500/25 blur-3xl"
                    />
                  ) : null}
                  <span
                    className={cn(
                      "relative text-small font-semibold tracking-[0.18em]",
                      active ? "text-teal-200" : "text-accent"
                    )}
                  >
                    {v.number}
                  </span>
                  <span className="relative mt-8 block">
                    <span className="block text-h3 font-semibold">{v.title}</span>
                    <span
                      className={cn(
                        "mt-3 block max-w-sm text-[15px]",
                        active ? "text-primary-fg/80" : "text-muted lg:hidden"
                      )}
                    >
                      {v.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="surface" className="border-y border-line">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>{joinUsBenefits.kicker}</Eyebrow>
            <h2 className="text-h2 font-bold text-heading">{joinUsBenefits.heading}</h2>
            <ul className="mt-8 space-y-4">
              {joinUsBenefits.points.map((p) => (
                <li key={p} className="flex items-start gap-3.5 text-body-sm text-paragraph">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-background p-7 shadow-raised md:p-9">
            <h3 className="mb-6 text-h3 font-semibold text-heading">How joining works</h3>
            <ol className="space-y-6 border-l border-line pl-8">
              {joinSteps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[46px] flex size-7 items-center justify-center rounded-full bg-primary text-micro font-semibold text-primary-fg ring-4 ring-background">
                    {i + 1}
                  </span>
                  <p className="font-semibold text-heading">{s.title}</p>
                  <p className="text-body-sm text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
}
