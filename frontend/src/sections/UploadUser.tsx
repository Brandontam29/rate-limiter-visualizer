import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import InputNumber from "@/components/hook-form/InputNumber";
import InputText from "@/components/hook-form/InputText";
import getFortune from "@/fetchers/getFortune";
import { rateLimiterTypeAtom } from "@/state/controls";
import { requestsAtom, responsesAtom } from "@/state/requests";
import generateRandomUser from "@/utils/generateRandomUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtomValue, useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";

const UserSchema = z.object({
  firstName: z.string().nonempty({ message: "Ask your mama" }),
  lastName: z.string().nonempty({ message: "Who's your father?" }),
  age: z
    .number({ invalid_type_error: "Are you alive?" })
    .int({ message: "Do not use decimals" })
    .min(-1, "You do not exist")
    .min(0, "Inside the womb is not allowed")
    .max(120, "Are you a vampire?"),
});

export type UserType = z.infer<typeof UserSchema>;

const UploadUser = () => {
  const setRequests = useSetAtom(requestsAtom);
  const setResponses = useSetAtom(responsesAtom);

  const rateLimiterType = useAtomValue(rateLimiterTypeAtom);

  const mutation = useMutation({
    mutationFn: getFortune,
    onMutate: (variables) => {
      setRequests((prev) => [...prev, variables]);
    },
    onSuccess: (data, variables, context) => {
      console.log(JSON.stringify({ data, variables, context }, null, 2));
      setResponses((prev) => [...prev, data]);
    },
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
    mutation.mutate({ rateLimiter: rateLimiterType, data });
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
          <Button type="submit">Fortune</Button>
        </div>
      </form>
      <pre className="block max-w-sm whitespace-pre-wrap">
        {JSON.stringify(mutation.data, null, 2)}
      </pre>
    </section>
  );
};

export default UploadUser;
