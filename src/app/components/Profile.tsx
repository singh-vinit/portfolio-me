"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "@/app/assets/fourth.png";

export function Profile() {
  return (
    <motion.div className="w-[250px] h-[250px] rounded-xl shadow-lg cursor-grab">
      <Image
        src={myImage}
        alt="image"
        draggable="false"
        className="rounded-xl"
      />
    </motion.div>
  );
}
