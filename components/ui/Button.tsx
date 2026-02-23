"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...rest
}: ButtonProps) {
  // Default styles that will be overridden by className
  const defaultClassName =
    variant === "primary"
      ? "px-3 sm:px-5 py-1.5 sm:py-2 rounded-md border border-blue-600 bg-blue-600 text-white cursor-pointer font-semibold text-xs sm:text-sm transition-colors hover:bg-blue-700 hover:border-blue-700 active:scale-95 touch-manipulation"
      : "px-3 sm:px-5 py-1.5 sm:py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-900 cursor-pointer font-semibold text-xs sm:text-sm transition-colors hover:bg-gray-200 active:scale-95 touch-manipulation";

  return (
    <button className={`${defaultClassName} ${className}`} {...rest}>
      {children}
    </button>
  );
}
