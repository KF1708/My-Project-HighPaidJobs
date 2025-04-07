"use client";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import teach1 from "../../../public/images/teachCareer/teach-1.png";
import teach2 from "../../../public/images/teachCareer/teach-2.png";
import Image from "next/image";

export default function TechCareerBanner() {
  return (
    <div className="bg-gray-100 dark:bg-black py-10 ">
      <div className="px-3 relative rounded-2xl lg:h-[355px] lg:w-[1200px] sm:w-[690px] h-[500px] w-[400px] md:h-[355px] md:w-[790px] max-w-screen-xl dark:bg-[#062068] mx-auto bg-blue-700 flex flex-col items-center text-center space-y-8">
        <div>
          <div>
            <Image
              src={teach1}
              alt="Teach Career decoration"
              className="h-[350px] bottom-0 absolute left-0 animate-pulse"
            />
          </div>
          <div>
            <Image
              src={teach2}
              alt="Teach Career decoration"
              className="h-[350px] absolute right-0 animate-pulse"
            />
          </div>
        </div>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold pt-4 text-white tracking-tight">
          Secure Your $100K+ Future Today!
        </h1>

        <p className="text-lg md:text-xl text-white max-w-2xl">
          Spots are filling FAST! Join our next hiring wave and start your
          journey to a high-paying tech career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link scroll={true} href="#bookingfrom">
            {" "}
            <Button className="bg-yellow-500 rounded-3xl hover:bg-yellow-400 text-black text-lg font-medium px-6 py-6 h-5">
              Book a Free 15-Min Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Link scroll={true} href="#bookingfrom">
            {" "}
            <Button className="bg-blue-500 hover:bg-blue-400 rounded-3xl text-white text-lg font-medium px-6 py-6 h-5">
              Join Next Webinar <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center text-lg">
          <Rocket className="mr-2 h-7 w-5 text-white bg-red-700 rounded-full" />
          <span className="text-white font-semibold">
            HighPaidJobs.us – The Fastest Path to a $100K+ Career!
          </span>
        </div>
      </div>
    </div>
  );
}
