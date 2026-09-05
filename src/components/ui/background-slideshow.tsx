import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type BackgroundSlideshowProps = {
  images: string[];
  className?: string;
  /* Time each frame is held, in milliseconds. Elementor's default is 5000. */
  intervalMs?: number;
};

/*
  Elementor's background slideshow: a cross-fade between full-bleed images.
  Holds on the first frame when the viewer prefers reduced motion.
*/
export const BackgroundSlideshow = ({
  images,
  className,
  intervalMs = 5000,
}: BackgroundSlideshowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {images.map((src, imageIndex) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
            imageIndex === index ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
