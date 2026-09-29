'use client';

import { motion } from 'framer-motion';

import { Container, Section } from '@/components/layout';
import type { aboutMission } from '@/data/aboutUs';

type AboutMissionProps = typeof aboutMission;

export function AboutMission(content: AboutMissionProps) {
  return (
    <Section as="section" tone="page" spacing="sm">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center text-body-lg leading-9 text-paragraph"
        >
          {content.text}
        </motion.p>
      </Container>
    </Section>
  );
}

export default AboutMission;