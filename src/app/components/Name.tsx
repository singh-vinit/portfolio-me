"use client";
import { motion } from "framer-motion";

export function Name() {
  return (
    <div className="flex flex-col">
      <p className="p-2 text-6xl font-bold bg-gradient-to-b from-white from-20% to-slate-500 to-80% bg-clip-text text-transparent">
        Hi
      </p>
      <motion.div
        className="p-3 text-6xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 100, 0],
        }}
        transition={{
          duration: Infinity,
        }}
      >
        I'm Vinit Singh
      </motion.div>
    </div>
  );
}
