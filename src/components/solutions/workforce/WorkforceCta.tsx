import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section } from "@/components/layout";
import type { SolutionCtaContent } from "@/types";

/** Closing banner: dark rounded strip with photo, message and actions. */
export function WorkforceCta(content: SolutionCtaContent) {
  return (
    <Section as="section" tone="surface">
      <Container>
        <div className="flex flex-col overflow-hidden rounded-[28px] bg-inverse text-inverse-fg shadow-deep md:flex-row md:items-stretch">
          {/* Photo */}
          <div className="relative h-48 w-full shrink-0 md:h-auto md:w-[280px] lg:w-[340px]">
            <Image
              src="/images/approach-new1.jpeg"
              alt="Kalycor professionals collaborating"
              fill
              sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Message */}
          <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-8 md:px-10 md:py-10">
            <h2 className="max-w-[24ch] font-heading text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.2] tracking-tight text-white">
              {content.heading}
            </h2>
            <p className="max-w-[52ch] text-small leading-relaxed text-white/70">
              {content.body}
            </p>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 flex-col gap-3 px-6 pb-8 sm:flex-row md:items-center md:px-10 md:py-10 md:pl-0">
            <Link
              href={content.primaryHref}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white px-6 py-3 font-heading text-button font-medium text-navy-900 transition-colors duration-fast hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {content.primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={content.secondaryHref}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-white/40 px-6 py-3 font-heading text-button font-medium text-white transition-colors duration-fast hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {content.secondaryLabel}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WorkforceCta;