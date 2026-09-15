"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A mock terminal that prints a short, illustrative security-audit session
 * line by line (like a real CLI reporting progress). Starts when scrolled
 * into view, runs once, then holds. Same window chrome and palette as
 * CodeTyper so the two heroes read as one design language.
 *
 * Everything shown is generic: private lab IP range, made-up command,
 * no CVE ids, no exploit or tool names.
 */

type Kind = "cmd" | "info" | "ok";
type Line = { kind: Kind; text: string };

const LINES: Line[] = [
  { kind: "cmd", text: "codedynasty audit --target lab-network" },
  { kind: "info", text: "scanning 192.168.10.0/24 ..." },
  { kind: "info", text: "12 devices found" },
  { kind: "info", text: "checking services ..." },
  { kind: "info", text: "3 open ports flagged   [ssh, http, smb]" },
  { kind: "info", text: "reviewing patch levels ..." },
  { kind: "info", text: "1 outdated package found" },
  { kind: "info", text: "applying vendor patch ..." },
  { kind: "info", text: "re-checking ..." },
  { kind: "ok", text: "0 issues remaining" },
  { kind: "ok", text: "report saved → audit-report.txt" },
];

const PREFIX: Record<Kind, string> = { cmd: "$ ", info: "> ", ok: "✓ " };
const STYLE: Record<Kind, { prefix: string; text: string }> = {
  cmd: { prefix: "text-[#8A2BE2] dark:text-[#C9A0FF]", text: "text-[#1A1A1A] dark:text-[#E9EBE3]" },
  info: { prefix: "text-[#A6AA9E] dark:text-[#4E524A]", text: "text-[#5A5F55] dark:text-[#B9BDB2]" },
  ok: { prefix: "text-[#3F7A0B] dark:text-[#C8F31D]", text: "text-[#3F7A0B] dark:text-[#C8F31D]" },
};

// per-line pause before the next line prints; "..." lines feel like work
const delayAfter = (l: Line) => (l.text.endsWith("...") ? 900 : l.kind === "cmd" ? 700 : 420);

export default function TerminalTyper({ className }: { className?: string }) {
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setShown(LINES.length);
      setDone(true);
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    let timer: number | undefined;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const step = (i: number) => {
        setShown(i);
        if (i >= LINES.length) {
          setDone(true);
          return;
        }
        timer = window.setTimeout(() => step(i + 1), delayAfter(LINES[i - 1] ?? LINES[0]));
      };
      timer = window.setTimeout(() => step(1), 500);
    };
    const io = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && (run(), io.disconnect()),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        "w-full rounded-[14px] overflow-hidden border shadow-2xl font-mono text-[12.5px] sm:text-[13.5px] leading-[1.8]",
        "bg-[#F7F8F3] border-[#DADDD2] text-[#1A1A1A]",
        "dark:bg-[#161715] dark:border-[#2A2C27] dark:text-[#E9EBE3]",
        className
      )}
      aria-label="Example terminal session: an illustrative network security audit"
    >
      {/* window chrome - identical to the editor */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-[#DADDD2] dark:border-[#2A2C27] bg-[#EEF0E8] dark:bg-[#1C1E1A]">
        <span className="h-3 w-3 rounded-full bg-[#E8615A]" />
        <span className="h-3 w-3 rounded-full bg-[#F2BE45]" />
        <span className="h-3 w-3 rounded-full bg-[#C8F31D]" />
        <span className="ms-3 text-[11px] tracking-wide text-[#6B6F66] dark:text-[#8A8F85]">
          security-audit — bash
        </span>
      </div>

      <pre className="m-0 px-5 py-4 whitespace-pre-wrap break-words min-h-[19.5em]">
        <code>
          {LINES.slice(0, shown).map((l, i) => (
            <span key={i} className="block">
              <span className={STYLE[l.kind].prefix}>{PREFIX[l.kind]}</span>
              <span className={STYLE[l.kind].text}>{l.text}</span>
            </span>
          ))}
          {!reduced && (
            <span className="block">
              <span className="text-[#8A2BE2] dark:text-[#C9A0FF]">{done ? "$ " : "  "}</span>
              <span
                aria-hidden="true"
                className="inline-block w-[0.6em] h-[1.05em] align-[-0.2em] bg-[#1A1A1A] dark:bg-[#C8F31D] animate-caret"
              />
            </span>
          )}
        </code>
      </pre>
    </div>
  );
}
