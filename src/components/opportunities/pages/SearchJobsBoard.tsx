"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Bookmark, BookmarkCheck, Briefcase, Clock, MapPin, Search } from "lucide-react";

import { Container } from "@/components/layout";
import { routes } from "@/config/routes";
import { getJobsData } from "@/services/siteService";
import type { Job } from "@/types";
import { cn } from "@/lib/utils";
import { Chip, OppButton, PageHeader, cardCls, inputCls } from "../shared/OpportunityPrimitives";

const keyOf = (j: Job) => `${j.title}-${j.company}-${j.date}`;
const fmt = (d: string) =>
  new Date(`${d}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" });

function Detail({ job, saved, onSave }: { job: Job; saved: boolean; onSave: () => void }) {
  const facts = [
    ["Location", job.location],
    ["Experience", job.experience],
    ["Job type", job.type],
    ["Posted", fmt(job.date)],
  ];
  return (
    <div className={cn("p-7", cardCls)}>
      <h2 className="text-h3 font-semibold text-heading">{job.title}</h2>
      <p className="mt-1 text-small text-muted">{job.company} · {job.category}</p>
      <dl className="mt-5 grid grid-cols-2 gap-4 border-y border-line py-5">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt className="text-caption text-muted">{k}</dt>
            <dd className="text-body-sm font-medium text-heading">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-body-sm text-paragraph">
        {job.company} is hiring a {job.title} in {job.location}. Share your resume and our team will
        review your profile against the role.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <OppButton href={`${routes.opportunities.submitResume}?role=${encodeURIComponent(job.title)}`} arrow>
          Apply with resume
        </OppButton>
        <OppButton variant="outline" onClick={onSave} icon={saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}>
          {saved ? "Saved" : "Save job"}
        </OppButton>
      </div>
    </div>
  );
}

export default function SearchJobsBoard() {
  const { jobs, jobTypeOptions } = getJobsData();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [loc, setLoc] = useState(params.get("location") ?? "");
  const [applied, setApplied] = useState({ q: q, loc: loc });
  const [type, setType] = useState("");
  const [category, setCategory] = useState(params.get("category") ?? "");
  const [saved, setSaved] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const categories = useMemo(() => Array.from(new Set(jobs.map((j) => j.category))), [jobs]);
  const results = useMemo(() => {
    const kw = applied.q.trim().toLowerCase();
    const lc = applied.loc.trim().toLowerCase();
    return [...jobs]
      .filter((j) => !kw || `${j.title} ${j.company} ${j.category}`.toLowerCase().includes(kw))
      .filter((j) => !lc || j.location.toLowerCase().includes(lc))
      .filter((j) => !type || j.type === type)
      .filter((j) => !category || j.category === category)
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [jobs, applied, type, category]);

  const active = results.find((j) => keyOf(j) === selected) ?? results[0];
  const toggleSave = (k: string) => setSaved((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));
  const submit = (e: FormEvent) => { e.preventDefault(); setApplied({ q, loc }); };

  return (
    <>
      <PageHeader crumb="Search Jobs" title="Find a role that fits" body="Browse open roles across fields and locations.">
        <form onSubmit={submit} className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
            <input className={cn(inputCls, "pl-10")} placeholder="Job title, company or keyword" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Keyword" />
          </div>
          <div className="relative md:w-64">
            <MapPin className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
            <input className={cn(inputCls, "pl-10")} placeholder="City or Remote" value={loc} onChange={(e) => setLoc(e.target.value)} aria-label="Location" />
          </div>
          <OppButton type="submit" size="lg">Search</OppButton>
        </form>
      </PageHeader>

      <section className="bg-background py-8">
        <Container>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Chip active={!category} onClick={() => setCategory("")}>All fields</Chip>
            {categories.map((c) => <Chip key={c} active={category === c} onClick={() => setCategory(c)}>{c}</Chip>)}
            <span className="mx-2 hidden h-5 w-px bg-line md:block" aria-hidden />
            {jobTypeOptions.map((t) => <Chip key={t} active={type === t} onClick={() => setType(type === t ? "" : t)}>{t}</Chip>)}
          </div>
          <p className="mb-4 text-small text-muted">{results.length} {results.length === 1 ? "role" : "roles"} found</p>

          {results.length === 0 ? (
            <div className={cn("p-12 text-center", cardCls)}>
              <h2 className="text-h3 font-semibold text-heading">No roles match yet</h2>
              <p className="mt-2 text-body-sm text-muted">Clear a filter, or <Link className="font-semibold text-primary underline" href={routes.opportunities.submitResume}>submit your resume</Link> and we'll keep you in mind.</p>
            </div>
          ) : (
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
              <ul className="space-y-3 lg:max-h-[70vh] lg:overflow-y-auto lg:pr-2">
                {results.map((j) => {
                  const k = keyOf(j);
                  const on = active && keyOf(active) === k;
                  return (
                    <li key={k}>
                      <button type="button" onClick={() => setSelected(k)} aria-current={on} className={cn("w-full rounded-2xl border bg-surface p-4 text-left transition-all duration-base", on ? "border-primary shadow-float" : "border-line hover:border-primary/50 hover:shadow-raised")}>
                        <span className="block font-semibold text-heading">{j.title}</span>
                        <span className="block text-small text-muted">{j.company}</span>
                        <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-caption text-muted">
                          <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" aria-hidden />{j.location}</span>
                          <span className="inline-flex items-center gap-1.5"><Briefcase className="size-3.5" aria-hidden />{j.type}</span>
                          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" aria-hidden />{fmt(j.date)}</span>
                        </span>
                      </button>
                      {on ? <div className="mt-3 lg:hidden"><Detail job={j} saved={saved.includes(k)} onSave={() => toggleSave(k)} /></div> : null}
                    </li>
                  );
                })}
              </ul>
              <div className="hidden lg:sticky lg:top-24 lg:block">
                {active ? <Detail job={active} saved={saved.includes(keyOf(active))} onSave={() => toggleSave(keyOf(active))} /> : null}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
