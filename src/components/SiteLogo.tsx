import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  /** overlay = dark hero background; solid = light header/footer plate */
  variant?: "overlay" | "solid" | "footer";
  className?: string;
  priority?: boolean;
};

const sizes = {
  overlay: { width: 220, height: 72, className: "h-12 w-auto md:h-14" },
  solid: { width: 200, height: 66, className: "h-11 w-auto md:h-12" },
  footer: { width: 180, height: 60, className: "h-12 w-auto" },
} as const;

export function SiteLogo({
  variant = "solid",
  className = "",
  priority = false,
}: SiteLogoProps) {
  const size = sizes[variant];
  const plate =
    variant === "overlay" || variant === "footer"
      ? "rounded-md bg-white px-2.5 py-1.5 shadow-sm"
      : "";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${plate} ${className}`}
      aria-label="J.S. Garden Developers home"
    >
      <Image
        src="/logo-dark.png"
        alt="J.S. Garden Developers — ISO 9001 Certified Company"
        width={size.width}
        height={size.height}
        className={`${size.className} object-contain`}
        priority={priority}
      />
    </Link>
  );
}
