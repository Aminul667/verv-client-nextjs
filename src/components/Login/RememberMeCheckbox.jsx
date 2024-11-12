const RememberMeCheckbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex gap-2 items-start mt-6 w-full bg-white bg-opacity-0">
      <div className="flex justify-center items-center w-4 min-h-[24px]">
        <div className="flex flex-col justify-center items-center self-stretch my-auto w-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="w-4 h-4 bg-white rounded border border-solid border-slate-300 min-h-[16px]"
          />
        </div>
      </div>
      <label className="overflow-hidden text-base bg-white bg-opacity-0 text-slate-600">
        {label}
      </label>
    </div>
  );
};

export default RememberMeCheckbox;
