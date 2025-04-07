"use client";

import { Check } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface SuccessConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessConfirmationDialog({
  open,
  onClose,
}: SuccessConfirmationDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
            <Check className="h-8 w-8 text-white" />
          </div>
        </div>

        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="text-2xl font-bold">
            Congratulations!
          </AlertDialogTitle>
          <div className="text-xl font-medium mb-2">
            You have submitted successfully!
          </div>
          <AlertDialogDescription className="text-base">
            We&apos;ll contact you soon to confirm your 15-minute career
            auditing session.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex justify-center sm:justify-center">
          <AlertDialogAction className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg">
            Go Back
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
