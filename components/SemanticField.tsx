"use client";

import { useEffect, useRef } from "react";

const TOKENS = [
  "embedding",
  "tokenize()",
  "attention",
  "BERT",
  "RAG",
  "argmax",
  "df.groupby()",
  "vector",
  "corpus",
  "git commit",
  "async/await",
  "spaCy",
  "p < 0.05",
  "λ",
  "Σ",
  "cosine_sim",
  "transformer",
  "n-gram",
  "O(log n)",
  "SELECT *",
  "docker build",
  "∇ gradient",
];

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label?: string;
  r: number;
};

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export default function SemanticField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let colors = { ink: "#888", accent: "#0f766e", line: "#ccc" };
    let raf = 0;
    let running = true;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let W = 0;
    let H = 0;

    function readColors() {
      colors = {
        ink: cssVar("--muted") || "#888",
        accent: cssVar("--accent") || "#0f766e",
        line: cssVar("--line") || "#ccc",
      };
    }

    function setup() {
      const parent = canvas!.parentElement!;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = parent.clientWidth;
      H = parent.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // sparse field: word tokens plus a few anonymous dots, scaled to area
      const tokenCount = Math.max(8, Math.min(TOKENS.length, Math.floor(W / 75)));
      const dotCount = Math.floor(tokenCount * 1.6);
      const shuffled = [...TOKENS].sort(() => Math.random() - 0.5);
      nodes = [];
      for (let i = 0; i < tokenCount + dotCount; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          label: i < tokenCount ? shuffled[i] : undefined,
          r: 1.2 + Math.random() * 1.4,
        });
      }
    }

    function step() {
      ctx!.clearRect(0, 0, W, H);

      for (const n of nodes) {
        if (!reduce) {
          // gentle cursor pull within a radius, then drift
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 200 * 200 && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = ((200 - d) / 200) * 0.035;
            n.vx += (dx / d) * f;
            n.vy += (dy / d) * f;
          }
          n.vx = Math.max(-0.55, Math.min(0.55, n.vx * 0.992));
          n.vy = Math.max(-0.55, Math.min(0.55, n.vy * 0.992));
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -60) n.x = W + 40;
          if (n.x > W + 60) n.x = -40;
          if (n.y < -20) n.y = H + 10;
          if (n.y > H + 20) n.y = -10;
        }
      }

      // faint similarity links
      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 150 * 150) {
            const t = 1 - Math.sqrt(d2) / 150;
            ctx!.strokeStyle = colors.accent;
            ctx!.globalAlpha = t * 0.2;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        if (n.label) {
          ctx!.globalAlpha = 0.58;
          ctx!.fillStyle = colors.ink;
          ctx!.font =
            "500 13px var(--font-plex-mono, ui-monospace), ui-monospace, monospace";
          ctx!.fillText(n.label, n.x + 7, n.y + 4);
          ctx!.globalAlpha = 0.72;
          ctx!.fillStyle = colors.accent;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, 2.8, 0, Math.PI * 2);
          ctx!.fill();
        } else {
          ctx!.globalAlpha = 0.38;
          ctx!.fillStyle = colors.ink;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, n.r + 0.4, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      ctx!.globalAlpha = 1;

      if (!reduce && running && visible) raf = requestAnimationFrame(step);
    }

    function start() {
      cancelAnimationFrame(raf);
      if (visible && running) raf = requestAnimationFrame(step);
    }

    readColors();
    setup();
    if (reduce) {
      step(); // single static frame
    } else {
      start();
    }

    const onMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      setup();
      if (reduce) step();
    };
    const onVisibility = () => {
      running = !document.hidden;
      if (!reduce) start();
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    // pause when the hero scrolls out of view
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!reduce) start();
    });
    io.observe(canvas);

    // re-read palette when the theme class flips
    const mo = new MutationObserver(() => {
      readColors();
      if (reduce) step();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
