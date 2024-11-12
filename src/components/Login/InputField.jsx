import Image from "next/image";

function InputField({ type, placeholder }) {
  const isPassword = type === "password";
  return (
    <div
      className={`flex items-center w-full text-base text-gray-500 whitespace-nowrap rounded ${
        isPassword ? "mt-4" : ""
      }`}
    >
      <div className="flex overflow-hidden flex-1 shrink items-center self-stretch px-3 py-1.5 my-auto w-full bg-white rounded border border-gray-300 border-solid basis-0 min-w-[240px]">
        <input
          type={type}
          placeholder={placeholder}
          className="overflow-hidden flex-1 shrink gap-1 self-stretch my-auto w-full min-w-[240px]"
          aria-label={placeholder}
        />
        {isPassword && (
          <div className="flex gap-2 self-stretch my-auto min-h-[1px]">
            <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-px my-auto bg-white bg-opacity-0 h-[18px] w-[18px]">
              {/* <Image
                width={16}
                height={16}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/815fe104dc7444e9e279eb7dabcedfb31e48488c4978f3839a057dc6fad2bc3f?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be"
                alt=""
                className="object-contain w-4 aspect-square"
              /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;
