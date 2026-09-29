'use client';

import { motion } from 'framer-motion';

import { Container } from '@/components/layout';
import { blogCategories, blogPosts, blogsMasthead } from '@/data/blogs';

import { Kicker } from '../shared/Kicker';

/**
 * A magazine-style masthead — big serif headline on a plain page, no photo —
 * so the content below is what draws the eye.
 */
export default function BlogsMasthead() {
  return (
    <section className="border-b border-line bg-background">
      <Container className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Kicker className="mb-6">{blogsMasthead.kicker}</Kicker>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-display text-[clamp(44px,7vw,92px)] font-medium leading-[1.02] tracking-tight text-heading"
        >
          {blogsMasthead.heading}{' '}
          <span className="italic text-accent">{blogsMasthead.headingAccent}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-body-lg leading-8 text-paragraph">
            {blogsMasthead.body}
          </p>
          <p className="shrink-0 font-heading text-small font-semibold text-muted">
            {blogPosts.length} articles &middot; {blogCategories.length} topics
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
