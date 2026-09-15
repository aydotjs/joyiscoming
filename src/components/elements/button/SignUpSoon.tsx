import { cn } from "@/lib/utils";

/**
 * "Sign up" entry point for the LMS that is not built yet. Rendered as a
 * disabled control with a "soon" tag so visitors know it is coming, and
 * nothing happens on click. Swap for a real link once the LMS exists.
 */
const SignUpSoon = ({
  className,
  variant = "pill",
}: {
  className?: string;
  /** pill: header button. row: full-width line inside the mobile drawer */
  variant?: "pill" | "row";
}) => {
  const label = "LMS";
  const note = "Coming soon - our learning platform (LMS)";
  if (variant === "row") {
    return (
      <span
        role="link"
        aria-disabled="true"
        title={note}
        className={cn(
          "inline-flex items-center gap-3 text-[26px] sm:text-[30px] leading-[1] text-text-fixed-3/60 cursor-not-allowed select-none",
          className
        )}
      >
        {label}
        <span className="rounded-full border border-[#C8F31D]/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C8F31D] leading-none">
          soon
        </span>
      </span>
    );
  }
  return (
    <span
      role="button"
      aria-disabled="true"
      title={note}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[14px] font-medium leading-none text-text-3 cursor-not-allowed select-none",
        className
      )}
    >
      {label}
      <span className="rounded-full bg-[#C8F31D] px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#121212] leading-none">
        soon
      </span>
    </span>
  );
};

export default SignUpSoon;
