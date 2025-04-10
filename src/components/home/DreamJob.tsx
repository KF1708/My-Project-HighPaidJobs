"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";
import { LuBriefcaseBusiness, LuBuilding } from "react-icons/lu";
import { MdOutlineChevronRight } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";

const DreamJob = () => {
  const items = [
    {
      id: 1,
      name: "Job Assessment",
      icon: LuBriefcaseBusiness,
      detailicon: IoIosCheckmark,
      details: [
        "30 to 120 min interview",
        "40 to 70 local recruiter access",
        "Provided recording with details report",
        "Salary negotiation blueprint",
        "Probation period hacks",
        "Help revamp the resume and tailoring for each job needs.",
      ],
      button: "Get Started",
      buttonicon: MdOutlineChevronRight,
    },
    {
      id: 2,
      name: "Job Placement",
      icon: LuBuilding,
      detailicon: IoIosCheckmark,
      details: [
        "Everything in Job Assessment + Placement",
        "One-on-one instruction",
        "Hands-on real-world projects",
        "Optional 400-hour internship",
        "Industry mentor matching",
        "Portfolio development",
        "Lifetime access to materials",
      ],
      button: "Get Started",
      buttonicon: MdOutlineChevronRight,
    },
    {
      id: 3,
      name: "Job Prep",
      icon: RiGraduationCapLine,
      detailicon: IoIosCheckmark,
      details: [
        "Everything in Job Assessment",
        "Access to 500+ active recruiters",
        "Complete support during interviews",
        "Sure job offer within 10 interviews",
        "Help renegotiate salary by $10k",
        "Complete support during probation period",
        "Lifetime access to materials",
      ],
      button: "Schedule Consultation",
      buttonicon: FaArrowRight,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="bg-slate-100 dark:bg-black py-14">
      <div className="px-3 max-w-screen-xl mx-auto">
        <h1 className="text-center text-lg font-bold lg:text-5xl md:text-2xl py-5 sm:text-xl">
          Choose Your Path to Land Your Dream Job
        </h1>
        <h1 className="pb-5 lg:text-lg text-gray-600 dark:text-gray-100 text-base text-center">
          Select the career path that aligns with your goals and unlock your
          professional <br /> potential
        </h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {/* Left Part: Icons and Names */}
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 p-7 bg-white dark:bg-stone-900 rounded-lg shadow cursor-pointer hover:border-2  dark:hover:border-blue-950 hover:border-blue-800 transition"
                onMouseEnter={() => setSelectedItem(item)}
              >
                <item.icon className="text-2xl text-blue-700 dark:text-[#062068]" />
                <h1 className=" font-semibold  text-xl">{item.name}</h1>
              </div>
            ))}
          </div>

          {/* Right Part: Details on Hover */}
          <div className="p-5 bg-white dark:bg-stone-900 rounded-lg shadow flex border border-black flex-col justify-between h-50 col-span-2">
            <div className="space-y-2 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              {selectedItem.details.map((detail, index) => (
                <div key={index} className="flex gap-2">
                  <div>
                    <selectedItem.detailicon className="text-blue-800 dark:text-blue-900 text-3xl" />
                  </div>
                  <p className="text-lg">{detail}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link href="#bookingfrom" scroll={true}>
              <button className="bg-blue-800 dark:bg-[#062068] text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 mx-auto hover:bg-blue-700 dark:hover:bg-blue-800 transition mt-5 w-60 text-lg">
                {selectedItem.button}{" "}
                <selectedItem.buttonicon className="text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
