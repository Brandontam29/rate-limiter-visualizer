import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const button = cva("rounded inline-block", {
  variants: {
    variant: {
      primary: [
        "bg-button-primary-background text-button-primary-text",
        "hover:bg-button-primary-background-hover hover:text-button-primary-text-hover",
      ],
      secondary: [
        "bg-button-secondary-background text-button-secondary-text",
        "hover:bg-button-secondary-background-hover hover:text-button-secondary-text-hover",
      ],
      tertiary: [
        "bg-button-tertiary-background text-button-tertiary-text",
        "hover:bg-button-tertiary-background-hover hover:text-button-tertiary-text-hover",
      ],
      warning: [
        "bg-button-warning-background text-button-warning-text",
        "hover:bg-button-warning-background-hover hover:text-button-warning-text-hover",
      ],
      error: [
        "bg-button-error-background text-button-error-text",
        "hover:bg-button-error-background-hover hover:text-button-error-text-hover",
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

const Button = ({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) => (
  <button className={button({ variant, size, className })} {...props}>
    {children}
  </button>
);

export default Button;
