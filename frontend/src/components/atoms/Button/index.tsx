import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const button = cva("rounded inline-block", {
  variants: {
    variant: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

const Button = ({ className, variant, size, ...props }: ButtonProps) => (
  <button className={button({ variant, size, className })} {...props} />
);

export default Button;
