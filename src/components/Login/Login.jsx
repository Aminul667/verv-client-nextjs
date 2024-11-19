"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createLoginSchema } from "@/zod-schemas/login";
import InputField from "@/utils/InputField";
import { useState } from "react";
import PasswordInputField from "@/utils/PasswordInputField";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(createLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <InputField
          control={form.control}
          name="email"
          placeholder="Email"
          className="w-[336px] h-[38px] px-3 py-[6px] border border-[#CED4DA] bg-white rounded mb-4"
        />
        {/* password */}
        <PasswordInputField
          control={form.control}
          name="password"
          placeholder="Password"
          className="w-[336px] h-[38px] px-3 py-[6px] border border-[#CED4DA] bg-white rounded mb-4"
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
};

export default Login;
