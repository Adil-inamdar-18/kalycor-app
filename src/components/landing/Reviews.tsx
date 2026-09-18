'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/layout';
import { getLandingData } from '@/services/siteService';
import { anchors } from '@/config/routes';
import { cn } from '@/lib/utils';

const cardBase =
  'relative min-h-[340px] flex-col rounded-xl border border-teal-700/10 bg-white/[0.66] px-[26px] py-[30px] shadow-quote backdrop-blur-[10px] transition-all duration-[350ms] hover:-translate-y-2.5 hover:border-teal-700/[0.28] hover:shadow-quote-hover tp:min-h-[350px] tp:px-[38px] tp:pb-[30px] tp:pt-[34px]';

export function Reviews() {
  const { reviews } = getLandingData();
  const [index, setIndex] = useState(0);
  // Above 780px every card is visible (a grid); below that the cards become a
  // one-at-a-time carousel. Start as "wide" so the server HTML matches the
  // original markup, then sync with the real viewport after mount.
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    const sync = () => setIsWide(window.innerWidth > 780);
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section
      id={anchors.landing.whoWeAre.slice(1)}
      className="relative overflow-hidden border-y border-teal-400/10 bg-reviews py-[72px] tp:py-section before:pointer-events-none before:absolute before:right-[-190px] before:top-[-240px] before:h-[420px] before:w-[420px] before:rounded-full before:bg-white/[0.38] before:content-[''] after:pointer-events-none after:bottom-[-220px] after:left-[-210px] after:absolute after:h-[330px] after:w-[330px] after:rounded-full after:bg-teal-500/[0.08] after:content-['']"
    >
      <Container className="relative z-[1]">
        <div className="mb-[34px] max-w-[820px] tp:mb-12">
          <div className="flex items-center gap-[18px] font-heading text-kicker font-semibold tracking-[0.2em] text-navy-950 after:h-px after:w-[62px] after:bg-teal-700/45 after:content-['']">
            REVIEWS
          </div>
          <h2 className="mt-[18px] max-w-[22ch] font-editorial text-[clamp(40px,10vw,58px)] leading-[0.98] tracking-[-0.035em] text-teal-900 tp:text-[clamp(42px,5vw,68px)] dw:max-w-[18ch]">
            Don&rsquo;t just take our word for it.
          </h2>
          <p className="mt-5 max-w-[58ch] text-body leading-[1.65] text-teal-300 tp:text-body-lg">
            Hear from talented professionals and organizations who have found success
            through our people-first approach.
          </p>
        </div>

        <div className="block items-center gap-[34px] tp:grid tp:grid-cols-2 dw:grid-cols-3">
          {reviews.map((review, i) => (
            <article
              key={review.name}
              className={cn(
                cardBase,
                i === index || isWide ? 'flex' : 'hidden',
                // The middle card is the emphasised one on wide screens.
                i === 1 &&
                  'tp:min-h-[410px] tp:border-teal-700/25 tp:bg-teal-50/[0.86] tp:shadow-quote-featured',
                // The third card only appears once there are three columns.
                i === 2 && 'tp:hidden dw:flex'
              )}
            >
              <div className="mb-7 font-editorial text-[72px] leading-[0.55] text-sky-400">
                &ldquo;
              </div>
              <p className="m-0 max-w-[35ch] flex-grow text-body leading-[1.65] text-teal-400 tp:text-body-lg">
                {review.quote}
              </p>
              <div className="mt-7 flex items-center gap-[15px] font-heading text-body font-semibold text-teal-700">
                <div className="flex h-[62px] w-[62px] flex-[0_0_62px] items-center justify-center rounded-full border-4 border-white/90 bg-gradient-to-br from-teal-100 to-teal-200 font-heading text-[19px] font-bold text-teal-800 shadow-chip">
                  {review.initials}
                </div>
                <div className="flex flex-col gap-1.5">
                  <span>{review.name}</span>
                  <span className="text-body tracking-[2px] text-teal-550">
                    ★ ★ ★ ★ ★
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-[34px] flex items-center justify-center gap-[22px]"
          aria-label="Review controls"
        >
          <button
            type="button"
            aria-label="Previous review"
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-700/[0.24] bg-white/50 text-[25px] text-teal-500 transition-all duration-slow hover:scale-[1.08] hover:bg-white hover:shadow-chip tp:h-[54px] tp:w-[54px]"
          >
            ‹
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((review, i) => (
              <button
                key={review.name}
                type="button"
                aria-label={`Review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  'rounded-full transition-all duration-slow',
                  i === index
                    ? 'h-[11px] w-[11px] bg-sky-400'
                    : 'h-[9px] w-[9px] bg-teal-700/[0.18]'
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next review"
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-700/[0.24] bg-white/50 text-[25px] text-teal-500 transition-all duration-slow hover:scale-[1.08] hover:bg-white hover:shadow-chip tp:h-[54px] tp:w-[54px]"
          >
            ›
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Reviews;
