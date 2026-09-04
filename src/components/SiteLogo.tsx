import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  /** overlay = dark hero; solid = light header; footer = dark footer */
  variant?: "overlay" | "solid" | "footer";
  className?: string;
  priority?: boolean;
};

const sizes = {
  overlay: {
    src: "/logo-transparent.png",
    width: 220,
    height: 76,
    className: "h-9 w-auto sm:h-11 md:h-12 drop-shadow-sm",
  },
  solid: {
    src: "/logo-dark.png",
    width: 200,
    height: 66,
    className: "h-8 w-auto max-w-[11.5rem] sm:h-10 sm:max-w-none md:h-12",
  },
  footer: {
    src: "/logo-transparent.png",
    width: 180,
    height: 62,
    className: "h-12 w-auto drop-shadow-sm",
  },
} as const;

export function SiteLogo({
  variant = "solid",
  className = "",
  priority = false,
}: SiteLogoProps) {
  const size = sizes[variant];

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="J.S. Garden Developers home"
    >
      <Image
        src={size.src}
        alt="J.S. Garden Developers — ISO 9001 Certified Company"
        width={size.width}
        height={size.height}
        className={`${size.className} object-contain`}
        priority={priority}
      />
    </Link>
  );
}
