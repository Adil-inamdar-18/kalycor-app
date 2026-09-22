import type { ContactOffice } from "@/types/contact";

export function ContactOfficeCard({ office }: { office: ContactOffice }) {
  return (
    <article className="group relative overflow-hidden rounded-card border border-line bg-surface p-7 transition-all duration-slow hover:-translate-y-1 hover:border-accent/50 hover:shadow-card sm:p-8">
      <div
        className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-slow group-hover:w-full"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {office.country}
          </p>

          <h3 className="mt-3 text-h3 font-semibold leading-tight text-heading">
            {office.city}
          </h3>
        </div>

        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-lg text-muted transition-all duration-slow group-hover:border-accent/40 group-hover:text-accent"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>

      <div className="mt-7 space-y-4">
        <p className="text-body leading-7 text-muted">{office.address}</p>

        <a
          href={`tel:${office.phone}`}
          className="block text-body font-medium text-heading transition-colors duration-300 hover:text-accent"
        >
          {office.phone}
        </a>

        {office.email && (
          <a
            href={`mailto:${office.email}`}
            className="block break-all text-body-sm text-muted transition-colors duration-300 hover:text-accent"
          >
            {office.email}
          </a>
        )}
      </div>

      {office.mapUrl && office.mapUrl !== "#" && (
        <div className="mt-7 border-t border-line pt-5">
          <a
            href={office.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body-sm font-semibold text-heading transition-colors duration-300 hover:text-accent"
          >
            <span>Get Directions</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      )}
    </article>
  );
}

export default ContactOfficeCard;
