import { z } from "zod";

export const completeProfileSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name cannot exceed 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name cannot exceed 50 characters"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (value) => value.split("").every((char) => !isNaN(Number(char))),
      "Contact number must contain only numbers"
    ),
  //   profilePhoto: z
  //     .custom((file) => file instanceof File && file.size > 0, {
  //       message: "Profile photo is required",
  //     })
  //     .refine(
  //       (file) => file.type === "image/jpeg" || file.type === "image/png",
  //       "Profile photo must be a JPEG or PNG"
  //     )
  //     .refine(
  //       (file) => file.size <= 5 * 1024 * 1024,
  //       "Profile photo size must be less than 5MB"
  //     ),
});
