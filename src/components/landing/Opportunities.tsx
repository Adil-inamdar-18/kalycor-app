import { Button } from '@/components/ui';
import { Container, Section } from '@/components/layout';
import { site } from '@/config/site';
import { anchors } from '@/config/routes';

/** "Your Next Step Starts Here" CTA band. */
export function Opportunities() {
  const cta = site.ctas.exploreOpportunities;

  return (
    <Section
      id={anchors.landing.opportunities.slice(1)}
      tone="accent"
      spacing="none"
      className="py-20"
    >
      <Container className="flex flex-wrap items-center justify-between gap-12">
        <div>
          <h2 className="max-w-[14ch] text-[clamp(30px,4vw,46px)] text-inherit">
            Your Next Step Starts Here.
          </h2>
          <p className="mt-4 max-w-[42ch] text-primary-fg/80">
            Discover opportunities that align with your skills, experience, and ambitions.
          </p>
        </div>

        <Button
          href={cta.href}
          variant="solid"
          className="transition-all duration-slow hover:-translate-y-1 hover:scale-[1.03] hover:shadow-cta active:-translate-y-px active:scale-[0.99] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white/70"
        >
          {cta.label}
        </Button>
      </Container>
    </Section>
  );
}

export default Opportunities;
