'use client';

import { Fragment, useRef, type ReactElement } from 'react';
import { Container } from '@/components/layout';
import { getJobsData } from '@/services/siteService';
import type { TrendingIconKey } from '@/types';
import {
  AerospaceIcon,
  AutomotiveIcon,
  BankingIcon,
  EnergyIcon,
  PharmaIcon,
  RetailIcon,
} from './categoryIcons';
import { ArrowRightIcon } from './icons';

const iconComponents: Record<TrendingIconKey, () => ReactElement> = {
  aerospace: AerospaceIcon,
  automotive: AutomotiveIcon,
  banking: BankingIcon,
  energy: EnergyIcon,
  pharma: PharmaIcon,
  retail: RetailIcon,
};

export interface TrendingSearchesProps {
  onSelectCategory: (category: string) => void;
}

export function TrendingSearches({ onSelectCategory }: TrendingSearchesProps) {
  const { trendingCategories } = getJobsData();
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollNext() {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    track.scrollBy({ left: card.offsetWidth + 20, behavior: 'smooth' });
  }

  return (
    <section className="bg-white pb-[50px] pt-[45px] sm:pb-[60px] sm:pt-[54px]">
      <Container>
        <h2 className="mb-[30px] text-[27px] font-normal italic leading-[1.2] tracking-[-1px] text-heading sm:text-[32px]">
          Trending Job Searches
        </h2>

        <div className="flex items-center gap-[30px]">
          <div
            ref={trackRef}
            className="flex min-w-0 flex-1 gap-5 overflow-x-auto pb-[5px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ts:overflow-hidden"
          >
            {trendingCategories.map(({ category, icon, label }) => {
              const Icon = iconComponents[icon];
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onSelectCategory(category)}
                  className="flex min-h-[182px] flex-[0_0_210px] cursor-pointer flex-col items-center justify-center rounded-[9px] border border-divider-200 bg-white px-3.5 py-[22px] text-center transition-all duration-slow hover:-translate-y-[5px] hover:border-primary hover:shadow-tile ts:flex-[0_0_calc((100%-60px)/4)] dl:flex-[0_0_calc((100%-100px)/6)]"
                >
                  <div className="mb-4 grid h-[52px] w-[52px] place-items-center text-accent">
                    <Icon />
                  </div>
                  <h3 className="max-w-[180px] text-body font-normal leading-[1.4] text-paragraph">
                    {label.map((line, index) => (
                      <Fragment key={line}>
                        {line}
                        {index < label.length - 1 && <br />}
                      </Fragment>
                    ))}
                  </h3>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Next trending searches"
            onClick={scrollNext}
            className="hidden h-[46px] w-[46px] flex-[0_0_46px] place-items-center rounded-full border border-accent bg-white text-accent transition-all duration-base hover:translate-x-[3px] hover:bg-accent hover:text-white ts:grid"
          >
            <ArrowRightIcon className="h-[22px] w-[22px]" />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default TrendingSearches;
