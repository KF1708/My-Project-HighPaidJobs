import React from "react";
import logo2 from "../../../public/images/logo/logo2.webp";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Star, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 dark:bg-[#021750]">
      <div className=" px-3 relative max-w-screen-xl mx-auto">
        <div className=" max-w-7xl mx-auto py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-2 md:col-span-1 ">
            <Image
              src={logo2}
              alt="logo image"
              className="h-[120px] w-[150px]"
            />
            <h1 className="text-blue-200 p-2 font-bold">Reach the Top 1%</h1>
            <div className="hidden relative w-24 h-24">
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full"></div>
              <div className="absolute inset-2 border-2 border-blue-500/10 rounded-full"></div>
              <div className="absolute inset-4 border-2 border-blue-500/5 rounded-full"></div>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 pt-2">
              <li className="pb-1">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors "
                >
                  About Us
                </Link>
              </li>
              <li className="pb-1">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Term and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <p className="mb-3 text-white">highpaidjobs.us@gmail.com</p>
            <p className="mb-6 text-white">
              WhatsApp: <a href="tel:+1 586-665-3331">+1 586-665-3331</a>
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/highpaidjobs.us"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://x.com/i/flow/login?redirect_after_login=%2FHighpaidjobs1"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/highpaidjobs_us/"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/high-paid-jobs/"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
          <div className="absolute top-4 right-4 md:top-8 md:right-5">
            <Star className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-2 py-3">
          <div className=" mx-auto px-4">
            <p className="text-center text-gray-400">
              © 2025 All rights reserved by HighPaidJobs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
