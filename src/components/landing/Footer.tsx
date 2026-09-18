import { Fragment } from 'react';
import Link from 'next/link';
import { Brand, Container } from '@/components/layout';
import { LinkList } from '@/components/ui';
import { getLandingData } from '@/services/siteService';
import { anchors } from '@/config/routes';
import { site } from '@/config/site';
import CtaPair from './CtaPair';

const columnHeading = 'mb-3.5 font-heading text-caption font-semibold text-background';
const columnLink =
  'text-[13.5px] transition-colors duration-fast hover:text-primary';

export function Footer() {
  const { footerColumns, footerSolutions, socialLinks } = getLandingData();
  return (
    <footer
      id={anchors.landing.contact.slice(1)}
      className="border-t border-inverse-fg/10 bg-inverse pt-16 text-inverse-fg/85"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 border-b border-inverse-fg/[0.12] pb-10 sm:grid-cols-2 nav:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Brand
              href={anchors.landing.home}
              className="[--brand-primary:var(--bg)] [--brand-secondary:var(--bg)]"
            />
            <p className="mt-3.5 max-w-[26ch] text-small text-inverse-fg/60">
              {site.tagline}. We connect people, businesses, and opportunities through
              smarter solutions.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-inverse-fg/25 text-caption transition-colors duration-fast hover:border-primary hover:text-primary"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={columnHeading}>Solutions</h4>
            {footerSolutions.map((group) => (
              <Fragment key={group.title}>
                <h6 className="mb-[5px] mt-3 text-[11.5px] font-semibold text-inverse-fg/50">
                  {group.title}
                </h6>
                <LinkList
                  links={group.links}
                  itemClassName="mb-2"
                  linkClassName={columnLink}
                />
              </Fragment>
            ))}
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className={columnHeading}>{column.title}</h4>
              <LinkList
                links={column.links}
                itemClassName="mb-2"
                linkClassName={columnLink}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <Link href={anchors.landing.contact} className="text-caption underline">
            Candidate Portal Login
          </Link>
          <CtaPair className="flex items-center gap-2.5" size="sm" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-inverse-fg/[0.12] py-5 text-caption text-inverse-fg/55">
          <span>© 2026 {site.name}. All rights reserved.</span>
          <span>Built with care, for people and businesses in motion.</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
