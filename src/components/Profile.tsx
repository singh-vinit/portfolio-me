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
        className="rounded-3xl w-[50%] md:w-[300px] md:h-[300px] mx-auto md:mx-0"
      />
    </motion.div>
  );
}
