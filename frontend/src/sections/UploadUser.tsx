import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import InputNumber from "@/components/atoms/InputNumber";
import InputText from "@/components/atoms/InputText";
import postEcho from "@/fetchers/postEcho";
import useCookie from "@/hooks/useCookie";
import generateRandomUser from "@/utils/generateRandomUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";

const UserSchema = z.object({
  firstName: z.string().nonempty({ message: "Cannot be empty" }),
  lastName: z.string().nonempty({ message: "Cannot be empty" }),
  age: z
    .number()
    .int({ message: "Do not use decimals" })
    .positive("Inside the womb is not allowed"),
});

export type UserType = z.infer<typeof UserSchema>;

const UploadUser = () => {
  const [sessionCookie] = useCookie("sessionCookie");

  const mutation = useMutation({
    mutationFn: postEcho,
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate({ data, sessionCookie });
  });

  return (
    <section>
      <Heading tag="h1" className="sr-only">
        Upload User
      </Heading>
      <form onSubmit={onSubmit} className="space-y-2">
        <InputText
          label="First Name"
          register={register}
          name="firstName"
          errors={errors}
        />
        <InputText
          label="Last Name"
          register={register}
          name="lastName"
          errors={errors}
        />
        <InputNumber
          label="Age"
          register={register}
          name="age"
          errors={errors}
        />
        <div className="flex gap-2">
          <Button
            type="button"
            onClick={() => {
              const user = generateRandomUser();
              reset(user);
            }}
          >
            Fake Data
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <div>
        <pre>{JSON.stringify(mutation.data, null, 2)}</pre>
      </div>
    </section>
  );
};

export default UploadUser;
