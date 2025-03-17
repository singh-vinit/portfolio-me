import ProjectCard from "./ProjectCard";
import blog from "@/app/assets/blog-app.png";
import book from "@/app/assets/book-app.png";
import gamex from "@/app/assets/gamex-app.png";

export const MyWork = () => {
  return (
    <>
      <div className="flex flex-col gap-y-8 w-[100%] md:w-[70%] md:mx-auto">
        <div>
          <p className="text-white text-4xl font-bold mb-2">MyWork : Projects</p>
          <p className="text-white/50 text-lg text-justify">
            I've worked on a variety of projects, from simple websites to
            complex web applications.
          </p>
        </div>
        <ProjectCard
          tech={["next js", "tailwind css", "react query", "shadcn ui"]}
          title="gamex"
          image={gamex}
        />
        <ProjectCard
          title="blog app"
          image={blog}
          tech={[
            "react js",
            "tailwind css",
            "typescript",
            "prisma",
            "hono js",
            "cloudflare backend",
          ]}
        />
        <ProjectCard
          title="book store"
          image={book}
          tech={["react js", "tailwind css", "express js", "mongodb"]}
        />
      </div>
    </>
  );
};
