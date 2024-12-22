"use client";

import InputField from "@/utils/InputField";
import { completeProfileSchema } from "@/zod-schemas/completeProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

const CompleteProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(completeProfileSchema),
  });

  const onSubmit = (userProfileData) => {
    console.log("Form Data: ", userProfileData);
  };

  return (
    <div className="m-auto bg-red-400 my-14 flex w-[600px] p-[40px] flex-col justify-center items-center gap-[40px] flex-shrink-0 rounded-[16px] border border-[#EEF1F3] shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <div className="bg-slate-200 w-full">
        <h2 className="text-colorTextPrimary text-center text-[24px] font-semibold leading-[120%] mb-10">
          Complete profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <InputField
            type="text"
            placeholder="First Name"
            registerAs="firstName"
            register={register}
            errors={errors}
            className="flex w-full items-start self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white pr-10 mb-4"
          />
          <InputField
            type="text"
            placeholder="Last Name"
            registerAs="lastName"
            register={register}
            errors={errors}
            className="flex w-full items-start self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white pr-10 mb-4"
          />
          <p className="text-colorTextSecondary text-[12px] font-normal leading-[140%] mb-4">
            Make sure this matches the name on your government ID. If you go by
            another name, you can add a preferred first name.
          </p>
          <div className="flex items-center justify-center bg-white rounded-md border border-gray-400 mb-4">
            <div className="shrink-0 pl-3">
              <p className="text-colorTextSecondary font-normal leading-[150%]">
                +44 (UK)
              </p>
            </div>
            <div className="flex-grow">
              <InputField
                type="text"
                placeholder="Phone Number"
                registerAs="phoneNumber"
                register={register}
                errors={errors}
                className="px-3 py-1.5"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="bg-colorButton w-full rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-lg font-semibold"
          >
            Agree & Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
