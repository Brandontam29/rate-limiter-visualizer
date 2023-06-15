import { type VariantProps, cva } from "class-variance-authority";

const heading = cva("font-bold", {
  variants: {
    variant: {
      error: ["text-error-text"],
      success: ["text-success-text"],
      warning: ["text-warning-text"],
      text: ["text-text-body"],
    },
    size: {
      "size-2xl": ["text-2xl", "mb-2"],
      "size-lg": ["text-lg", "mb-2"],
      "size-base": ["text-base", "mb-1"],
      "size-sm": ["text-sm", "mb-1"],
    },
  },
  compoundVariants: [
    {
      variant: "text",
      size: "size-2xl",
      className: "text-yellow-500",
    },
    {
      variant: "text",
      size: "size-lg",
      className: "text-cyan-500",
    },
  ],

  defaultVariants: {
    size: "size-base",
  },
});

export type HeadingProps = {
  tag: "h1" | "h2" | "h3";
  variant: "error" | "success" | "warning" | "text";
  children: string | string[];
} & VariantProps<typeof heading> &
  React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({ tag, size, variant, children, ...props }: HeadingProps) => {
  const HeadingTag = tag;

  return (
    <HeadingTag className={heading({ size, variant })} {...props}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
