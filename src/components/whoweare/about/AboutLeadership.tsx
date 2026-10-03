'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Cpu, Settings, Users, type LucideIcon } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import type { AboutLeadershipContent } from '@/data/aboutUs';

import { Kicker } from '../shared/Kicker';

const icons: readonly LucideIcon[] = [Compass, Settings, Users, Cpu];

export function AboutLeadership(content: AboutLeadershipContent) {
  return (
    <Section
      as="section"
      id="leadership"
      tone="page"
      className="scroll-mt-20"
    >
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Kicker className="mb-4">{content.kicker}</Kicker>
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {content.heading}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg leading-8 text-paragraph"
          >
            {content.body}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 aspect-[16/8] overflow-hidden rounded-panel shadow-float"
        >
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            className="object-cover object-[50%_25%]"
            sizes="(min-width: 1280px) 1136px, 100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-inverse/50 via-transparent to-transparent"
          />
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {content.leaders.map((leader, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.li
                key={leader.role}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col rounded-card border border-line bg-surface p-6 transition-all duration-slow hover:-translate-y-1 hover:shadow-float"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition-colors duration-slow group-hover:bg-accent group-hover:text-primary-fg">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                {leader.name && (
                  <p className="mt-5 font-heading text-h4 font-bold text-heading">
                    {leader.name}
                  </p>
                )}
                <p
                  className={
                    leader.name
                      ? 'mt-1 font-heading text-small font-semibold text-accent'
                      : 'mt-5 font-heading text-h4 font-bold leading-tight text-heading'
                  }
                >
                  {leader.role}
                </p>
                <p className="mt-3 text-body-sm leading-7 text-paragraph">
                  {leader.focus}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </Section>
  );
}

export default AboutLeadership;
