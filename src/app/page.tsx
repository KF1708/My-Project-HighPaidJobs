import { AccordionDemo } from "@/components/home/AccordionDemo";
import BookingForm from "@/components/home/BookingFrom";
import Career from "@/components/home/Career";
import ComparisonSection from "@/components/home/ComparisonSection";

import DreamJob from "@/components/home/DreamJob";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import PricingPage from "@/components/home/PricingPage";
import SuccessStories from "@/components/home/SuccessStories";
import TechCareerBanner from "@/components/home/TeachCareerbanner";
import TicketToSuccess from "@/components/home/TicketToSuccess";

import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <TicketToSuccess />
      <Career />
      <DreamJob />
      <SuccessStories />
      <ComparisonSection />
      <PricingPage />
      <AccordionDemo />
      <BookingForm />
      <TechCareerBanner />
      <Footer />
    </div>
  );
};

export default page;
