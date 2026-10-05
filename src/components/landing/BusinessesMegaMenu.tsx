import Image from "next/image";
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
        {businesses.map(({ key, name, description, url, icon: Icon, image }) => (
          <li key={key} className="flex">
            <a
              href={url}
              {...businessLinkProps}
              onClick={onNavigate}
              className={cn(
                "group/card relative isolate flex min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-card border border-line p-5",
                "transition-[transform,box-shadow,border-color] duration-fast",
                "hover:-translate-y-1 hover:border-teal-700 hover:shadow-float",
                "focus-visible:-translate-y-1 focus-visible:border-teal-700 focus-visible:shadow-float",
              )}
            >
              {/* Background photo + legibility overlay */}
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1101px) 300px, 40vw"
                className="-z-20 object-cover transition-transform duration-slow group-hover/card:scale-105 group-focus-visible/card:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-navy-950/10 transition-opacity duration-fast group-hover/card:from-navy-950/100"
              />

              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm",
                  "transition-colors duration-fast",
                  "group-hover/card:bg-white group-hover/card:text-navy-950",
                  "group-focus-visible/card:bg-white group-focus-visible/card:text-navy-950",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>

              <span className="flex flex-col">
                <span className="font-heading text-[18px] font-semibold leading-tight text-white">
                  {name}
                </span>
                <span className="mt-2 text-[14px] leading-[1.5] text-white/85">
                  {description}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-white">
                  Explore
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-fast group-hover/card:translate-x-1 group-focus-visible/card:translate-x-1"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(opens {name} website in a new tab)</span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessesMegaMenu;