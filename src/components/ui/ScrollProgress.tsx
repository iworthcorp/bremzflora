"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 right-0 left-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-rose-dark via-blush-dark to-lavender-dark"
    />
  );
}
