'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type MotionProps } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import { Container } from '@/components/layout';
import { contactPage } from '@/data/contact';

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactHero() {
  const { hero, offices } = contactPage;
  const reduceMotion = useReducedMotion();

  // One entrance sequence for the whole hero; skipped for reduced motion.
  const enter = (delay: number): MotionProps =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        };

  const jumpLinks = [
    {
      href: '#help',
      title: 'How we can help',
      note: 'Talent, jobs and referrals',
    },
    {
      href: '#offices',
      title: 'Our offices',
      note: `${offices.india.length} in India, ${offices.international.length} worldwide`,
    },
    {
      href: '#message',
      title: 'Send a message',
      note: offices.india[0]?.email ?? 'Write to our team',
    },
  ];

  return (
    <section className="relative isolate flex min-h-[calc(100svh-76px)] flex-col overflow-hidden bg-primary text-primary-fg">
      {/* Full-bleed background image with a light navy overlay */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      <Container className="flex flex-1 flex-col justify-center py-20 sm:py-24">
        <div className="max-w-3xl">
          <motion.p
            {...enter(0)}
            className="mb-5 font-heading text-kicker font-semibold uppercase tracking-kicker text-teal-200"
          >
            {hero.kicker}
          </motion.p>

          <motion.h1
            {...enter(0.08)}
            className="text-h1 font-medium tracking-tight text-primary-fg"
          >
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.div
            {...enter(0.16)}
            className="mt-7 h-px w-16 bg-teal-200/80"
            aria-hidden="true"
          />

          <motion.p
            {...enter(0.22)}
            className="mt-7 max-w-xl text-body-lg leading-8 text-primary-fg/85"
          >
            {hero.description}
          </motion.p>
        </div>
      </Container>

      {/* Jump links: one tap to each part of the page */}
      <motion.div
        {...enter(0.34)}
        className="relative border-t border-primary-fg/20 bg-primary/40 backdrop-blur-sm"
      >
        <Container>
          <nav
            aria-label="On this page"
            className="grid divide-y divide-primary-fg/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-4 py-5 transition-colors duration-300 hover:text-teal-200 sm:px-6 sm:first:pl-0"
              >
                <span>
                  <span className="block font-heading text-body font-semibold text-inherit">
                    {link.title}
                  </span>
                  <span className="mt-1 block break-all text-caption text-primary-fg/70">
                    {link.note}
                  </span>
                </span>

                <ArrowDown
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>
        </Container>
      </motion.div>
    </section>
  );
}

export default ContactHero;