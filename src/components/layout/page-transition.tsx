import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

/*
  Elementor page-transitions preloader: a white curtain carrying the copper
  monogram at 63px, pulsing, that fades out over 800ms once the route settles.
*/
const DURATION = 800;

export const PageTransition = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(true);

  useEffect(() => {
    setActive(true);
    const id = window.setTimeout(() => setActive(false), DURATION / 2);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-white",
        "transition-opacity motion-reduce:hidden",
        active ? "opacity-100" : "opacity-0"
      )}
      style={{ transitionDuration: `${DURATION}ms` }}
    >
      <img
        src="/assets/logo-monogram-copper.svg"
        alt=""
        className="w-[63px] animate-pulse"
      />
    </div>
  );
};

export default PageTransition;
