import { Check, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import t1 from "../../../public/images/ticket/t-1.png";
import t2 from "../../../public/images/ticket/t-2.png";
import t3 from "../../../public/images/ticket/t-3.png";
import t4 from "../../../public/images/ticket/t-4.png";
import t5 from "../../../public/images/ticket/t-5.png";
import t6 from "../../../public/images/ticket/t-6.png";
import Link from "next/link";

export default function ComparisonSection() {
  const features = [
    {
      image: t1,
      title: "Guaranteed Job Placement",
      description:
        "We guarantee you'll get hired or we keep working with you for free",
      highlight: "99.99% success rate within 8-16 weeks",
    },
    {
      image: t2,
      title: "Hyper Personalized Coaching",
      description: "One-on-one instruction tailored to your learning style",
      highlight: "Dedicated mentor throughout your journey",
    },
    {
      image: t3,
      title: "Interview Support",
      description: "Expert guidance during the entire interview process",
      highlight: "We join your interviews to help you succeed",
    },
    {
      image: t4,
      title: "Post-Hire Support",
      description: "Continued assistance after you land your job",
      highlight:
        "Full support during probation period to help your job sustain",
    },
    {
      image: t5,
      title: "Decided Salary Renegotiation",
      description: "Expert techniques to maximize your compensation",
      highlight: "Average $5-10k increase in offers",
    },
    {
      image: t6,
      title: "100% Money-Back Guarantee",
      description: "15 day money back guarantee, a risk-free investment!",
      highlight: "15-day unconditional guarantee",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-stone-950 py-16 px-3">
      <div className="relative max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl text-2xl font-bold dark:text-white text-gray-900 mb-4">
            Why Choose Us Over Others?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            See how our program delivers results where others fall short
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-stone-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-900"
            >
              <div className="mb-4 ">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={56}
                  height={64}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2 ">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm w-56 ">
                {feature.description}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="bg-gray-50 dark:bg-black p-3 rounded flex flex-col items-center">
                  <span className="text-sm font-medium mb-2">HighPaidJobs</span>
                  <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-[#062068] flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-black p-3 rounded flex flex-col items-center">
                  <span className="text-sm font-medium mb-2">Others</span>
                  <div className="w-8 h-8 rounded-full bg-red-500 dark:bg-red-600 flex items-center justify-center">
                    <X className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <hr className="bg-background lg:w-[340px] md:w-[200px] mx-auto mb-3 dark:border-gray-700" />

              <div className="bg-blue-50 dark:bg-stone-600 dark:text-gray-300 text-blue-700 p-3 rounded text-sm font-medium ">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold dark:text-gray-300 text-gray-900 mb-6">
            Ready to experience the HighPaidJobs difference?
          </h3>
          <Link href="#bookingfrom" scroll={true}>
            {" "}
            <Button className="bg-blue-700 dark:bg-[#062068] dark:hover:bg-blue-800 hover:bg-blue-800 text-white font-medium px-6 py-6 rounded-3xl text-lg">
              Book Free Consultation <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
