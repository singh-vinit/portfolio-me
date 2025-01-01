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
import { Badge } from "@/components/ui/badge"


interface Props {
  title: string;
  image: StaticImageData;
  tech: string[];
  // description: string;
}

export default function ProjectCard({title, image, tech}: Props) {
  return (
    <motion.div 
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      // viewport={{ once: true }}
    >
      <Card className="bg-black text-white w-[600px]">
        <CardHeader>
          <CardTitle className="uppercase font-bold text-xl">{title}</CardTitle>
          <CardDescription>
            <Image
              src={image}
              alt="image"
              className=""
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          {tech.map((t,i) => (
            <Badge key={i} variant="secondary" className="text-black mr-2 capitalize">{t}</Badge>
          ))}
        </CardContent>
        <CardFooter>

        </CardFooter>
      </Card>
    </motion.div>
  );
}
