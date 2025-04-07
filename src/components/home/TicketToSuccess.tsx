"use client";
import React from "react";
import t1 from "../../../public/images/ticket/t-1.png";
import t2 from "../../../public/images/ticket/t-2.png";
import t3 from "../../../public/images/ticket/t-3.png";
import t4 from "../../../public/images/ticket/t-4.png";
import t5 from "../../../public/images/ticket/t-5.png";
import t6 from "../../../public/images/ticket/t-6.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const TicketToSuccess = () => {
  return (
    <div className="bg-slate-100 dark:bg-black py-5">
      <div className=" px-3 max-w-screen-xl mx-auto">
        <h1 className="text-center text-xl font-bold lg:text-6xl md:text-4xl py-8 sm:text-2xl">
          Why High Paid Jobs is your <br /> ticket to success
        </h1>
        <h1 className="pb-5 lg:text-xl text-gray-600 dark:text-gray-300 text-lg text-center">
          We share our special tools and techniques, and coach you one-on-one
          <br />
          from the beginning to the placement with higher raise.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-10 mx-2 md:mx-auto">
          <div className="max-w-[377px] bg-white dark:bg-stone-900 p-2 md:px-[44px] md:py-[30px] rounded-lg shadow flex flex-col items-center text-center">
            <div className="mb-2 md:mb-6">
              {" "}
              <Image src={t1} alt="Ticket image" className="h-16 w-16 " />
            </div>
            <h1 className="text-2xl font-semibold pb-4">
              99.99% Guaranteed Job Placement
            </h1>
            <h1 className="px-2 text-gray-700 dark:text-gray-400">
              Land a $100k+ job in 8-16 weeks—or we keep working until you do
            </h1>
          </div>
          <div className="max-w-[377px] bg-white dark:bg-stone-900 p-2 md:px-[44px] md:py-[30px] rounded-lg shadow flex flex-col items-center text-center">
            <div className="mb-2 md:mb-6">
              {" "}
              <Image src={t2} alt="Ticket image" className="h-16 w-16 " />
            </div>
            <h1 className="text-2xl font-semibold pb-4">
              AI & Recession-Proof <br /> Careers
            </h1>
            <h1 className="px-2 text-gray-700 dark:text-gray-400">
              Future-ready roles that thrive no matter the economy.
            </h1>
          </div>
          <div className="max-w-[377px] bg-white dark:bg-stone-900 p-2 md:px-[44px] md:py-[30px] rounded-lg shadow flex flex-col items-center text-center">
            <div className="mb-2 md:mb-6">
              {" "}
              <Image src={t3} alt="Ticket image" className="h-16 w-16 " />
            </div>
            <h1 className="text-2xl font-semibold pb-4">
              Live Interview <br /> Assistance
            </h1>
            <h1 className="px-2 text-gray-700 dark:text-gray-400">
              Our experts join your interviews to help you shine.
            </h1>
          </div>
          <div className="max-w-[377px] bg-white dark:bg-stone-900 p-2 md:px-[44px] md:py-[30px] rounded-lg shadow flex flex-col items-center text-center">
            <div className="mb-2 md:mb-6">
              {" "}
              <Image src={t4} alt="Ticket image" className="h-16 w-16 " />
            </div>
            <h1 className="text-2xl font-semibold pb-4">
              One-on-One Mentoring
            </h1>
            <h1 className="px-2 text-gray-700 dark:text-gray-400">
              Personalized guidance tailored to your goals.
            </h1>
          </div>
          <div className="max-w-[377px] bg-white dark:bg-stone-900 p-2 md:px-[44px] md:py-[30px] rounded-lg shadow flex flex-col items-center text-center">
            <div className="mb-2 md:mb-6">
              {" "}
              <Image src={t5} alt="Ticket image" className="h-16 w-16 " />
            </div>
            <h1 className="text-2xl font-semibold pb-4">
              Salary Negotiation <br /> Boost
            </h1>
            <h1 className="px-2 text-gray-700 dark:text-gray-400">
              Secure an extra $5k-$10k on your offer—guaranteed.
            </h1>
          </div>
          <div className="max-w-[377px] bg-white dark:bg-stone-900 p-2 md:px-[44px] md:py-[30px] rounded-lg shadow flex flex-col items-center text-center">
            <div className="mb-2 md:mb-6">
              {" "}
              <Image src={t6} alt="Ticket image" className="h-16 w-16 " />
            </div>
            <h1 className="text-2xl font-semibold pb-4">
              Probation Period <br /> Support
            </h1>
            <h1 className="px-2 text-gray-700 dark:text-gray-400">
              We&apos;re with you for your first 3-6 months on the job.
            </h1>
          </div>
        </div>
        <div className=" flex justify-center pb-5">
          {" "}
          <Link scroll={true} href="#bookingfrom">
            {" "}
            <button className="flex bg-blue-700 dark:bg-[#062068] h-10 rounded-3xl lg:text-lg text-base-lg text-white cursor-pointer font-semibold hover:bg-blue-600 dark:hover:bg-blue-800 items-center mt-3 px-4">
              Book Free Consultation{" "}
              <FaAngleRight className="lg:text-lg text-base ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketToSuccess;
