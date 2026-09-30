import { Container, Section } from '@/components/layout';
import { whoWeAreIntro } from '@/data/whoweare';

import { Kicker } from './shared/Kicker';
import { Reveal } from './shared/Reveal';

export default function WhoWeAreIntro() {
  const [lead, ...rest] = whoWeAreIntro.paragraphs;

  return (
    <Section
      as="section"
      id="intro"
      tone="page"
      className="scroll-mt-20 pb-12 md:pb-16"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal from="left">
            <Kicker>{whoWeAreIntro.kicker}</Kicker>

            <h2 className="mt-5 text-h2 font-semibold leading-[1.08] tracking-tight text-heading">
              {whoWeAreIntro.heading}
            </h2>
          </Reveal>

          <Reveal from="right" delay={0.1}>
            <p className="font-heading text-[clamp(20px,2.1vw,27px)] font-medium leading-snug text-heading">
              {lead}
            </p>

            <div className="mt-8 space-y-5 border-l-2 border-accent/40 pl-6 text-body-lg leading-8 text-muted">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}