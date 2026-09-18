'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { getBusinessData } from '@/services/siteService';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const { contactData } = getBusinessData();
  const [submitted, setSubmitted] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
    setSelectedInterest('');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand">
              Contact
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {contactData.heading}
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-gray-muted sm:text-lg">
              {contactData.subheading}
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-muted">
                  Email
                </p>
                <p className="mt-1 text-lg text-ink">hello@kalycor.com</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-gray-muted">
                  Phone
                </p>
                <p className="mt-1 text-lg text-ink">+1 (800) 555-0190</p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-lg border border-plum/10 bg-white p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="First Name" name="firstName" required />
                <FormField label="Last Name" name="lastName" required />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField label="Email" name="email" type="email" required />
                <FormField label="Phone" name="phone" type="tel" />
              </div>
              <FormField label="Company" name="company" />

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">
                  I am interested in
                </label>
                <div className="flex flex-wrap gap-2">
                  {contactData.interestOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedInterest(option)}
                      className={cn(
                        'rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200',
                        selectedInterest === option
                          ? 'border-brand bg-brand text-white'
                          : 'border-plum/15 text-ink/70 hover:border-plum/40'
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-ink"
                >
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-plum/15 bg-offwhite px-4 py-3 text-sm text-ink placeholder:text-gray-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  'mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-plum px-6 py-4 text-base font-medium text-cream transition-colors duration-200 hover:bg-plum/90'
                )}
              >
                {submitted ? 'Thank you!' : 'Get Started'}
                <Send className="h-4 w-4" />
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-brand"
                >
                  We&rsquo;ve received your message. We&rsquo;ll be in touch shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-plum/15 bg-offwhite px-4 py-3 text-sm text-ink placeholder:text-gray-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
        placeholder={label}
      />
    </div>
  );
}
