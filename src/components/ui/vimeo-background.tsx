import { cn } from "@/lib/utils";

type VimeoBackgroundProps = {
  /* Numeric Vimeo id, e.g. 1145039689 */
  videoId: string;
  /* Still frame shown until the player paints, and on reduced-motion setups. */
  poster: string;
  className?: string;
};

/*
  Vimeo background player, matching the parameters the WordPress build used:
  muted + autoplay + loop + background chrome removed.
  The iframe is oversized and centred so the video always covers the section.
*/
export const VimeoBackground = ({ videoId, poster, className }: VimeoBackgroundProps) => (
  <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
    <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?muted=1&autoplay=1&dnt=1&loop=1&background=1`}
      title=""
      allow="autoplay; fullscreen"
      frameBorder="0"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 motion-reduce:hidden"
    />
  </div>
);

export default VimeoBackground;
