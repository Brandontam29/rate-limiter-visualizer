import type { Meta } from "@storybook/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Select from ".";
import Button from "../Button";

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
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

const OPTIONS = [
  { label: "Pizza", value: "pizza" },
  { label: "Burger", value: "burger" },
  { label: "Sushi", value: "sushi" },
  { label: "Taco but this is very long to test the truncate", value: "taco" },
];

const SelectForm = (props: any) => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      food: "taco",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  useEffect(() => {
    setError("food", {
      type: "custom",
      message: "This is a custom error message",
    });
  }, [setError]);

  return (
    <form className="space-y-2" onSubmit={onSubmit}>
      <Select
        label="Select Label"
        options={OPTIONS}
        helpText="Hello this is help text"
        register={register}
        name="food"
        errors={errors}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const select = {
  render: (props: any) => <SelectForm {...props} />,
};
