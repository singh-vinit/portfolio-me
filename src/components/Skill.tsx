import { SkillCard } from "./SkillCard";
import { TypescriptIcon } from "../app/svg/typescript";
import { JavascriptIcon } from "../app/svg/javascript";
import { ExpressIcon } from "../app/svg/express";
import { NextIcon } from "../app/svg/next";
import { ReactIcon } from "../app/svg/react";
import { GoIcon } from "../app/svg/go";
import { PythonIcon } from "../app/svg/python";
import { MongoIcon } from "../app/svg/mongo";
import { PostgresIcon } from "../app/svg/postgress";
import { RedisIcon } from "../app/svg/redis";

const database = [
  { name: "postgress", icon: <PostgresIcon /> },
  { name: "mongodb", icon: <MongoIcon /> },
  { name: "redis", icon: <RedisIcon /> },
];

const language = [
  { name: "javascript", icon: <JavascriptIcon /> },
  { name: "typescript", icon: <TypescriptIcon /> },
  { name: "go", icon: <GoIcon /> },
  { name: "python", icon: <PythonIcon /> },
];

const framework = [
  { name: "react", icon: <ReactIcon /> },
  { name: "next js", icon: <NextIcon /> },
  { name: "express", icon: <ExpressIcon /> },
];

export const Skill = () => {
  return (
    <div className="flex flex-col gap-y-6 p-4">
      <p className="text-white text-4xl font-bold">Code:Skills</p>

      <div className="flex gap-x-10">
        {language.map((obj) => (
          <SkillCard>
            <span className="capitalize font-medium text-lg">{obj.name}</span>
            {obj.icon}
          </SkillCard>
        ))}
      </div>

      <div className="flex gap-x-10">
        {framework.map((obj) => (
          <SkillCard>
            <span className="capitalize font-medium text-lg">{obj.name}</span>
            {obj.icon}
          </SkillCard>
        ))}
      </div>

      <div className="flex gap-x-10">
        {database.map((obj) => (
          <SkillCard>
            <span className="capitalize font-medium text-lg">{obj.name}</span>
            {obj.icon}
          </SkillCard>
        ))}
      </div>
    </div>
  );
};
