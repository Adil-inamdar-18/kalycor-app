'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Cpu,
  UserCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { aboutServices } from '@/data/aboutUs';

type AboutServicesProps = typeof aboutServices;

const iconRules: ReadonlyArray<[RegExp, LucideIcon]> = [
  [/workforce/i, Users],
  [/recruit/i, UserCheck],
  [/professional/i, Briefcase],
  [/technology/i, Cpu],
];

const fallbackIcons: readonly LucideIcon[] = [Users, UserCheck, Briefcase, Cpu];

function iconFor(title: string, index: number): LucideIcon {
  return (
    iconRules.find(([pattern]) => pattern.test(title))?.[1] ??
    fallbackIcons[index % fallbackIcons.length]
  );
}

export function AboutServices(content: AboutServicesProps) {
  return (
    <Section as="section" tone="surface">
      <Container>
        {/* Centered heading flanked by lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            {content.kicker}
          </p>
          <div className="flex items-center gap-6">
            <span className="hidden h-px flex-1 bg-line sm:block" aria-hidden="true" />
            <h2 className="mx-auto text-h2 font-bold leading-[1.1] tracking-tight text-heading sm:mx-0">
              {content.heading}
            </h2>
            <span className="hidden h-px flex-1 bg-line sm:block" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Connected pillars */}
        <div className="relative">
          <span
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-line lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {content.items.map((item, index) => {
              const Icon = iconFor(item.title, index);

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group relative text-center"
                >
                  <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface bg-teal-100 text-teal-700 shadow-tile transition-colors duration-slow group-hover:bg-accent group-hover:text-primary-fg">
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  </span>

                  <p className="mt-5 font-heading text-caption font-semibold tracking-kicker text-accent">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-h4 font-bold leading-tight text-heading">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-body-sm leading-7 text-paragraph">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutServices;