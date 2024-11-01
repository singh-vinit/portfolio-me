import ProjectCard from "./ProjectCard";

export const MyWork = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <p className="text-white text-4xl font-bold">MyWork:Projects</p>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
