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
  disabled = false,
  ...rest
}: ButtonProps) {
  // Base styles (cursor handled separately for disabled state)
  const defaultClassName =
    variant === "primary"
      ? "bg-[#1877F2] text-white rounded-lg px-4 py-2 text-[16px] font-semibold text-sm sm:text-base md:text-lg transition-colors hover:bg-blue-700 hover:border-blue-700 active:scale-95 touch-manipulation"
      : "bg-[#E4E6EB] text-[#050505] rounded-lg px-4 py-2 text-[16px] font-semibold text-sm sm:text-base md:text-lg transition-colors hover:bg-gray-200 active:scale-95 touch-manipulation";

  const cursorClass = disabled
    ? "cursor-not-allowed opacity-60"
    : "cursor-pointer";

  const combined = `${defaultClassName} ${cursorClass} ${className}`.trim();

  return (
    <button className={combined} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
