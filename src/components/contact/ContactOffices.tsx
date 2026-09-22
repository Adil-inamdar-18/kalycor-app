import { Container, Section } from '@/components/layout';
import { contactPage } from '@/data/contact';

import { ContactOfficeCard } from './ContactOfficeCard';

export function ContactOffices() {
  const { offices } = contactPage;

  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {offices.kicker}
          </p>

          <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
            {offices.heading}
          </h2>

          <p className="mt-6 max-w-2xl text-body-lg leading-8 text-muted">
            {offices.description}
          </p>
        </div>

        {/* India Offices */}
        <div className="mt-14">
          <div className="mb-7 flex items-center gap-4">
            <h3 className="text-h3 font-semibold tracking-tight text-heading">
              India
            </h3>

            <div
              className="h-px flex-1 bg-line"
              aria-hidden="true"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offices.india.map((office) => (
              <ContactOfficeCard
                key={office.id}
                office={office}
              />
            ))}
          </div>
        </div>

        {/* International Offices */}
        <div className="mt-16">
          <div className="mb-7 flex items-center gap-4">
            <h3 className="text-h3 font-semibold tracking-tight text-heading">
              Global Offices
            </h3>

            <div
              className="h-px flex-1 bg-line"
              aria-hidden="true"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offices.international.map((office) => (
              <ContactOfficeCard
                key={office.id}
                office={office}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactOffices;