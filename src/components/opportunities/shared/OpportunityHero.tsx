"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, MapPin, Search } from "lucide-react";

import { Container } from "@/components/layout";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import type { OpportunityHeroContent } from "@/types";

export interface HeroAction {
  label: string;
  href: string;
  /** `primary` is the solid white pill; `ghost` is the glass outline pill. */
  variant?: "primary" | "ghost";
}

interface OpportunityHeroProps extends Omit<OpportunityHeroContent, "image" | "imageAlt"> {
  /** Poster / fallback image. Also the only background for reduced-motion visitors. */
  image: string;
  imageAlt?: string;
  /** Optional looping background video (muted, decorative). */
  video?: string;
  /** Current page label for the breadcrumb, e.g. "Search Jobs". */
  crumb?: string;
  /** Renders an embedded quick job-search form (title + location) in the hero. */
  search?: boolean;
  /** Call-to-action pills under the copy. */
  actions?: readonly HeroAction[];
  /** Extra hero content (e.g. a custom search form), rendered under the actions. */
  children?: ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

/**
 * Full-width hero shown at the top of every Opportunities page: background
 * video (with an image poster), layered navy scrims for legibility, and
 * staggered-in copy. The wording, colours and fonts all come from the site's
 * existing tokens, so it stays on-brand.
 */
export default function OpportunityHero({
  kicker,
  heading,
  body,
  image,
  imageAlt = "",
  video,
  crumb,
  search,
  actions,
  children,
}: OpportunityHeroProps) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  // The video may already have data by the time React hydrates, in which case
  // `onLoadedData` never fires for us — check once on mount.
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) setReady(true);
  }, []);

  const showVideo = Boolean(video) && !reduce;

  return (
    <section className="relative isolate overflow-hidden bg-primary text-white">
      {/* ---------- BACKGROUND MEDIA ---------- */}
      <motion.div
        aria-hidden={showVideo ? true : undefined}
        className="absolute inset-0 -z-20"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease }}
      >
        <Image
          src={image}
          alt={showVideo ? "" : imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {showVideo ? (
          <video
            ref={videoRef}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms]",
              ready ? "opacity-100" : "opacity-0"
            )}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            aria-hidden="true"
            onLoadedData={() => setReady(true)}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : null}
      </motion.div>

      {/* ---------- SCRIMS: legibility + brand tint ---------- */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/55 md:via-primary/65 md:to-primary/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/75 via-transparent to-primary/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_88%_8%,hsl(var(--k-teal-500)/0.28),transparent)]"
      />
      {/* faint architectural grid, fading out toward the bottom */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      {/* ---------- CONTENT ---------- */}
      <Container className="relative flex min-h-[500px] flex-col justify-center py-14 sm:min-h-[540px] md:min-h-[600px] md:py-24">
        <motion.div
          variants={stagger}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-3xl"
        >
          <motion.nav
            variants={rise}
            aria-label="Breadcrumb"
            className="mb-7 inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/10 px-3.5 py-1.5 text-caption font-medium text-white/70 backdrop-blur-md"
          >
            <Link href={routes.opportunities.home} className="transition-colors hover:text-white">
              Opportunities
            </Link>
            {crumb ? (
              <>
                <span aria-hidden className="text-white/35">/</span>
                <span className="text-white">{crumb}</span>
              </>
            ) : null}
          </motion.nav>

          <motion.p
            variants={rise}
            className="mb-5 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.22em] text-teal-200"
          >
            <span aria-hidden className="h-px w-10 bg-teal-200/70" />
            {kicker}
          </motion.p>

          <motion.h1
            variants={rise}
            className="font-heading text-[clamp(36px,5.6vw,72px)] font-semibold leading-[1.03] tracking-tight text-white"
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-2xl text-body-lg leading-relaxed text-white/80 md:text-[19px]"
          >
            {body}
          </motion.p>

          {actions?.length ? (
            <motion.div variants={rise} className="mt-9 flex flex-wrap gap-3">
              {actions.map((a) => (
                <Link
                  key={a.label}
                  href={a.href}
                  className={cn(
                    "group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-pill px-7 font-heading text-button font-semibold transition-all duration-base",
                    a.variant === "ghost"
                      ? "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/20"
                      : "bg-white text-primary shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 hover:bg-teal-50"
                  )}
                >
                  {a.label}
                  {a.variant === "ghost" ? null : (
                    <ArrowRight
                      className="size-4 transition-transform duration-base group-hover:translate-x-1"
                      aria-hidden
                    />
                  )}
                </Link>
              ))}
            </motion.div>
          ) : null}
        </motion.div>

        {search ? (
          <form
            action={routes.opportunities.searchJobs}
            method="get"
            className="relative mt-10 flex w-full max-w-3xl flex-col gap-2.5 rounded-panel border border-white/25 bg-white/15 p-2.5 shadow-glass backdrop-blur-[18px] sm:flex-row sm:items-center sm:gap-0 sm:rounded-pill sm:p-2"
          >
            <div className="flex min-h-[52px] flex-1 items-center gap-3 rounded-[16px] bg-white px-4 sm:rounded-pill">
              <Search className="size-[18px] shrink-0 text-muted" aria-hidden />
              <input
                type="text"
                name="q"
                placeholder="Job title or keyword"
                autoComplete="off"
                className="w-full border-0 bg-transparent text-body text-paragraph outline-none placeholder:text-muted"
              />
            </div>

            <div className="flex min-h-[52px] flex-1 items-center gap-3 rounded-[16px] bg-white px-4 sm:ml-2 sm:rounded-pill">
              <MapPin className="size-[18px] shrink-0 text-muted" aria-hidden />
              <input
                type="text"
                name="location"
                placeholder="Location"
                autoComplete="off"
                className="w-full border-0 bg-transparent text-body text-paragraph outline-none placeholder:text-muted"
              />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex min-h-[52px] items-center justify-center rounded-[16px] bg-primary px-7 text-button font-semibold text-primary-fg transition-colors duration-base hover:bg-primary-hover sm:ml-2 sm:mt-0 sm:rounded-pill"
            >
              Search Jobs
            </button>
          </form>
        ) : null}

        {children ? <div className="relative mt-9 w-full max-w-4xl">{children}</div> : null}
      </Container>
    </section>
  );
}
