"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessStories() {
  return (
    <section className="bg-[#0d1526] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wider mb-2 bg-gray-800 p-2 rounded-3xl w-28 mx-auto ">
            REAL STORIES
          </p>
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-300 mb-6">
            Hear from people who transformed their careers with our program
          </p>
          <div className="inline-flex items-center bg-[#1e2738] rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-red-500">LIVE TESTIMONIAL</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Alex P.",
              job: "Hired @ Fortune 100 – $108K",
              review: "I got two offers within 3 months!",
              video: "https://player.vimeo.com/video/1065693603?h=0c54fe674c",
              initial: "A",
            },
            {
              name: "Maria S.",
              job: "Hired @ FAANG – $130K",
              review: "They helped me to get extra $8k!",
              video: "https://player.vimeo.com/video/1065693522?h=9d231d3e62",
              initial: "M",
            },
            {
              name: "Jamal R.",
              job: "Hired @ Federal Job – $115K",
              review:
                "The interview prep was incredible, and they even helped me get the permanent offer!",
              video: "https://player.vimeo.com/video/1065693295?h=00366a3997",
              initial: "J",
            },
            {
              name: "Sarah M.",
              job: "Hired @ Tech Startup – $120K",
              review:
                "They gave me access to the 500+ active recruiters hungry for talents!",
              video: "https://player.vimeo.com/video/1065693202?h=b6bd98f94e",
              initial: "S",
            },
          ].map((story, index) => (
            <div
              key={index}
              className="bg-[#111a2f] rounded-lg overflow-hidden border-gray-800 border-2"
            >
              <div className="relative aspect-video">
                <iframe
                  src={story.video}
                  title="Testimonial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-80 rounded-lg"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">
                    {story.initial}
                  </div>
                  <div>
                    <h3 className="font-medium">{story.name}</h3>
                    <p className="text-sm text-gray-400">{story.job}</p>
                  </div>
                </div>
                <p className="text-lg font-medium mb-3">{story.review}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link scroll={true} href="#bookingfrom">
            {" "}
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-6 rounded-full">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
