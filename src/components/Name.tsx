import { Common } from "./Common";

export function Name() {
  return (
    <div className="order-last mt-8 md:mt-0 mx-auto md:mx-0 md:order-first w-[80%] md:w-[50%]">
      <p className="text-4xl font-bold text-center md:text-left text-white md:text-5xl">
        Vinit singh
      </p>
      <p className="text-white/45 text-lg text-justify my-5 font-light">
        <span className="text-white">IT engineer</span> passionate about
        software innovation and development, committed to technical excellence
        and creative challenge resolution{" "}
        <span className="text-white">complexes</span>.
      </p>
      <div>
        <Common />
      </div>
    </div>
  );
}
