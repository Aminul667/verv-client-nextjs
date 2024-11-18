import Login from "@/components/Login/Login";

const LoginPage = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center w-[416px] h-[664px] p-10 mt-14 gap-10 shrink-0 rounded-2xl border border-[#EEF1F3] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-[#00204A] text-center font-inter text-[24px] font-semibold leading-[120%]">
        Login to your Account
      </h2>
      <Login />
    </div>
  );
};

export default LoginPage;
