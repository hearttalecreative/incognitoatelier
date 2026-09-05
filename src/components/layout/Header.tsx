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

const NavItem = ({ link, light }: { link: NavLink; light: boolean }) => (
  <Link
    to={link.href}
    className={cn(
      "font-sans text-[14px] font-medium leading-5 transition-opacity duration-300 hover:opacity-60",
      light ? "text-white" : "text-ink"
    )}
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

  const overlay = transparent && !scrolled;
  const light = overlay || scrolled;

  return (
    <>
      <header
        className={cn(
          "z-50 w-full transition-colors duration-500",
          transparent ? "absolute inset-x-0 top-0" : "relative bg-ink",
          scrolled && "fixed bg-ink/95 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-[120px] w-[95%] max-w-[1364px] items-center justify-between gap-6">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className={cn("shrink-0 transition-opacity hover:opacity-60", light ? "text-white" : "text-ink")}
          >
            <Menu strokeWidth={1} className="h-6 w-6" />
          </button>

          <nav className="hidden flex-1 items-center justify-end gap-8 lg:flex">
            {primaryNavLeft.map((link) => (
              <NavItem key={link.href} link={link} light={light} />
            ))}
          </nav>

          <Link to="/" aria-label="Incognito Atelier" className="shrink-0">
            <img
              src="/assets/logo-monogram-white.svg"
              alt="Incognito Atelier"
              className={cn("h-8 w-auto", !light && "invert")}
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-start gap-8 lg:flex">
            {primaryNavRight.map((link) => (
              <NavItem key={link.href} link={link} light={light} />
            ))}
          </nav>

          <Link
            to={planTripHref}
            className={cn(
              "hidden shrink-0 px-6 py-3 font-sans text-[14px] font-medium tracking-[0.08em] transition-colors duration-300 md:inline-flex",
              light
                ? "border border-white/70 text-white hover:bg-white hover:text-ink"
                : "border border-ink text-ink hover:bg-ink hover:text-white"
            )}
          >
            Plan Your Trip
          </Link>
        </div>
      </header>

      {/* Full-screen overlay carrying the deep links */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink transition-opacity duration-500",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="mx-auto flex h-[120px] w-[95%] max-w-[1364px] items-center justify-between">
          <span className="eyebrow text-taupe">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="text-white transition-opacity hover:opacity-60"
          >
            <X strokeWidth={1} className="h-6 w-6" />
          </button>
        </div>

        <nav className="mx-auto grid w-[95%] max-w-[1364px] gap-6 pt-8 md:grid-cols-2 md:gap-8">
          {[...primaryNavLeft, ...primaryNavRight, ...menuOverlayLinks].map((link) => (
            <Link
              key={`${link.label}-${link.href}`}
              to={link.href}
              className="font-display text-3xl font-light text-white transition-colors duration-300 hover:text-copper md:text-4xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
