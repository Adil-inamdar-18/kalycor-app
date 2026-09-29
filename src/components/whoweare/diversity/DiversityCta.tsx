'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { diversityCta } from '@/data/diversityInclusion';

import { Kicker } from '../shared/Kicker';

/** Closing section: two clear paths depending on who is reading. */
export default function DiversityCta() {
  return (
    <Section as="section" tone="page">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[320px] overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-float"
          >
            <Image
              src={diversityCta.image}
              alt={diversityCta.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <Kicker className="mb-4">{diversityCta.kicker}</Kicker>
            <h2 className="text-h2 font-bold leading-[1.1] tracking-tight text-heading">
              {diversityCta.heading}
            </h2>
            <p className="mt-5 text-body-lg leading-8 text-paragraph">
              {diversityCta.body}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {diversityCta.paths.map((path) => (
                <Link
                  key={path.title}
                  href={path.href}
                  className="group flex flex-col rounded-card border border-line bg-surface p-6 transition-all duration-slow hover:-translate-y-1 hover:border-accent hover:shadow-float"
                >
                  <h3 className="font-heading text-h4 font-bold leading-tight text-heading">
                    {path.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm leading-6 text-paragraph">
                    {path.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-small font-semibold text-accent">
                    {path.label}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
