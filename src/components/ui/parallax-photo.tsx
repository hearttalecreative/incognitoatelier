import useParallax from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

type ParallaxPhotoProps = {
  src: string;
  /* Drift in percent of the layer's height, across a full viewport of scroll. */
  strength?: number;
  className?: string;
  /* CSS object-position, for photographs that need a different anchor. */
  position?: string;
};

/*
  Full-bleed photograph that drifts slowly as the section scrolls past. Sits
  behind the section's overlay, so the tint still applies on top of it.
*/
export const ParallaxPhoto = ({
  src,
  strength = 12,
  className,
  position = "center",
}: ParallaxPhotoProps) => {
  const ref = useParallax<HTMLImageElement>(strength);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <img
        ref={ref}
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full scale-[1.18] object-cover will-change-transform"
        style={{ objectPosition: position }}
      />
    </div>
  );
};

export default ParallaxPhoto;
