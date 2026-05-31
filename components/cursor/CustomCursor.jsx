"use client";
import { useEffect, useRef, useState } from "react";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

const RING_MAX = 84;
const RING_DEFAULT_SCALE = 36 / RING_MAX;
const OFFSCREEN = "translate(-100px, -100px) translate(-50%, -50%)";

export default function CustomCursor() {
  const fine = usePointerFine();
  const dot = useRef(null);
  const ring = useRef(null);
  const [variant, setVariant] = useState("default");
  const [ready, setReady] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!fine) {
      document.body.removeAttribute("data-cursor-on");
      return;
    }
    document.body.setAttribute("data-cursor-on", "true");

    // park both elements offscreen before the first paint so nothing flashes at (0,0)
    if (dot.current) dot.current.style.transform = OFFSCREEN;
    if (ring.current) ring.current.style.transform = OFFSCREEN;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      const el = e.target.closest?.("[data-cursor]");
      setVariant(el ? el.getAttribute("data-cursor") : "default");
      setReady(true);
    };
    window.addEventListener("mousemove", move);

    let raf;
    const loop = () => {
      const dx = pos.current.x - ringPos.current.x;
      const dy = pos.current.y - ringPos.current.y;
      // skip the style write when the ring is effectively stationary
      if (Math.abs(dx) >= 0.1 || Math.abs(dy) >= 0.1) {
        ringPos.current.x += dx * 0.15;
        ringPos.current.y += dy * 0.15;
        if (ring.current) {
          ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.removeAttribute("data-cursor-on");
    };
  }, [fine]);

  if (!fine) return null;

  const hidden = variant === "hide";
  const view = variant === "view";

  return (
    <>
      {/* outer: positioned by RAF (immediate, no transition) */}
      <div
        ref={ring}
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          width: RING_MAX, height: RING_MAX,
          opacity: ready && !hidden ? 1 : 0, transition: "opacity .2s",
          willChange: "transform",
        }}
      >
        {/* inner: animated size via composited scale (no width/height animation) */}
        <div
          style={{
            width: "100%", height: "100%", borderRadius: 999,
            border: "1px solid var(--ink-40)",
            background: view ? "var(--accent)" : "transparent",
            color: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
            transform: `scale(${view ? 1 : RING_DEFAULT_SCALE})`, transformOrigin: "center",
            transition: "transform .2s, background .2s",
          }}
        >
          {view ? "View →" : ""}
        </div>
      </div>

      <div
        ref={dot}
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          width: 8, height: 8, borderRadius: 999, background: "var(--accent)",
          opacity: ready && !hidden && !view ? 1 : 0, transition: "opacity .2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
