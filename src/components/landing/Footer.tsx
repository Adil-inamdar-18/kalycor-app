import Image from 'next/image';
import Link from 'next/link';
import { Brand, Container } from '@/components/layout';
import { LinkList } from '@/components/ui';
import { getLandingData } from '@/services/siteService';
import { anchors } from '@/config/routes';
import { site } from '@/config/site';
import CtaPair from './CtaPair';

/** Highlight colour from the existing palette (works on every surface). */
const accent = 'hsl(var(--k-blue-400))';

/** Footer column order (independent of the header's order). Labels and links
 *  come from the same `navMenus` data the header renders, so the two stay in
 *  sync automatically. */
const FOOTER_MENU_ORDER = ['solutions', 'industries', 'our-businesses', 'who-we-are', 'opportunities'];

const columnHeading =
  'font-heading text-kicker font-semibold uppercase tracking-[0.12em] text-inverse-fg';

/** Small accent rule under each column heading. */
const headingRule = 'mb-4 mt-2.5 block h-0.5 w-6 bg-[hsl(var(--k-blue-400))]';

const columnLink =
  'inline-block font-sans text-small font-normal text-inverse-fg/70 transition-[color,transform] duration-fast hover:translate-x-1 hover:text-inverse-fg focus-visible:translate-x-1 focus-visible:text-inverse-fg';

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className={columnHeading}>{children}</h3>
      <span aria-hidden="true" className={headingRule} />
    </>
  );
}

export function Footer() {
  const { navMenus, footerColumns, socialLinks } = getLandingData();

  // The four navigation columns, in footer order, straight from the header data.
  const menus = FOOTER_MENU_ORDER.map((key) =>
    navMenus.find((menu) => menu.key === key),
  ).filter((menu): menu is (typeof navMenus)[number] => Boolean(menu));

  // Existing footer utility links (Contact Us, Privacy Policy, Terms &
  // Conditions) that are not header pages: kept in the bottom bar.
  const headerHrefs = new Set(
    navMenus.flatMap((menu) => (menu.links ?? []).map((link) => link.href)),
  );
  const legalLinks = (
    footerColumns.find((column) => column.title === 'Who We Are')?.links ?? []
  ).filter((link) => !headerHrefs.has(link.href));

  return (
    <footer
      id={anchors.landing.contact.slice(1)}
      className="relative isolate overflow-hidden border-t border-inverse-fg/10 bg-inverse pt-12 text-inverse-fg/85 sm:pt-16"
    >
      {/* Decorative: soft glows + top hairline, all from the palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_100%_0%,hsl(var(--k-blue-400)/0.14),transparent_70%),radial-gradient(50%_45%_at_0%_100%,hsl(var(--k-navy-700)/0.35),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[hsl(var(--k-blue-400)/0.6)] to-transparent"
      />

      <Container>
        {/* CTA / contact panel */}
        <div className="relative overflow-hidden rounded-card border border-inverse-fg/15 bg-gradient-to-br from-[hsl(var(--k-navy-800))] via-[hsl(var(--k-navy-900))] to-[hsl(var(--k-navy-950))] px-6 py-8 sm:px-10 sm:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[hsl(var(--k-blue-400)/0.18)] blur-3xl"
          />
          <div className="relative flex flex-col gap-6 tp:flex-row tp:items-center tp:justify-between">
            <div>
              <span
                className="font-heading text-micro font-semibold uppercase tracking-[0.16em]"
                style={{ color: accent }}
              >
                Contact
              </span>
              <p className="mt-2 font-heading text-[clamp(24px,4.2vw,34px)] font-medium leading-[1.1] text-inverse-fg">
                {site.tagline}
              </p>
              <Link
                href={anchors.landing.contact}
                className="group mt-4 inline-flex items-center gap-2 text-caption text-inverse-fg/75 transition-colors duration-fast hover:text-inverse-fg"
              >
                <span className="underline decoration-inverse-fg/30 underline-offset-4 transition-colors duration-fast group-hover:decoration-inverse-fg">
                  Candidate Portal Login
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-fast group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <CtaPair
              className="flex flex-wrap items-center gap-2.5 [--btn-outline-bg-hover:var(--inverse-fg)] [--btn-outline-border:var(--inverse-fg)] [--btn-outline-fg-hover:var(--inverse)] [--btn-outline-fg:var(--inverse-fg)] [--btn-solid-bg-hover:var(--k-blue-50)] [--btn-solid-bg:var(--k-white)] [--btn-solid-fg:var(--k-navy-900)]"
              size="md"
            />
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 pb-10 pt-12 sm:gap-x-8 tl:grid-cols-4 nav:grid-cols-[1.5fr_repeat(5,1fr)] nav:gap-x-10 nav:pt-14">
          {/* Brand */}
          <div className="col-span-2 tl:col-span-4 nav:col-span-1">
            <Brand
              href={anchors.landing.home}
              className="group [--brand-gap:6px] [--brand-mark:60px] [--brand-primary:var(--bg)] [--brand-secondary:var(--bg)] [--brand-size:28px]"
              mark={
                <Image
                  src={site.logo.src}
                  alt={site.logo.alt}
                  width={site.logo.width}
                  height={site.logo.height}
                  className="brightness-0 invert"
                />
              }
            />
            <p className="mt-4 max-w-[36ch] font-sans text-small font-normal leading-relaxed text-inverse-fg/70">
              {site.tagline}. We connect people, businesses, and opportunities through
              smarter solutions.
            </p>
          </div>

          {/* Solutions, Industries, Our Businesses, Who We Are, Opportunities */}
          {menus.map((menu) => (
            <nav key={menu.key} aria-label={`${menu.label} pages`}>
              <ColumnHeading>{menu.label}</ColumnHeading>
              <LinkList
                links={menu.links ?? []}
                itemClassName="mb-2.5 leading-snug"
                linkClassName={columnLink}
              />
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-inverse-fg/[0.12] py-6 font-sans text-caption font-normal text-inverse-fg/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <span>© 2026 {site.name}. All rights reserved.</span>
            <span className="text-inverse-fg/45">
              Built with care, for people and businesses in motion.
            </span>
            {legalLinks.length > 0 && (
              <LinkList
                links={legalLinks}
                className="mt-1 flex flex-wrap gap-x-5 gap-y-1"
                linkClassName="text-caption text-inverse-fg/65 transition-colors duration-fast hover:text-inverse-fg"
              />
            )}
          </div>

          <div className="flex gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-inverse-fg/25 text-caption text-inverse-fg/80 transition-[background-color,border-color,color,transform] duration-fast hover:-translate-y-0.5 hover:border-[hsl(var(--k-blue-400))] hover:bg-[hsl(var(--k-blue-400))] hover:text-white focus-visible:-translate-y-0.5 focus-visible:border-[hsl(var(--k-blue-400))]"
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;