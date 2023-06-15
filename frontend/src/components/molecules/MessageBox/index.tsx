import Button, { ButtonProps } from "@/components/atoms/Button";
import Heading, { HeadingProps } from "@/components/atoms/Heading";
import { cva } from "class-variance-authority";

type MessageBoxVariant = "error" | "success" | "warning" | "info";

type MessageBoxProps = {
  variant?: MessageBoxVariant;
  title: string;
  description: string;
  primaryButtonProps: Pick<ButtonProps, "onClick" | "children">;
  minorButtonProps?: Pick<ButtonProps, "onClick" | "children">;
};

const container = cva("rounded-md", {
  variants: {
    variant: {
      error: ["bg-error-bg", "text-error-text"],
      success: ["bg-success-bg", "text-success-text"],
      warning: ["bg-warning-bg", "text-warning-text"],
      info: ["bg-info-bg", "text-info-text"],
    },
  },
});

const toHeadingVariantProp = (
  variant: MessageBoxVariant
): HeadingProps["variant"] => {
  switch (variant) {
    case "info":
      return "text";

    default:
      return variant;
  }
};

const MessageBox = ({
  variant = "info",
  title,
  description,
  primaryButtonProps,
  minorButtonProps,
}: MessageBoxProps) => {
  return (
    <div className={container({ variant })}>
      <Heading tag="h3" variant={toHeadingVariantProp(variant)} size="size-lg">
        {title}
      </Heading>

      <p>{description}</p>

      <div>
        {minorButtonProps && <Button type="button" {...minorButtonProps} />}
        <Button type="button" {...primaryButtonProps} />
      </div>
    </div>
  );
};

export default MessageBox;
