"use client";

import React from "react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

interface EmergencyContactProps {
  phoneNumber?: string;
  label?: string;
}

const EmergencyContact = ({
  phoneNumber = "(11) 99999-9999",
  label = "Emergency Contact",
}: EmergencyContactProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/[^0-9]/g, "")}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-red-600 text-white rounded-lg shadow-lg p-4 flex flex-col items-center animate-pulse hover:animate-none transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-2 mb-1">
        <Phone className="h-5 w-5" />
        <span className="font-bold">{label}</span>
      </div>
      <span className="text-lg font-bold mb-2">{phoneNumber}</span>
      <Button
        variant="outline"
        size="sm"
        className="bg-white text-red-600 hover:bg-gray-100 border-none w-full"
        onClick={handleCall}
      >
        Call Now
      </Button>
    </div>
  );
};

export default EmergencyContact;
