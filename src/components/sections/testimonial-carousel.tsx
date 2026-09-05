import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/home";

/*
  Elementor "Slides" widget: one slide at a time capped at 60% width, its own
  background artwork per slide, 50px padding, dot pagination and no arrows.
*/
export const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  /* Advance every eight seconds, holding while the reader is on the card. */
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (!emblaApi || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 8000);
    return () => window.clearInterval(id);
  }, [emblaApi, paused]);

  return (
    <div
      className="relative mx-auto w-full max-w-[796px] max-md:max-w-[93%]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item) => (
            <div key={item.author} className="min-w-0 flex-[0_0_100%]">
              <figure
                className="flex h-[522px] flex-col justify-center bg-copper bg-cover bg-center p-[50px] max-lg:h-[426px] max-md:h-[530px] max-md:p-8"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <figcaption className="mb-[30px] font-script text-[36px] leading-[1.3em] text-foreground max-md:text-[30px]">
                  {item.author}, {item.location}
                </figcaption>
                <blockquote className="font-body text-[15px] leading-[1.3em] text-foreground max-md:text-[14px]">
                  {item.quote}
                </blockquote>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination sits inside the slide area, as in the Elementor widget */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex items-center justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.author}
            type="button"
            aria-label={`Go to testimonial ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={cn(
              "pointer-events-auto h-2 w-2 rounded-full transition-colors duration-300",
              index === selected ? "bg-foreground" : "bg-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
