import { z } from "zod";

export const createRegisterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["Landlord", "Tenant"], { required_error: "Role is required" }),
});
