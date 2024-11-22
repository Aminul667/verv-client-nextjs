import { Input } from "@/components/ui/input";
import React from "react";

// { control, name, placeholder, className }
const InputField = ({ register, errors }) => {
  return (
    <div>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register("email")}
        className={errors.email ? "border-red-500" : ""}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
    </div>
  );
};

export default InputField;
