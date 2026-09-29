'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  FolderKanban,
  Settings,
  type LucideIcon,
} from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { SolutionCapabilitiesContent } from '@/types';

const iconRules: ReadonlyArray<[RegExp, LucideIcon]> = [
  [/business support/i, Briefcase],
  [/specialized|expertise/i, Award],
  [/operational/i, Settings],
  [/project/i, FolderKanban],
];

const fallbackIcons: readonly LucideIcon[] = [Briefcase, Award, Settings, FolderKanban];

function iconFor(title: string, index: number): LucideIcon {
  return (
    iconRules.find(([pattern]) => pattern.test(title))?.[1] ??
    fallbackIcons[index % fallbackIcons.length]
  );
}

export function ProfessionalCapabilities(content: SolutionCapabilitiesContent) {
  return (
    <Section as="section" tone="page" className="bg-surface-alt">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 font-heading text-kicker font-semibold uppercase tracking-kicker text-accent">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            {content.kicker}
          </p>

          <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
            {content.heading}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {content.items.map((item, index) => {
            const Icon = iconFor(item.title, index);

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-tile transition-colors duration-slow hover:border-accent/50 hover:shadow-float"
              >
                <span
                  className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100"
                  aria-hidden="true"
                />

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition-colors duration-slow group-hover:bg-accent group-hover:text-primary-fg">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>

                <h3 className="mt-6 text-h3 font-bold leading-tight text-heading">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xl text-body leading-7 text-paragraph">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default ProfessionalCapabilities;