import AreLandlord from "@/components/Home/AreLandlord";
import Reviews from "@/components/Shared/Reviews";
import VervAccordion from "./VervAccordion";
import vervAbout from "../../../assets/images/verv-about.jpg";
import { Button } from "@/components/ui/button";

const AboutVerv = () => {
  return (
    <div>
      <section className="py-20 bg-[#EEF1F3]">
        <div className="w-[1216px] m-auto flex justify-between items-center gap-8">
          <div
            className="w-[600px] h-[395px] rounded-[40px] bg-gray-300 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${vervAbout.src})` }}
          ></div>
          <div className="w-[600px] h-[395px] flex flex-col gap-6 justify-center">
            <h1 className="text-colorTextPrimary text-[48px] font-bold leading-[60px]">
              Find the perfect match between Landlords and Tenants!
            </h1>
            <p className="text-colorTextSecondary text-lg leading-[28px]">
              Since its founding in 2018, Verv has grown to become the UK’s
              largest letting agent, with one clear mission: to make renting
              fairer, safer, and more affordable for everyone.
            </p>
            <Button className="font-semibold text-sm flex w-[147px] h-[40px] px-[16px] py-[8px] justify-center items-center gap-[8px] rounded-[32px] bg-colorButton">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* frequent questions */}
      <section className="w-[1009px] m-auto">
        <h2 className="text-colorTextPrimary text-4xl font-bold leading-[44px] text-center mb-[60px]">
          Frequently Asked Questions
        </h2>
        {/* accordion */}
        <VervAccordion />
      </section>

      {/* our happy clients */}
      <section className="mt-[100px]">
        <div className="w-[1216px] h-[425px] m-auto flex flex-col items-start gap-7">
          <h1 className="text-colorTextPrimary text-[30px] font-semibold leading-[38px] w-full text-center">
            Our happy clients
          </h1>
          {/* clients review carousel */}
          <Reviews />
        </div>
      </section>
      <AreLandlord />
    </div>
  );
};

export default AboutVerv;
