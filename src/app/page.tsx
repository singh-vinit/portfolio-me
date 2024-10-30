import { Profile } from "@/app/components/Profile";
import { About } from "@/app/components/About";
import { Skill } from "@/app/components/Skill";
import { Name } from "./components/Name";
import { MyWork } from "./components/MyWork";

export default function Home() {
  return (
    <>
      <main className="h-[300px] flex justify-around items-center">
        <Name />
        <Profile />
      </main>
      <About />
      <Skill />
      <MyWork />
    </>
  );
}
