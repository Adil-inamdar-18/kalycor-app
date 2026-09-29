'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, HeartHandshake, Layers, MessagesSquare, Search, ShieldCheck, Sprout, UserCheck, Users, type LucideIcon } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { diversityInitiatives } from '@/data/diversityInclusion';
import { cn } from '@/lib/utils';

import { Kicker } from '../shared/Kicker';

/** One icon per initiative, in the same order as the data. */
const iconsByGroup: Record<string, readonly LucideIcon[]> = {
  candidates: [Search, ShieldCheck, Globe],
  clients: [Layers, UserCheck, HeartHandshake],
  team: [MessagesSquare, Sprout, Users],
};

/** Initiatives grouped by who they serve, switched with a segmented control. */
export default function DiversityInitiatives() {
  const [groupId, setGroupId] = useState<string>(diversityInitiatives.groups[0].id);
  const group =
    diversityInitiatives.groups.find((g) => g.id === groupId) ??
    diversityInitiatives.groups[0];
  const icons = iconsByGroup[group.id] ?? [];

  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Kicker className="mb-4">{diversityInitiatives.kicker}</Kicker>
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {diversityInitiatives.heading}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg leading-8 text-paragraph"
          >
            {diversityInitiatives.body}
          </motion.p>
        </div>

        {/* Segmented control */}
        <div
          role="tablist"
          aria-label="Initiatives by audience"
          className="mt-12 inline-flex max-w-full overflow-x-auto rounded-pill border border-line bg-surface-alt p-1"
        >
          {diversityInitiatives.groups.map((g) => {
            const isActive = g.id === group.id;

            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="initiative-panel"
                onClick={() => setGroupId(g.id)}
                className="relative shrink-0 rounded-pill px-5 py-2.5 font-heading text-small font-semibold"
              >
                {isActive && (
                  <motion.span
                    layoutId="initiative-pill"
                    className="absolute inset-0 rounded-pill bg-inverse"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={cn(
                    'relative transition-colors duration-base',
                    isActive ? 'text-inverse-fg' : 'text-paragraph hover:text-heading'
                  )}
                >
                  {g.label}
                </span>
              </button>
            );
          })}
        </div>

        <div id="initiative-panel" role="tabpanel" className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="max-w-2xl font-display text-h3 italic leading-snug text-heading">
                {group.intro}
              </p>

              <ul className="mt-8 grid gap-5 md:grid-cols-3">
                {group.items.map((item, index) => {
                  const Icon = icons[index % Math.max(icons.length, 1)] ?? Users;

                  return (
                    <li
                      key={item.title}
                      className="group rounded-card border border-line bg-background p-7 transition-all duration-slow hover:-translate-y-1 hover:border-accent/50 hover:shadow-float"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition-colors duration-slow group-hover:bg-accent group-hover:text-primary-fg">
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 text-h3 font-bold leading-tight text-heading">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-paragraph">
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
