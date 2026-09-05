import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /* Outer band: full-bleed background, min-height, horizontal padding. */
  className?: string;
  style?: CSSProperties;
  /* Boxed inner wrapper — Elementor's .e-con-inner. */
  innerClassName?: string;
  /* Max width of the boxed inner wrapper, in pixels. */
  innerWidth?: number;
};

/*
  Mirrors Elementor's container model: a full-width band wrapping a boxed inner
  wrapper whose max-width and vertical padding are set per section.
*/
export const Section = ({
  children,
  id,
  className,
  style,
  innerClassName,
  innerWidth = 1140,
}: SectionProps) => (
  <section id={id} className={cn("relative w-full", className)} style={style}>
    <div
      className={cn("mx-auto flex w-full flex-col", innerClassName)}
      style={{ maxWidth: innerWidth }}
    >
      {children}
    </div>
  </section>
);

export default Section;
