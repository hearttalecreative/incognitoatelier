import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/home";

export const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item) => (
            <div key={item.author} className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_60%]">
              <figure
                className="flex h-full flex-col justify-between bg-cover bg-center p-10 md:p-14"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <blockquote className="font-serif text-lg font-light leading-relaxed text-ink md:text-xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-8 font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-taupe">
                  {item.author}, {item.location}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="text-taupe transition-colors hover:text-ink"
        >
          <ChevronLeft strokeWidth={1} className="h-6 w-6" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.author}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-[2px] w-8 transition-colors duration-300",
                index === selected ? "bg-ink" : "bg-taupe/40"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="text-taupe transition-colors hover:text-ink"
        >
          <ChevronRight strokeWidth={1} className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
