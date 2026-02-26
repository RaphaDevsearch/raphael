"use client";

import React from "react";

interface PopupProps {
  children: React.ReactNode;
  className?: string;
}

export default function Popup({ children, className = "" }: PopupProps) {
  return (
    <div
      className={`absolute right-0 mt-2 w-[280px] bg-white rounded-lg shadow-lg border border-gray-100 p-4 z-50 ${className}`}
      role="dialog"
    >
      {children}
    </div>
  );
}
