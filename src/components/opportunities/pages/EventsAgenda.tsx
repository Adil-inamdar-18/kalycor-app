"use client";

import { useMemo, useState, type FormEvent } from "react";
import { MapPin, Clock, Video } from "lucide-react";

import { Container } from "@/components/layout";
import { heroMedia } from "@/data/opportunities/heroMedia";
import { eventTypes, eventsList, type EventType } from "@/data/opportunities/pageContent";
import { cn } from "@/lib/utils";
import { Chip, Done, Field, OppButton, PageHeader, cardCls, inputCls } from "../shared/OpportunityPrimitives";

const d = (iso: string) => new Date(`${iso}T00:00:00`);

export default function EventsAgenda() {
  const [past, setPast] = useState(false);
  const [type, setType] = useState<EventType | "">("");
  const [pick, setPick] = useState(eventsList[0].id);
  const [sent, setSent] = useState(false);

  const list = useMemo(() => {
    const today = new Date(new Date().toDateString());
    return eventsList
      .filter((e) => (past ? d(e.date) < today : d(e.date) >= today))
      .filter((e) => !type || e.type === type)
      .sort((a, b) => (past ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
  }, [past, type]);
  const chosen = eventsList.find((e) => e.id === pick);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <PageHeader
        crumb="Events"
        title="Meet the Kalycor community"
        body="Career days, networking evenings and industry conversations, in person and online."
        media={heroMedia.events}
        actions={[{ label: "Browse events", href: "#events-list" }]}
      />
      <section id="events-list" className="scroll-mt-20 bg-background py-12 md:py-16">
        <Container className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_21rem]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <Chip active={!past} onClick={() => setPast(false)}>Upcoming</Chip>
              <Chip active={past} onClick={() => setPast(true)}>Past</Chip>
              <span className="mx-2 hidden h-5 w-px bg-line md:block" aria-hidden />
              {eventTypes.map((t) => <Chip key={t} active={type === t} onClick={() => setType(type === t ? "" : t)}>{t}</Chip>)}
            </div>

            {list.length === 0 ? (
              <p className={cn("p-12 text-center text-body-sm text-muted", cardCls)}>No {past ? "past" : "upcoming"} events in this category yet.</p>
            ) : (
              <ul className="space-y-4">
                {list.map((e) => (
                  <li key={e.id} className={cn("grid gap-5 p-5 hover:shadow-float sm:grid-cols-[5rem_1fr_auto] sm:items-center", cardCls, pick === e.id && !past ? "border-primary" : "")}>
                    <div className="flex items-baseline gap-2 rounded-xl bg-primary-soft/70 sm:block sm:px-2 sm:py-3 sm:text-center">
                      <p className="text-small font-semibold text-accent">{d(e.date).toLocaleDateString("en-US", { month: "short" })}</p>
                      <p className="font-heading text-h2 font-bold leading-none text-heading">{d(e.date).getDate()}</p>
                    </div>
                    <div>
                      <p className="text-caption font-semibold text-primary">{e.type}</p>
                      <h2 className="text-h3 font-semibold text-heading">{e.title}</h2>
                      <p className="mt-1 text-body-sm text-muted">{e.blurb}</p>
                      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-caption text-muted">
                        <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" aria-hidden />{e.time}</span>
                        <span className="inline-flex items-center gap-1.5">{e.format === "Virtual" ? <Video className="size-3.5" aria-hidden /> : <MapPin className="size-3.5" aria-hidden />}{e.location} · {e.format}</span>
                      </p>
                    </div>
                    {!past ? <OppButton variant={pick === e.id ? "solid" : "outline"} size="sm" onClick={() => { setPick(e.id); setSent(false); }}>Register interest</OppButton> : null}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <aside className="lg:sticky lg:top-24">
            {sent ? (
              <Done title="You're on the list" body={`We'll email you details for ${chosen?.title ?? "this event"}.`} />
            ) : (
              <form onSubmit={submit} className="space-y-4 rounded-3xl border border-line bg-surface p-6 shadow-float">
                <h2 className="text-h3 font-semibold text-heading">Register interest</h2>
                <Field label="Event">
                  <select className={inputCls} value={pick} onChange={(e) => setPick(e.target.value)}>
                    {eventsList.filter((e) => d(e.date) >= new Date(new Date().toDateString())).map((e) => <option key={e.id} value={e.id}>{e.title}</option>)}
                  </select>
                </Field>
                <Field label="Name"><input required className={inputCls} autoComplete="name" /></Field>
                <Field label="Email"><input required type="email" className={inputCls} autoComplete="email" /></Field>
                <OppButton type="submit" block arrow>Save my spot</OppButton>
              </form>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
