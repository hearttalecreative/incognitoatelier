import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /* Outer band: full-bleed background, min-height, horizontal padding. */
  className?: string;
  style?: CSSProperties;
  /*
    Full-bleed layer rendered behind the boxed content — video, slideshow or
    photograph. It must be a sibling of the inner wrapper, never a child, or it
    would be clipped to the boxed width.
  */
  background?: ReactNode;
  /* One or more <Overlay> layers, drawn between the background and the content. */
  overlay?: ReactNode;
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
  background,
  overlay,
  innerClassName,
  innerWidth = 1140,
}: SectionProps) => (
  <section className={cn("relative w-full", className)} style={style}>
    {background}
    {overlay}
    <div
      id={id}
      className={cn("relative mx-auto flex w-full flex-col", innerClassName)}
      style={{ maxWidth: innerWidth }}
    >
      {children}
    </div>
  </section>
);

export default Section;
