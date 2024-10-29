"use client";
import { easeInOut, motion } from "framer-motion";
export function SkillCard({ children }: any) {
  return (
    <motion.div
      className="w-max p-2 border border-white shadow-md shadow-rose-500 bg-black text-white flex gap-x-4"
      initial={{
        y: 2,
      }}
      animate={{
        y: -2,
      }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}


