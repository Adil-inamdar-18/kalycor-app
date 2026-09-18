import Link from 'next/link';
import { LinkList } from '@/components/ui';
import type { NavMenu } from '@/types';
import { cn } from '@/lib/utils';
import CtaPair from './CtaPair';

const panel =
  'invisible absolute left-0 top-[calc(100%+14px)] z-dropdown translate-y-1.5 rounded-[3px] border border-line bg-surface p-[30px] opacity-0 shadow-menu transition-all duration-fast group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100';

const groupHeading =
  'mb-[7px] font-heading text-[11.5px] font-semibold text-navy-950';
const menuLink =
  'text-[13.5px] text-heading transition-colors duration-fast hover:text-navy-950';

/**
 * One main-navigation item with its mega-menu panel. `layout` picks how the
 * panel body is rendered:
 *   split – intro + CTA pair beside grouped links (Solutions)
 *   grid  – two-column list of plain links (Industries)
 *   list  – single-column list of links (Opportunities, Who We Are)
 */
export function NavDropdown({ menu }: { menu: NavMenu }) {
  const { label, kicker, description, layout, groups = [], links = [] } = menu;
  const narrow = layout !== 'split';

  return (
    <div className="group relative">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-[5px] rounded-xs px-[13px] py-2.5 font-medium text-heading transition-colors duration-fast hover:text-navy-950"
      >
        {label}
        <span className="mt-px text-[10px] text-paragraph transition-transform duration-fast group-hover:rotate-180 group-focus-within:rotate-180">
          ▾
        </span>
      </button>

      <div
        className={cn(
          panel,
          narrow
            ? 'block w-[340px]'
            : 'grid w-[580px] grid-cols-[1.05fr_1fr] gap-[26px]'
        )}
      >
        <div>
          <div className="font-heading text-[15px] font-semibold text-heading">
            {kicker ?? label}
          </div>
          <p
            className={cn(
              'mt-2 text-small text-paragraph',
              !narrow && 'max-w-[28ch]'
            )}
          >
            {description}
          </p>
          {layout === 'split' && <CtaPair className="mt-[18px] flex gap-2" size="sm" />}
        </div>

        {layout === 'split' && (
          <div>
            {groups.map((group) => (
              <div className="mb-3.5 last:mb-0" key={group.title}>
                <h5 className={groupHeading}>{group.title}</h5>
                <LinkList
                  links={group.links}
                  itemClassName="mb-[5px]"
                  linkClassName={menuLink}
                />
              </div>
            ))}
          </div>
        )}

        {layout === 'grid' && (
          <div className="mt-1.5 grid grid-cols-2 gap-x-5 gap-y-1">
            {links.map((link) => (
              <Link href={link.href} key={link.label} className={menuLink}>
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {layout === 'list' && (
          <LinkList
            links={links}
            className="mt-1.5"
            itemClassName="mb-[5px]"
            linkClassName={menuLink}
          />
        )}
      </div>
    </div>
  );
}

export default NavDropdown;
