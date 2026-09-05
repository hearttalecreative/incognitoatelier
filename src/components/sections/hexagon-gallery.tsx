import { cn } from "@/lib/utils";

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

/* Cell geometry copied from the Unlimited Elements hexagon gallery widget. */
const CELL_W = 147;
const CELL_H = 170;
const COL_STEP = 152;
const ROW_STEP = 133;
const PER_ROW = 4;

type HexagonGalleryProps = {
  images: string[];
  className?: string;
};

/*
  Honeycomb: four cells per row, rows overlapping vertically, and every other
  row indented by half a cell — the same staggering the WordPress widget used.
*/
export const HexagonGallery = ({ images, className }: HexagonGalleryProps) => {
  const rows: string[][] = [];
  for (let i = 0; i < images.length; i += PER_ROW) {
    rows.push(images.slice(i, i + PER_ROW));
  }

  return (
    <div
      className={cn("mx-auto w-full max-w-[680px] overflow-hidden", className)}
      style={{ aspectRatio: "680 / 700" }}
    >
      <div className="relative origin-top-left" style={{ width: 680, height: 700 }}>
        {rows.map((row, rowIndex) =>
          row.map((src, colIndex) => (
            <div
              key={src}
              className="absolute transition-transform duration-300 hover:scale-105"
              style={{
                clipPath: HEX_CLIP,
                width: CELL_W,
                height: CELL_H,
                top: rowIndex * ROW_STEP,
                left: colIndex * COL_STEP + (rowIndex % 2 === 0 ? COL_STEP / 2 : 0),
              }}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HexagonGallery;
