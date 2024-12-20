const RadioGroupField = ({ options, registerAs, register, errors }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        {options.map((option) => (
          <label
            key={option.label}
            className="flex items-center justify-center gap-2"
          >
            <input
              type="radio"
              value={option.value}
              {...register(registerAs)}
              className="h-4 w-4 "
            />
            <span className="text-colorTextPrimary text-sm font-semibold">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {errors[registerAs] && (
        <p className="text-red-500 text-sm">{errors[registerAs]?.message}</p>
      )}
    </div>
  );
};

export default RadioGroupField;
