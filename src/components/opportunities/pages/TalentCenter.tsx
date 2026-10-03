"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Container, Section } from "@/components/layout";
import { routes } from "@/config/routes";
import { heroMedia } from "@/data/opportunities/heroMedia";
import {
  globalTalentCenterAreas,
  globalTalentCenterHero,
  globalTalentCenterIntro,
} from "@/data/opportunities/globalTalentCenter";
import { getJobsData } from "@/services/siteService";
import { cn } from "@/lib/utils";
import OpportunityHero from "../shared/OpportunityHero";
import { Eyebrow, OppButton, cardCls, cardHoverCls } from "../shared/OpportunityPrimitives";

/* Spoke positions (% of the diagram box), clockwise from top. */
const spots = ["left-1/2 top-[6%]", "left-[94%] top-1/2", "left-1/2 top-[94%]", "left-[6%] top-1/2"];
const ends = [[50, 6], [94, 50], [50, 94], [6, 50]];

export default function TalentCenter() {
  const [on, setOn] = useState(0);
  const { jobs } = getJobsData();
  const fields = useMemo(() => {
    const n: Record<string, number> = {};
    jobs.forEach((j) => { n[j.category] = (n[j.category] ?? 0) + 1; });
    return Object.entries(n).sort((a, b) => b[1] - a[1]);
  }, [jobs]);
  const item = globalTalentCenterAreas.items[on];

  return (
    <>
      <OpportunityHero
        {...globalTalentCenterHero}
        {...heroMedia.globalTalentCenter}
        crumb="Global Talent Center"
        actions={[
          { label: "Search jobs", href: routes.opportunities.searchJobs },
          { label: "Talk to an advisor", href: routes.opportunities.globalTalentAssistance, variant: "ghost" },
        ]}
      />

      <section className="border-b border-line bg-surface">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1fr] lg:py-16">
          <div>
            <Eyebrow>{globalTalentCenterIntro.kicker}</Eyebrow>
            <h2 className="text-h2 font-bold text-heading">{globalTalentCenterIntro.heading}</h2>
            <div className="mt-6 max-w-xl space-y-4 text-body-lg text-muted">
              {globalTalentCenterIntro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-small text-muted">Select a spoke to see what each part of the Center connects.</p>
          </div>

          <div className="mx-auto w-full max-w-[440px]">
            <div className="relative aspect-square">
              <div aria-hidden className="absolute inset-[6%] rounded-full border border-dashed border-line" />
              <svg viewBox="0 0 100 100" className="absolute inset-0" aria-hidden>
                {ends.map(([x, y], i) => (
                  <line key={i} x1="50" y1="50" x2={x} y2={y} strokeWidth="0.6" style={{ stroke: on === i ? "hsl(var(--accent))" : "hsl(var(--line))" }} />
                ))}
              </svg>
              <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-navy-700 p-3 text-center text-small font-semibold leading-tight text-primary-fg shadow-deep ring-8 ring-primary/10">
                Global Talent Center
              </div>
              {globalTalentCenterAreas.items.map((a, i) => (
                <button
                  key={a.title}
                  onClick={() => setOn(i)}
                  aria-pressed={on === i}
                  className={cn(
                    "absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-pill border px-3 py-2 text-[13px] font-semibold transition-all duration-base",
                    spots[i],
                    on === i
                      ? "border-accent bg-accent text-primary-fg shadow-float"
                      : "border-line bg-surface text-heading shadow-raised hover:border-primary"
                  )}
                >
                  {a.title}
                </button>
              ))}
            </div>
            <div aria-live="polite" className={cn("mt-5 bg-background p-5", cardCls)}>
              <h3 className="font-semibold text-heading">{item.title}</h3>
              <p className="mt-1 text-body-sm text-muted">{item.description}</p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="page">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>{globalTalentCenterAreas.kicker}</Eyebrow>
              <h2 className="max-w-xl text-h2 font-bold text-heading">Browse talent and roles by field</h2>
            </div>
            <Link href={routes.opportunities.searchJobs} className="group inline-flex items-center gap-1.5 text-small font-semibold text-primary hover:underline">
              See all {jobs.length} open roles
              <ArrowUpRight className="size-4 transition-transform duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map(([name, count]) => (
              <li key={name}>
                <Link href={`${routes.opportunities.searchJobs}?q=${encodeURIComponent(name)}`} className={cn("group flex items-center justify-between gap-3 p-5", cardCls, cardHoverCls)}>
                  <span className="font-semibold text-heading">{name}</span>
                  <span className="flex items-center gap-2">
                    <span className="rounded-pill bg-primary-soft px-3 py-1 text-caption font-semibold text-primary">{count} open</span>
                    <ArrowUpRight className="size-4 text-muted transition-all duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="surface" className="border-t border-line">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            ["For professionals", "Find roles across markets or share your profile.", "Search jobs", routes.opportunities.searchJobs, "solid"],
            ["For organizations", "Tell us about the talent you need beyond one market.", "Talk to an advisor", routes.opportunities.globalTalentAssistance, "outline"],
          ].map(([t, b, l, h, v]) => (
            <div key={t} className={cn("bg-background p-8", cardCls, cardHoverCls)}>
              <h3 className="text-h3 font-semibold text-heading">{t}</h3>
              <p className="mt-2 text-body-sm text-muted">{b}</p>
              <OppButton href={h} variant={v as "solid" | "outline"} arrow className="mt-6">{l}</OppButton>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
