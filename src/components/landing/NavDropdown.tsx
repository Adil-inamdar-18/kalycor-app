"use client";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

import type { NavMenu } from "@/types";

import CtaPair from "./CtaPair";
import routes from "@/config/routes";

const panel =
  "fixed left-1/2 top-[94px] z-dropdown w-[80vw] max-w-[1250px] h-[590px] -translate-x-1/2 overflow-hidden border border-line bg-surface shadow-menu transition-all duration-fast";

const menuLink =
  "flex h-[58px] items-center border-b border-line px-[26px] font-heading text-[15px] font-semibold leading-[1.25] text-heading transition-colors duration-fast hover:bg-navy-950/[0.025] hover:text-navy-950";

export function NavDropdown({ menu }: { menu: NavMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };
  const {
    label,
    kicker,
    description,
    links = [],
    panelImage,
    panelImageAlt,
    panelDescription,
  } = menu;

  return (
    <div
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Trigger */}
      <button
        type="button"
        onClick={() => {
          if (menu.key === "who-we-are") {
            window.location.href = routes.whoWeAre.home;
            return;
          }

          if (menu.key === "solutions") {
            window.location.href = routes.home + "#solutions";
            return;
          }
        }}
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

      {/* Mega Menu */}
      <div
        className={cn(
          panel,
          "grid grid-cols-[0.85fr_1fr_0.9fr]",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-2 opacity-0",
        )}
      >
        {/* LEFT — CONTENT + CTA */}
        <div className="flex flex-col justify-start border-r border-line px-[32px] py-[36px]">
          <h3 className="font-heading text-[26px] font-medium leading-[1.2] text-heading underline decoration-teal-700 decoration-[1px] underline-offset-[5px]">
            {kicker ?? label}
          </h3>

          <p className="mt-[34px] max-w-[48ch] text-[15px] leading-[1.48] text-paragraph">
            {description}
          </p>

          <CtaPair className="mt-[34px] flex gap-3" size="sm" />
        </div>

        {/* MIDDLE — LINK LIST */}
        <div className="overflow-y-auto border-r border-line">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className={menuLink}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT — IMAGE + DESCRIPTION */}
        <div className="bg-[#f1f2f2] p-[12px]">
          <div className="flex h-full flex-col bg-white">
            {panelImage && (
              <div className="relative h-[205px] w-full shrink-0 overflow-hidden">
                <Image
                  src={panelImage}
                  alt={panelImageAlt ?? ""}
                  fill
                  className="object-cover grayscale"
                  sizes="400px"
                />
              </div>
            )}

            {panelDescription && (
              <div className="px-[26px] py-[26px]">
                <p className="text-[15px] leading-[1.55] text-paragraph">
                  {panelDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;
