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
      tone="page"
      spacing="none"
      className="pb-14 pt-0 tl:pb-20"
    >
      <Container>
        <div
          className="
            group relative
            flex flex-col gap-6
            rounded-card border border-divider-200
            bg-white
            px-6 py-7
            shadow-card
            transition-shadow duration-slow
            hover:shadow-float
            sm:px-8 sm:py-8
            tp:flex-row tp:items-center tp:justify-between tp:gap-10
            tp:px-12 tp:py-9
          "
        >
          <div className="max-w-[560px]">
            <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-medium leading-[1.08] tracking-tight text-navy-900">
              Your Next Step
              <br />
              Starts Here.
            </h2>

            <p className="mt-3 max-w-[46ch] text-body-sm leading-relaxed text-paragraph">
              Discover opportunities that align with your skills, experience,
              and ambitions.
            </p>
          </div>

          <Button
            href={cta.href}
            variant="solid"
            size="lg"
            className="
              w-full shrink-0 gap-3
              transition-all duration-slow
              hover:-translate-y-0.5 hover:shadow-cta
              active:translate-y-0
              focus-visible:outline focus-visible:outline-[3px]
              focus-visible:outline-offset-4 focus-visible:outline-navy-900/60
              sm:w-auto
            "
          >
            <span>{cta.label}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4 shrink-0 transition-transform duration-fast group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
            </svg>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default Opportunities;