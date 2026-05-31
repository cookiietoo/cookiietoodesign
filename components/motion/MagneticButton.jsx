"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { magneticOffset } from "@/lib/motion/magnetic";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

export default function MagneticButton({ children, strength = 0.4, className = "", as = "button", ...props }) {
  const ref = useRef(null);
  const fine = usePointerFine();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const MotionTag = motion[as] ?? motion.button;

  function onMove(e) {
    if (!fine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const o = magneticOffset(e.clientX, e.clientY, rect, strength);
    x.set(o.x);
    y.set(o.y);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
