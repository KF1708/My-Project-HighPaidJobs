"use client";

import { useState, useEffect } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

interface PlanDetails {
  name: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  recruiters: number;
}

const planData: Record<string, PlanDetails> = {
  starter: {
    name: "Starter",
    title: "Interview Assessment",
    price: 49.99,
    description: "Quick 30 min interview",
    features: [
      "30 Min Interview.",
      "Provide Recording.",
      "Interview Assessment.",
      "Delivery: 1 to 3 days.",
      "Receive: details report and next action plan.",
    ],
    recruiters: 30,
  },
  essential: {
    name: "Essential",
    title: "Interview Assessment",
    price: 99.99,
    description: "60 min technical interview and resume assessment",
    features: [
      "60 min interview.",
      "Deliver: Recording Interview, Resume Assessment and guidance!",
      "Receive: details report and next action plan",
    ],
    recruiters: 50,
  },
  premium: {
    name: "Premium",
    title: "Interview Assessment",
    price: 149.99,
    description: "Interview, resume and current job application assessment",
    features: [
      "Duration: 2 Hours",
      "Recruiter Interview",
      "Tech Interview",
      "Behavior interview",
      "Resume Assessment",
      "Current job application assessment",
      "Receive: details report and next action plan",
    ],
    recruiters: 70,
  },
};

export default function PlanPage() {
  const params = useParams();
  const planId = params.planId as string;
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const plan = planData[planId];

  // If plan doesn't exist, redirect to home
  useEffect(() => {
    if (!plan) {
      router.push("/");
    }
  }, [plan, router]);

  if (!plan) {
    return null;
  }

  const subtotal = (plan.price * quantity).toFixed(2);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleCheckout = async () => {
    try {
      setIsLoading(true);

      // Store the plan and quantity in session storage to retrieve it on the checkout page
      sessionStorage.setItem("checkout_plan", planId);
      sessionStorage.setItem("checkout_quantity", quantity.toString());

      // Redirect to checkout page
      router.push("/checkout");
    } catch (error) {
      console.error("Navigation error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white dark:border-b-gray-200  py-4 text-center">
        <h1 className="text-xl font-semibold dark:text-black">
          TS4U IT Engineering Bootcamp
        </h1>
      </header>

      <main className="mx-auto max-w-3xl p-4">
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold dark:text-black">
            {plan.name}: {plan.title}
          </h2>

          <div className="mt-4">
            <p className="text-3xl font-bold dark:text-black">${plan.price}</p>
            <p className="mt-1 text-gray-600 dark:text-black">
              Starting From ${plan.price}
            </p>
            {planId !== "starter" && (
              <p className="text-sm dark:text-black text-gray-600">
                Upfront deposit. ${plan.price} installment for 24 months:
                Interest FREE
              </p>
            )}
            {planId === "starter" && (
              <p className="text-sm text-gray-600 dark:text-black">
                One time payment
              </p>
            )}
          </div>

          <div className="mt-8 space-y-3">
            <ol className="list-decimal space-y-2 pl-5 dark:text-black">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ol>
            <p className="pl-5 dark:text-black">
              Provide {plan.recruiters} Local recruiter (small to large
              companies for open position)
            </p>
          </div>

          <Separator className="my-8" />

          <div className="flex items-center">
            <button
              className="dark:text-black flex h-10 w-10 items-center justify-center rounded-l-md border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              <MinusIcon className="h-4 w-4 dark:text-black" />
            </button>
            <div className="flex dark:text-black h-10 w-12 items-center justify-center border-y">
              {quantity}
            </div>
            <button
              className="flex dark:text-black h-10 w-10 items-center justify-center rounded-r-md border bg-gray-100 hover:bg-gray-200"
              onClick={increaseQuantity}
            >
              <PlusIcon className="h-4 w-4 dark:text-black" />
            </button>
          </div>

          <div className="mt-6 flex justify-between">
            <div>
              <p className="font-semibold dark:text-black">Subtotal</p>
              <p className="text-sm text-gray-500">
                Total will be calculated at checkout
              </p>
            </div>
            <p className="font-semibold dark:text-black">${subtotal}</p>
          </div>

          <Button
            className="mt-6 w-full bg-[#0a2540] py-6 text-white hover:bg-[#0a2540]/90"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Checkout"}
          </Button>

          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="h-6 w-6">
              <svg
                data-v-23ba9144
                data-v-41298cea
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sqlogo shadow-gray-950"
              >
                …
                <path
                  data-v-23ba9144
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M.5 4.545c0-.703 0-1.055.047-1.35A3.788 3.788 0 0 1 3.695.047C3.99 0 4.342 0 5.045 0h10.91c.703 0 1.055 0 1.35.047a3.788 3.788 0 0 1 3.148 3.148c.047.295.047.647.047 1.35v10.91c0 .703 0 1.055-.047 1.35a3.788 3.788 0 0 1-3.148 3.148c-.295.047-.647.047-1.35.047H5.044c-.703 0-1.055 0-1.35-.047a3.788 3.788 0 0 1-3.148-3.148C.5 16.51.5 16.158.5 15.455V4.544Zm4 .532C4.5 4.482 4.982 4 5.577 4h9.847c.594 0 1.076.482 1.076 1.077v9.846c0 .595-.482 1.077-1.076 1.077H5.577A1.077 1.077 0 0 1 4.5 14.923V5.077Zm3.305 2.65c-.032.099-.032.221-.032.466v3.614c0 .245 0 .367.032.466.065.2.222.357.422.422.099.032.221.032.466.032h3.614c.245 0 .367 0 .466-.032a.657.657 0 0 0 .422-.422c.032-.099.032-.221.032-.466V8.193c0-.245 0-.367-.032-.466a.657.657 0 0 0-.422-.422c-.099-.032-.221-.032-.466-.032H8.693c-.245 0-.367 0-.466.032a.657.657 0 0 0-.422.422Z"
                  fill="#000"
                ></path>
              </svg>
            </div>
            <p className="text-sm text-gray-500">Secure payment by Square</p>
          </div>
        </div>
      </main>
    </div>
  );
}
