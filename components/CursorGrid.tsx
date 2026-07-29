"use client";

import { useEffect, useRef } from "react";

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/** Subtle technical dot-grid that reacts to the cursor with a faint crosshair. */
export default function CursorGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const GAP = 34;
    const R = 130;
    let W = 0;
    let H = 0;
    let raf = 0;
    let visible = true;
    let colors = { dot: "#ccc", accent: "#d8402a" };
    const mouse = { x: -9999, y: -9999, active: false };

    function readColors() {
      colors = {
        dot: cssVar("--line") || "#ccc",
        accent: cssVar("--accent") || "#d8402a",
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
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // crosshair
      if (mouse.active && !reduce) {
        ctx!.strokeStyle = colors.accent;
        ctx!.globalAlpha = 0.16;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(mouse.x, 0);
        ctx!.lineTo(mouse.x, H);
        ctx!.moveTo(0, mouse.y);
        ctx!.lineTo(W, mouse.y);
        ctx!.stroke();
      }

      for (let x = GAP; x < W; x += GAP) {
        for (let y = GAP; y < H; y += GAP) {
          let r = 1;
          let alpha = 0.5;
          let accent = false;
          if (mouse.active && !reduce) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < R) {
              const f = 1 - d / R;
              r = 1 + f * 2.4;
              alpha = 0.5 + f * 0.5;
              accent = f > 0.55;
            }
          }
          ctx!.globalAlpha = alpha;
          ctx!.fillStyle = accent ? colors.accent : colors.dot;
          ctx!.beginPath();
          ctx!.arc(x, y, r, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      ctx!.globalAlpha = 1;
    }

    function loop() {
      draw();
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    }

    function start() {
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
      else draw();
    }

    readColors();
    setup();
    draw();
    if (!reduce) start();

    const onMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.x <= W && mouse.y >= 0 && mouse.y <= H;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    const onResize = () => {
      setup();
      draw();
    };
    const onVisibility = () => {
      visible = !document.hidden;
      start();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    io.observe(canvas);

    const mo = new MutationObserver(() => {
      readColors();
      draw();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
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
