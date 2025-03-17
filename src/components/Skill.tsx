import Image from "next/image";
import Tailwind from "@/app/assets/tailwindcss--sticker.webp";
import Hono from "@/app/assets/hono--sticker.webp";
import React from "@/app/assets/react--sticker.webp";
import ReactQuery from "@/app/assets/reactquery--sticker.webp";
import ReactRouter from "@/app/assets/reactrouter--sticker.webp";
import T3 from "@/app/assets/t3-light.svg";
import Express from "@/app/assets/expressjs_dark.svg";
import Next from "@/app/assets/nextjs_icon_dark.svg";
import Node from "@/app/assets/nodejs--sticker.webp";
import TypeScript from "@/app/assets/typescript--sticker.webp";
import Redux from "@/app/assets/redux--sticker.webp";
import Javascript from "@/app/assets/javascript--sticker.webp";
import Zod from "@/app/assets/zod--sticker.webp";
import Redis from "@/app/assets/redis--sticker.webp";
import Postgres from "@/app/assets/postgresql.svg";
import Cplus from "@/app/assets/c++--sticker.webp";
import C from "@/app/assets/c--sticker.webp";

const icons = [
  Hono,
  React,
  Tailwind,
  ReactQuery,
  ReactRouter,
  T3,
  Express,
  Next,
  Node,
  TypeScript,
  Redux,
  Javascript,
  Zod,
  Redis,
  Postgres,
  Cplus,
  C,
];

export const Skill = () => {
  return (
    <div className="w-[100%] md:w-[70%] md:mx-auto">
      <p className="text-white text-4xl font-bold mb-8">Code:Skills</p>
      <div className="grid grid-cols-6 place-items-center gap-y-2">
        {icons.map((Icon, i) => (
          <div key={i} className="p-2">
            <Image src={Icon} alt="icon" width={50} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};
