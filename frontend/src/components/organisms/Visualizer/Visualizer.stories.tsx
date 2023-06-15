import type { Meta } from "@storybook/react";

import Visualizer from ".";

const meta: Meta<typeof Visualizer> = {
  title: "Organisms/Visualizer",
  component: Visualizer,
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

export const visualizer = {
  render: (props: any) => <Visualizer {...props} />,
};
