import { Button } from "@/components/ui/button";
import tenantWhyVerb from "../../../assets/images/tenant-why-verb.png";

import PropertyDetailsCard from "./PropertyDetailsCard";
import Image from "next/image";

const Tenants = () => {
  return (
    <div>
      {/* Rent From Private Landlords */}
      <section className="py-[95px] bg-[#EEF1F3]">
        <div className="flex flex-col items-center gap-[40px] w-[885px] flex-shrink-0 m-auto">
          <div className="flex flex-col items-center gap-[28px] self-stretch">
            <div className="w-[885px]">
              <p className="text-[48px] font-bold leading-[60px] text-[#233244]">
                Rent from Private Landlords in the UK
              </p>
            </div>
            <div className="w-[724px]">
              <p className="text-center text-[18px] font-normal leading-[28px] text-[#233244]">
                Verve lets you deal directly with private landlords, with no
                admin fees. We’ve put the whole process online to save you time,
                effort and frustration!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <Button className="flex w-[245px] h-[56px] px-[12px] py-[8px] pl-[16px] justify-center items-center gap-[8px] rounded-[32px] bg-[#50B533]">
              <span className="text-[#FFF] text-lg font-medium leading-[28px]">
                Begin search now
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <path
                  d="M8.66797 11.6666L14.5013 16.3333L20.3346 11.6666"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button className="flex w-[245px] h-[56px] px-[12px] py-[8px] pl-[16px] justify-center items-center gap-[8px] rounded-[32px] bg-[#50B533]">
              <span className="text-[#FFF] text-lg font-medium leading-[28px]">
                How it works
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M8.16797 11.6666L14.0013 16.3333L19.8346 11.6666"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Why use verv */}
      <section className="m-auto  w-[733px] h-[373px] rounded-[28px] mt-[100px] p-[60px] bg-[rgba(238,248,235,0.7)]">
        <div className="w-[613px] flex items-center gap-[101.702px]">
          <div className="w-[272.201px] flex flex-col items-start gap-[31.906px] flex-shrink-0">
            <p className="self-stretch text-[#233244] text-[30px] font-semibold leading-[38px]">
              Why use Verve?
            </p>
            <div className="flex flex-col items-start gap-[19.941px] self-stretch">
              <div className="flex items-center gap-[11.965px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96911 18.8498C14.558 18.8498 18.2781 15.1298 18.2781 10.5409C18.2781 5.95198 14.558 2.23193 9.96911 2.23193C5.3802 2.23193 1.66016 5.95198 1.66016 10.5409C1.66016 15.1298 5.3802 18.8498 9.96911 18.8498ZM13.7846 8.43082C13.9959 8.15915 13.947 7.76763 13.6753 7.55633C13.4036 7.34503 13.0121 7.39397 12.8008 7.66564L9.47139 11.9463C9.39736 12.0415 9.2581 12.0538 9.16847 11.9732L7.06241 10.0777C6.80659 9.84748 6.41257 9.86822 6.18233 10.124C5.9521 10.3799 5.97283 10.7739 6.22865 11.0041L8.33471 12.8996C8.96214 13.4643 9.93695 13.3778 10.4552 12.7115L13.7846 8.43082Z"
                    fill="#50B533"
                  />
                </svg>
                <span className="text-[#314660] text-[19.941px] font-medium leading-[19.941px]">
                  No Admin Fees
                </span>
              </div>
              <div className="flex items-center gap-[11.965px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96911 18.8498C14.558 18.8498 18.2781 15.1298 18.2781 10.5409C18.2781 5.95198 14.558 2.23193 9.96911 2.23193C5.3802 2.23193 1.66016 5.95198 1.66016 10.5409C1.66016 15.1298 5.3802 18.8498 9.96911 18.8498ZM13.7846 8.43082C13.9959 8.15915 13.947 7.76763 13.6753 7.55633C13.4036 7.34503 13.0121 7.39397 12.8008 7.66564L9.47139 11.9463C9.39736 12.0415 9.2581 12.0538 9.16847 11.9732L7.06241 10.0777C6.80659 9.84748 6.41257 9.86822 6.18233 10.124C5.9521 10.3799 5.97283 10.7739 6.22865 11.0041L8.33471 12.8996C8.96214 13.4643 9.93695 13.3778 10.4552 12.7115L13.7846 8.43082Z"
                    fill="#50B533"
                  />
                </svg>
                <span className="text-[#314660] text-[19.941px] font-medium leading-[19.941px]">
                  No Dead Listings
                </span>
              </div>
              <div className="flex items-center gap-[11.965px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96911 18.8498C14.558 18.8498 18.2781 15.1298 18.2781 10.5409C18.2781 5.95198 14.558 2.23193 9.96911 2.23193C5.3802 2.23193 1.66016 5.95198 1.66016 10.5409C1.66016 15.1298 5.3802 18.8498 9.96911 18.8498ZM13.7846 8.43082C13.9959 8.15915 13.947 7.76763 13.6753 7.55633C13.4036 7.34503 13.0121 7.39397 12.8008 7.66564L9.47139 11.9463C9.39736 12.0415 9.2581 12.0538 9.16847 11.9732L7.06241 10.0777C6.80659 9.84748 6.41257 9.86822 6.18233 10.124C5.9521 10.3799 5.97283 10.7739 6.22865 11.0041L8.33471 12.8996C8.96214 13.4643 9.93695 13.3778 10.4552 12.7115L13.7846 8.43082Z"
                    fill="#50B533"
                  />
                </svg>
                <span className="text-[#314660] text-[19.941px] font-medium leading-[19.941px]">
                  Rent & Deposit Protected
                </span>
              </div>
              <div className="flex items-center gap-[11.965px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.96911 18.8498C14.558 18.8498 18.2781 15.1298 18.2781 10.5409C18.2781 5.95198 14.558 2.23193 9.96911 2.23193C5.3802 2.23193 1.66016 5.95198 1.66016 10.5409C1.66016 15.1298 5.3802 18.8498 9.96911 18.8498ZM13.7846 8.43082C13.9959 8.15915 13.947 7.76763 13.6753 7.55633C13.4036 7.34503 13.0121 7.39397 12.8008 7.66564L9.47139 11.9463C9.39736 12.0415 9.2581 12.0538 9.16847 11.9732L7.06241 10.0777C6.80659 9.84748 6.41257 9.86822 6.18233 10.124C5.9521 10.3799 5.97283 10.7739 6.22865 11.0041L8.33471 12.8996C8.96214 13.4643 9.93695 13.3778 10.4552 12.7115L13.7846 8.43082Z"
                    fill="#50B533"
                  />
                </svg>
                <span className="text-[#314660] text-[19.941px] font-medium leading-[19.941px]">
                  All Online & Transparent
                </span>
              </div>
            </div>
          </div>
          <div className="w-[239.298px] h-[239.298px]">
            <Image
              src={tenantWhyVerb}
              alt="tenant-why-verb"
              width={239.298}
              height={239.298}
            />
          </div>
        </div>
      </section>

      {/* How verve works */}
      {/* <div className="flex justify-center pt-[78px]">
        <div className="flex items-center  w-[1168px] flex-col gap-[60px]">
          <p className="text-[#233244] text-center text-[30px] font-semibold leading-[38px]">
            How Verve Works For Tenants
          </p>
          <div className="flex">
            <PropertyDetailsCard
              header_text="Save Time by Filtering out Unsuitable Properties"
              middle_text="You'll only see properties that are available now, with no fees, appropriate pictures, and all the details up front. We have thousands of properties all over the UK."
              lower_text="As soon as a property isn't available, we take it offline. If you've already enquired about a property that gets taken, we'll email you right away. If you only want to see properties suitable for pets, DSS, students or families, then just tick a box and that's all you'll see."
            />
            <div className="w-[290.5px] h-[169.5px] flex-shrink-0 stroke-[2px] stroke-[#CED3D9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#50B533" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="292"
                height="171"
                viewBox="0 0 292 171"
                fill="none"
              >
                <path
                  d="M0.5 1H275C283.837 1 291 8.16344 291 17V170.5"
                  stroke="#CED3D9"
                  strokeWidth="2"
                  strokeDasharray="8 5"
                />
              </svg>
            </div>
            <PropertyDetailsCard
              header_text="Just Click to Book a Viewing or Speak to Landlord"
              middle_text="Find a property you love? Just press 'Book Viewing'. You'll send a message directly to the landlord. You can speak to them directly, ask questions about the property and find a good time to view."
              lower_text="Verve will protect your identity and mask your details while you arrange the viewing. Get all the info you need straight from the landlord - not a middleman."
            />

            <PropertyDetailsCard
              header_text="View the Property with the Landlord"
              middle_text="View the property and take a look around. The landlord will be there to answer all your questions, without a letting agent getting in the way or piling on the pressure."
              lower_text="This is your chance to find out about your new home from the person who knows it best. Don't worry if you forget anything! You'll be able to message the landlord directly after the viewing, too."
            />

            <PropertyDetailsCard
              header_text="Click Rent Now to Reserve the Property"
              middle_text="If the viewing has gone well, press Rent Now to reserve the property. You'll pay a refundable holding deposit of one week's rent to us - not the landlord. If the tenancy goes ahead, the holding deposit will go towards your first month's rent."
              lower_text="We protect your money with clear terms and conditions, so you can feel safe during the move-in process. You can pay online by card at any time. No more dodgy cash deposits or waiting for offices to open!"
            />

            <PropertyDetailsCard
              header_text="Referencing, Contracts & Deposits: All Processed Online"
              middle_text="If the landlord wants to reference you, we'll make it super easy and keep you in the loop at every step with our online progress dashboard. There is no cost to tenants for referencing."
              lower_text="You'll then be able to pay your tenancy deposit online. We'll register it straight away and issue you the contract, which you can also sign online, so no more arranging a time to sign with all your flatmates!"
            />

            <PropertyDetailsCard
              header_text="Free Concierge and Bills Setup"
              middle_text="As part of moving with OpenRent, you get complimentary access to our personal home concierge service."
              lower_text="Our concierge partners handle all the hassle of setting up council tax, energy and broadband, along with other services to make sure your move-in is as smooth as possible! You can simply book an appointment with the team once you have a move-in date agreed."
            />

            <PropertyDetailsCard
              header_text="Get the keys and move in!"
              middle_text="We'll automatically put your holding deposit towards your first month's rent. Once you've paid the move-in moneys, and signed the tenancy agreement, you'll have a safe, secure tenancy with your landlord. You can access any of your documents (contract, deposit paperwork, references) via your OpenRent dashboard."
              lower_text="Our concierge partners handle all the hassle of settingup council tax, energy and broadband, along with other services to make sure your move-in is as smooth as possible! You can simply book an appointment with the team once you have a move-in date agreed."
            />
          </div>
        </div>
      </div> */}

      {/* grow with verv */}
      {/* <div className="my-[78px]">
        <section className="flex justify-between items-center gap-1 sm:flex-col md:flex-row w-[345px] md:w-[1216px] m-auto sm:px-4 md:px-[87px] py-[24px] rounded-[56px] bg-[#F6FFF4]">
          <Image src={oliveTree} alt="oliveTree" height={32} width={32} />
          <div className="flex justify-center items-center">
            <p className="text-colorTextPrimary text-center text-[20px] font-semibold leading-[24px]">
              Grow with Verv - for each tenancy, we plant an olive tree, rooted
              in the name of Landlords and Tenants.
            </p>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default Tenants;
