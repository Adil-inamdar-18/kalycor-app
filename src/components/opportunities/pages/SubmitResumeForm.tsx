"use client";

import { useRef, useState, type DragEvent, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { FileText, UploadCloud, X } from "lucide-react";

import { Container } from "@/components/layout";
import { routes } from "@/config/routes";
import { heroMedia } from "@/data/opportunities/heroMedia";
import { submitResumeHero, submitResumeProcess } from "@/data/opportunities/submitResume";
import { cn } from "@/lib/utils";
import { Chip, Done, Field, OppButton, PageHeader, cardCls, inputCls } from "../shared/OpportunityPrimitives";

const MAX = 5 * 1024 * 1024;
const OK = /\.(pdf|docx?)$/i;
const prefs = ["Full-time", "Contract", "Internship", "Remote"];

export default function SubmitResumeForm() {
  const role = useSearchParams().get("role") ?? "";
  const input = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [err, setErr] = useState("");
  const [drag, setDrag] = useState(false);
  const [v, setV] = useState({ name: "", email: "", phone: "", city: "", role, exp: "", note: "" });
  const [want, setWant] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value });

  function take(f?: File) {
    if (!f) return;
    if (!OK.test(f.name)) return setErr("Upload a PDF, DOC or DOCX file.");
    if (f.size > MAX) return setErr("File is larger than 5 MB.");
    setErr("");
    setFile(f);
  }
  const drop = (e: DragEvent) => { e.preventDefault(); setDrag(false); take(e.dataTransfer.files[0]); };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return setErr("Add your resume to continue.");
    setSent(true);
  };

  return (
    <>
      <PageHeader
        crumb="Submit Resume"
        kicker={submitResumeHero.kicker}
        title="Share your resume"
        body="Upload once. We review your profile and reach out when a role fits."
        media={heroMedia.submitResume}
        actions={[
          { label: "Upload your resume", href: "#resume-form" },
          { label: "Search jobs", href: routes.opportunities.searchJobs, variant: "ghost" },
        ]}
      />
      <section className="bg-background py-12 md:py-16">
        <Container className="grid items-start gap-8 lg:grid-cols-[1fr_22rem]">
          {sent ? (
            <Done title="Resume received" body={`Thanks${v.name ? `, ${v.name.split(" ")[0]}` : ""}. Our team will review your profile and contact you at ${v.email} if there is a relevant match.`} />
          ) : (
            <form id="resume-form" onSubmit={submit} className="scroll-mt-20 space-y-6 rounded-3xl border border-line bg-surface p-6 shadow-float md:p-9">
              <div
                onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                onDragLeave={() => setDrag(false)}
                onDrop={drop}
                className={cn("rounded-2xl border-2 border-dashed p-9 text-center transition-all duration-base", drag ? "scale-[1.01] border-primary bg-primary-soft" : "border-line bg-surface-alt hover:border-primary/50")}
              >
                {file ? (
                  <div className="flex items-center justify-center gap-3 text-body-sm text-heading">
                    <FileText className="size-5 text-primary" aria-hidden />
                    <span className="font-medium">{file.name}</span>
                    <button type="button" onClick={() => setFile(null)} aria-label="Remove file" className="text-muted hover:text-error"><X className="size-4" /></button>
                  </div>
                ) : (
                  <>
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary"><UploadCloud className="size-7" aria-hidden /></span>
                    <p className="mt-4 font-semibold text-heading">Drag your resume here</p>
                    <p className="text-small text-muted">PDF, DOC or DOCX, up to 5 MB</p>
                    <OppButton variant="outline" size="sm" className="mt-5" onClick={() => input.current?.click()}>Choose file</OppButton>
                  </>
                )}
                <input ref={input} type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={(e) => take(e.target.files?.[0])} />
              </div>
              {err ? <p role="alert" className="text-small text-error">{err}</p> : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name"><input required className={inputCls} value={v.name} onChange={set("name")} autoComplete="name" /></Field>
                <Field label="Email"><input required type="email" className={inputCls} value={v.email} onChange={set("email")} autoComplete="email" /></Field>
                <Field label="Phone"><input type="tel" className={inputCls} value={v.phone} onChange={set("phone")} autoComplete="tel" /></Field>
                <Field label="Current city"><input className={inputCls} value={v.city} onChange={set("city")} /></Field>
                <Field label="Role you're interested in"><input className={inputCls} value={v.role} onChange={set("role")} /></Field>
                <Field label="Years of experience">
                  <select className={inputCls} value={v.exp} onChange={set("exp")}>
                    <option value="">Select</option>
                    {["0–1", "1–3", "3–6", "6–10", "10+"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
              </div>

              <fieldset>
                <legend className="mb-2 text-small font-semibold text-heading">Work preference</legend>
                <div className="flex flex-wrap gap-2">
                  {prefs.map((p) => <Chip key={p} active={want.includes(p)} onClick={() => setWant(want.includes(p) ? want.filter((x) => x !== p) : [...want, p])}>{p}</Chip>)}
                </div>
              </fieldset>

              <Field label="Anything we should know? (optional)"><textarea rows={3} className={inputCls} value={v.note} onChange={set("note")} /></Field>

              <label className="flex items-start gap-3 text-small text-muted">
                <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
                I agree to Kalycor storing my resume and contacting me about relevant opportunities.
              </label>
              <OppButton type="submit" size="lg" arrow>Submit resume</OppButton>
            </form>
          )}

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className={cn("p-6", cardCls)} aria-label="Profile preview">
              <p className="text-caption text-muted">How your profile card looks to our team</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary text-body font-semibold text-primary-fg">{(v.name.trim()[0] ?? "?").toUpperCase()}</span>
                <div>
                  <p className="font-semibold text-heading">{v.name || "Your name"}</p>
                  <p className="text-small text-muted">{v.role || "Target role"}{v.city ? ` · ${v.city}` : ""}</p>
                </div>
              </div>
              <p className="mt-4 text-small text-muted">{v.exp ? `${v.exp} years` : "Experience"}{want.length ? ` · ${want.join(", ")}` : ""}</p>
              <p className="mt-1 truncate text-small text-primary">{file?.name ?? "No resume attached"}</p>
            </div>
            <ol className="space-y-5 border-l-2 border-primary/15 pl-6">
              {submitResumeProcess.items.map((s) => (
                <li key={s.title}>
                  <p className="font-semibold text-heading">{s.title}</p>
                  <p className="text-small text-muted">{s.description}</p>
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </section>
    </>
  );
}
