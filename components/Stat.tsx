"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Splits "15+" -> { num: 15, suffix: "+" }, "4.0" -> { num: 4, decimals: 1 }. */
function parse(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: value, decimals: 0 };
  const numStr = match[1];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { target: parseFloat(numStr), suffix: match[2], decimals };
}

export default function Stat({ value, label }: { value: string; label: string }) {
  const reduce = useReducedMotion();
  const { target, suffix, decimals } = parse(value);
  const [display, setDisplay] = useState(reduce ? target : 0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        const duration = 900;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce, target]);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {display.toFixed(decimals)}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}
