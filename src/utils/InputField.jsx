import { Input } from "@/components/ui/input";
import React from "react";

const InputField = ({
  type,
  placeholder,
  registerAs,
  register,
  errors,
  className,
}) => {
  return (
    <div>
      <Input
        className={className}
        id={registerAs}
        type={type}
        placeholder={placeholder}
        {...register(registerAs)}
      />
      {errors.email && (
        <p className="text-red-500 text-sm ">{errors[registerAs].message}</p>
      )}
    </div>
  );
};

export default InputField;
