import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  menuOverlayLinks,
  planTripHref,
  primaryNavLeft,
  primaryNavRight,
  type NavLink,
} from "@/data/navigation";

type HeaderProps = {
  /* Pages with a full-bleed hero let the header sit on top of the artwork. */
  transparent?: boolean;
};

/* Montserrat 14/500, 16px of padding either side — the Elementor nav-menu settings. */
const NavItem = ({ link }: { link: NavLink }) => (
  <Link
    to={link.href}
    className="whitespace-nowrap px-4 font-sans text-[14px] font-medium leading-5 text-white transition-opacity duration-300 hover:opacity-60"
  >
    {link.label}
  </Link>
);

export const Header = ({ transparent = false }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "z-50 w-full transition-colors duration-500",
          transparent ? "absolute inset-x-0 top-0" : "relative bg-ink",
          scrolled && "fixed inset-x-0 top-0 bg-ink/95 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
        )}
      >
        {/* 120px at rest, compacting to 72px once the page scrolls */}
        <div
          className={cn(
            "mx-auto flex w-[95%] max-w-[1364px] items-center justify-between gap-0",
            "transition-[height] duration-300 ease-out",
            scrolled ? "h-[72px]" : "h-[120px]"
          )}
        >
          {/* Left cluster: menu trigger, then the first half of the nav */}
          <div className="flex flex-1 items-center justify-start gap-[5px]">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="shrink-0 text-white transition-opacity hover:opacity-60"
            >
              <Menu strokeWidth={1.25} className="h-[27px] w-[27px]" />
            </button>

            <nav className="hidden flex-1 items-center justify-end lg:flex">
              {primaryNavLeft.map((link) => (
                <NavItem key={link.href} link={link} />
              ))}
            </nav>
          </div>

          {/* Centred monogram, 50px wide */}
          <Link to="/" aria-label="Incognito Atelier" className="shrink-0 px-4 py-[5px]">
            <img
              src="/assets/logo-monogram-white.svg"
              alt="Incognito Atelier"
              className={cn(
                "transition-[width] duration-300 ease-out",
                scrolled ? "w-[34px]" : "w-[50px]"
              )}
            />
          </Link>

          {/* Right cluster: second half of the nav, then the pill CTA */}
          <div className="flex flex-1 items-center justify-center gap-[5px]">
            <nav className="hidden flex-1 items-center justify-start lg:flex">
              {primaryNavRight.map((link) => (
                <NavItem key={link.href} link={link} />
              ))}
            </nav>

            <Link
              to={planTripHref}
              className="hidden shrink-0 rounded-full px-4 py-3 font-sans text-[14px] font-medium leading-none text-white transition-colors duration-300 hover:bg-white/10 md:inline-flex"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </header>

      {/* Off-canvas panel, 69% black wash over the page */}
      <div
        className={cn(
          "fixed inset-0 z-[60] overflow-y-auto bg-ink/[0.69] backdrop-blur-sm transition-opacity duration-500",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="mx-auto flex w-[95%] max-w-[1364px] flex-col items-start pb-20">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="mt-[50px] self-start text-taupe transition-opacity hover:opacity-60"
          >
            <X strokeWidth={1.25} className="h-[23px] w-[23px]" />
          </button>

          <img
            src="/assets/logo-horizontal-gold-white.svg"
            alt="Incognito Atelier"
            className="mt-8 w-[151px]"
          />

          <p className="mt-[50px] font-sans text-[12px] font-medium uppercase text-taupe">Menu</p>

          <nav className="mt-4 flex w-full flex-col">
            {[...primaryNavLeft, ...primaryNavRight, ...menuOverlayLinks].map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                to={link.href}
                className="border-b border-taupe/30 py-[11px] font-serif text-[24px] font-medium leading-[1.1em] text-taupe transition-colors duration-300 hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
