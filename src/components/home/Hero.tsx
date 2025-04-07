"use client";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import hero1 from "../../../public/images/hero/hero-1.png";
import hero2 from "../../../public/images/hero/hero-2.png";
import hero3 from "../../../public/images/hero/hero-3.png";
import logo from "../../../public/images/logo/logo.webp";
import { BsFire } from "react-icons/bs";
import { ModeToggle } from "../theme-provider/ModelToggole";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-blue-700 dark:bg-[#062068]">
      <div className=" px-3 relative max-w-screen-xl mx-auto">
        {/* Top-right hero image */}
        <div>
          <div>
            <Image
              src={hero2}
              alt="Hero background"
              className="h-72 right-0  -top-10 absolute animate-pulse"
            />
          </div>
          <div>
            <Image
              src={hero1}
              alt="Hero decoration"
              className="h-72 w-[500] -bottom-0 -left-24 -rotate-90 absolute animate-pulse"
            />
          </div>
        </div>
        {/* Header */}
        <div className="border-b border-gray-500 py-5">
          <div className="flex justify-between">
            <div className="pl-3">
              {/* <h1 className="text-2xl text-white font-bold">High Paid Jobs</h1> */}
              <Image src={logo} alt="Logo image" className="h-16 w-64" />
            </div>
            <div className="flex gap-3 items-center pr-5 z-50">
              <ModeToggle />
              <Link href="#bookingfrom" scroll={true}>
                {" "}
                <button className="flex bg-white p-1 rounded-2xl text-black text-lg cursor-pointer hover:bg-gray-200 items-center px-2">
                  Get Started <FaAngleRight className="text-sm ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-wrap justify-center gap-32 lg:justify-between py-5">
          <div>
            <h1 className="flex border border-gray-500 h-10 p-2 rounded-full text-lg text-white w-[400px] animate-pulse gap-2 items-center">
              <BsFire className="bg-orange-400 p-1 rounded-full text-lg text-red-600" />
              99.99% GUARANTEED to get back your job!
            </h1>

            <h1 className="text-white text-xl font-bold lg:text-6xl md:text-4xl py-10 sm:text-2xl">
              Get your Six-Figure
              <br />
              job back in{" "}
              <span className="text-yellow-500 relative">
                8-16 Weeks{" "}
                <Image
                  src={hero3}
                  alt="Hero decoration"
                  className="left-2 absolute bottom-0"
                />
              </span>
              <br /> with our proven <br />
              techniques.
            </h1>

            <h1 className="text-white">
              Get access to actively hiring 20+ premium recruiters today around
              your <br /> location.
            </h1>

            {/* CTA Buttons */}
            <div className="flex gap-5 py-5">
              <Link href="#bookingfrom" scroll={true}>
                {" "}
                <button className="flex bg-yellow-500 h-12 rounded-3xl text-sm cursor-pointer font-bold hover:bg-yellow-400 items-center mt-3 px-10">
                  Book Free Consultation{" "}
                  <FaAngleRight className="text-sm ml-2" />
                </button>
              </Link>
              <Link href="#bookingfrom" scroll={true}>
                <button className="flex bg-blue-700 dark:bg-[#062068] dark:hover:bg-blue-800 border border-amber-50 h-12 rounded-3xl rounded-4xl text-sm text-white cursor-pointer font-bold hover:bg-blue-600 items-center mt-3 px-10">
                  Join Next Webinar <FaAngleRight className="text-sm ml-2" />
                </button>
              </Link>
            </div>
          </div>

          {/* Embedded video */}
          <iframe
            src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&autoplay=1"
            title="High Paid Jobs"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="border-0 h-72 rounded-lg shadow-lg w-80 my-10"
          ></iframe>
        </div>

        {/* Bottom-left hero image */}
      </div>
    </div>
  );
};

export default Hero;
