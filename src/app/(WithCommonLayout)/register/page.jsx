import RegisterUser from "@/components/Register/RegisterUser";
import Loading from "@/utils/Loading";
import Link from "next/link";
import { Suspense } from "react";

const RegisterPage = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center w-[416px] h-[411px] p-10 mt-14 gap-10 shrink-0 rounded-2xl border border-[#EEF1F3] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-[#00204A] text-center font-inter text-[24px] font-semibold leading-[120%]">
        Create a new account
      </h2>

      <Suspense fallback={<Loading />}>
        <RegisterUser />
      </Suspense>

      <p className="text-center text-[#3B5374]">
        Got an account?{" "}
        <span className="font-semibold underline decoration-solid text-colorButton">
          <Link href="/login">Login</Link>
        </span>
      </p>
    </div>
  );
};

export default RegisterPage;
