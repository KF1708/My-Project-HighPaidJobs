import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";

const Career = () => {
  const steps = [
    {
      number: "01",
      title: "Pick Your Plan",
      description:
        "Find out options among them: Placement, assessment, guidance, technical coaching, quick refine and placement.",
    },
    {
      number: "02",
      title: "Your Career Assessment",
      description:
        "Get one-on-one coaching and assessment until your placement in confirmed in 8 to 12 weeks.",
    },
    {
      number: "03",
      title: "Access 500+ Active Recruiters",
      description:
        "We'll review your resume, connect you with recruiters, and prepare you for interviews.",
    },
    {
      number: "04",
      title: "Ready Job Offer within 10 Interviews",
      description:
        "Our 500+ active recruiters will help you land multiple job offers within the first 10 interviews.",
    },
    {
      number: "05",
      title: "Renegotiation for Extra $10k",
      description:
        "When your final salary is decided, we will step in to renegotiate get you extra $10k",
    },
    {
      number: "06",
      title: "Support During Probation Period",
      description:
        "Receive full support during your probation period to ensure your success.",
    },
  ];

  const jobTracks = [
    "CloudOps/DevOps (AWS)",
    "Full-Stack Web/Mobile (MERN)",
    "Project/Product Management",
    "SQA Engineering",
    "Front-End Developer",
    "Back-End Developer",
    "Software Engineer",
    "AI Engineer",
    "More",
  ];

  return (
    <div className="dark:bg-stone-900 p-6 max-w-7xl mx-auto">
      {/* Left side - Timeline */}
      <h1 className="text-center text-lg font-bold lg:text-5xl md:text-2xl py-5 sm:text-xl">
        Your path to a High-Paying career
      </h1>
      <h1 className="pb-5 lg:text-lg text-gray-600 dark:text-gray-300 text-base text-center">
        Follow our proven step-by-step process to land your dream job
      </h1>
      <div className="w-full flex lg:flex-row flex-col gap-8">
        <div className="relative">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-12 relative">
              {/* Step number circle */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-black  rounded-full">
                  <span className="text-blue-600 font-bold dark:text-white">
                    {step.number}
                  </span>
                </div>
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 w-0.5 h-20 border-l-2 border-dashed border-blue-100 -translate-x-1/2"></div>
                )}
              </div>

              {/* Step content */}
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-1 dark:text-white">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/5">
          <div className="border-2 border-blue-600 dark:border-[#062068] rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 dark:bg-[#062068] text-white p-4">
              <h2 className="text-xl font-bold">Job Prep Tracks</h2>
            </div>

            {/* Job tracks list */}
            <div className="bg-white dark:bg-stone-900 p-4">
              <div className="space-y-4">
                {jobTracks.map((track, index) => (
                  <div key={index} className="flex items-center">
                    <GoCheckCircle className="h-6 w-6 dark:h-8 dark:w-8 bg-lime-100 dark:border-[#062068] dark:border-2 rounded-full dark:text-[#062068] text-blue-600 mr-4" />
                    <span className="text-gray-800 dark:text-gray-100 py-2 text-lg font-semibold">
                      {track}
                    </span>
                  </div>
                ))}
              </div>

              {/* Guarantee text */}
              <div className="mt-8 text-center dark:text-gray-100 text-gray-700 text-sm">
                All tracks include job placement 99.99% guarantee to follow our
                techniques.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center pt-10">
        {" "}
        <Link href="#bookingfrom" scroll={true}>
          <button className="flex bg-blue-700 dark:bg-[#062068] h-10 rounded-3xl lg:text-lg text-base-lg text-white cursor-pointer font-semibold hover:bg-blue-600 dark:hover:bg-blue-800 items-center mt-3 px-4">
            Book Free Consultation{" "}
            <FaAngleRight className="lg:text-lg text-base ml-2" />
          </button>
        </Link>
      </div>

      {/* Right side - Job Tracks */}
    </div>
  );
};

export default Career;
