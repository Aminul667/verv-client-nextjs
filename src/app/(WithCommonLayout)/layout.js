import Navbar from "@/components/Shared/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
