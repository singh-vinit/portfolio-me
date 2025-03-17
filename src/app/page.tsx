import { Profile } from "@/components/Profile";
import { About } from "@/components/About";
import { Skill } from "@/components/Skill";
import { Name } from "../components/Name";
import { MyWork } from "../components/MyWork";
import { Footer } from "@/components/Footer";
import { Education } from "@/components/Education";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <div className="w-[80%] mx-auto flex flex-col space-y-16">
        <ScrollProgress className="top-[0px]" />
        <div className="flex flex-col w-[100%] md:flex-row md:justify-between md:items-center md:w-[70%] md:mx-auto">
          <Name />
          <Profile />
        </div>
        <About />
        <Education />
        <Skill />
        <MyWork />
        <div className="bg-white h-[1px] mt-4"></div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
