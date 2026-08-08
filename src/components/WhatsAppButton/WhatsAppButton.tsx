"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "923289496310";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="group fixed bottom-6 right-6 z-50">

      {/* Tooltip */}

      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
        Chat with us
      </span>

      {/* Button */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

    </div>
  );
}