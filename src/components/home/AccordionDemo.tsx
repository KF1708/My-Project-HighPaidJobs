import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";
import Link from "next/link";

export function AccordionDemo() {
  return (
    <div className="bg-gray-100 dark:bg-stone-900 p-6 pb-8 max-w-7xl mx-auto">
      <h1 className="lg:text-5xl text-3xl dark:text-white text-center font-bold text-gray-900 mb-4">
        Got Questions? We&apos;ve Got Answers
      </h1>
      <p className="text-gray-900 dark:text-gray-500 text-center text-lg">
        Find answers to our most frequently asked questions
      </p>
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem className="dark:bg-black" value="item-1">
          <AccordionTrigger>How fast can I get a job?</AccordionTrigger>
          <AccordionContent>
            Job placement only: 8 weeks. Boot camp + placement: 10-12 weeks of
            training + 4-6 weeks to an offer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="dark:bg-black" value="item-2">
          <AccordionTrigger>What if I don&apos;t hired?</AccordionTrigger>
          <AccordionContent>
            We offer ongoing support and resources until you secure employment.
            Our program includes career coaching and job placement assistance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="dark:bg-black" value="item-3">
          <AccordionTrigger>Can I work remotly?</AccordionTrigger>
          <AccordionContent>
            Yes, many of our graduates secure remote positions. We prepare you
            for both remote and in-office opportunities based on your
            preferences.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="dark:bg-black" value="item-4">
          <AccordionTrigger>Who is this program for?</AccordionTrigger>
          <AccordionContent>
            Our program is designed for motivated individuals looking to start
            or advance their career in technology, regardless of prior
            experience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="dark:bg-black" value="item-5">
          <AccordionTrigger>Do I need prior experience?</AccordionTrigger>
          <AccordionContent>
            No prior experience is required. Our curriculum is designed to take
            you from beginner to job-ready, with personalized support along the
            way.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="dark:bg-black" value="item-6">
          <AccordionTrigger>
            What companies hire your graduates?
          </AccordionTrigger>
          <AccordionContent>
            Our graduates have been hired by a wide range of companies, from
            startups to Fortune 500 corporations across various industries.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="mt-10 pb-10 text-center">
        <h3 className="text-lg text-gray-900 mb-6 dark:text-gray-300">
          Have more questions? Ask us during your FREE consultation!
        </h3>
        <Link href="#bookingfrom" scroll={true}>
          {" "}
          <Button className="bg-blue-700 dark:bg-[#062068] dark:hover:bg-blue-800 hover:bg-blue-800 text-white font-medium px-6 py-6 rounded-3xl text-base">
            Book Free Consultation <ChevronRight className="ml-2 w-3 h-3" />
          </Button>
        </Link>
      </div>
      <CountdownTimer />
    </div>
  );
}
