import Image from "next/image";
import googleMap from "../../assets/images/google-map.png";
import logo from "../../assets/images/logo.png";
import Facilities from "./Facilities";
import IncludeExclude from "./IncludeExclude";

const SingleProductChild2 = () => {
  return (
    <div>
      {/* summary div */}
      <div className="inline-flex flex-col items-start gap-[40px] ml-[352px] pb-[40px]">
        {/* summary */}
        <div className="flex flex-col items-start gap-[24px]">
          <p className="text-[24px] font-semibold leading-[120%] text-[#314660] font-inter">
            Summary
          </p>
          <div className="flex items-center px-[32px] py-[25px] rounded-[16px] border border-[#EEF1F3] bg-white">
            <div className="flex items-center gap-[126px]">
              <div className="flex flex-col items-start gap-4">
                <Facilities text="Beds" number={6} />
                <Facilities text="Bathroom" number={4} />
                <Facilities text="Area" number="5x7 m" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Facilities text="Beds" number={6} />
                <Facilities text="Bathroom" number={4} />
                <Facilities text="Area" number="5x7 m" />
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div>
          <div className="flex flex-col items-start gap-[24px]">
            <p className="text-[#314660] font-semibold text-[24px] leading-[120%] font-inter">
              Property Description
            </p>
            <div className="flex flex-col items-start gap-[16px]">
              <p className="w-[800px] text-[#56677D] text-[18px] font-normal leading-[150%] font-inter">
                6 bedroom & 3 bathroom student property available from
                01/07/2025 until 30/06/2026 with a fixed deposit of £115 per
                person priced at £499
              </p>
              <p className="w-[800px] text-[#56677D] text-[18px] font-normal leading-[150%] font-inter">
                £115 per person per week (non-ensuite rooms) £125 per person per
                week (ensuite room)
              </p>
              <p className="w-[800px] text-[#56677D] text-[18px] font-normal leading-[150%] font-inter">
                For added convenience, we offer bills inclusive packages
                ensuring utility expenses are covered hassle-free. Please speak
                to us for further details.
              </p>
              <p className="w-[800px] text-[#56677D] text-[18px] font-normal leading-[150%] font-inter">
                Call us now or enquire online to book your viewing while it's
                still available!
              </p>
              <p className="w-[800px] text-[#56677D] text-[18px] font-normal leading-[150%] font-inter">
                Council Tax band (students do not pay this): A
              </p>
              <p className="w-[800px] text-[#56677D] text-[18px] font-normal leading-[150%] font-inter">
                Property ID: L-PS581
              </p>
              <p className="w-[800px] text-[#56677D] text-[18px] font-normal leading-[150%] font-inter">
                The landlord/letting agent would like to let this property as a
                whole. Most commonly to be offered on a joint tenancy agreement
                though some landlords may be able to offer individual tenancy
                agreements. If the property is for a single dweller an
                individual tenancy applies.
              </p>
            </div>
          </div>
        </div>
        {/* amenities & highlights*/}
        <div className="flex items-start gap-[123px]">
          {/* amenities */}
          <div className="flex flex-col items-start gap-[24px]">
            <p className="text-[#314660] font-semibold text-[24px] leading-[120%] font-inter">
              Amenities
            </p>
            <div className="flex flex-col items-start gap-[16px]">
              <IncludeExclude
                text="Extremely close to the pub"
                type="include"
              />
              <IncludeExclude text="6 double bedrooms" type="include" />
              <IncludeExclude
                text="2 shared bathrooms & 1 ensuite"
                type="include"
              />
              <IncludeExclude text="Spacious open plan area" type="include" />
              <IncludeExclude text="Dishwasher, dryer & more" type="include" />
            </div>
          </div>
          {/* highlights */}
          <div className="flex flex-col items-start gap-[24px]">
            <p className="text-[#314660] font-semibold text-[24px] leading-[120%] font-inter">
              Highlights
            </p>
            <div className="flex flex-col items-start gap-[16px]">
              <IncludeExclude text="Furnished" type="include" />

              <IncludeExclude text="EPC Rating : C" type="include" />
              <IncludeExclude text="Garden" type="exclude" />
              <IncludeExclude text="Parking" type="exclude" />
              <IncludeExclude text="Fireplace" type="exclude" />
            </div>
          </div>
        </div>
        {/* bills & preferences*/}
        <div className="flex items-start gap-[308px]">
          {/* bills */}
          <div className="flex flex-col items-start gap-[24px]">
            <p className="text-[#314660] font-semibold text-[24px] leading-[120%] font-inter">
              Bills
            </p>
            <div className="flex flex-col items-start gap-[16px]">
              <IncludeExclude text="Water" type="exclude" />
              <IncludeExclude text="Electricity" type="exclude" />
              <IncludeExclude text="Internet" type="exclude" />
              <IncludeExclude text="Gas" type="exclude" />
            </div>
          </div>
          {/* preferences */}
          <div className="flex flex-col items-start gap-[24px]">
            <p className="text-[#314660] font-semibold text-[24px] leading-[120%] font-inter">
              Preferences
            </p>
            <div className="flex flex-col items-start gap-[16px]">
              <IncludeExclude text="Student Friendly" type="include" />
              <IncludeExclude text="Families Allowed" type="include" />
              <IncludeExclude text="Smokers Allowed" type="exclude" />
              <IncludeExclude text="Pets Allowed" type="exclude" />
              <IncludeExclude text="DSS/LHA Covers Rent " type="exclude" />
            </div>
          </div>
        </div>
        {/* location */}
        <div className="flex flex-col items-start gap-[24px] self-stretch">
          <p className="text-[#314660] font-semibold text-[24px] leading-[120%] font-inter">
            Location
          </p>
          <div className="flex flex-col items-start gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 20C12.375 20 18 13.7981 18 8.88889C18 3.97969 13.9706 0 9 0C4.02944 0 0 3.97969 0 8.88889C0 13.7981 5.625 20 9 20ZM9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
                    fill="#50B533"
                  />
                </svg>
                <p className="text-[#56677D] font-semibold text-[18px] font-sans leading-none pl-[3px]">
                  Grange Road, Selly Oak, Birmingham, B296AP
                </p>
              </div>
            </div>
            {/* image */}
            <div className="flex w-[800px] h-[275px] justify-center items-center rounded-[16px]">
              <div className="w-[800px] h-[275px] flex-shrink-0 bg-[url('../public/images/image 1.png')] bg-lightgray bg-cover bg-center">
                <Image
                  src={googleMap}
                  alt="Image description"
                  width={800}
                  height={27}
                  className="w-[800px] h-[275px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* landlord profile */}
      <div className="inline-flex flex-col justify-center items-center p-[40px_76px] rounded-[24px] border border-[#EEF1F3] bg-white">
        <div className="flex flex-col items-center gap-[24px]">
          <p className="text-[#56677D] font-inter text-[20px] font-semibold leading-[120%]">
            Landlord Profile
          </p>
          <div className="flex flex-col items-center gap-[24px]">
            {/* verv logo */}
            <div className="w-[120px] h-[120px] flex justify-center items-center rounded-full border border-[#50B533]">
              <Image src={logo} alt="logo" height={32} width={80} />
            </div>
            {/* rooms */}
            <div className="flex flex-col items-center gap-[8px]">
              <p className="text-[#314660] font-inter text-[24px] font-semibold leading-[120%]">
                Verv Rooms Limited
              </p>
              <div className="flex items-center gap-[4px]">
                <div className="w-[20.79px] h-[20.79px] fill-[#50B533]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M9.33547 0.94335C9.60849 0.393861 10.3923 0.393862 10.6654 0.943351L12.8951 5.43101C13.0032 5.64861 13.2109 5.79954 13.4513 5.83512L18.4083 6.56894C19.0153 6.65879 19.2575 7.40428 18.8193 7.83373L15.2403 11.3411C15.0667 11.5111 14.9874 11.7554 15.0278 11.9949L15.8617 16.9361C15.9638 17.5411 15.3297 18.0019 14.7858 17.7178L10.3442 15.3978C10.1288 15.2853 9.87203 15.2853 9.65666 15.3978L5.21501 17.7178C4.67115 18.0019 4.037 17.5411 4.13911 16.9361L4.97301 11.9949C5.01345 11.7554 4.9341 11.5111 4.76056 11.3411L1.18156 7.83373C0.743334 7.40428 0.985559 6.65879 1.59252 6.56894L6.54955 5.83512C6.78991 5.79954 6.99765 5.64861 7.10577 5.43101L9.33547 0.94335Z"
                      fill="#50B533"
                    />
                  </svg>
                </div>
                <p className="text-[#314660] font-inter text-[18px] font-medium leading-normal">
                  5 Star Rated by Tenants
                </p>
              </div>
            </div>
            {/* reply rating */}
            <div className="flex flex-col items-center gap-[3px]">
              <div className="flex items-center gap-[4px]">
                <p className="text-[#56677D] font-inter text-[18px] font-normal leading-[150%]">
                  Reply Rating:
                </p>
                <p className="text-[#56677D] font-inter text-[18px] font-semibold leading-normal">
                  98%
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <p className="text-[#56677D] font-inter text-[18px] font-normal leading-[150%]">
                  Reply time:
                </p>
                <p className="text-[#56677D] font-inter text-[18px] font-semibold leading-normal">
                  2 Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductChild2;
