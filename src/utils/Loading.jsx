import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="bg-green-500/10 h-screen w-full fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <Spinner size="large" />
    </div>
  );
};

export default Loading;
