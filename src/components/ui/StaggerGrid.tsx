"use client";

import { forwardRef } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.95, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const StaggerGrid = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  function StaggerGrid({ children, className, ...props }, ref) {
    const shouldReduceMotion = useReducedMotion();

    return (
      <motion.div
        ref={ref}
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "show"}
        viewport={{ once: true, margin: "-80px" }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : itemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
