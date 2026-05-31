"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function SmoothScroll({ children }) {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return; // native scroll when reduced motion requested
    // autoRaf lets Lenis own its requestAnimationFrame loop; destroy() cancels it
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, autoRaf: true });
    return () => lenis.destroy();
  }, [reduced]);
  return children;
}
