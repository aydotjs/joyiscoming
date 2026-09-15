import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * CodeDynasty brand lockup (option C): a square tile with "CD" where the D
 * is cut by the "/" from </>, paired with a lowercase wordmark.
 *
 * Brand colours are fixed (lime #C8F31D, ink #121212, paper #F6F6F2) rather
 * than taken from --theme, which is only lime on layouts that set
 * theme-setting="style-3".
 *
 * tone
 *   "auto"    follow the site theme (next-themes puts `dark` on <html>)
 *   "onDark"  force the dark-ground variant (lime tile) for surfaces that are
 *             dark in both themes, e.g. the footer
 *   "onLight" force the light-ground variant (ink tile)
 */
export type LogoTone = "auto" | "onDark" | "onLight";

// Literal class strings so Tailwind's scanner generates them.
const STYLES = {
  auto: {
    tile: "fill-[#121212] dark:fill-[#C8F31D]",
    glyph: "fill-[#F6F6F2] dark:fill-[#121212]",
    gap: "stroke-[#121212] dark:stroke-[#C8F31D]",
    hair: "stroke-[#C8F31D] dark:stroke-[#121212]",
    word: "text-text",
  },
  onDark: {
    tile: "fill-[#C8F31D]",
    glyph: "fill-[#121212]",
    gap: "stroke-[#C8F31D]",
    hair: "stroke-[#121212]",
    word: "text-[#F6F6F2]",
  },
  onLight: {
    tile: "fill-[#121212]",
    glyph: "fill-[#F6F6F2]",
    gap: "stroke-[#121212]",
    hair: "stroke-[#C8F31D]",
    word: "text-[#121212]",
  },
} as const;

type MarkProps = {
  tone?: LogoTone;
  className?: string;
  title?: string;
};

/** The standalone tile mark - also the favicon artwork. */
export const CodeDynastyMark = ({ tone = "auto", className, title }: MarkProps) => {
  const s = STYLES[tone];
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <rect width="64" height="64" rx="10" className={s.tile} />
      <text x="12" y="45" fontFamily="Kanit, sans-serif" fontWeight="600" fontSize="36" className={s.glyph}>
        C
      </text>
      <text x="33" y="45" fontFamily="Kanit, sans-serif" fontWeight="600" fontSize="36" className={s.glyph}>
        D
      </text>
      {/* the slash: a tile-coloured gap cut through the D, plus a contrast hairline */}
      <path d="M44 14 26 52" strokeWidth="4" className={s.gap} />
      <path d="M44 14 26 52" strokeWidth="1.5" className={s.hair} />
    </svg>
  );
};

type LogoProps = {
  tone?: LogoTone;
  href?: string;
  /** font-size on this element drives the whole lockup (mark = 1.4em) */
  className?: string;
};

const CodeDynastyLogo = ({ tone = "auto", href = "/", className }: LogoProps) => {
  const s = STYLES[tone];
  return (
    <Link
      href={href}
      aria-label="CodeDynasty - home"
      className={cn(
        "group inline-flex items-center gap-[0.55em] font-primary font-semibold leading-none tracking-[-0.02em] normal-case",
        className
      )}
    >
      <CodeDynastyMark tone={tone} className="h-[1.4em] w-[1.4em]" />
      <span className={cn("whitespace-nowrap", s.word)}>
        code<span className="text-[#C8F31D]">dynasty</span>
      </span>
    </Link>
  );
};

export default CodeDynastyLogo;
