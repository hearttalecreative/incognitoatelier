import BackgroundSlideshow from "@/components/ui/background-slideshow";
import { cn } from "@/lib/utils";

type PhotoSlideshowPanelProps = {
  images: string[];
  /* Min-height of the inner frame, in pixels. */
  height?: number;
  className?: string;
};

/*
  The recurring image column: a 561px track with 50px of padding around an
  inner frame that carries the cross-fading photography and the small wordmark.
*/
export const PhotoSlideshowPanel = ({
  images,
  height = 700,
  className,
}: PhotoSlideshowPanelProps) => (
  <div className={cn("flex w-full items-center justify-center p-[50px] max-md:p-5 md:w-[561px]", className)}>
    <div
      className="photo-zoom relative flex w-full max-w-[461px] items-end justify-end overflow-hidden p-[25px]"
      style={{ minHeight: height }}
    >
      <BackgroundSlideshow images={images} />
      <img
        src="/assets/logo-horizontal-white.svg"
        alt=""
        aria-hidden="true"
        className="relative w-[80px]"
      />
    </div>
  </div>
);

export default PhotoSlideshowPanel;
