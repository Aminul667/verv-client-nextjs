/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { createLoginSchema } from "@/zod-schemas/login";
import InputField from "@/utils/InputField";
import PasswordInputField from "@/utils/PasswordInputField";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/user.provider";
import { useUserLogin } from "@/hooks/auth.hooks";
import { useEffect } from "react";
import Loading from "@/utils/Loading";

const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { setIsLoading: userLoading } = useUser();

  const redirect = searchParams.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  // form action
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createLoginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
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
        <Button
          type="submit"
          className="bg-colorButton w-full mt-6 rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-lg font-semibold"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default Login;
