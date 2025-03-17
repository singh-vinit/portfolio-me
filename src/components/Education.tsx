import Link from "next/link";
import Image from "next/image";
import msit from "@/app/assets/msit.png";

export function Education() {
  return (
    <div className="w-[100%] md:w-[70%] md:mx-auto">
      <p className="text-4xl font-bold text-white mb-6">Education</p>
      <div className="flex justify-between items-center space-x-4">
        <Link href="https://www.msit.in/">
          <div className="flex items-center space-x-4">
            <Image src={msit} alt="MSIT" width={60} height={60} />
            <div>
              <p className="text-white text-lg md:text-xl font-medium">
                Maharaja Surajmal Institute of Technology
              </p>
              <p className="text-white/45 text-sm md:text-lg font-light">
                B.Tech in Information Technology
              </p>
            </div>
          </div>
        </Link>
        <p className="text-white/45 text-sm md:text-lg font-light">2022-2026</p>
      </div>
    </div>
  );
}
