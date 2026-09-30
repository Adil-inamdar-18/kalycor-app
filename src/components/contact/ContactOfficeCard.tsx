import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { ContactOffice } from '@/types/contact';

interface ContactOfficeCardProps {
  office: ContactOffice;
  /** Show the country label. Off inside the India group, where it repeats. */
  showCountry?: boolean;
}

export function ContactOfficeCard({
  office,
  showCountry = false,
}: ContactOfficeCardProps) {
  const hasMap = office.mapUrl && office.mapUrl !== '#';

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface p-6 transition-all duration-slow hover:-translate-y-1 hover:border-accent/50 hover:shadow-card sm:p-7">
      <div
        className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-slow group-hover:w-full"
        aria-hidden="true"
      />

      {showCountry && (
        <p className="mb-2 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
          {office.country}
        </p>
      )}

      <h4 className={cn('text-h3 font-semibold leading-tight text-heading')}>
        {office.city}
      </h4>

      <ul className="mt-6 space-y-4">
        <li className="flex gap-3">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span className="text-body leading-7 text-muted">{office.address}</span>
        </li>

        <li className="flex items-center gap-3">
          <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <a
            href={`tel:${office.phone.replace(/\s/g, '')}`}
            className="text-body font-medium text-heading transition-colors duration-300 hover:text-accent"
          >
            {office.phone}
          </a>
        </li>

        {office.email && (
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <a
              href={`mailto:${office.email}`}
              className="break-all text-body-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              {office.email}
            </a>
          </li>
        )}
      </ul>

      {hasMap && (
        <div className="mt-auto pt-6">
          <a
            href={office.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-t border-line pt-5 text-body-sm font-semibold text-heading transition-colors duration-300 hover:text-accent"
          >
            Get Directions
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      )}
    </article>
  );
}

export default ContactOfficeCard;