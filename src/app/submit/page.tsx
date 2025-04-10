"use client";

import Link from "next/link";
import React from "react";
import Confetti from "react-confetti";

const Submit = () => {
  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      <Confetti
        width={2600}
        height={578}
        className="absolute top-0 left-0 z-20 pointer-events-none"
      />

      <div className="flex items-center justify-center w-full px-4">
        <div className="rounded-xl dark:bg-stone-800  border bg-card text-card-foreground shadow w-full max-w-md">
          <div className="flex flex-col space-y-4 p-6">
            <div className="flex justify-center">
              <div className="rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check text-blue-800 dark:text-[#062068]  h-8 md:h-12 w-8 md:w-12 "
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>

            <div className="font-semibold tracking-tight text-center dark:text-white text-black text-2xl">
              Congratulations!
              <br />
              You have submitted successfully!
            </div>

            <div className="text-muted-foreground text-xs sm:text-sm md:text-base text-center pt-2">
              We&apos;ll contact you soon to confirm your 15-minute career
              auditing session.
            </div>

            <Link href="/">
              <button className="flex gap-2 whitespace-nowrap rounded-md text-base font-medium h-9 px-4 py-2 mx-auto bg-blue-800 text-white dark:bg-[#062068] dark:hover:bg-blue-700 hover:bg-blue-700">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
