import { Name } from "@/app/components/Name";
import { Profile } from "@/app/components/Profile";
import { About } from "@/app/components/About";
import { Skill } from "@/app/components/Skill";

export default function Home() {
  return (
    <>
      <main className="h-[400px] flex justify-around items-center">
        <Name />
        <Profile />
      </main>
      <About />
      <Skill />
    </>
  );
}
