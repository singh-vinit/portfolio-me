import { BorderBeam } from "./ui/border-beam";
import { Badge } from "./ui/badge";
import { Common } from "./Common";


export function Name() {
  return (
    <div className="order-last mt-8 md:mt-0 mx-auto md:mx-0 md:order-first w-[80%] md:w-[40%]">
      <div className="text-4xl font-bold text-center md:text-left text-white md:text-6xl">
        Vinit
        <span className="ml-4 relative">
          <Badge
            variant="secondary"
            className="text-black absolute -right-20 -top-5 md:-right-0 md:-top-6 md:left-6"
          >
            Full Stack Engineer
          </Badge>
          <BorderBeam size={50} />
          Singh
        </span>
      </div>
      <p className="text-white/45 text-lg text-center md:text-xl md:text-justify mt-4 font-medium">
        <span className="text-white">IT engineer</span> passionate about
        software innovation and development, committed to technical excellence
        and creative challenge resolution{" "}
        <span className="text-white">complexes</span>.
      </p>
      <div className="mt-8">
        <Common />
      </div>
    </div>
  );
}

