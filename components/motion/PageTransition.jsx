"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
