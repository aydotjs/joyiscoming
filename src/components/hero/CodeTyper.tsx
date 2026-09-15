"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A mock code editor that "live-types" a short JavaScript snippet.
 * No dependencies: a setTimeout loop advances a character index; the
 * snippet is tokenised once for syntax colours and revealed by slicing.
 * Respects prefers-reduced-motion (renders the finished snippet, no cursor).
 */

const SNIPPET = `// codedynasty.js
const course = {
  track: "Full-Stack Web",
  mode: "hands-on",
};

function welcome({ track, mode }) {
  return \`Welcome to CodeDynasty. \` +
         \`Your \${mode} \${track} journey starts now.\`;
}

console.log(welcome(course));
// → Welcome to CodeDynasty.
// → Your hands-on Full-Stack Web journey starts now.`;

type Kind = "comment" | "string" | "keyword" | "fn" | "punct" | "plain" | "ws";
type Token = { kind: Kind; text: string };

const KEYWORDS = new Set(["const", "function", "return"]);

// Line-at-a-time tokeniser: comments, template/double-quoted strings,
// identifiers (keyword / function-call / plain), punctuation, whitespace.
function tokenise(src: string): Token[] {
  const out: Token[] = [];
  const re =
    /(\/\/[^\n]*)|(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*")|([A-Za-z_$][\w$]*)|(\s+)|([^\sA-Za-z_$"`]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m[1]) out.push({ kind: "comment", text: m[1] });
    else if (m[2]) out.push({ kind: "string", text: m[2] });
    else if (m[3]) {
      const next = src[re.lastIndex];
      out.push({
        kind: KEYWORDS.has(m[3]) ? "keyword" : next === "(" ? "fn" : "plain",
        text: m[3],
      });
    } else if (m[4]) out.push({ kind: "ws", text: m[4] });
    else out.push({ kind: "punct", text: m[5] });
  }
  return out;
}

const COLOUR: Record<Kind, string> = {
  comment: "text-[#7C8272] dark:text-[#7C8272] italic",
  string: "text-[#3F7A0B] dark:text-[#C8F31D]",
  keyword: "text-[#8A2BE2] dark:text-[#C9A0FF]",
  fn: "text-[#0B63C4] dark:text-[#7CC7FF]",
  punct: "text-[#5A5F55] dark:text-[#9AA093]",
  plain: "text-[#1A1A1A] dark:text-[#E9EBE3]",
  ws: "",
};

// natural, slightly uneven typing
const delayFor = (ch: string, prev: string) => {
  if (ch === "\n") return 260;
  if (prev === "\n") return 90; // start of a new line
  if (/[.,;:(){}]/.test(ch)) return 110;
  return 38 + Math.random() * 48;
};

const HOLD_MS = 4200; // pause on the finished snippet before retyping
const CLEAR_MS = 700;

export default function CodeTyper({ className }: { className?: string }) {
  const tokens = useMemo(() => tokenise(SNIPPET), []);
  const [count, setCount] = useState(0);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) {
      setCount(SNIPPET.length);
      return;
    }
    const tick = (i: number) => {
      if (i > SNIPPET.length) {
        timer.current = window.setTimeout(() => {
          setCount(0);
          timer.current = window.setTimeout(() => tick(1), CLEAR_MS);
        }, HOLD_MS);
        return;
      }
      setCount(i);
      timer.current = window.setTimeout(
        () => tick(i + 1),
        delayFor(SNIPPET[i - 1] ?? "", SNIPPET[i - 2] ?? "")
      );
    };
    timer.current = window.setTimeout(() => tick(1), 600);
    return () => window.clearTimeout(timer.current);
  }, []);

  // Render tokens up to `count` characters, splitting the token at the boundary.
  const visible: Token[] = [];
  let seen = 0;
  for (const t of tokens) {
    if (seen >= count) break;
    const take = Math.min(t.text.length, count - seen);
    visible.push({ kind: t.kind, text: t.text.slice(0, take) });
    seen += take;
  }
  const lineCount = SNIPPET.split("\n").length;

  return (
    <div
      className={cn(
        "w-full rounded-[14px] overflow-hidden border shadow-2xl font-mono text-[12.5px] sm:text-[13.5px] leading-[1.7]",
        "bg-[#F7F8F3] border-[#DADDD2] text-[#1A1A1A]",
        "dark:bg-[#161715] dark:border-[#2A2C27] dark:text-[#E9EBE3]",
        className
      )}
      aria-label="Example code: a welcome function for CodeDynasty"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-[#DADDD2] dark:border-[#2A2C27] bg-[#EEF0E8] dark:bg-[#1C1E1A]">
        <span className="h-3 w-3 rounded-full bg-[#E8615A]" />
        <span className="h-3 w-3 rounded-full bg-[#F2BE45]" />
        <span className="h-3 w-3 rounded-full bg-[#C8F31D]" />
        <span className="ms-3 text-[11px] tracking-wide text-[#6B6F66] dark:text-[#8A8F85]">
          codedynasty.js
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr]">
        {/* line numbers */}
        <ol className="select-none text-right pe-3 ps-4 py-4 text-[#A6AA9E] dark:text-[#4E524A] border-e border-[#E4E6DD] dark:border-[#242622]" aria-hidden="true">
          {Array.from({ length: lineCount }, (_, i) => (
            <li key={i}>{i + 1}</li>
          ))}
        </ol>

        <pre className="m-0 py-4 ps-4 pe-4 overflow-x-auto whitespace-pre">
          <code>
            {visible.map((t, i) => (
              <span key={i} className={COLOUR[t.kind]}>
                {t.text}
              </span>
            ))}
            {!reduced && (
              <span
                aria-hidden="true"
                className="inline-block w-[2px] h-[1.05em] align-[-0.2em] bg-[#1A1A1A] dark:bg-[#C8F31D] animate-caret"
              />
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
