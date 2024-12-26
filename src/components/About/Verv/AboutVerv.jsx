import AreLandlord from "@/components/Home/AreLandlord";
import Reviews from "@/components/Shared/Reviews";
import VervAccordion from "./VervAccordion";
import vervAbout from "../../../assets/images/verv-about.jpg";
import vervHouse from "../../../assets/images/verv-house.png";
import vervDoll from "../../../assets/images/verv-doll.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutVerv = () => {
  return (
    <div>
      {/* hero section */}
      <section className="py-20 bg-[#EEF1F3] mb-[100px]">
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

      {/* tailored for property */}
      <section className="w-[1216px] h-[811px] m-auto flex justify-between items-start gap-[33px] mb-[100px]">
        <div className="w-[489px] flex flex-col items-start gap-[50px] self-stretch">
          <div className="flex flex-col items-start gap-6 self-stretch">
            <h2 className="text-colorTextPrimary text-4xl font-bold leading-[44px]">
              Tailored for Property Owners and Renters
            </h2>
            <p className="text-colorTextSecondary leading-[24px]">
              Welcome to Verv, where we transform the rental experience for both
              landlords and tenants. Say goodbye to hidden fees, outdated
              listings, and the expensive 10% commissions landlords once paid.
              The future of renting is here—more transparent, efficient, and
              cost-effective than ever!
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {/* first box */}
            <div className="inline-flex items-center p-[20px_47px_20px_20px] rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
              <div className="flex flex-col items-start gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3333 0.041687C11.6785 0.041687 11.9583 0.321509 11.9583 0.666687V1.94266C13.9381 2.1685 15.479 3.83969 15.4998 5.87502H0.500213C0.520985 3.8397 2.06187 2.1685 4.04167 1.94266V0.666687C4.04167 0.321509 4.32149 0.0416871 4.66667 0.041687C5.01184 0.041687 5.29167 0.321509 5.29167 0.666687V1.91669H10.7083V0.666687C10.7083 0.321509 10.9882 0.041687 11.3333 0.041687ZM0.5 7.12502H15.5V13.3334C15.5 15.5425 13.7091 17.3334 11.5 17.3334H4.5C2.29086 17.3334 0.5 15.5425 0.5 13.3334V7.12502ZM8 12.3334C8.46024 12.3334 8.83333 11.9603 8.83333 11.5C8.83333 11.0398 8.46024 10.6667 8 10.6667C7.53976 10.6667 7.16667 11.0398 7.16667 11.5C7.16667 11.9603 7.53976 12.3334 8 12.3334ZM12.1667 11.5C12.1667 11.9603 11.7936 12.3334 11.3333 12.3334C10.8731 12.3334 10.5 11.9603 10.5 11.5C10.5 11.0398 10.8731 10.6667 11.3333 10.6667C11.7936 10.6667 12.1667 11.0398 12.1667 11.5ZM4.66667 12.3334C5.1269 12.3334 5.5 11.9603 5.5 11.5C5.5 11.0398 5.1269 10.6667 4.66667 10.6667C4.20643 10.6667 3.83333 11.0398 3.83333 11.5C3.83333 11.9603 4.20643 12.3334 4.66667 12.3334Z"
                      fill="#50B533"
                    />
                  </svg>
                  <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                    6 Days
                  </p>
                </div>
                <p className="w-[98px] text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                  Average to Let
                </p>
              </div>
            </div>
            {/* second box */}
            <div className="inline-flex p-[20px_54px_20px_20px] items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
              <div className="flex flex-col items-start gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.4849 18.3334H6.51768C4.59372 18.3334 3.03405 16.845 3.03405 15.009V10.9442C3.03405 10.354 2.78836 9.78801 2.35104 9.37068C1.33781 8.40377 1.46953 6.80173 2.62839 5.99745L7.95233 2.30252C9.17387 1.45474 10.8287 1.45474 12.0503 2.30252L17.3742 5.99745C18.5331 6.80173 18.6648 8.40377 17.6516 9.37068C17.2142 9.78801 16.9686 10.354 16.9686 10.9442V15.009C16.9686 16.845 15.4089 18.3334 13.4849 18.3334ZM8.33464 14.375C7.98946 14.375 7.70964 14.6548 7.70964 15C7.70964 15.3452 7.98946 15.625 8.33464 15.625H11.668C12.0131 15.625 12.293 15.3452 12.293 15C12.293 14.6548 12.0131 14.375 11.668 14.375H8.33464Z"
                      fill="#50B533"
                    />
                  </svg>
                  <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                    1,269,346
                  </p>
                </div>
                <p className="text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                  Properties Let On Verve
                </p>
              </div>
            </div>
            {/* third */}
            <div className="inline-flex p-[20px_10px_20px_20px] items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
              <div className="flex flex-col items-start gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3333 0.041687C11.6785 0.041687 11.9583 0.321509 11.9583 0.666687V1.94266C13.9381 2.1685 15.479 3.83969 15.4998 5.87502H0.500213C0.520985 3.8397 2.06187 2.1685 4.04167 1.94266V0.666687C4.04167 0.321509 4.32149 0.0416871 4.66667 0.041687C5.01184 0.041687 5.29167 0.321509 5.29167 0.666687V1.91669H10.7083V0.666687C10.7083 0.321509 10.9882 0.041687 11.3333 0.041687ZM0.5 7.12502H15.5V13.3334C15.5 15.5425 13.7091 17.3334 11.5 17.3334H4.5C2.29086 17.3334 0.5 15.5425 0.5 13.3334V7.12502ZM8 12.3334C8.46024 12.3334 8.83333 11.9603 8.83333 11.5C8.83333 11.0398 8.46024 10.6667 8 10.6667C7.53976 10.6667 7.16667 11.0398 7.16667 11.5C7.16667 11.9603 7.53976 12.3334 8 12.3334ZM12.1667 11.5C12.1667 11.9603 11.7936 12.3334 11.3333 12.3334C10.8731 12.3334 10.5 11.9603 10.5 11.5C10.5 11.0398 10.8731 10.6667 11.3333 10.6667C11.7936 10.6667 12.1667 11.0398 12.1667 11.5ZM4.66667 12.3334C5.1269 12.3334 5.5 11.9603 5.5 11.5C5.5 11.0398 5.1269 10.6667 4.66667 10.6667C4.20643 10.6667 3.83333 11.0398 3.83333 11.5C3.83333 11.9603 4.20643 12.3334 4.66667 12.3334Z"
                      fill="#50B533"
                    />
                  </svg>
                  <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                    7,078,438
                  </p>
                </div>
                <p className="text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                  Registered Landlords & Te..
                </p>
              </div>
            </div>
            {/* fourth */}
            <div className="inline-flex p-[20px] items-center rounded-[12px] bg-[var(--secondary-1,#EEF1F3)]">
              <div className="flex flex-col items-start gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.3333 0.041687C11.6785 0.041687 11.9583 0.321509 11.9583 0.666687V1.94266C13.9381 2.1685 15.479 3.83969 15.4998 5.87502H0.500213C0.520985 3.8397 2.06187 2.1685 4.04167 1.94266V0.666687C4.04167 0.321509 4.32149 0.0416871 4.66667 0.041687C5.01184 0.041687 5.29167 0.321509 5.29167 0.666687V1.91669H10.7083V0.666687C10.7083 0.321509 10.9882 0.041687 11.3333 0.041687ZM0.5 7.12502H15.5V13.3334C15.5 15.5425 13.7091 17.3334 11.5 17.3334H4.5C2.29086 17.3334 0.5 15.5425 0.5 13.3334V7.12502ZM8 12.3334C8.46024 12.3334 8.83333 11.9603 8.83333 11.5C8.83333 11.0398 8.46024 10.6667 8 10.6667C7.53976 10.6667 7.16667 11.0398 7.16667 11.5C7.16667 11.9603 7.53976 12.3334 8 12.3334ZM12.1667 11.5C12.1667 11.9603 11.7936 12.3334 11.3333 12.3334C10.8731 12.3334 10.5 11.9603 10.5 11.5C10.5 11.0398 10.8731 10.6667 11.3333 10.6667C11.7936 10.6667 12.1667 11.0398 12.1667 11.5ZM4.66667 12.3334C5.1269 12.3334 5.5 11.9603 5.5 11.5C5.5 11.0398 5.1269 10.6667 4.66667 10.6667C4.20643 10.6667 3.83333 11.0398 3.83333 11.5C3.83333 11.9603 4.20643 12.3334 4.66667 12.3334Z"
                      fill="#50B533"
                    />
                  </svg>
                  <p className="text-[var(--secondary-8,#233244)] text-center font-inter text-[18px] font-bold leading-[28px]">
                    No Admin Fee
                  </p>
                </div>
                <p className="w-[98px] text-[var(--secondary-5,#56677D)] font-inter text-[14px] font-medium leading-[20px]">
                  Since 2012
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[694px] flex flex-col items-start gap-[16px]">
          {/* first part */}
          <div className="relative h-[399px] self-stretch rounded-[16px] border border-[#CED3D9] bg-[#FCFCFC]">
            <p className="text-[#398124] text-[24px] font-semibold leading-[32px] pl-[28px] pt-[28px] mb-[16px]">
              Landlords
            </p>
            <div className="absolute top-[28px] right-[28px]">
              <Image
                src={vervHouse}
                alt="house Image"
                height={112}
                width={139}
              />
            </div>
            <div className="flex flex-col w-[596px] h-[224px] shrink-0 pl-[28px] gap-[16px]">
              <p className="w-[476px] text-colorTextPrimary leading-[24px]">
                You want renting out your property or room to be cheap, painless
                and risk-free. So did we, and in 2012 we fixed it. We now let
                more properties than anyone else in the UK.
              </p>
              <p className="w-[596px] text-colorTextPrimary leading-[24px]">
                Our prices are totally transparent. Starting from a totally free
                service, ranging up to a £69 service for our full tenant-find
                package which includes advertising on Rightmove, Zoopla and
                other major property portals.
              </p>
              <p className="w-[596px] text-colorTextPrimary leading-[24px]">
                We&apos;ll guide you through every step, from creating your
                advert to finding the perfect tenant and handling everything
                needed to set up the tenancy.
              </p>
            </div>

            <div className="pl-[28px] pt-[16px]">
              <Button className="text-[16px] font-medium leading-[24px] flex w-[168px] h-[44px] p-[6px_16px] justify-center items-center gap-[8px] shrink-0 rounded-[32px] bg-[#50B533]">
                Find Out More
              </Button>
            </div>
          </div>
          {/* second part */}
          <div className="relative h-[396px] self-stretch rounded-[16px] border border-[#CED3D9] bg-[#FCFCFC]">
            <p className="text-[#398124] text-[24px] font-semibold leading-[32px] pl-[28px] pt-[28px] mb-[16px]">
              Tenants
            </p>
            <div className="absolute top-[28px] right-[28px]">
              <Image src={vervDoll} alt="verv doll" height={128} width={139} />
            </div>
            <div className="flex flex-col w-[596px] h-[224px] shrink-0 pl-[28px] gap-[16px] mb-[24px]">
              <p className="w-[476px] text-colorTextPrimary leading-[24px]">
                At Verv, we believe everyone should be able to find their dream
                home while feeling safe and in control.
              </p>
              <p className="w-[596px] text-colorTextPrimary leading-[24px]">
                We were the pioneers in banning tenant fees, and we continue to
                offer the best experience for tenants. Say goodbye to fake
                listings, pushy agents, and unnecessary trips to the office.
              </p>
              <p className="w-[596px] text-colorTextPrimary leading-[24px]">
                We make it simple to find the perfect landlord with filters for
                DSS, pets, students, and other groups often overlooked by the
                market. No matter what you&apos;re looking for, finding a new
                home has never been easier.
              </p>
            </div>

            <div className="pl-[28px]">
              <Button className="text-[16px] font-medium leading-[24px] flex w-[168px] h-[44px] p-[6px_16px] justify-center items-center gap-[8px] shrink-0 rounded-[32px] bg-[#50B533]">
                Find Out More
              </Button>
            </div>
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
