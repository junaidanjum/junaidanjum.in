"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedElement({
  children,
  delay = 0,
  className = "",
}: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
