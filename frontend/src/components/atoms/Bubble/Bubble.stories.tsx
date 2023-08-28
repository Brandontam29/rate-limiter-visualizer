import type { Meta } from "@storybook/react";

import Bubble from ".";

const meta: Meta<typeof Bubble> = {
  title: "Atoms/Bubble",
  component: Bubble,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        type: "auto",
      },
    },
  },
};

export default meta;

export const bubble = {
  render: (props: any) => <Bubble json={{ hihi: "haha default" }} {...props} />,
};
