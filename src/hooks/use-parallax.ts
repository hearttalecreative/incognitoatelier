import { useEffect, useRef } from "react";

/*
  Drifts an element vertically as its section crosses the viewport. The element
  is scaled slightly so the drift never exposes an edge. Does nothing when the
  viewer prefers reduced motion.
*/
export const useParallax = <T extends HTMLElement>(strength = 12) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let visible = false;

    const apply = () => {
      frame = 0;
      const parent = node.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      /* -1 when the section is just below the fold, +1 when just above it. */
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const clamped = Math.max(-1.5, Math.min(1.5, progress));
      node.style.transform = `translate3d(0, ${(clamped * strength).toFixed(2)}%, 0) scale(1.18)`;
    };

    const onScroll = () => {
      if (!visible || frame) return;
      frame = window.requestAnimationFrame(apply);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) apply();
      },
      { rootMargin: "120px" }
    );

    observer.observe(node.parentElement ?? node);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
};

export default useParallax;
