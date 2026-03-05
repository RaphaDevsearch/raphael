"use client";

import React from "react";

interface PopupProps {
  children: React.ReactNode;
  className?: string;
}

export default function Popup({ children, className = "" }: PopupProps) {
  return (
    <div
      className={`
        absolute
        right-0
        mt-2
        
        w-[92vw]
        sm:w-[420px]
        md:w-[480px]
        lg:w-[520px]

        max-w-[95vw]

        bg-white
        rounded-xl
        shadow-lg
        border border-[#E4E6EB]

        p-4 sm:p-5 md:p-6

        z-50
        ${className}
      `}
      role="dialog"
    >
      {children}
    </div>
  );
}
