import { Container, Section } from '@/components/layout';

export function ReferCandidateSection() {
  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Left Content */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
              Refer a Candidate
            </p>

            <h2 className="text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
              Know Someone Who Could Be a Great Fit?
            </h2>

            <div
              className="mt-6 h-px w-16 bg-accent"
              aria-hidden="true"
            />

            <p className="mt-6 max-w-xl text-body-lg leading-8 text-muted">
              Help connect talented professionals with the right opportunities.
              Share their details with our team and we will take it from there.
            </p>
          </div>

          {/* Right Form */}
          <div className="rounded-card border border-line bg-surface-alt p-6 sm:p-8 lg:p-10">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="referrerName"
                    className="mb-2 block text-body-sm font-semibold text-heading"
                  >
                    Your Name
                  </label>

                  <input
                    id="referrerName"
                    name="referrerName"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-input border border-line bg-surface px-4 py-3 text-body text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="referrerEmail"
                    className="mb-2 block text-body-sm font-semibold text-heading"
                  >
                    Your Email
                  </label>

                  <input
                    id="referrerEmail"
                    name="referrerEmail"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-input border border-line bg-surface px-4 py-3 text-body text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="candidateName"
                    className="mb-2 block text-body-sm font-semibold text-heading"
                  >
                    Candidate Name
                  </label>

                  <input
                    id="candidateName"
                    name="candidateName"
                    type="text"
                    placeholder="Enter candidate name"
                    className="w-full rounded-input border border-line bg-surface px-4 py-3 text-body text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="candidateEmail"
                    className="mb-2 block text-body-sm font-semibold text-heading"
                  >
                    Candidate Email
                  </label>

                  <input
                    id="candidateEmail"
                    name="candidateEmail"
                    type="email"
                    placeholder="Enter candidate email"
                    className="w-full rounded-input border border-line bg-surface px-4 py-3 text-body text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="candidatePhone"
                  className="mb-2 block text-body-sm font-semibold text-heading"
                >
                  Candidate Phone
                </label>

                <input
                  id="candidatePhone"
                  name="candidatePhone"
                  type="tel"
                  placeholder="Enter candidate phone number"
                  className="w-full rounded-input border border-line bg-surface px-4 py-3 text-body text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-body-sm font-semibold text-heading"
                >
                  Additional Information
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about the candidate..."
                  className="w-full resize-none rounded-input border border-line bg-surface px-4 py-3 text-body text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-button bg-accent px-6 py-3.5 text-body-sm font-semibold text-inverse-fg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:w-auto"
              >
                Submit Referral
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ReferCandidateSection;