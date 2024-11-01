import { Profile } from "@/app/components/Profile";
import { About } from "@/app/components/About";
import { Skill } from "@/app/components/Skill";
import { Name } from "./components/Name";
import { MyWork } from "./components/MyWork";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex justify-evenly items-center">
        <Name />
        <Profile />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <MyWork />
      </div>
    </div>
  );
}
