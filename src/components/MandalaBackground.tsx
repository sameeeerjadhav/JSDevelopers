import Image from "next/image";

type MandalaBackgroundProps = {
  className?: string;
  tone?: "sand" | "white";
  /**
   * `section` — short block (hero)
   * `band` — tall continuous strip across multiple sections (no mid-page cuts)
   */
  layout?: "section" | "band";
};

type Mark = {
  className: string;
  objectPosition: string;
  opacityScale?: number;
};

const SECTION_MARKS: Mark[] = [
  {
    className:
      "absolute right-[-6%] top-[-4%] h-[min(42vw,15rem)] w-[min(42vw,15rem)] sm:right-0 sm:top-0 sm:h-[min(52vw,22rem)] sm:w-[min(52vw,22rem)]",
    objectPosition: "object-center",
  },
  {
    className:
      "absolute bottom-[-4%] left-[-6%] h-[min(38vw,13rem)] w-[min(38vw,13rem)] rotate-180 sm:bottom-0 sm:left-0 sm:h-[min(48vw,20rem)] sm:w-[min(48vw,20rem)]",
    objectPosition: "object-center",
    opacityScale: 0.85,
  },
];

/** Spaced along a tall band so scrolling between sections stays seamless */
const BAND_MARKS: Mark[] = [
  {
    className:
      "absolute left-[-4%] top-[3%] h-[min(52vw,22rem)] w-[min(52vw,22rem)] sm:left-[2%]",
    objectPosition: "object-center",
  },
  {
    className:
      "absolute right-[-4%] top-[16%] h-[min(56vw,24rem)] w-[min(56vw,24rem)] rotate-180 sm:right-[2%]",
    objectPosition: "object-center",
    opacityScale: 0.9,
  },
  {
    className:
      "absolute left-[-2%] top-[38%] h-[min(54vw,23rem)] w-[min(54vw,23rem)] rotate-90 sm:left-[4%]",
    objectPosition: "object-center",
    opacityScale: 0.85,
  },
  {
    className:
      "absolute right-[-4%] top-[58%] h-[min(56vw,24rem)] w-[min(56vw,24rem)] -rotate-90 sm:right-[2%]",
    objectPosition: "object-center",
    opacityScale: 0.9,
  },
  {
    className:
      "absolute left-[-2%] top-[78%] h-[min(52vw,22rem)] w-[min(52vw,22rem)] rotate-180 sm:left-[3%]",
    objectPosition: "object-center",
    opacityScale: 0.8,
  },
];

/**
 * Soft mandala accents from client art.
 * Use layout="band" on a wrapper that spans multiple white sections
 * so patterns are not clipped at each section edge.
 */
export function MandalaBackground({
  className = "",
  tone = "sand",
  layout = "section",
}: MandalaBackgroundProps) {
  const baseOpacity = tone === "white" ? 0.055 : 0.065;
  const marks = layout === "band" ? BAND_MARKS : SECTION_MARKS;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {marks.map((mark, i) => (
        <div
          key={i}
          className={`${mark.className} mix-blend-multiply`}
          style={{ opacity: baseOpacity * (mark.opacityScale ?? 1) }}
        >
          <Image
            src="/mandala.png"
            alt=""
            fill
            unoptimized
            sizes="420px"
            className={`object-contain invert ${mark.objectPosition}`}
            priority={false}
          />
        </div>
      ))}
    </div>
  );
}
