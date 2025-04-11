"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DateTimePicker from "./DateTimePicker";
import Link from "next/link";

export default function BookingForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dateTime: "",
    employed: "",
    jobSwitch: "",
  });

  // Validation state
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    dateTime: "",
    employed: "",
    jobSwitch: "",
  });

  // Touched state to show validation only after user interaction
  const [touched, setTouched] = useState({
    name: false,
    mobile: false,
    email: false,
    dateTime: false,
    employed: false,
    jobSwitch: false,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Handle date time changes
  const handleDateTimeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, dateTime: value }));
    validateField("dateTime", value);
  };

  // Handle date time blur
  // const handleDateTimeBlur = () => {
  //   setTouched((prev) => ({ ...prev, dateTime: true }));
  // };

  // Handle radio button changes
  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Handle blur events to mark fields as touched
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  // Validate individual fields
  const validateField = (name: string, value: string) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        if (value.length < 2) {
          errorMessage = "Name must be at least 2 characters.";
        }
        break;
      case "mobile":
        if (!/^\d{10,15}$/.test(value)) {
          errorMessage = "Please enter a valid mobile number.";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMessage = "Please enter a valid email address.";
        }
        break;
      case "dateTime":
        if (!value) {
          errorMessage = "Please select a date and time for the meeting.";
        }
        break;
      case "employed":
        if (!value) {
          errorMessage = "Please select if you are currently employed.";
        }
        break;
      case "jobSwitch":
        if (!value) {
          errorMessage = "Please select if you are looking for a job switch.";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    return errorMessage === "";
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(touched).reduce((acc, key) => {
      return { ...acc, [key]: true };
    }, {});
    setTouched(allTouched as typeof touched);

    // Validate all fields
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      const field = key as keyof typeof formData;
      const valid = validateField(field, formData[field]);
      if (!valid) isValid = false;
    });

    if (
      formData.name &&
      formData.mobile &&
      formData.email &&
      formData.dateTime
    ) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div
      id="bookingfrom"
      className="bg-gray-100 dark:bg-black p-5 max-w-7xl mx-auto"
    >
      <div className="bg-gray-50 dark:bg-stone-900 rounded-2xl border shadow-lg p-5 pb-8">
        <h1 className="text-3xl font-bold mb-2">
          Book a FREE Career Consultation
        </h1>
        <p className="text-gray-600 mb-8">
          Please fill out the form below to schedule a 15-minute career auditing
          session
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="p-6"
              />
              {touched.name && errors.name && (
                <p className="text-sm text-amber-600">{errors.name}</p>
              )}
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-base font-medium">
                Mobile <span className="text-red-500">*</span>
              </Label>
              <Input
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className="p-6"
              />
              {touched.mobile && errors.mobile && (
                <p className="text-sm text-amber-600">{errors.mobile}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-6"
            />
            {touched.email && errors.email && (
              <p className="text-sm text-amber-600">{errors.email}</p>
            )}
          </div>

          {/* Date Time Field */}
          <div className="space-y-2">
            <Label htmlFor="dateTime" className="text-base font-medium">
              What is the best time for a 15-minute career auditing session?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <div className="w-[200px]">
              {" "}
              <DateTimePicker
                value={formData.dateTime}
                onChange={handleDateTimeChange}

                //      onBlur={handleDateTimeBlur}
              />
            </div>
            <p className="text-sm text-gray-500">
              Select your preferred date and time for the meeting.
            </p>
            {touched.dateTime && errors.dateTime && (
              <p className="text-sm text-amber-600">{errors.dateTime}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employment Status */}
            <div className="space-y-2">
              <Label className="text-base font-medium">
                Are you currently employed?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.employed}
                onValueChange={(value) => handleRadioChange("employed", value)}
                className="flex flex-col space-y-2 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="employed-yes" />
                  <Label htmlFor="employed-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="employed-no" />
                  <Label htmlFor="employed-no">No</Label>
                </div>
              </RadioGroup>
              {touched.employed && errors.employed && (
                <p className="text-sm text-amber-600">{errors.employed}</p>
              )}
            </div>

            {/* Job Switch */}
            <div className="space-y-2">
              <Label className="text-base font-medium">
                Are you looking for job switch?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.jobSwitch}
                onValueChange={(value) => handleRadioChange("jobSwitch", value)}
                className="flex flex-col space-y-2 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="jobSwitch-yes" />
                  <Label htmlFor="jobSwitch-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="jobSwitch-no" />
                  <Label htmlFor="jobSwitch-no">No</Label>
                </div>
              </RadioGroup>
              {touched.jobSwitch && errors.jobSwitch && (
                <p className="text-sm text-amber-600">{errors.jobSwitch}</p>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-8 py-5">
            <Link href={"/submit"}>
              <Button
                type="submit"
                className="bg-blue-800 dark:bg-[#062068] dark:hover:bg-blue-700 hover:bg-blue-700 text-white px-8 py-5 text-lg rounded-md"
              >
                Submit
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
