"use client";

import { useState, type FormEvent } from "react";

import { Container, Section } from "@/components/layout";
import { routes } from "@/config/routes";
import { heroMedia } from "@/data/opportunities/heroMedia";
import {
  globalTalentAssistanceHero,
  globalTalentAssistanceIntro,
  globalTalentAssistanceProcess,
} from "@/data/opportunities/globalTalentAssistance";
import { assistanceAudiences, assistanceRegions } from "@/data/opportunities/pageContent";
import { cn } from "@/lib/utils";
import OpportunityHero from "../shared/OpportunityHero";
import { Chip, Done, Eyebrow, Field, OppButton, cardCls, inputCls } from "../shared/OpportunityPrimitives";

export default function TalentAssistance() {
  const [tab, setTab] = useState(0);
  const [regions, setRegions] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const a = assistanceAudiences[tab];
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <OpportunityHero
        {...globalTalentAssistanceHero}
        {...heroMedia.globalTalentAssistance}
        crumb="Global Talent Assistance"
        actions={[
          { label: "Talk to an advisor", href: "#advisor-form" },
          { label: "Explore the Talent Center", href: routes.opportunities.globalTalentCenter, variant: "ghost" },
        ]}
      />

      <Section tone="page">
        <Container>
          <Eyebrow>{globalTalentAssistanceIntro.kicker}</Eyebrow>
          <div role="tablist" aria-label="Who are you?" className="inline-flex rounded-pill border border-line bg-surface p-1 shadow-raised">
            {assistanceAudiences.map((x, i) => (
              <button
                key={x.key}
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className={cn("rounded-pill px-5 py-2 text-[14px] font-semibold transition-all duration-base", tab === i ? "bg-primary text-primary-fg shadow-[0_8px_18px_-10px_hsl(var(--primary)/0.85)]" : "text-muted hover:text-primary")}
              >
                {x.label}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-h2 font-bold text-heading">{a.lead}</h2>
            <ol className="space-y-4">
              {a.steps.map((s, i) => (
                <li key={s} className={cn("flex items-center gap-4 p-5 hover:border-primary/30", cardCls)}>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-small font-semibold text-primary">{i + 1}</span>
                  <p className="text-body-sm text-paragraph">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="surface" className="border-y border-line">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>{globalTalentAssistanceProcess.kicker}</Eyebrow>
            <h2 className="text-h2 font-bold text-heading">What our support covers</h2>
            <dl className="mt-8 space-y-6 border-l-2 border-primary/15 pl-6">
              {globalTalentAssistanceProcess.items.map((s) => (
                <div key={s.title}>
                  <dt className="font-semibold text-heading">{s.title}</dt>
                  <dd className="text-body-sm text-muted">{s.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="advisor-form" className="scroll-mt-20">
          {sent ? (
            <Done title="Request received" body="An advisor will get back to you shortly." />
          ) : (
            <form onSubmit={submit} className="space-y-4 rounded-3xl border border-line bg-background p-6 shadow-float md:p-9">
              <h3 className="text-h3 font-semibold text-heading">Talk to an advisor</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name"><input required className={inputCls} autoComplete="name" /></Field>
                <Field label="Email"><input required type="email" className={inputCls} autoComplete="email" /></Field>
              </div>
              <Field label="I am">
                <select className={inputCls} value={tab} onChange={(e) => setTab(Number(e.target.value))}>
                  {assistanceAudiences.map((x, i) => <option key={x.key} value={i}>{x.label.replace("I'm a ", "A ").replace("We're an", "An")}</option>)}
                </select>
              </Field>
              <fieldset>
                <legend className="mb-2 text-small font-semibold text-heading">Regions of interest</legend>
                <div className="flex flex-wrap gap-2">
                  {assistanceRegions.map((r) => <Chip key={r} active={regions.includes(r)} onClick={() => setRegions(regions.includes(r) ? regions.filter((x) => x !== r) : [...regions, r])}>{r}</Chip>)}
                </div>
              </fieldset>
              <Field label="What do you need help with?"><textarea rows={4} required className={inputCls} /></Field>
              <OppButton type="submit" size="lg" arrow>Request assistance</OppButton>
            </form>
          )}
          </div>
        </Container>
      </Section>
    </>
  );
}
