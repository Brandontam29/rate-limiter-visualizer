import type { Meta } from "@storybook/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import InputNumber from ".";

const meta: Meta<typeof InputNumber> = {
  title: "Atoms/InputNumber",
  component: InputNumber,
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

const InputNumberForm = (props: any) => {
  const {
    register,
    setError,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    setError("name.haha", {
      type: "custom",
      message: "This is a custom error message",
    });
  }, [setError]);

  return (
    <div className="space-y-2">
      <InputNumber
        register={register}
        name="name.haha"
        label="Input Number"
        errors={errors}
        helpText="Hello this is help text"
        {...props}
      />
      <InputNumber
        register={register}
        name="name1"
        label="Input Number"
        helpText="Hello this is help text"
        errors={errors}
        {...props}
      />
      <InputNumber
        register={register}
        name="name2"
        label="Input Number"
        errors={errors}
        size="md"
        {...props}
      />
      <InputNumber
        register={register}
        name="name3"
        label="Input Number"
        errors={errors}
        size="sm"
        {...props}
      />
    </div>
  );
};

export const inputNumber = {
  render: (props: any) => <InputNumberForm {...props} />,
};
