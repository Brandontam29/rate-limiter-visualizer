import { useState } from "react";

import Toggle from ".";

export default {
  title: "Atoms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        type: "auto",
      },
    },
  },
};

export const toggle = (props: any) => {
  const [value, toggleValue] = useState(true);
  return <Toggle value={value} onToggle={toggleValue} {...props} />;
};
