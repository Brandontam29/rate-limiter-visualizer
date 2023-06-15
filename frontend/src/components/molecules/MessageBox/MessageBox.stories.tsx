import type { Meta } from "@storybook/react";

import MessageBox from ".";

const meta: Meta<typeof MessageBox> = {
  title: "Molecules/MessageBox",
  component: MessageBox,
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

export const messageBox = {
  render: (props: any) => <MessageBox {...props} />,
};
