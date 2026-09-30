import { Container, Section } from '@/components/layout';
import { contactPage } from '@/data/contact';
import type { ContactOffice } from '@/types/contact';

import { ContactOfficeCard } from './ContactOfficeCard';
import { ContactSectionHeader } from './ContactSectionHeader';

function OfficeGroup({
  title,
  offices,
  showCountry,
}: {
  title: string;
  offices: readonly ContactOffice[];
  showCountry?: boolean;
}) {
  return (
    <div className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
      <div>
        <h3 className="text-h3 font-semibold tracking-tight text-heading">
          {title}
        </h3>
        <p className="mt-1 text-body-sm text-muted">
          {offices.length} {offices.length === 1 ? 'office' : 'offices'}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {offices.map((office) => (
          <ContactOfficeCard
            key={office.id}
            office={office}
            showCountry={showCountry}
          />
        ))}
      </div>
    </div>
  );
}

export function ContactOffices() {
  const { offices } = contactPage;

  return (
    <Section
      as="section"
      id="offices"
      className="scroll-mt-20 bg-surface-alt"
    >
      <Container>
        <ContactSectionHeader
          kicker={offices.kicker}
          heading={offices.heading}
          description={offices.description}
        />

        <div className="mt-12 space-y-10 lg:mt-14">
          <OfficeGroup title="India" offices={offices.india} />
          <OfficeGroup
            title="Global Offices"
            offices={offices.international}
            showCountry
          />
        </div>
      </Container>
    </Section>
  );
}

export default ContactOffices;