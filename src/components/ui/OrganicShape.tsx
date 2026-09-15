"use client";

import { motion, useReducedMotion } from "framer-motion";

type OrganicShapeProps = {
  className?: string;
  color?: "blush" | "lavender" | "sage" | "rose";
  duration?: number;
};

const colorMap: Record<NonNullable<OrganicShapeProps["color"]>, string> = {
  blush: "bg-blush",
  lavender: "bg-lavender",
  sage: "bg-sage",
  rose: "bg-rose/50",
};

export function OrganicShape({
  className = "",
  color = "blush",
  duration = 9,
}: OrganicShapeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      animate={
        shouldReduceMotion
          ? undefined
          : { y: [0, -18, 0], scale: [1, 1.05, 1] }
      }
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-[60%_40%_55%_45%/45%_55%_45%_55%] blur-2xl ${colorMap[color]} ${className}`}
    />
  );
}
