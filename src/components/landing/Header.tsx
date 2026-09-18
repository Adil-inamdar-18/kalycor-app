"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Brand, Container } from "@/components/layout";
import { site } from "@/config/site";
import { anchors } from "@/config/routes";
import { getLandingData } from "@/services/siteService";
import { cn } from "@/lib/utils";

import NavDropdown from "./NavDropdown";
import CtaPair from "./CtaPair";

export function Header() {
  const { navMenus, mobileLinks } = getLandingData();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-header border-b border-line bg-background/95 backdrop-blur-[8px]">
      <Container className="flex min-h-[76px] items-center justify-between">
        {/* Logo */}
        <Brand
          href={anchors.landing.home}
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
          menuOpen ? "flex" : "hidden",
        )}
      >
        {mobileLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            className="border-b border-line px-1 py-3 text-body font-medium text-heading"
          >
            {link.label}
          </Link>
        ))}

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
