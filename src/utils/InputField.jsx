import { Input } from "@/components/ui/input";

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
      {errors[registerAs] && (
        <p className="text-red-500 text-sm ">{errors[registerAs].message}</p>
      )}
    </div>
  );
};

export default InputField;
