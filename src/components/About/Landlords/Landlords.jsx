import { Button } from "@/components/ui/button";

import landlordAboutHouse from "../../../assets/images/landlord-about-house.jpg";
import Image from "next/image";
import TrustPilot from "@/components/Shared/TrustPilot";
import Link from "next/link";

const Landlords = () => {
  return (
    <section>
      {/* rental property */}
      <section className="bg-[rgba(238,248,235,0.78)]">
        <div className="w-[1216px] h-[540px] flex py-[80px] justify-center items-start gap-8 flex-shrink-0 m-auto">
          {/* property */}
          <div className="w-[592px] h-[380px] flex-shrink-0 rounded-lg bg-[rgba(213,237,206,0.6)] pl-10 pt-10 pr-[37px] pb-[36px]">
            <h2 className="self-stretch text-colorTextPrimary text-5xl font-bold leading-[60px]">
              Advertise Your Rental Property!
            </h2>
            <p className="self-stretch text-colorTextSecondary text-base leading-[24px] mt-6">
              When you create your first lettings advert on Verve, we will
              review and publish it to the property listings on Rightmove,
              Zoopla, PrimeLocation and all major property portals.
            </p>
            <Button className="flex w-[272px] h-[56px] px-4 py-2 justify-center items-center gap-2 rounded-[32px] bg-colorButton text-lg font-semibold mt-8">
              Create Your Advert
            </Button>
          </div>
          {/* image */}
          <div className="w-[592px] h-[380px] flex-shrink-0 rounded-lg bg-[rgba(213,237,206,0.6)] relative">
            <Image
              src={landlordAboutHouse}
              alt="landlord-about-image"
              fill
              sizes="592px"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* trust pilot */}
      <div>
        <TrustPilot />
      </div>
      {/* perfect package */}
      <section className="w-[1216px] flex flex-col items-center gap-12 m-auto">
        <h2 className="text-3xl text-colorTextPrimary font-semibold leading-[38px] mt-3">
          Choose the perfect package for you
        </h2>
        <div className="flex items-center gap-8 self-stretch h-[452px]">
          {/* listing only */}
          <div className="flex flex-col w-[384px] h-full p-[48px_62px] justify-center items-center rounded-[24px] border border-[#EEF1F3] bg-[#F5F5F5]">
            <h3 className="text-colorTextPrimary text-2xl font-semibold leading-[120%] text-center mb-2">
              Listing Only
            </h3>
            <h4 className="text-colorTextPrimary text-lg font-semibold text-center">
              For Landlords & Agents
            </h4>
            <h1 className="text-[64px] text-[#A6AFBB] font-bold leading-[120%] my-[30px] text-center">
              ZERO
            </h1>
            <h3 className="text-colorTextPrimary text-lg font-semibold">
              Looking to List with
            </h3>
            <h3 className="text-colorTextPrimary text-lg font-semibold mb-auto">
              Verv only?
            </h3>
            <Button className="w-full h-[48px] p-2 border border-[#CED3D9] rounded-[8px] bg-white text-colorTextPrimary text-lg font-semibold hover:text-white">
              Add Listing Now for Free
            </Button>
          </div>
          {/* ultimate */}
          <div className="flex flex-col w-[384px] h-full p-[48px_55px] justify-center items-center rounded-[24px] border border-[#EEF1F3] bg-[#FAF4FF]">
            <h3 className="text-colorTextPrimary text-2xl font-semibold leading-[120%] text-center mb-2">
              Ultimate Advertising
            </h3>
            <h4 className="text-colorTextPrimary text-lg font-semibold text-center">
              Portal Advertising
            </h4>
            <div className="flex justify-center items-baseline gap-2 my-[30px]">
              <h1 className="text-[64px] text-colorTextPrimary font-bold leading-[120%] text-center">
                &#163;49
              </h1>
              <span className="text-lg text-colorTextPrimary font-medium">
                Inc. VAT
              </span>
            </div>
            <h3 className="text-colorTextPrimary text-lg font-semibold">
              For Landlords that want:
            </h3>
            <h3 className="text-colorTextPrimary text-lg font-semibold mb-auto">
              Portal Advertising (Zoopla etc.)
            </h3>
            <Button className="w-full h-[48px] p-2 border border-[#CED3D9] rounded-[8px] bg-colorTextPrimary text-lg font-semibold">
              Add Listing Now
            </Button>
          </div>
          {/* rent now */}
          <div className="flex flex-col w-[384px] h-full p-[48px_60px] justify-center items-center rounded-[24px] border border-[#EEF1F3] bg-[#EEF8EB]">
            <h3 className="text-colorTextPrimary text-2xl font-semibold leading-[120%] text-center mb-2">
              Rent Now
            </h3>
            <h4 className="text-colorTextPrimary text-lg font-semibold text-center">
              + Ultimate Advertising
            </h4>
            <div className="flex justify-center items-baseline gap-2 my-[30px]">
              <h1 className="text-[64px] text-colorButton font-bold leading-[120%] text-center">
                &#163;49
              </h1>
              <span className="text-lg text-colorTextPrimary font-medium">
                Inc. VAT
              </span>
            </div>
            <h3 className="text-colorTextPrimary text-lg font-semibold">
              For Landlords that want:
            </h3>
            <h3 className="text-colorTextPrimary text-lg font-semibold">
              Advertising + Tenant Creation
            </h3>
            <Link
              href=""
              className="text-colorTextLime text-lg font-medium underline decoration-solid decoration-auto underline-offset-auto mb-auto"
            >
              More Info
            </Link>
            <Button className="w-full h-[48px] p-2 border border-[#CED3D9] rounded-[8px] bg-colorButton text-lg font-semibold">
              Add Listing Now
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Landlords;
