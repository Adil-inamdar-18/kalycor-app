import Link from "next/link";
import { LinkList } from "@/components/ui";
import type { NavMenu } from "@/types";
import { cn } from "@/lib/utils";
import CtaPair from "./CtaPair";

const panel =
  "invisible fixed left-1/2 top-[94px] z-dropdown w-[80vw] max-w-[1250px] min-h-[430px] -translate-x-1/2 translate-y-2 rounded-[6px] border border-line bg-surface p-[55px] opacity-0 shadow-menu transition-all duration-fast group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100";

const groupHeading =
  "mb-[14px] font-heading text-[13px] font-semibold tracking-[0.02em] text-navy-950";

const menuLink =
  "text-[15px] leading-[1.7] text-heading transition-colors duration-fast hover:text-navy-950";

export function NavDropdown({ menu }: { menu: NavMenu }) {
  const { label, kicker, description, layout, groups = [], links = [] } = menu;

  return (
    <div className="group relative">
      {/* Navigation Trigger */}
      <button
        type="button"
        className="
          flex
          cursor-pointer
          items-center
          gap-[6px]
          rounded-xs
          px-[13px]
          py-2.5
          font-medium
          text-heading
          transition-colors
          duration-fast
          hover:text-navy-950
        "
      >
        {label}

        <span
          className="
            mt-px
            text-[10px]
            text-paragraph
            transition-transform
            duration-fast
            group-hover:rotate-180
            group-focus-within:rotate-180
          "
        >
          ▾
        </span>
      </button>

      {/* Large Centered Popup */}
      <div
        className={cn(
          panel,

          layout === "split" && "grid grid-cols-[0.8fr_1.2fr] gap-[80px]",

          layout === "grid" && "grid grid-cols-[0.55fr_1.45fr] gap-[80px]",

          layout === "list" && "grid grid-cols-[0.55fr_1.45fr] gap-[80px]",
        )}
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <div className="font-heading text-[22px] font-semibold leading-[1.2] text-heading">
            {kicker ?? label}
          </div>

          <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.8] text-paragraph">
            {description}
          </p>

          {layout === "split" && (
            <CtaPair className="mt-[30px] flex gap-3" size="sm" />
          )}
        </div>

        {/* GROUPED LINKS */}
        {layout === "split" && (
          <div className="grid grid-cols-2 gap-x-[65px] gap-y-[40px]">
            {groups.map((group) => (
              <div key={group.title}>
                <h5 className={groupHeading}>{group.title}</h5>

                <LinkList
                  links={group.links}
                  itemClassName="mb-[10px]"
                  linkClassName={menuLink}
                />
              </div>
            ))}
          </div>
        )}

        {/* GRID LINKS */}
        {layout === "grid" && (
          <div className="grid grid-cols-3 content-center gap-x-[55px] gap-y-[22px]">
            {links.map((link) => (
              <Link href={link.href} key={link.label} className={menuLink}>
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* LIST LINKS */}
        {layout === "list" && (
          <LinkList
            links={links}
            className="grid grid-cols-2 content-center gap-x-[65px]"
            itemClassName="mb-[12px]"
            linkClassName={menuLink}
          />
        )}
      </div>
    </div>
  );
}

export default NavDropdown;
