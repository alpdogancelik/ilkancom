"use client";

// Gorunur alana giren icerigi yumusak bir gecisle acar.
import type { ReactNode } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealOnViewProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function RevealOnView({
  children,
  className,
  delayMs = 0,
}: RevealOnViewProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1],
        delay: delayMs / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
