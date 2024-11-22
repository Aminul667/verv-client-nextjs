const RadioGroupField = ({ options, registerAs, register, errors }) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            value={option.value}
            {...register(registerAs)}
            className="h-4 w-4"
          />
          <span>{option.label}</span>
        </label>
      ))}
      {errors[registerAs] && (
        <p className="text-red-500 text-sm">{errors[registerAs].message}</p>
      )}
    </div>
  );
};

export default RadioGroupField;
