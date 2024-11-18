import { z } from "zod";

export const createLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string({ message: "Enter the password" }),
});
