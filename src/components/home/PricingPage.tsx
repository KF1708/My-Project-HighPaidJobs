"use client";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const router = useRouter();

  const handleSelectPlan = (plan: string) => {
    router.push(`/plan/${plan.toLowerCase()}`);
  };

  return (
    <div className="dark:bg-stone-800 max-w-screen-xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Unlock Your Career Freedom!
        </h1>
        <p className="dark:text-gray-300 text-xl text-black">
          Choose the assessment plan that works best for you with our flexible
          payment options
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div className="bg-card bg-gray-100 dark:bg-stone-700 dark:border-gray-500 rounded-lg p-8 border shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Plan: Starter</h2>
            <p className="text-black">Quick 30 min interview</p>
          </div>

          <div className="mb-6">
            <p className="text-sm">Starting from</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">$49.99</span>
            </div>
            <p className="text-sm text-black">One time payment</p>
          </div>
          <hr className="bg-background lg:w-[345px] md:w-[200px] mx-auto mb-1" />
          <div className="space-y-3 mb-36">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>30 Min Interview.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Provide Recording.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Interview Assessment.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Delivery: 1 to 3 days.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Receive: details report and next action plan.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>
                Provide 30 Local recruiter (small to large companies for open
                position)
              </span>
            </div>
          </div>

          <Button
            className="w-full text-lg dark:bg-[#062068] dark:hover:bg-blue-800 dark:text-white bg-blue-700 rounded-2xl h-12 hover:bg-blue-500"
            size="lg"
            onClick={() => handleSelectPlan("starter")}
          >
            Pay Now <FaAngleRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Essential Plan */}
        <div className="bg-blue-700 dark:bg-[#062068] rounded-lg p-8 border shadow-sm relative">
          <h1 className="absolute rounded text-sm h-7 w-24 p-1 dark:bg-orange-400 dark:text-white -right-2 top-16 bg-yellow-500 text-black font-medium">
            Most Popular
          </h1>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">Plan: Essential</h2>
            <p className="text-primary-foreground/80 dark:text-blue-300">
              60 min technical interview and resume assessment
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-white dark:text-blue-300">
              Starting From
            </p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-white">$99.99</span>
            </div>
            <p className="text-sm text-primary-foreground/80 dark:text-blue-300 pb-2">
              Upfront deposit, $99.99 installment for 24 months: Interest FREE
            </p>
          </div>
          <hr className="bg-background w-[345px] md:w-[200px] mx-auto mb-1" />
          <div className="space-y-3  mb-40">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5  bg-blue-500 rounded-full text-white shrink-0 mt-0.5" />
              <span className="text-white">60 min interview.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-blue-500 rounded-full text-white shrink-0 mt-0.5" />
              <span className="text-white">
                Deliver: Recording Interview, Resume Assessment and guidance!
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-blue-500 rounded-full text-white shrink-0 mt-0.5" />
              <span className="text-white">
                Receive: details report and next action plan
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-blue-500 rounded-full text-white shrink-0 mt-0.5" />
              <span className="text-white">
                50 Local recruiter (small to large companies for open position)
              </span>
            </div>
          </div>{" "}
          <Button
            className="w-full bg-white font-semibold dark:bg-stone-800 dark:hover:bg-[#062068] dark:text-white hover:bg-blue-700 hover:text-white text-blue-700 text-lg rounded-2xl"
            size="lg"
            onClick={() => handleSelectPlan("essential")}
          >
            Pay Now <ArrowRight className="ml-2 h-7 w-7" />
          </Button>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-100 dark:bg-stone-700 dark:border-gray-500 rounded-lg p-8 border shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Plan: Premium</h2>
            <p className="">
              Interview, resume and current job application assessment
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm">Starting From</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">$149.99</span>
            </div>
            <p className="text-sm ">
              Upfront deposit, $149.99 installment for 24 months: Interest FREE
            </p>
          </div>
          <hr className="bg-background w-[345px] md:w-[200px] mx-auto mb-1" />
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Duration: 2 Hours</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Recruiter Interview</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Tech Interview</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Behavior interview</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Resume Assessment</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Current job application assessment</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>Receive: details report and next action plan</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 bg-white dark:w-7 dark:text-gray-300 dark:bg-stone-800 rounded-full text-blue-600 shrink-0 mt-0.5" />
              <span>
                70 Local recruiter (small to large companies for open position)
              </span>
            </div>
          </div>{" "}
          <Button
            className="w-full bg-blue-700 dark:bg-[#062068] dark:hover:bg-blue-700 dark:text-white hover:bg-blue-500 rounded-2xl text-lg"
            size="lg"
            onClick={() => handleSelectPlan("premium")}
          >
            Pay Now <FaAngleRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
