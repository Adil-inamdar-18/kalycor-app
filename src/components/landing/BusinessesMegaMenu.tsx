import { ArrowRight } from "lucide-react";

import { businessLinkProps, businesses, businessesMenu } from "@/config/businesses";
import { cn } from "@/lib/utils";

/**
 * Panel body for the "Our Businesses" mega menu. Rendered inside NavDropdown's
 * panel shell; cards are generated from `businesses` so adding a business is a
 * config change only.
 */
export function BusinessesMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex flex-col gap-8 px-[32px] py-[34px]">
      <div>
        <h3 className="inline-block font-heading text-[26px] font-medium leading-[1.2] text-heading underline decoration-teal-700 decoration-[1px] underline-offset-[5px]">
          {businessesMenu.heading.toUpperCase()}
        </h3>
        <p className="mt-4 text-[15px] leading-[1.48] text-paragraph">
          {businessesMenu.description}
        </p>
      </div>

      <ul className="grid list-none grid-cols-2 gap-4 dl:grid-cols-4">
        {businesses.map(({ key, name, description, url, icon: Icon }) => (
          <li key={key} className="flex">
            <a
              href={url}
              {...businessLinkProps}
              onClick={onNavigate}
              className={cn(
                "group/card flex w-full flex-col rounded-card border border-line bg-surface p-5",
                "transition-[transform,box-shadow,border-color] duration-fast",
                "hover:-translate-y-1 hover:border-teal-700 hover:shadow-float",
                "focus-visible:-translate-y-1 focus-visible:border-teal-700 focus-visible:shadow-float",
              )}
            >
              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft text-navy-950",
                  "transition-colors duration-fast",
                  "group-hover/card:bg-navy-950 group-hover/card:text-white",
                  "group-focus-visible/card:bg-navy-950 group-focus-visible/card:text-white",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>

              <span className="mt-4 font-heading text-[17px] font-semibold leading-tight text-heading">
                {name}
              </span>
              <span className="mt-2 text-[14px] leading-[1.5] text-paragraph">
                {description}
              </span>

              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-navy-950">
                Explore
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-fast group-hover/card:translate-x-1 group-focus-visible/card:translate-x-1"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens {name} website in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessesMegaMenu;
