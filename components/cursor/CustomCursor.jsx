"use client";
import { useEffect, useRef, useState } from "react";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

export default function CustomCursor() {
  const fine = usePointerFine();
  const dot = useRef(null);
  const ring = useRef(null);
  const [variant, setVariant] = useState("default");
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!fine) {
      document.body.removeAttribute("data-cursor-on");
      return;
    }
    document.body.setAttribute("data-cursor-on", "true");

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      const el = e.target.closest?.("[data-cursor]");
      setVariant(el ? el.getAttribute("data-cursor") : "default");
    };
    window.addEventListener("mousemove", move);

    let raf;
    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
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
      <div
        ref={ring}
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          width: view ? 84 : 36, height: view ? 84 : 36, borderRadius: 999,
          border: "1px solid var(--ink-40)",
          background: view ? "var(--accent)" : "transparent",
          color: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
          opacity: hidden ? 0 : 1, transition: "width .2s, height .2s, background .2s, opacity .2s",
        }}
      >
        {view ? "View →" : ""}
      </div>
      <div
        ref={dot}
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          width: 8, height: 8, borderRadius: 999, background: "var(--accent)",
          opacity: hidden || view ? 0 : 1, transition: "opacity .2s",
        }}
      />
    </>
  );
}
