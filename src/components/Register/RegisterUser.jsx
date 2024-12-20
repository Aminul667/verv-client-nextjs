"use client";

import InputField from "@/utils/InputField";
import PasswordInputField from "@/utils/PasswordInputField";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRegisterSchema } from "@/zod-schemas/register";
import RadioGroupField from "@/utils/RadioGroupField";
import { registerUser } from "@/services/AuthService";
import { useUserRegistration } from "@/hooks/auth.hooks";

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createRegisterSchema),
  });

  // 1. call the hook for different functionality
  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();

  const onSubmit = (userData) => {
    // const userData = { user: data };
    console.log("Form Data: ", userData);

    handleUserRegistration(userData);
  };

  const registerOptions = [
    { value: "landlord", label: "Landlord" },
    {
      value: "tenant",
      label: "Tenant",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <InputField
        type="email"
        placeholder="Email"
        registerAs="email"
        register={register}
        errors={errors}
        className="flex w-full items-start self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white pr-10 mb-4"
      />
      <PasswordInputField
        register={register}
        errors={errors}
        className="flex w-full items-start self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white pr-10"
      />
      <div className="w-full flex justify-between items-center gap-6 mt-6">
        <p className="text-colorTextPrimary leading-[150%]">Register as</p>
        <RadioGroupField
          options={registerOptions}
          registerAs="role"
          register={register}
          errors={errors}
        />
      </div>
      <Button
        type="submit"
        className="bg-colorButton w-full mt-6 rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-lg font-semibold"
      >
        Submit
      </Button>
    </form>
  );
};

export default RegisterUser;
