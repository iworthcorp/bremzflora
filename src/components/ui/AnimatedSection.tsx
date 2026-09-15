"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function AnimatedSection({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? undefined
          : { opacity: 0, y: 36, scale: 0.96, filter: "blur(6px)" }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
