import { type VariantProps, cva } from "class-variance-authority";

const heading = cva("font-bold", {
  variants: {
    size: {
      "size-2xl": ["text-2xl", "text-yellow-500"],
      "size-lg": ["text-lg", "text-cyan-500"],
      "size-base": ["text-base", "text-gray-950"],
      "size-sm": ["text-sm", "text-gray-950"],
    },
  },

  defaultVariants: {
    size: "size-base",
  },
});

export interface HeadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heading> {
  tag: "h1" | "h2" | "h3";
  children: string | string[];
}

const Heading = ({ tag, size, children }: HeadingProps) => {
  const HeadingTag = tag;

  return <HeadingTag className={heading({ size })}>{children}</HeadingTag>;
};

export default Heading;
