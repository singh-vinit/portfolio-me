import ProjectCard from "./ProjectCard";
import blog from "@/app/assets/blog-app.png";
import book from "@/app/assets/book-app.png";

export const MyWork = () => {
  return (
    <>
    <div className="flex flex-col gap-y-8 w-[100%] md:w-[80%] md:mx-auto">
      <p className="text-white text-4xl font-bold">MyWork:Projects</p>
      <ProjectCard title="blog app" image={blog} tech={["react", "tailwind", "typescript", "prisma", "honojs", "cloudflare"]} />
      <ProjectCard title="book store" image={book} tech={["react", "tailwind", "expressjs", "mongodb"]} />
    </div>
    </>
  );
};
