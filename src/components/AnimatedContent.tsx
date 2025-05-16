'use client';

import { motion } from "framer-motion";

export function AnimatedContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm"
    >
      {children}
    </motion.div>
  );
} 