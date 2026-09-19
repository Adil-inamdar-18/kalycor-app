import type { FormEvent } from "react";
import { LocationIcon, SearchIconThin } from "./icons";

export interface JobsHeroProps {
  keyword: string;
  location: string;
  onKeywordChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const fieldClass =
  "flex min-h-[54px] min-w-0 items-center gap-[13px] px-2 ts:min-h-0 ts:px-0";
const inputClass =
  "w-full border-0 bg-transparent text-body text-paragraph outline-none placeholder:text-graphite-400";

export function Hero({
  keyword,
  location,
  onKeywordChange,
  onLocationChange,
  onSubmit,
}: JobsHeroProps) {
  return (
    <section className="relative flex min-h-[620px] items-end overflow-hidden bg-cover bg-center bg-no-repeat [background-image:var(--gradient-hero-wash),url('/images/jobs-hero.png')] px-4 pb-[18px] text-white ts:min-h-[680px] ts:px-6 ts:pb-[26px] dl:min-h-[750px] after:pointer-events-none after:absolute after:inset-0 after:bg-hero-scrim after:content-['']">
      <div className="relative z-[2] mx-auto w-full max-w-[1200px]">
        <div className="mb-[55px] text-center ts:mb-[88px]">
          <h1 className="mb-2 font-sans text-[39px] font-normal italic leading-[1.05] tracking-[-1.5px] text-white sm:text-h1 sm:tracking-[-2px]">
            Find Your Dream Job
          </h1>
          <p className="text-[15px] font-normal text-white/95 sm:text-[clamp(16px,1.6vw,22px)]">
            New opportunities to explore every day – find your perfect fit!
          </p>
        </div>

        <div className="relative w-full rounded-panel border border-white/30 bg-white/20 p-3.5 shadow-glass backdrop-blur-[18px] sm:p-5 ts:px-[34px] ts:pb-[34px] ts:pt-7">
          <form
            onSubmit={onSubmit}
            className="grid min-h-[70px] grid-cols-1 items-center gap-0 rounded-[20px] bg-white p-3 shadow-searchbar ts:grid-cols-[1fr_1px_0.85fr_auto] ts:rounded-pill ts:py-[5px] ts:pl-[25px] ts:pr-1.5"
          >
            <div className={fieldClass}>
              <SearchIconThin className="h-[22px] w-[22px] shrink-0 text-heading" />
              <input
                id="heroKeyword"
                type="text"
                placeholder="Job Title or Keywords"
                autoComplete="off"
                value={keyword}
                onChange={(event) => onKeywordChange(event.target.value)}
                className={inputClass}
              />
            </div>

            <div
              aria-hidden
              className="h-px w-full bg-divider-150 ts:h-[34px] ts:w-px"
            />

            <div className={fieldClass}>
              <LocationIcon className="h-[22px] w-[22px] shrink-0 text-heading" />
              <input
                id="heroLocation"
                type="text"
                placeholder="Location"
                autoComplete="off"
                value={location}
                onChange={(event) => onLocationChange(event.target.value)}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="mt-2 h-[54px] w-full rounded-pill border-0 bg-primary px-[35px] text-body font-semibold text-primary-fg transition-all duration-base hover:bg-primary-hover ts:mt-0 ts:h-[60px] ts:w-auto ts:min-w-[190px] ts:hover:translate-x-0.5"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
