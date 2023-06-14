import type { Meta } from "@storybook/react";

import Icon from ".";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
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

export const icon = {
  render: (props: any) => (
    <Icon name="AcademicCapIcon" size="size-4.5" {...props} />
  ),
};
