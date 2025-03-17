"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/app/svg/github";
import { VercelIcon } from "@/app/svg/vercel";

interface Props {
  title: string;
  image: StaticImageData;
  tech: string[];
  description: string;
  githubLink: string;
  liveLink: string;
}

import Link from "next/link";

export default function ProjectCard({
  title,
  image,
  tech,
  description,
  githubLink,
  liveLink,
}: Props) {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      // viewport={{ once: true }}
    >
      <Card className="shadow-[8px_8px_10px_rgba(255,255,255,0.2)] border-none bg-black md:w-[450px]">
        <CardHeader className="p-0">
          <CardDescription>
            <Image src={image} alt="image" className="rounded-t-xl" />
            <CardTitle className="uppercase font-bold text-xl px-6 py-2 text-white">
              {title}
            </CardTitle>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-2">
          <div>
            {tech.map((t, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-black mr-1 capitalize font-semibold"
              >
                {t}
              </Badge>
            ))}
          </div>
          <p className="text-white font-light text-lg">{description}</p>
        </CardContent>
        <CardFooter className="flex gap-4 py-3">
          <Link
            href={githubLink}
            className="flex gap-x-1 hover:scale-110 transition-transform ease-in-out"
          >
            <GithubIcon />
            <span className="text-white font-light text-sm">github</span>
          </Link>
          <Link
            href={liveLink}
            className="flex gap-x-1 hover:scale-110 transition-transform ease-in-out"
          >
            <VercelIcon />
            <span className="text-white font-light text-sm">live</span>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
