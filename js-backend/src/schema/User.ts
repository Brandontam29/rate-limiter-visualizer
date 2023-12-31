import { z } from "zod";

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number().int().positive(),
});

export type UserType = z.infer<typeof UserSchema>;
