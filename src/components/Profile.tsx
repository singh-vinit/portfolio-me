"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import myImage from "@/app/assets/vinit.jpg";

export function Profile() {
  return (
    <motion.div
    className="relative rounded-3xl"
    initial={{y: -2}}
    animate={{y: -8}}
    transition={{duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut"}}
    >
      <Image
        src={myImage}
        alt="image"
        className="rounded-3xl w-[300px] h-[300px]"
      />
    </motion.div>
  );
}
