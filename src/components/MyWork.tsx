import ProjectCard from "./ProjectCard";
import blog from "@/app/assets/blog-app.png";
import book from "@/app/assets/book-app.png";
import gamex from "@/app/assets/gamex-app.png";

export const MyWork = () => {
  return (
    <>
      <div className="flex flex-col gap-y-8 w-[100%] md:w-[70%] md:mx-auto">
        <div>
          <p className="text-white text-4xl font-bold mb-2">
            MyWork : Projects
          </p>
          <p className="text-white/50 text-lg text-justify">
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications.
          </p>
        </div>
        <ProjectCard
          tech={["next js", "tailwind css", "react query", "shadcn ui"]}
          title="gamex"
          image={gamex}
          githubLink="https://github.com/singh-vinit/gameX"
          liveLink="https://game-x-alpha.vercel.app"
          description="A game store app where you can find your favorite games and look at their details like platforms, genres, and system requirements etc."
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
          githubLink="https://github.com/singh-vinit/medium_blog"
          liveLink="https://blog-six-zeta.vercel.app/signin"
          description="A blog app similar to medium blog sharing platform where user can write, read, and publish blogs."
        />
        <ProjectCard
          title="book store"
          image={book}
          tech={["react js", "tailwind css", "express js", "mongodb"]}
          githubLink="https://github.com/singh-vinit/book_store"
          liveLink="http://book-store-silk-three.vercel.app/"
          description="A CRUD operation based book store app where user can add, delete, update, and read your favourite books details."
        />
      </div>
    </>
  );
};
