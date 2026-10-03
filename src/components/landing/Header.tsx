"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

/** Scroll distance (as a share of the hero height) over which the header
 *  background fades from transparent to white, clamped to a sensible range so
 *  it starts immediately and finishes well before the hero has scrolled away. */
const FADE_HERO_RATIO = 0.6;
const FADE_MIN_PX = 160;
const FADE_MAX_PX = 520;

/** Below the desktop-nav breakpoint the bar must turn solid quickly, otherwise
 *  its dark text sits over the hero content while the background is still
 *  half transparent. */
const MOBILE_BREAKPOINT_PX = 981;
const MOBILE_FADE_PX = 80;

/** Progress at which text/logo/icons switch from light to dark. */
const LIGHT_UNTIL = 0.5;

/** Shadow only appears once the bar is mostly white. */
const SHADOW_FROM = 0.6;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** Pages whose first section is not a full-bleed image/video hero. Only used
 *  to pick the correct first paint; the real check runs on the DOM below. */
const NO_HERO_PATHS = ["/for-business", "/jobs"];

/** Industry pages keep the original solid sticky header (no scroll fade). */
const SOLID_HEADER_PATHS = ["/industries"];
const isSolidHeaderPath = (path?: string | null) =>
  SOLID_HEADER_PATHS.some(
    (base) => path === base || path?.startsWith(`${base}/`),
  );

/** useLayoutEffect on the client (no SSR warning, runs before first paint). */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Finds the hero: the first <section> rendered right after the header. */
function findHeroSection(header: HTMLElement): HTMLElement | null {
  let el = header.nextElementSibling as HTMLElement | null;
  for (let i = 0; i < 3 && el && el.tagName !== "SECTION"; i += 1) {
    if (el.tagName !== "MAIN" && el.tagName !== "DIV") return null;
    el = el.firstElementChild as HTMLElement | null;
  }
  return el && el.tagName === "SECTION" ? el : null;
}

/** True when the section carries a full-bleed background image or video. */
function hasBackgroundMedia(section: HTMLElement): boolean {
  const box = section.getBoundingClientRect();
  if (box.width === 0 || box.height === 0) return false;

  if (getComputedStyle(section).backgroundImage !== "none") return true;

  return Array.from(section.querySelectorAll("video, img")).some((media) => {
    const m = media.getBoundingClientRect();
    return m.width >= box.width * 0.9 && m.height >= box.height * 0.6;
  });
}

export function Header() {
  const { navMenus } = getLandingData();
  const pathname = usePathname();
  const solidHeader = isSolidHeaderPath(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  /** Page opens with a full-bleed hero the header can float over. */
  const [overHero, setOverHero] = useState(
    () =>
      !isSolidHeaderPath(pathname) &&
      !NO_HERO_PATHS.some((path) => pathname?.startsWith(path)),
  );
  /** Header content uses light colours (only while the bar is still mostly
   *  transparent over the hero). Colours change; opacity never does. */
  const [light, setLight] = useState(false);
  /** Scroll progress 0 (top) → 1 (fully white). Kept in a ref and written to
   *  the DOM directly so scrolling never re-renders the menus. */
  const progressRef = useRef(0);
  const menuOpenRef = useRef(false);
  /** True below the desktop-nav breakpoint: the bar is always solid there. */
  const compactRef = useRef(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (key: string) => {
    setOpenSection((current) => (current === key ? null : key));
  };

  /** Paints the background/border/shadow for the current progress. */
  const paint = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    if (!heroRef.current) {
      header.style.removeProperty("background-color");
      header.style.removeProperty("border-bottom-color");
      header.style.removeProperty("box-shadow");
      setLight(false);
      return;
    }

    // Open mobile menu always sits on a white bar so the panel stays legible.
    const p = menuOpenRef.current || compactRef.current ? 1 : progressRef.current;
    const shadow = clamp01((p - SHADOW_FROM) / (1 - SHADOW_FROM));

    // Only the background layers carry alpha; content colours are untouched.
    header.style.backgroundColor = `hsl(var(--surface) / ${p})`;
    header.style.borderBottomColor = `hsl(var(--line) / ${p})`;
    header.style.boxShadow =
      shadow > 0 ? `0 4px 20px -6px rgba(15, 23, 42, ${0.16 * shadow})` : "none";

    setLight(p < LIGHT_UNTIL);
  }, []);

  const updateScrollState = useCallback(() => {
    const hero = heroRef.current;
    if (!hero || !hero.isConnected) return;

    const box = hero.getBoundingClientRect();
    const scrolled = Math.max(0, -box.top);
    const range =
      window.innerWidth < MOBILE_BREAKPOINT_PX
        ? MOBILE_FADE_PX
        : Math.min(
            FADE_MAX_PX,
            Math.max(FADE_MIN_PX, box.height * FADE_HERO_RATIO),
          );

    progressRef.current = clamp01(scrolled / range);
    paint();
  }, [paint]);

  // Detect the hero once the page is in the DOM, then follow scroll/resize.
  useIsoLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const detect = () => {
      const hero = findHeroSection(header);
      const found =
        !solidHeader && hero && hasBackgroundMedia(hero) ? hero : null;
      heroRef.current = found;
      setOverHero(Boolean(found));
      if (found) updateScrollState();
      else {
        progressRef.current = 0;
        paint();
      }
    };

    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`);
    const onMq = () => {
      compactRef.current = mq.matches;
      paint();
    };
    compactRef.current = mq.matches;
    mq.addEventListener("change", onMq);

    detect();

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateScrollState);
    };
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(detect);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onMq);
    };
  }, [pathname, solidHeader, updateScrollState, paint]);

  // Re-paint when the mobile menu opens/closes.
  useIsoLayoutEffect(() => {
    menuOpenRef.current = menuOpen;
    paint();
  }, [menuOpen, paint]);

  /** Light content colours: only over the hero, while the bar is mostly clear. */
  const transparent = overHero && light;

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

  const barClass = cn(
    "my-[5px] block h-0.5 w-[22px] transition-colors duration-300",
    transparent ? "bg-white" : "bg-heading",
  );

  return (
    <header
      ref={headerRef}
      className={cn(
        "z-header border-b",
        overHero
          ? [
              "fixed inset-x-0 top-0",
              // Background is scroll-driven; this only smooths wheel/touch steps.
              "transition-[background-color,border-color,box-shadow] duration-150 ease-out",
              // Start fully transparent (before JS paints) — never affects content.
              "bg-transparent border-transparent",
              transparent && [
                "[&_nav>.group>button]:!text-white [&_nav>.group>button:hover]:!text-white/80",
                "[&_nav>.group>button>span]:!text-white/80",
                "[&_nav>a]:!border-white [&_nav>a]:!bg-white [&_nav>a]:!text-primary",
                "[&_nav>a:hover]:!bg-transparent [&_nav>a:hover]:!text-white",
              ],
            ]
          : "sticky top-0 border-line bg-background/95 backdrop-blur-[8px]",
      )}
    >
      <Container className="flex min-h-[76px] items-center justify-between">
        {/* Logo */}
        <Brand
          href={anchors.landing.home}
          onClick={handleLogoClick}
          className="group [--brand-gap:8px] [--brand-mark:60px] [--brand-size:20px] transition-transform duration-fast hover:scale-[1.03] md:[--brand-gap:12px] md:[--brand-size:24px] nav:[--brand-mark:72px]"
          nameClassName="transition-transform duration-fast"
          primaryClassName={cn(
            "transition-colors duration-200",
            transparent && "text-white",
          )}
          secondaryClassName={cn(
            "transition-colors duration-300",
            transparent && "text-white",
          )}
          mark={
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              priority
              className={cn(
                "transition-[filter] duration-300",
                transparent && "brightness-0 invert",
              )}
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
          <span className={barClass} />
          <span className={barClass} />
          <span className={barClass} />
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