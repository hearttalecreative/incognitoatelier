import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type OverlayProps = {
  /* Flat tint laid over the section background. */
  color?: string;
  /* Watermark or texture image, as a path under /assets. */
  image?: string;
  /* Full CSS gradient, used instead of color/image. */
  gradient?: string;
  /* Elementor defaults to 0.5 when the field is left empty. */
  opacity?: number;
  blend?: CSSProperties["mixBlendMode"];
  position?: string;
  size?: string;
  repeat?: string;
  className?: string;
};

/*
  Reproduces Elementor's background overlay layer: a sibling of the section
  background that carries its own colour, image or gradient, plus an opacity
  and blend mode. Most of the brand watermarks on this site sit at 2–3%
  opacity, so getting these values right is what keeps sections from turning
  into a giant monogram.
*/
export const Overlay = ({
  color,
  image,
  gradient,
  opacity = 0.5,
  /*
    Elementor sets multiply on these layers, but a black tint multiplied at
    opacity a and the same black painted normally at opacity a resolve to the
    identical colour — and "normal" composites predictably across stacking
    contexts, so it is the default here. Pass a blend explicitly only when the
    layer is not a flat black tint.
  */
  blend = "normal",
  position = "center center",
  size = "cover",
  repeat = "no-repeat",
  className,
}: OverlayProps) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute inset-0", className)}
    style={{
      backgroundColor: color,
      backgroundImage: gradient ?? (image ? `url(${image})` : undefined),
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: repeat,
      opacity,
      mixBlendMode: blend,
    }}
  />
);

export default Overlay;
