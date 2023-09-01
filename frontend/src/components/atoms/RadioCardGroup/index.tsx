import { RadioGroup } from "@headlessui/react";
import { cva } from "class-variance-authority";

const radioGroupOption = cva("border-2 rounded py-2 px-4", {
  variants: {
    active: {
      ["true"]: [
        "border-input-primary bg-input-mask-hover hover:bg-input-mask-hover",
      ],
      ["false"]: [],
    },

    checked: {
      ["true"]: [
        "border-input-primary bg-input-mask-hover hover:bg-input-mask-hover",
      ],
      ["false"]: [],
    },
  },
});

type Option = {
  label: string;
  value: string | number | boolean;
};

type RadioCardGroupProps<TOptions extends readonly Option[] | Option[]> = {
  label: string;
  options: Readonly<TOptions>;
  value: TOptions[number]["value"];
  onChange: (value: TOptions[number]["value"]) => void;
};

const RadioCardGroup = <TOptions extends readonly Option[] | Option[]>({
  label,
  options,
  value,
  onChange,
}: RadioCardGroupProps<TOptions>) => {
  return (
    <RadioGroup value={value} onChange={onChange} className="flex gap-2">
      <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
      {options.map((option) => (
        <RadioGroup.Option
          key={option.label}
          value={option.value}
          className={({ active, checked }) =>
            radioGroupOption({ active, checked })
          }
        >
          <RadioGroup.Label as="span">{option.label}</RadioGroup.Label>
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default RadioCardGroup;
