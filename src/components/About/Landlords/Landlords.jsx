import { Button } from "@/components/ui/button";

import landlordAboutHouse from "../../../assets/images/landlord-about-house.jpg";
import Image from "next/image";
import TrustPilot from "@/components/Shared/TrustPilot";

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
      <section>
        <TrustPilot />
      </section>
    </section>
  );
};

export default Landlords;
