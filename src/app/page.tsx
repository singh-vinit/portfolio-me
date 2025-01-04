import { Profile } from "@/components/Profile";
import { About } from "@/components/About";
import { Skill } from "@/components/Skill";
import { Name } from "../components/Name";
import { MyWork } from "../components/MyWork";
import { Footer } from "@/components/Footer";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <div className="w-[80%] mx-auto flex flex-col space-y-16">
        <ScrollProgress className="top-[0px]" />
        <div className="flex flex-col md:flex-row md:justify-around md:items-center">
          <Name />
          <Profile />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skill />
        </div>
        <div>
          <MyWork />
        </div>
        <div className="bg-white h-[2px] mt-4"></div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
