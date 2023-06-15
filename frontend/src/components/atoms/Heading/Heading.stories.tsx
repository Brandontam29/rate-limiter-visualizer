import type { Meta } from "@storybook/react";

import Heading from ".";

const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,
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

export const heading = {
  render: (props: any) => (
    <Heading tag="h1" {...props}>
      Heading
    </Heading>
  ),
};
