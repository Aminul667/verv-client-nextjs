const Loading = () => {
  return (
    <div className="bg-green-500/10 h-screen w-full fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      {/* <Spinner size="lg" /> */}
      <h2 className="text-3xl font-bold">Loading.....</h2>
    </div>
  );
};

export default Loading;
