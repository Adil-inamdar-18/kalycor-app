"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";

import { Container, Section } from "@/components/layout";
import { heroMedia } from "@/data/opportunities/heroMedia";
import {
  referralProgramHero,
  referralProgramIntro,
  referralProgramProcess,
} from "@/data/opportunities/referralProgram";
import { referralFaq } from "@/data/opportunities/pageContent";
import OpportunityHero from "../shared/OpportunityHero";
import { Done, Eyebrow, Field, OppButton, cardCls, inputCls } from "../shared/OpportunityPrimitives";

/** You → your contact → opportunity: the whole program in one picture. */
function Chain() {
  const nodes = [["You", 40], ["Your contact", 200], ["Opportunity", 360]] as const;
  return (
    <svg viewBox="0 0 400 120" role="img" aria-label="You refer a contact who is connected to an opportunity" className="w-full max-w-md">
      <line x1="40" y1="50" x2="360" y2="50" strokeWidth="2" strokeDasharray="5 6" style={{ stroke: "hsl(var(--line))" }} />
      {nodes.map(([label, x], i) => (
        <g key={label}>
          <circle cx={x} cy="50" r="26" style={{ fill: i === 1 ? "hsl(var(--accent))" : "hsl(var(--primary))" }} />
          <text x={x} y="55" textAnchor="middle" fontSize="15" fontWeight="600" style={{ fill: "hsl(var(--primary-fg))" }}>{i + 1}</text>
          <text x={x} y="102" textAnchor="middle" fontSize="13" style={{ fill: "hsl(var(--heading))" }}>{label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function ReferralFlow() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <OpportunityHero
        {...referralProgramHero}
        {...heroMedia.referralProgram}
        crumb="Referral Program"
        actions={[
          { label: "Refer a candidate", href: "#referral-form" },
          { label: "How it works", href: "#referral-process", variant: "ghost" },
        ]}
      />

      <section className="border-b border-line bg-surface">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-16">
          <div>
            <Eyebrow>{referralProgramIntro.kicker}</Eyebrow>
            <h2 className="text-h2 font-bold text-heading">{referralProgramIntro.heading}</h2>
            <div className="mt-6 max-w-xl space-y-4 text-body-lg text-muted">
              {referralProgramIntro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-line bg-gradient-to-br from-background to-primary-soft/60 p-8 shadow-float">
              <Chain />
            </div>
          </div>
        </Container>
      </section>

      <Section tone="page" id="referral-process" className="scroll-mt-20">
        <Container>
          <Eyebrow>{referralProgramProcess.kicker}</Eyebrow>
          <h2 className="mb-12 max-w-2xl text-h2 font-bold text-heading">{referralProgramProcess.heading}</h2>
          <ol className="grid gap-8 md:grid-cols-4">
            {referralProgramProcess.items.map((s, i) => (
              <li key={s.title} className="relative md:pt-8">
                <span className="absolute left-0 top-0 hidden h-px w-full bg-line md:block" aria-hidden />
                <span className="absolute left-0 top-[-6px] hidden size-[13px] rounded-full bg-primary ring-4 ring-background md:block" aria-hidden />
                <p className="text-small font-semibold text-accent">Step {i + 1}</p>
                <h3 className="mt-1 text-h3 font-semibold text-heading">{s.title}</h3>
                <p className="mt-2 text-body-sm text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="surface" className="border-y border-line">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-h2 font-bold text-heading">Questions before you refer</h2>
            <div className="mt-6 space-y-3">
              {referralFaq.map((f) => (
                <details key={f.q} className={`group px-5 py-4 open:border-primary/30 open:shadow-float ${cardCls}`}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-heading">
                    {f.q}
                    <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="mt-2 text-body-sm text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div id="referral-form" className="scroll-mt-20">
            {sent ? (
              <Done title="Referral sent" body="Thank you. Our team will review the profile and contact your referral if there is a fit." />
            ) : (
              <form onSubmit={submit} className="space-y-6 rounded-3xl border border-line bg-background p-6 shadow-float md:p-9">
                <fieldset className="space-y-4">
                  <legend className="mb-1 text-h4 font-semibold text-heading">About you</legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your name"><input required className={inputCls} autoComplete="name" /></Field>
                    <Field label="Your email"><input required type="email" className={inputCls} autoComplete="email" /></Field>
                  </div>
                </fieldset>
                <fieldset className="space-y-4">
                  <legend className="mb-1 text-h4 font-semibold text-heading">Who you're referring</legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Their name"><input required className={inputCls} value={name} onChange={(e) => setName(e.target.value)} /></Field>
                    <Field label="Their email"><input required type="email" className={inputCls} /></Field>
                    <Field label="Field or role"><input className={inputCls} placeholder="e.g. Data analyst" /></Field>
                    <Field label="How do you know them?">
                      <select className={inputCls} defaultValue="">
                        <option value="" disabled>Select</option>
                        {["Colleague", "Friend", "Former classmate", "Client", "Other"].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Why would they be a good fit?"><textarea rows={3} className={inputCls} /></Field>
                </fieldset>
                <label className="flex items-start gap-3 text-small text-muted">
                  <input type="checkbox" required className="mt-1" />
                  {name || "This person"} has agreed to be contacted by Kalycor.
                </label>
                <OppButton type="submit" size="lg" arrow>Send referral</OppButton>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
