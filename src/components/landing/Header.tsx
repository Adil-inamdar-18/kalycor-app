"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Brand, Container } from "@/components/layout";
import { site } from "@/config/site";
import { businessLinkProps } from "@/config/businesses";
import routes, { anchors } from "@/config/routes";
import { getLandingData } from "@/services/siteService";
import { cn } from "@/lib/utils";

import NavDropdown from "./NavDropdown";
import CtaPair from "./CtaPair";

const menuOverviewHref: Record<string, string> = {
  solutions: `${routes.home}${anchors.landing.solutions}`,
  industries: `${routes.home}${anchors.landing.industries}`,
  opportunities: routes.opportunities.home,
  "who-we-are": routes.whoWeAre.home,
};

const FADE_HERO_RATIO = 0.6;
const FADE_MIN_PX = 160;
const FADE_MAX_PX = 520;

const COMPACT_BREAKPOINT_PX = 981;
const COMPACT_FADE_PX = 120;

const LIGHT_UNTIL = 0.5;

const SHADOW_FROM = 0.6;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const NO_HERO_PATHS = ["/for-business", "/jobs"];

const SOLID_HEADER_PATHS = ["/industries"];
const isSolidHeaderPath = (path?: string | null) =>
  SOLID_HEADER_PATHS.some(
    (base) => path === base || path?.startsWith(`${base}/`),
  );

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function findHeroSection(header: HTMLElement): HTMLElement | null {
  let el = header.nextElementSibling as HTMLElement | null;
  for (let i = 0; i < 3 && el && el.tagName !== "SECTION"; i += 1) {
    if (el.tagName !== "MAIN" && el.tagName !== "DIV") return null;
    el = el.firstElementChild as HTMLElement | null;
  }
  return el && el.tagName === "SECTION" ? el : null;
}

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

  const [overHero, setOverHero] = useState(
    () =>
      !isSolidHeaderPath(pathname) &&
      !NO_HERO_PATHS.some((path) => pathname?.startsWith(path)),
  );

  const [light, setLight] = useState(false);

  const progressRef = useRef(0);
  const menuOpenRef = useRef(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (key: string) => {
    setOpenSection((current) => (current === key ? null : key));
  };

  const paint = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    if (!heroRef.current) {
      header.style.removeProperty("background-color");
      header.style.removeProperty("border-bottom-color");
      header.style.removeProperty("box-shadow");
      header.style.removeProperty("backdrop-filter");
      setLight(false);
      return;
    }

    const p = menuOpenRef.current ? 1 : progressRef.current;
    const shadow = clamp01((p - SHADOW_FROM) / (1 - SHADOW_FROM));

    header.style.backgroundColor = `hsl(var(--surface) / ${p})`;
    header.style.borderBottomColor = `hsl(var(--line) / ${p})`;
    header.style.backdropFilter =
      p > 0 ? `blur(${(8 * p).toFixed(1)}px)` : "none";
    header.style.boxShadow =
      shadow > 0
        ? `0 4px 20px -6px rgba(15, 23, 42, ${0.16 * shadow})`
        : "none";

    setLight(p < LIGHT_UNTIL);
  }, []);

  const updateScrollState = useCallback(() => {
    const hero = heroRef.current;
    if (!hero || !hero.isConnected) return;

    const box = hero.getBoundingClientRect();
    const scrolled = Math.max(0, -box.top);
    const range =
      window.innerWidth < COMPACT_BREAKPOINT_PX
        ? COMPACT_FADE_PX
        : Math.min(
            FADE_MAX_PX,
            Math.max(FADE_MIN_PX, box.height * FADE_HERO_RATIO),
          );

    progressRef.current = clamp01(scrolled / range);
    paint();
  }, [paint]);

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
    };
  }, [pathname, solidHeader, updateScrollState, paint]);

  useIsoLayoutEffect(() => {
    menuOpenRef.current = menuOpen;
    paint();
  }, [menuOpen, paint]);

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

              "transition-[background-color,border-color,box-shadow] duration-150 ease-out",

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

        <nav className="hidden items-center gap-7 nav:flex">
          {navMenus.map((menu) => (
            <NavDropdown key={menu.key} menu={menu} />
          ))}

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
                    {menuOverviewHref[menu.key] && (
                      <Link
                        href={menuOverviewHref[menu.key]}
                        onClick={closeMenu}
                        className="py-2 text-sm font-semibold text-heading"
                      >
                        {menu.kicker ?? menu.label} overview
                      </Link>
                    )}

                    {(menu.links ?? []).map((link) =>
                      link.external ? (
                        <a
                          key={link.label}
                          href={link.href}
                          {...businessLinkProps}
                          onClick={closeMenu}
                          className="py-2 text-sm text-paragraph"
                        >
                          {link.label} ↗
                        </a>
                      ) : (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={closeMenu}
                          className="py-2 text-sm text-paragraph"
                        >
                          {link.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

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
