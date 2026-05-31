"use client";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function Reveal({ children, as = "div", delay = 0, y = 24, className = "" }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
