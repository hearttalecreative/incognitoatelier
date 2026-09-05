import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* The entrance animations the Elementor build actually uses. */
export type RevealAnimation =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn";

const HIDDEN: Record<RevealAnimation, string> = {
  fadeIn: "opacity-0",
  fadeInUp: "opacity-0 translate-y-8",
  fadeInDown: "opacity-0 -translate-y-8",
  fadeInLeft: "opacity-0 -translate-x-10",
  fadeInRight: "opacity-0 translate-x-10",
  zoomIn: "opacity-0 scale-95",
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /* Which entrance the source widget was configured with. */
  animation?: RevealAnimation;
  /* Stagger, in milliseconds, applied once the element enters the viewport. */
  delay?: number;
};

/*
  Elementor's entrance animations, reproduced with an IntersectionObserver:
  each block plays once, the first time it scrolls into view. Motion is
  suppressed entirely when the viewer prefers reduced motion.
*/
export const Reveal = ({ children, className, animation = "fadeIn", delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all [transition-duration:1000ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : HIDDEN[animation],
        "motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
