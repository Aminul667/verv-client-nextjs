import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* <ResponsiveNavbar /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
