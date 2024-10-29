import { SkillCard } from "./SkillCard";
import { TypescriptIcon } from "../svg/typescript";
import { JavascriptIcon } from "../svg/javascript";
import { ExpressIcon } from "../svg/express";
import { NextIcon } from "../svg/next";
import { ReactIcon } from "../svg/react";

export const Skill = () => {
  return (
    <div className="">
      <p className="text-white text-4xl font-bold">Code:Skills</p>

      <div className="flex flex-col gap-y-4 justify-center my-5">
        <p className="text-white text-2xl font-semibold">languages</p>
        <div className="flex gap-x-10">
          <SkillCard>
            <span className="font-medium text-lg">javascript</span>
            <JavascriptIcon />
          </SkillCard>
          <SkillCard>
            <span className="font-medium text-lg">typescript</span>
            <TypescriptIcon />
          </SkillCard>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 justify-center">
        <p className="text-white text-2xl font-semibold">frameworks</p>
        <div className="flex gap-x-10">
          <SkillCard>
            <span className="font-medium text-lg">react</span>
            <ReactIcon />
          </SkillCard>
          <SkillCard>
            <span className="font-medium text-lg">express</span>
            <ExpressIcon />
          </SkillCard>
          <SkillCard>
            <span className="font-medium text-lg">nextjs</span>
            <NextIcon />
          </SkillCard>
        </div>
      </div>
    </div>
  );
};
