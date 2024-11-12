import Image from "next/image";

function SocialButton({ icon, text }) {
  return (
    <button className="flex overflow-hidden gap-3 justify-center items-center px-4 py-2.5 mt-4 w-full bg-gray-50 rounded-lg border border-solid shadow-sm border-slate-200">
      {/* <Image
        width={24}
        height={24}
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      /> */}
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
}

export default SocialButton;
