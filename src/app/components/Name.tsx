import { AnimatedText } from "./AnimatedText";
export function Name() {
  return (
    <div className="flex flex-col">
      <p>
        <span className="text-6xl font-bold bg-gradient-to-b from-white from-20% to-slate-500 to-80% bg-clip-text text-transparent">
          Hi
        </span>
        <span className="text-6xl">👋</span>
      </p>
      <AnimatedText
        text="I'm Vinit Singh"
        className="text-6xl font-bold bg-gradient-to-b from-white from-20% to-slate-500 to-80% bg-clip-text text-transparent"
      />
      <p className="text-3xl font-bold bg-gradient-to-b from-white from-20% to-slate-500 to-80% bg-clip-text text-transparent">full stack engineer</p>
    </div>
  );
}
