"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  // Set the target date (4 days, 13 hours, 13 minutes from now as shown in the image)
  const calculateTargetDate = () => {
    const now = new Date();
    const target = new Date(now);
    target.setDate(target.getDate() + 4);
    target.setHours(target.getHours() + 13);
    target.setMinutes(target.getMinutes() + 13);
    return target;
  };

  const [targetDate] = useState(calculateTargetDate());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        // Timer has expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Calculate immediately and then set interval
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Format numbers to always have two digits
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="bg-white dark:bg-stone-800 rounded-2xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl md:text-5xl dark:text-white font-bold mb-10 text-gray-900">
        Door Closes for FREE Career Auditing
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-red-600 text-white rounded-lg p-4 w-28 h-28 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-lg">Days</div>
        </div>

        <div className="bg-red-600 text-white rounded-lg p-4 w-28 h-28 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-lg">Hours</div>
        </div>

        <div className="bg-red-600 text-white rounded-lg p-4 w-28 h-28 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-lg">Minutes</div>
        </div>

        <div className="bg-red-600 text-white rounded-lg p-4 w-28 h-28 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold ">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-lg">Seconds</div>
        </div>
      </div>
    </div>
  );
}
