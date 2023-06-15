import type { Meta } from "@storybook/react";

import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        type: "auto",
      },
    },

    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
};

export default meta;

export const button = {
  render: (props: any) => (
    <Button {...props}>{props?.children || "Button"}</Button>
  ),
};
