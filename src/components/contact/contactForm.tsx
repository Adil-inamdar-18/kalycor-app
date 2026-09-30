'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { contactPage } from '@/data/contact';

const field =
  'w-full rounded-button border border-line bg-surface px-4 py-3 text-body text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20';
const label = 'mb-2 block text-body-sm font-semibold text-heading';

export function ContactForm() {
  const { form, offices } = contactPage;
  const email = offices.india[0]?.email;
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send the values to your API / email service here.
    // Until then this only confirms on screen, like the other forms on the site.
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <Section as="section" id="message" tone="surface" className="scroll-mt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              {form.kicker}
            </p>

            <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
              {form.heading}
            </h2>

            <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />

            <p className="mt-6 max-w-md text-body-lg leading-8 text-muted">
              {form.description}
            </p>

            {email && (
              <p className="mt-6 text-body-sm text-muted">
                Prefer email?{' '}
                <a
                  href={`mailto:${email}`}
                  className="font-semibold text-heading transition-colors duration-300 hover:text-accent"
                >
                  {email}
                </a>
              </p>
            )}
          </div>

          <div className="rounded-card border border-line bg-surface-alt p-6 sm:p-8 lg:p-10">
            {sent ? (
              <div role="status" className="flex flex-col items-start gap-4 py-6">
                <CheckCircle2 className="h-9 w-9 text-accent" aria-hidden="true" />
                <h3 className="text-h3 font-semibold text-heading">
                  Thanks, your message is in.
                </h3>
                <p className="max-w-md text-body leading-7 text-muted">
                  Our team will reply to the email address you provided.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-body-sm font-semibold text-heading underline underline-offset-4 transition-colors duration-300 hover:text-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contactName" className={label}>
                      Full name
                    </label>
                    <input
                      id="contactName"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Enter your name"
                      className={field}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className={label}>
                      Email
                    </label>
                    <input
                      id="contactEmail"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Enter your email"
                      className={field}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contactPhone" className={label}>
                      Phone <span className="font-normal text-muted">(optional)</span>
                    </label>
                    <input
                      id="contactPhone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Enter your phone number"
                      className={field}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactTopic" className={label}>
                      I&apos;m reaching out about
                    </label>
                    <select
                      id="contactTopic"
                      name="topic"
                      defaultValue={form.topics[0]}
                      className={field}
                    >
                      {form.topics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessage" className={label}>
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can we help?"
                    className={`${field} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-button bg-accent px-6 py-3.5 text-body-sm font-semibold text-inverse-fg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:w-auto"
                >
                  Send message
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactForm;