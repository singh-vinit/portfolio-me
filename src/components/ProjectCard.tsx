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
  // description: string;
}

export default function ProjectCard({ title, image, tech }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      // viewport={{ once: true }}
    >
      <Card className="bg-white/5 text-white">
        <CardHeader className="p-0">
          <CardDescription>
            <Image src={image} alt="image" className="rounded-t-xl" />
            <CardTitle className="uppercase font-bold text-xl px-6 py-2 text-white">
              {title}
            </CardTitle>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-2">
          {tech.map((t, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="text-black mr-1 capitalize font-semibold"
            >
              {t}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex gap-4 py-3">
          <a href="#" className="hover:scale-110 transition-transform ease-in-out">
            <GithubIcon />
          </a>
          <a href="#" className="hover:scale-110 transition-transform ease-in-out">
            <VercelIcon />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
