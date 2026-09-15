"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), {
    stiffness: 300,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), {
    stiffness: 300,
    damping: 28,
  });

  const glowX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(y, [0, 1], ["0%", "100%"]);
  const background = useMotionTemplate`radial-gradient(220px circle at ${glowX} ${glowY}, rgba(207,154,164,0.28), transparent 75%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900 }
      }
      className={className}
    >
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          style={{ background }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {children}
    </motion.div>
  );
}
