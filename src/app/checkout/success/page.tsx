import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your interview assessment has been
          scheduled. You will receive a confirmation email shortly with further
          details.
        </p>

        <Link href="/">
          <Button className="w-full bg-[#0a2540] text-white hover:bg-[#0a2540]/90">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
