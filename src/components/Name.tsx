import { AnimatedText } from "./AnimatedText";
import { Social } from "./Social";
import { BorderBeam } from "./ui/border-beam";
import { Badge } from "./ui/badge";

export function Name() {
  return (
    <div className="">
      <p className="font-bold text-white text-6xl">
        Vinit
        <span className="ml-4 relative">
          <Badge
            variant="secondary"
            className="text-black absolute -top-6 left-6"
          >
            Full Stack Engineer
          </Badge>
          <BorderBeam size={100} />
          Singh
        </span>
      </p>
      <p className="text-white/45 text-xl w-96 text-justify mt-4 font-medium">
        <span className="text-white">IT engineer</span> passionate about software innovation and development,
        committed to technical excellence and creative challenge
        resolution <span className="text-white">complexes</span>.
      </p>
    </div>
  );
}

{
  /* <p>
        <span className="text-6xl font-bold bg-gradient-to-b from-white from-20% to-slate-500 to-80% bg-clip-text text-transparent">
          Hi
        </span>
        <span className="text-6xl">👋</span>
      </p>
      <AnimatedText
        text="I'm Vinit Singh"
        className="text-6xl font-bold bg-gradient-to-b from-white from-20% to-slate-500 to-80% bg-clip-text text-transparent"
      />
      <p className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        full stack engineer
      </p>
      <Social /> */
}
