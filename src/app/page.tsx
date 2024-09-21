import { Name } from "@/app/components/Name";
import { Profile } from "@/app/components/Profile";

export default function Home() {
  return (
    <>
      <main className="h-[400px] flex justify-around items-center">
        <Name />
        <Profile />
      </main>
    </>
  );
}
