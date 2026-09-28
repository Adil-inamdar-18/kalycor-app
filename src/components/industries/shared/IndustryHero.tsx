import Image from 'next/image';
import {
  ArrowRight,
  MessageCircle,
  Settings,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';

import { Button } from '@/components/ui';
import { Container } from '@/components/layout';
import type { IndustryPage } from '@/types';

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  trending: TrendingUp,
  shield: ShieldCheck,
  settings: Settings,
  users: Users,
};

function IconBubble({ name, className = 'h-11 w-11' }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Sprout;
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 ${className}`}
      aria-hidden="true"
    >
      <Icon className="h-[45%] w-[45%]" strokeWidth={1.75} />
    </span>
  );
}

export function IndustryHero({ hero }: { hero: IndustryPage['hero'] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface to-teal-50/60">
      <Container>
        <div className="grid gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:py-14">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill bg-teal-50 px-4 py-2 font-heading text-caption font-semibold uppercase tracking-kicker text-teal-700">
              <Sprout className="h-4 w-4" aria-hidden="true" />
              {hero.kicker}
            </span>

            <h1 className="mt-5 text-[clamp(34px,4.2vw,56px)] font-bold leading-[1.1] tracking-tight text-heading">
              {hero.title.map((line, index) => (
                <span
                  key={line}
                  className={
                    index === hero.accentLine
                      ? 'block bg-gradient-to-r from-teal-500 to-teal-800 bg-clip-text text-transparent'
                      : 'block lg:whitespace-nowrap'
                  }
                >
                  {line}
                </span>
              ))}
            </h1>

            <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full bg-teal-100" aria-hidden="true">
              <span className="h-full w-1/2 rounded-full bg-teal-600" />
            </div>

            <p className="mt-4 max-w-md text-body leading-7 text-muted">
              {hero.description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={hero.primaryCta.href}
                size="lg"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>

              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                size="lg"
                icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            {hero.highlights && (
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-0">
                {hero.highlights.map((item, i) => (
                  <li
                    key={item.label}
                    className={`flex items-center gap-3 sm:px-4 ${
                      i > 0 ? 'sm:border-l sm:border-line' : 'sm:pl-0'
                    }`}
                  >
                    <IconBubble name={item.icon} className="h-9 w-9" />
                    <span className="text-small font-medium leading-snug text-heading/80">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Visual */}
          <div className="relative w-full">
            <div className="relative h-[320px] overflow-hidden rounded-panel shadow-deep sm:h-[400px] lg:h-[440px]">
              <Image
                src={hero.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

    </section>
  );
}

export default IndustryHero;