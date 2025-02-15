"use client";

import { Bell, Check, X } from "lucide-react";
import { toast } from "react-toastify";

interface TestSetupProps {
  className?: string;
}

export function TestSetup({ className = "" }: TestSetupProps) {
  const showToast = () => {
    toast.success("Setup completed successfully!", {
      icon: <Check className="w-4 h-4 text-success-500" />,
    });
    toast.error("This is an error toast", {
      icon: <X className="w-4 h-4 text-error-500" />,
    });
  };

  return (
    <div className={`p-4 ${className}`}>
      <button
        onClick={showToast}
        className="flex items-center gap-2 px-4 py-2 text-white transition-colors rounded bg-primary-500 hover:bg-primary-600"
      >
        <Bell className="w-4 h-4" />
        <span>Test Setup</span>
      </button>
    </div>
  );
} 