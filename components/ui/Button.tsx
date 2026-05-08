"use client";

import * as React from "react";
import { Button as ShadcnButton, buttonVariants } from "./button-shadcn";
import { type VariantProps } from "class-variance-authority";

type LegacyVariant = "primary" | "secondary";

type ShadcnVariant = VariantProps<typeof buttonVariants>["variant"];

type ButtonVariant = LegacyVariant | ShadcnVariant;

export interface ButtonProps
  extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: VariantProps<typeof buttonVariants>["size"];
  asChild?: boolean;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "default",
  asChild = false,
  ...rest
}: ButtonProps) {
  const mappedVariant =
    variant === "primary"
      ? "default"
      : variant === "secondary"
      ? "secondary"
      : variant;

  return (
    <ShadcnButton
      variant={mappedVariant}
      size={size}
      asChild={asChild}
      className={className}
      {...rest}
    >
      {children}
    </ShadcnButton>
  );
}
