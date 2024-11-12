"use client";

import { useState } from "react";
import SocialButton from "./SocialButton";
import InputField from "./InputField";
import RememberMeCheckbox from "./RememberMeCheckbox";

const socialButtons = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/136920aeca8de9d26ebf46a8df0c66f493fea894fe0b255a476e224f44e76ef5?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
    text: "Continue with Google",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c66148e6ee4b198a43cd9653f02b5fa2e3344371a05a6ed180a6173444e401ac?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
    text: "Continue with Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c0c3de7a49d47fb573643053c4579af07a9ae93798488d1f076643806a52235?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be",
    text: "Continue with Apple",
  },
];

function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [rememberMe, setrememberMe] = useState(false);

  const setEmail = () => {};
  const setPassword = () => {};
  const setRememberMe = () => {};
  const handleSubmit = () => {};

  return (
    <section className="m-auto flex w-[416px] h-[664px] p-[40px] flex-col justify-center items-center gap-[40px] shrink-0 rounded-[16px] border border-[#EEF1F3] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] mt-[160px]">
      <div className="flex justify-center items-center gap-[40px]">
        <p className="text-[#00204A] text-center font-inter text-[24px] font-semibold leading-[120%] ">
          Login to your Account
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center w-full text-base text-slate-600">
          {socialButtons.map((button, index) => (
            <SocialButton key={index} icon={button.icon} text={button.text} />
          ))}
        </div>
        <div className="flex pr-16 mt-6 w-full text-base whitespace-nowrap text-slate-600">
          <div className="w-[336px] h-[1px] bg-[#EEF1F3] gap-[8px]" />
          <div className="flex w-[39px] flex-col bg-white">OR</div>
          <div className="w-[336px] h-[1px] bg-[#EEF1F3] gap-[8px]" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col max-w-[336px]">
          <div className="flex flex-col w-full">
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-4">
              <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <RememberMeCheckbox
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <button className="flex p-[10px_18px] justify-center items-center gap-[8px] self-stretch rounded-[4px] bg-colorButton shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
            <p className="text-white font-inter text-[18px] font-semibold">
              Log in
            </p>
          </button>
        </form>
      </div>
      <footer>
        <span className="text-[#3B5374] text-center font-inter text-[16px] font-normal leading-[150%]">
          Dont have account?
        </span>{" "}
        <a
          href="#"
          className="text-[#50B533] text-center font-inter text-[16px] font-semibold underline"
        >
          Register
        </a>
      </footer>
    </section>
  );
}

export default Login;
