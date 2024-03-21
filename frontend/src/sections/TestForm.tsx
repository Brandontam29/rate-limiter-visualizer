import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import InputNumber from "@/components/hook-form/InputNumber";
import InputRadioBoolean from "@/components/hook-form/InputRadioBoolean";
import InputRadios from "@/components/hook-form/InputRadios";
import InputText from "@/components/hook-form/InputText";
import Select from "@/components/hook-form/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Ask your mama" }),
  original: z.boolean({
    description: "Just say yes or no",
    invalid_type_error: "What's so hard about a true or false?",
  }),
  powerLevel: z
    .number({ invalid_type_error: "Are you alive?" })
    .int({ message: "Do not use decimals" })
    .min(-1, "Too weak")
    .min(0, "Useless is not a power")
    .max(9001, "IT'S OVER 9000!!!!")
    .max(100, "Idk, you cappin"),
  primaryElement: z.enum(["fire", "earth", "water", "wind"]),
  secondaryElement: z.enum(["fire", "earth", "water", "wind"]),
});

export type FormType = z.infer<typeof FormSchema>;

const TestForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "Brandon",
      original: true,
      powerLevel: 100,
      primaryElement: "earth",
      secondaryElement: "fire",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section>
      <Heading tag="h1" size="size-2xl">
        Test Form
      </Heading>
      <form onSubmit={onSubmit} className="space-y-2">
        <InputText form={form} label="Name" name="name" />
        <InputRadioBoolean form={form} label="Original" name="original" />
        <InputNumber form={form} label="Power Level" name="powerLevel" />

        <Select
          label="Primary Element"
          name="primaryElement"
          form={form}
          options={[
            { label: "Earth", value: "earth" },
            { label: "Water", value: "water" },
            { label: "Fire", value: "fire" },
            { label: "Wind", value: "wind" },
          ]}
        />

        <InputRadios
          label="Secondary Element"
          name="secondaryElement"
          form={form}
          options={[
            { label: "Earth", value: "earth" },
            { label: "Water", value: "water" },
            { label: "Fire", value: "fire" },
            { label: "Wind", value: "wind" },
          ]}
        />

        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default TestForm;
