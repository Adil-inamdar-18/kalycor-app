"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Brand, Container } from "@/components/layout";
import { site } from "@/config/site";
import routes, { anchors } from "@/config/routes";
import { getLandingData } from "@/services/siteService";
import { cn } from "@/lib/utils";

import NavDropdown from "./NavDropdown";
import CtaPair from "./CtaPair";

/** Where each mega-menu's "overview" link goes — mirrors the click
 *  behaviour of the desktop NavDropdown trigger. */
const menuOverviewHref: Record<string, string> = {
  solutions: `${routes.home}${anchors.landing.solutions}`,
  industries: `${routes.home}${anchors.landing.industries}`,
  opportunities: routes.opportunities.home,
  "who-we-are": routes.whoWeAre.home,
};

export function Header() {
  const { navMenus } = getLandingData();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (key: string) => {
    setOpenSection((current) => (current === key ? null : key));
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenu();

    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      const homeHash = anchors.landing.home.replace("#", "");
      const homeElement = document.getElementById(homeHash);

      if (homeElement) {
        homeElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", `#${homeHash}`);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header className="sticky top-0 z-header border-b border-line bg-background/95 backdrop-blur-[8px]">
      <Container className="flex min-h-[76px] items-center justify-between">
        {/* Logo */}
        <Brand
          href={anchors.landing.home}
          onClick={handleLogoClick}
          className="group [--brand-gap:8px] [--brand-mark:50px] [--brand-size:20px] transition-transform duration-fast hover:scale-[1.03] md:[--brand-gap:12px] md:[--brand-size:24px] nav:[--brand-mark:58px]"
          nameClassName="transition-transform duration-fast"
          mark={
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              priority
            />
          }
        />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 nav:flex">
          {navMenus.map((menu) => (
            <NavDropdown key={menu.key} menu={menu} />
          ))}

          {/* Contact CTA */}
          <Link
            href={anchors.landing.contact}
            className={cn(
              "ml-2 inline-flex items-center justify-center",
              "border border-heading bg-heading px-5 py-2.5",
              "text-sm font-semibold text-background",
              "rounded-full",
              "transition-all duration-fast",
              "hover:bg-transparent hover:text-heading",
            )}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="p-2 nav:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobilePanel"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="my-[5px] block h-0.5 w-[22px] bg-heading" />
          <span className="my-[5px] block h-0.5 w-[22px] bg-heading" />
          <span className="my-[5px] block h-0.5 w-[22px] bg-heading" />
        </button>
      </Container>

      {/* Mobile Navigation */}
      <nav
        id="mobilePanel"
        className={cn(
          "flex-col gap-0.5 border-t border-line bg-surface",
          "px-container-pad pb-6 pt-3 nav:hidden",
          "max-h-[calc(100dvh-76px)] overflow-y-auto",
          menuOpen ? "flex" : "hidden",
        )}
      >
        <Link
          href={anchors.landing.home}
          onClick={handleLogoClick}
          className="border-b border-line px-1 py-3 text-body font-medium text-heading"
        >
          Home
        </Link>

        {navMenus.map((menu) => {
          const isExpanded = openSection === menu.key;

          return (
            <div key={menu.key} className="border-b border-line">
              <button
                type="button"
                onClick={() => toggleSection(menu.key)}
                aria-expanded={isExpanded}
                aria-controls={`mobileSection-${menu.key}`}
                className="flex w-full items-center justify-between px-1 py-3 text-left text-body font-medium text-heading"
              >
                {menu.label}
                <span
                  className={cn(
                    "text-[11px] text-paragraph transition-transform duration-fast",
                    isExpanded && "rotate-180",
                  )}
                >
                  ▾
                </span>
              </button>

              <div
                id={`mobileSection-${menu.key}`}
                className={cn(
                  "grid transition-all duration-fast",
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-0.5 pb-3 pl-3">
                    <Link
                      href={menuOverviewHref[menu.key] ?? "#"}
                      onClick={closeMenu}
                      className="py-2 text-sm font-semibold text-heading"
                    >
                      {menu.kicker ?? menu.label} overview
                    </Link>

                    {(menu.links ?? []).map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={closeMenu}
                        className="py-2 text-sm text-paragraph"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Mobile Contact CTA */}
        <Link
          href={anchors.landing.contact}
          onClick={closeMenu}
          className={cn(
            "mt-4 inline-flex items-center justify-center",
            "border border-heading bg-heading px-5 py-3",
            "text-sm font-semibold text-background",
            "transition-all duration-fast",
            "hover:bg-transparent hover:text-heading",
          )}
        >
          Contact Us
        </Link>

        <CtaPair className="mt-2.5 flex gap-2.5" onNavigate={closeMenu} />
      </nav>
    </header>
  );
}

export default Header;