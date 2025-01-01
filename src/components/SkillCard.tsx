"use client";
import { motion } from "framer-motion";
export function SkillCard({ children }: any) {
  return (
    <motion.div
      className="w-max p-2 flex gap-x-4 border border-white text-white shadow-md shadow-white"
      initial={{ scale: 1, rotate: "0deg" }}
      whileHover={{ scale: 0.95, rotate: "10deg" }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
