"use client";
import { motion } from "framer-motion";
export default function ProjectCard() {
  return (
    <motion.div
      className="border border-white rounded-md w-[50%] h-[400px] shadow-[8px_8px_0px_0px_rgba(255,255,255)]"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
    ></motion.div>
  );
}
