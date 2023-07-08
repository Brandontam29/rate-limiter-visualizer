import type { Meta } from "@storybook/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import InputText from ".";

const meta: Meta<typeof InputText> = {
  title: "Atoms/InputText",
  component: InputText,
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

const InputTextForm = (props: any) => {
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
      <InputText
        register={register}
        name="name.haha"
        label="Input Text"
        errors={errors}
        helpText="Hello this is help text"
        {...props}
      />
      <InputText
        register={register}
        name="name1"
        label="Input Text"
        helpText="Hello this is help text"
        errors={errors}
        {...props}
      />
      <InputText
        register={register}
        name="name2"
        label="Input Text"
        errors={errors}
        {...props}
      />
      <InputText
        register={register}
        name="name3"
        label="Input Text"
        errors={errors}
        {...props}
      />
    </div>
  );
};

export const inputText = {
  render: (props: any) => <InputTextForm {...props} />,
};
