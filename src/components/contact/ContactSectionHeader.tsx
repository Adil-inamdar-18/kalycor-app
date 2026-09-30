interface ContactSectionHeaderProps {
  kicker: string;
  heading: string;
  description: string;
}

/** Shared heading block: title on the left, supporting copy on the right. */
export function ContactSectionHeader({
  kicker,
  heading,
  description,
}: ContactSectionHeaderProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
      <div>
        <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
          {kicker}
        </p>

        <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
          {heading}
        </h2>
      </div>

      <p className="max-w-xl text-body-lg leading-8 text-muted lg:justify-self-end">
        {description}
      </p>
    </div>
  );
}

export default ContactSectionHeader;