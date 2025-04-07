"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { ChevronDown, Plus, CreditCard, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface PlanDetails {
  name: string;
  title: string;
  price: number;
}

const planData: Record<string, PlanDetails> = {
  starter: {
    name: "Starter",
    title: "Interview Assessment",
    price: 49.99,
  },
  essential: {
    name: "Essential",
    title: "Interview Assessment",
    price: 99.99,
  },
  premium: {
    name: "Premium",
    title: "Interview Assessment",
    price: 149.99,
  },
};

declare global {
  interface Window {
    Square: any;
  }
}

export default function CheckoutPage() {
  const [planId, setPlanId] = useState<string>("essential");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentForm, setPaymentForm] = useState<any>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Get plan and quantity from session storage
    const storedPlan = sessionStorage.getItem("checkout_plan");
    const storedQuantity = sessionStorage.getItem("checkout_quantity");

    if (storedPlan && planData[storedPlan]) {
      setPlanId(storedPlan);
    }

    if (storedQuantity) {
      setQuantity(Number.parseInt(storedQuantity, 10));
    }

    // Load the Square Web Payments SDK
    const script = document.createElement("script");
    script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
    script.onload = initializePaymentForm;
    document.body.appendChild(script);

    return () => {
      if (paymentForm?.card) {
        paymentForm.card.destroy();
      }
    };
  }, []);

  const plan = planData[planId];
  const subtotal = plan ? (plan.price * quantity).toFixed(2) : "0.00";
  const orderTotal = subtotal;

  const initializePaymentForm = async () => {
    if (!window.Square) {
      console.error("Square SDK failed to load");
      return;
    }

    try {
      const payments = window.Square.payments(
        process.env.NEXT_PUBLIC_SQUARE_APP_ID,
        process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID
      );

      // Initialize Card payment method
      const card = await payments.card();
      await card.attach("#card-container");

      // Initialize Google Pay
      let googlePay;
      try {
        googlePay = await payments.googlePay({
          merchantId: process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID,
        });
        await googlePay.attach("#google-pay-button");
      } catch (e) {
        console.warn("Google Pay failed to initialize:", e);
      }

      // Initialize Cash App Pay
      let cashApp;
      try {
        cashApp = await payments.cashAppPay({
          redirectURL: `${window.location.origin}/checkout/success`,
        });
        await cashApp.attach("#cash-app-button");
      } catch (e) {
        console.warn("Cash App Pay failed to initialize:", e);
      }

      // Initialize Afterpay
      let afterpay;
      try {
        afterpay = await payments.afterpayClearpay({
          amount: Number.parseFloat(subtotal),
          currency: "USD",
        });
        await afterpay.attach("#afterpay-button");
      } catch (e) {
        console.warn("Afterpay failed to initialize:", e);
      }

      setPaymentForm({
        card,
        googlePay,
        cashApp,
        afterpay,
        async tokenize(method: string) {
          let result;
          switch (method) {
            case "card":
              result = await card.tokenize();
              break;
            case "googlePay":
              result = await googlePay.tokenize();
              break;
            case "cashApp":
              result = await cashApp.tokenize();
              break;
            case "afterpay":
              result = await afterpay.tokenize();
              break;
            default:
              throw new Error("Unsupported payment method");
          }

          if (result.status === "OK") {
            return result.token;
          }
          throw new Error(
            result.errors?.[0]?.message || "Payment tokenization failed"
          );
        },
      });
    } catch (error) {
      console.error("Failed to initialize Square payment form:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentForm) {
      alert("Payment form is not initialized yet. Please try again.");
      return;
    }

    try {
      setIsLoading(true);

      // Get form data
      const formData = new FormData(e.target as HTMLFormElement);
      const contactInfo = {
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        address: formData.get("address") as string,
        apt: (formData.get("apt") as string) || "",
        country: formData.get("country") as string,
      };

      // Get a payment token from the payment form
      const token = await paymentForm.tokenize(selectedPaymentMethod);

      // Send the token to your server to create the payment
      const response = await fetch("/api/square/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sourceId: token,
          amount: Number.parseFloat(subtotal),
          quantity,
          planId,
          contactInfo,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to process payment");
      }

      // Redirect to success page
      router.push("/checkout/success");
    } catch (error) {
      console.error("Payment error:", error);
      alert("There was an error processing your payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!plan) {
    return null;
  }

  return (
    <div className="min-h-screen  bg-gray-50">
      <header className="border-b bg-white dark:border-b-gray-200 py-4 text-center">
        <h1 className="text-xl font-semibold dark:text-black">
          TS4U IT Engineering Bootcamp
        </h1>
      </header>

      <main className="mx-auto max-w-lg p-4">
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 dark:text-black">Checkout</h2>

          {/* Order Summary */}
          <div className="border-b pb-4">
            <button
              className="w-full flex justify-between items-center"
              onClick={() => setOrderSummaryOpen(!orderSummaryOpen)}
            >
              <h3 className="dark:text-black font-semibold text-sm uppercase">
                Order Summary (1 item)
              </h3>
              <ChevronDown
                className={`h-5 w-5 transition-transform dark:text-black ${
                  orderSummaryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {orderSummaryOpen && (
              <div className="mt-4 pl-4 dark:text-black">
                <p className="text-sm dark:text-black">
                  {plan.name}: {plan.title}
                </p>
              </div>
            )}
          </div>

          <div className="py-4 border-b">
            <div className="flex justify-between mb-2">
              <p className="text-sm dark:text-black">Subtotal</p>
              <p className="text-sm dark:text-black">${subtotal}</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p className="dark:text-black">Order total</p>
              <p className="dark:text-black">${orderTotal}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Express Checkout */}
            <div className="py-4 border-b">
              <h3 className="font-semibold text-sm uppercase mb-4 dark:text-black">
                Express Checkout
              </h3>
              <div
                id="google-pay-button"
                className="h-12 w-full dark:text-black"
              ></div>
            </div>

            {/* Contact Information */}
            <div className="py-4 border-b">
              <h3 className="font-semibold text-sm uppercase mb-4 dark:text-black">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <select className="w-full h-10 px-3 border border-gray-300 rounded-md">
                      <option>+1 United States</option>
                      <option>+44 United Kingdom</option>
                      <option>+91 India</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <Input name="phone" placeholder="Phone number" required />
                  </div>
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address for receipt"
                  required
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="py-4 border-b">
              <h3 className="font-semibold text-sm uppercase mb-4">
                Shipping Address
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Input name="firstName" placeholder="First name" required />
                  <Input name="lastName" placeholder="Last name" required />
                </div>
                <select
                  name="country"
                  className="w-full h-10 px-3 border border-gray-300 rounded-md"
                  defaultValue="United States"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
                <Input
                  name="address"
                  placeholder="Enter your address here."
                  required
                />
                <div className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  <Input name="apt" placeholder="Apt, Suite, Floor, etc." />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="py-4">
              <div className="flex items-center mb-2">
                <h3 className="font-semibold text-sm uppercase dark:text-black">
                  Payment
                </h3>
                <Lock className="h-4 w-4 ml-2 text-gray-400" />
              </div>
              <p className="text-xs dark:text-black text-gray-500 mb-4">
                All transactions are secure and encrypted
              </p>

              {/* Credit Card */}
              <div
                className={`border rounded-md mb-2 overflow-hidden ${
                  selectedPaymentMethod === "card" ? "border-black" : ""
                }`}
                onClick={() => setSelectedPaymentMethod("card")}
              >
                <div className="p-4 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 dark:text-black" />
                    <span className="dark:text-black">Credit Card</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                    {selectedPaymentMethod === "card" && (
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    )}
                  </div>
                </div>
                {selectedPaymentMethod === "card" && (
                  <div className="px-4 pb-4">
                    <div id="card-container" className="min-h-[100px]"></div>
                  </div>
                )}
              </div>

              {/* Cash App Pay */}
              <div
                className={`border rounded-md mb-2 overflow-hidden ${
                  selectedPaymentMethod === "cashApp" ? "border-black" : ""
                }`}
                onClick={() => setSelectedPaymentMethod("cashApp")}
              >
                <div className="p-4 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center text-white mr-2">
                      $
                    </div>
                    <span className="dark:text-black">Cash App Pay</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                    {selectedPaymentMethod === "cashApp" && (
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    )}
                  </div>
                </div>
                {selectedPaymentMethod === "cashApp" && (
                  <div className="px-4 pb-4">
                    <div id="cash-app-button" className="min-h-[50px]"></div>
                  </div>
                )}
              </div>

              {/* Afterpay */}
              <div
                className={`border rounded-md mb-4 overflow-hidden ${
                  selectedPaymentMethod === "afterpay" ? "border-black" : ""
                }`}
                onClick={() => setSelectedPaymentMethod("afterpay")}
              >
                <div className="p-4 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <span className="mr-2 dark:text-black">Afterpay</span>
                    <span className="text-xs text-gray-500">
                      4 interest-free installments of $25.00
                    </span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                    {selectedPaymentMethod === "afterpay" && (
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    )}
                  </div>
                </div>
                {selectedPaymentMethod === "afterpay" && (
                  <div className="px-4 pb-4">
                    <div id="afterpay-button" className="min-h-[50px]"></div>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0a2540] py-6 text-white hover:bg-[#0a2540]/90"
                disabled={isLoading || !paymentForm}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay $${orderTotal}`
                )}
              </Button>
            </div>
          </form>

          <div className="mt-8 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 mb-2">
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
              <p className="text-xs text-gray-500">Secure payment by Square</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
