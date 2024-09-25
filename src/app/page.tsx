import { Name } from "@/app/components/Name";
import { Profile } from "@/app/components/Profile";
import { About } from "./components/About";
import { TypescriptIcon } from "./svg/Typescript";
import { JavascriptIcon } from "./svg/javascript";
import { ReactIcon } from "./svg/react";

export default function Home() {
  return (
    <>
      <main className="h-[400px] flex justify-around items-center border border-red-500">
        <Name />
        <Profile />
      </main>
      <About />
      <TypescriptIcon />
      <JavascriptIcon />
      <ReactIcon />
    </>
  );
}
