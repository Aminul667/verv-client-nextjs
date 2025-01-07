import Login from "@/components/Login/Login";
import SocialButton from "@/components/Login/SocialButton";
import Loading from "@/utils/Loading";
import Link from "next/link";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center w-[416px] h-[664px] p-10 mt-14 gap-10 shrink-0 rounded-2xl border border-[#EEF1F3] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-[#00204A] text-center font-inter text-[24px] font-semibold leading-[120%]">
        Login to your Account
      </h2>
      <SocialButton />
      <div className="relative">
        <p className="absolute text-colorTextSecondary -bottom-[20px] left-[149px] p-2 z-10 bg-white">
          OR
        </p>
        <div className="w-[336px] h-[1px] bg-[#EEF1F3]"></div>
      </div>
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>

      <p className="text-center text-[#3B5374]">
        Don’t have account?{" "}
        <span className="font-semibold underline decoration-solid text-colorButton">
          <Link href="/register">Register</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
