"use client";
import { easeIn, motion } from "framer-motion";

interface Props {
  text: string;
  className: string;
}

const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export function AnimatedText({ text, className }: Props) {
  return (
    <p>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate="visible"
        className={className}
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split("").map((char) => (
          <motion.span variants={defaultAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </p>
  );
}
