"use client";
import {motion} from "framer-motion"
import Image from "next/image";
import myImage from "@/app/assets/fourth.png"

export function Profile() {
  return (
    <motion.div
    className="w-[300px] h-[300px] rounded-xl shadow-lg shadow-rose-500 cursor-grab"
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    dragElastic={0.2}
    >
      <Image src={myImage} alt="image" draggable="false" className="rounded-xl" />
    </motion.div>
  );
}
