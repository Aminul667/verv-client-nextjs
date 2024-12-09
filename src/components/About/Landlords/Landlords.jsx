import Image from "next/image";
import landlordImage from "../../../assets/images/landlord-about-house.jpg";
import ellipse1 from "../../../assets/images/ellipse-1.png";
import ellipse2 from "../../../assets/images/ellipse-2.png";
import ellipse3 from "../../../assets/images/ellipse-3.png";
import ellipse4 from "../../../assets/images/ellipse-4.png";
import ellipse5 from "../../../assets/images/ellipse-5.png";
import ellipse6 from "../../../assets/images/ellipse-6.png";
import rightEllipse from "../../../assets/images/right-ellipse.jpg";

const Landlords = () => {
  const imageList = [ellipse2, ellipse3, ellipse4, ellipse5, ellipse6];
  const countElement = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col gap-[100px]">
      {/* top section */}
      <div className="flex w-[1920px] h-[540px] px-[112px] py-[80px] justify-center items-center gap-[32px] flex-shrink-0 bg-[rgba(238,248,235,0.78)]">
        <div className="w-[592px] h-[380px] flex-shrink-0">
          <div className="w-[592px] h-[380px] flex-shrink-0 rounded-[16px] bg-[rgba(213,237,206,0.60)] pl-[40px] pt-[40px]">
            <div className="flex w-[515px] flex-col items-start gap-[32px] ">
              <div className="flex flex-col items-start gap-[24px] self-stretch">
                <p className="self-stretch text-[#233244] font-inter text-[48px] font-bold leading-[60px]">
                  Advertise Your Rental Property!
                </p>
                <p className="self-stretch text-[#233244] font-inter text-[16px] font-normal leading-[24px]">
                  When you create your first lettings advert on Verve, we will
                  review and publish it to the property listings on Rightmove,
                  Zoopla, PrimeLocation and all major property portals.
                </p>
              </div>
              <button className="flex w-[272px] h-[56px] px-[16px] py-[8px] justify-center items-center gap-[8px] rounded-[32px] bg-[#50B533]">
                <span className="text-[#FFF] font-inter text-[18px] font-semibold leading-normal">
                  Create Your Advert
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* image part */}
        <div className="w-[592px] h-[380px] flex-shrink-0 rounded-[24px] bg-lightgray bg-[0px_-306.228px] bg-[length:100%_250%] bg-no-repeat bg-[#D9D9D9] relative">
          <Image
            src={landlordImage}
            alt="landlordImage"
            layout="fill"
            objectFit="cover"
            className="rounded-[24px]"
          />
        </div>
      </div>
      {/* rating */}

      <section className="flex justify-between items-center flex-col md:flex-row w-[345px] md:w-[1216px] m-auto py-[36px]">
        {/* trustpilot */}
        <div className="rounded-[40px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] w-full h-[195px] md:w-[596px] md:h-[200px] md:px-[32px] md:py-[28px]">
          <div className="flex justify-center items-center">
            <div className="flex gap-[12.863px]">
              <div>
                <div className="flex justify-center items-center mr-[12px]">
                  <Image src={ellipse1} alt="" />
                  {imageList.map((image, index) => (
                    <Image alt="" key={index} src={image} className="-ml-5" />
                  ))}
                  <p className="-ml-6 text-white">+</p>
                </div>
              </div>
              <div>
                <h2 className="text-[#449A2B] font-inter text-[32px] font-bold leading-[120%]">
                  72k+
                </h2>
                <p className="font-semibold text-textColorSecondary">
                  Happy Tenants!
                </p>
              </div>
            </div>
          </div>
          <div className="w-[532.01px] h-[1.206px] bg-[#314660] opacity-10 my-4"></div>
          <div className="flex gap-[19.294px] justify-center items-center">
            <div>
              <div className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g clipPath="url(#clip0_427_2727)">
                    <path
                      d="M19.891 19.2787L22.3141 26.7385L14.112 20.7769L19.891 19.2787ZM27.385 11.1352H17.2443L14.1131 1.48584L10.9707 11.1374L0.830078 11.1242L9.04219 17.0957L5.89986 26.7374L14.112 20.7758L19.1829 17.0957L27.385 11.1363V11.1352Z"
                      fill="#00AD6F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_427_2727">
                      <rect
                        width="26.5549"
                        height="26.5549"
                        fill="white"
                        transform="translate(0.830078 0.833984)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className="text-xl text-[#00AD6F] font-semibold leading-[150%%]">
                  Trustpilot
                </h3>
              </div>
              <p className="text-[12px] font-semibold text-textColorSecondary text-right">
                Rated Excellent
              </p>
            </div>
            <div>
              <div className="flex gap-1">
                {countElement.map((num, index) => (
                  <div
                    className="bg-[#00AD6F] w-[26.555px] h-[26.555px] flex justify-center items-center rounded-[2.213px]"
                    key={index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_427_2736)">
                        <path
                          d="M11.7566 11.1254L13.1701 15.4769L8.38546 11.9993L11.7566 11.1254ZM16.1281 6.37503H10.2127L8.38611 0.746216L6.55308 6.37632L0.637695 6.36858L5.42809 9.85197L3.59507 15.4763L8.38546 11.9987L11.3435 9.85197L16.1281 6.37568V6.37503Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_427_2736">
                          <rect
                            width="15.4904"
                            height="15.4904"
                            fill="white"
                            transform="translate(0.637695 0.366211)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                ))}

                <p className="text-xl font-bold text-[#00AD6F]">5</p>
              </div>
              <p className="text-[12px] font-semibold text-textColorSecondary">
                Verified Company - 95% 5-Star Rating
              </p>
            </div>
          </div>
        </div>

        {/* google logo */}
        <div className="rounded-[40px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] w-full h-[195px] md:w-[596px] md:h-[200px] md:px-[32px] md:py-[28px] sm:mt-6 md:mt-0">
          <div className="flex justify-center items-center gap-4">
            <div className="w-[56px] h-[56px]">
              <Image
                src={rightEllipse}
                alt="house"
                width={56}
                height={56}
                className="w-[56px] h-[56px] rounded-full"
              />
            </div>
            <div>
              <h2 className="text-[#449A2B] font-inter text-[32px] font-bold leading-[120%]">
                200+
              </h2>
              <p className="text-[#314660] font-inter text-[14px] font-semibold">
                New Listings Everyday!
              </p>
            </div>
          </div>
          <div className="w-[532.01px] h-[1.206px] bg-[#314660] opacity-10 my-4"></div>
          <div className="flex justify-center items-center gap-[8px]">
            <div className="w-[56px] h-[56px] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
              >
                <path
                  d="M52.64 29.4784C52.64 27.6584 52.4767 25.9084 52.1733 24.2284H28V34.1684H41.8133C41.2067 37.3651 39.3867 40.0717 36.6567 41.8917V48.3551H44.9867C49.84 43.8751 52.64 37.2951 52.64 29.4784Z"
                  fill="#4285F4"
                />
                <path
                  d="M27.9993 54.5616C34.9293 54.5616 40.7393 52.2749 44.9859 48.3549L36.6559 41.8916C34.3693 43.4316 31.4526 44.3649 27.9993 44.3649C21.3259 44.3649 15.6559 39.8616 13.6259 33.7949H5.08594V40.4216C9.30927 48.7983 17.9659 54.5616 27.9993 54.5616Z"
                  fill="#34A853"
                />
                <path
                  d="M13.6254 33.7716C13.112 32.2316 12.8087 30.5983 12.8087 28.8949C12.8087 27.1916 13.112 25.5583 13.6254 24.0183V17.3916H5.08536C3.33536 20.8449 2.33203 24.7416 2.33203 28.8949C2.33203 33.0483 3.33536 36.9449 5.08536 40.3983L11.7354 35.2183L13.6254 33.7716Z"
                  fill="#FBBC05"
                />
                <path
                  d="M27.9993 13.4484C31.7793 13.4484 35.1393 14.7551 37.8226 17.2751L45.1726 9.92506C40.7159 5.77173 34.9293 3.22839 27.9993 3.22839C17.9659 3.22839 9.30927 8.99173 5.08594 17.3917L13.6259 24.0184C15.6559 17.9517 21.3259 13.4484 27.9993 13.4484Z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#314660] text-left font-plusjakartasans text-[14px] font-bold">
                Google Rating
              </p>
              <div className="flex items-left gap-[3px]">
                <p className="text-[#FEA500] text-center font-plusjakartasans text-[16px] font-extrabold">
                  4.8
                </p>
                <div className="flex justify-center items-center">
                  {countElement.map((star, index) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.79"
                      height="20.79"
                      viewBox="0 0 21 21"
                      fill="none"
                      key={index}
                    >
                      <path
                        d="M9.73001 1.33843C10.003 0.788942 10.7869 0.788942 11.0599 1.33843L13.2896 5.82609C13.3977 6.04369 13.6055 6.19462 13.8458 6.2302L18.8028 6.96402C19.4098 7.05387 19.652 7.79936 19.2138 8.22882L15.6348 11.7362C15.4613 11.9062 15.3819 12.1504 15.4224 12.39L16.2563 17.3312C16.3584 17.9362 15.7242 18.397 15.1804 18.1129L10.7387 15.7929C10.5233 15.6804 10.2666 15.6804 10.0512 15.7929L5.60954 18.1129C5.06568 18.397 4.43153 17.9362 4.53364 17.3312L5.36755 12.39C5.40798 12.1504 5.32863 11.9062 5.15509 11.7362L1.57609 8.22882C1.13787 7.79936 1.38009 7.05387 1.98705 6.96402L6.94409 6.2302C7.18444 6.19462 7.39218 6.04369 7.5003 5.82609L9.73001 1.33843Z"
                        fill="#FEA500"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#56677D] text-left font-plusjakartasans text-[10px] font-medium">
                See all our reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center gap-[48px] w-[1216px] m-auto">
        <p className="text-[#314660] font-inter text-[30px] font-semibold leading-[38px]">
          Choose the perfect package for you
        </p>
        <div className="flex items-center gap-[32px] self-stretch">
          {/* Listing */}
          <div className="flex flex-col justify-center items-center w-[384px] p-[48px_62px] rounded-[24px] border border-[#EEF1F3] bg-[#F5F5F5]">
            <div className="flex flex-col items-center gap-[40px] w-[260px]">
              <div className="flex flex-col items-center gap-[8px] w-[199px]">
                <p className="text-[#314660] text-center font-inter text-[24px] font-semibold leading-[120%]">
                  Listing Only
                </p>
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal truncate">
                  For Landlords & Agents
                </p>
              </div>
              <p className="text-[#A6AFBB] text-center font-inter text-[64px] font-bold leading-[120%]">
                ZERO
              </p>
              <div className="flex flex-col items-center gap-[8px] w-[212px]">
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  Looking to List with
                </p>
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  Verv only?
                </p>
              </div>
              <button className="flex h-[48px] p-[8px] justify-center items-center gap-[8px] self-stretch rounded-[8px] border border-[#CED3D9] bg-white">
                <span className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  Add Listing Now for Free
                </span>
              </button>
            </div>
          </div>
          {/* Ultimate */}
          <div className="flex flex-col justify-center items-center p-[48px_55px] rounded-[24px] border border-[#EEF1F3] bg-[#FAF4FF]">
            <div className="flex flex-col items-center gap-[40px]">
              <div className="flex flex-col items-center gap-[8px] w-[199px]">
                <p className="text-[#314660] text-center font-inter text-[24px] font-semibold leading-[28.8px] truncate">
                  Ultimate Advertising
                </p>
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  Portal Advertising
                </p>
              </div>
              <div className="flex justify-center items-baseline gap-[8px]">
                <p className="text-[#314660] text-center font-inter text-[64px] font-bold leading-[76.8px]">
                  £49
                </p>
                <p className="text-[#314660] font-inter text-[18px] font-medium leading-normal">
                  Inc. VAT
                </p>
              </div>
              <div className="flex flex-col items-center gap-[8px]">
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  For Landlords that want:
                </p>
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  Portal Advertising (Zoopla etc.)
                </p>
              </div>
              <button className="flex w-[200px] h-[48px] p-[8px] justify-center items-center gap-[8px] rounded-[8px] bg-[#314660]">
                <span className="text-white font-inter text-[18px] font-semibold leading-normal">
                  Add Listing Now
                </span>
              </button>
            </div>
          </div>
          {/* Rent Now */}
          <div className="flex flex-col w-[384px] p-[48px_62px] justify-center items-center rounded-[24px] border border-[#EEF1F3] bg-[#EEF8EB]">
            <div className="flex flex-col w-[260px] items-center gap-[30px]">
              <div className="flex flex-col w-[199px] items-center gap-[8px]">
                <p className="text-[#314660] text-center font-inter text-[24px] font-semibold leading-[28.8px]">
                  Rent Now
                </p>
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  + Ultimate Advertising
                </p>
              </div>
              <div className="flex justify-center items-baseline gap-[8px]">
                <p className="text-[#50B533] text-center font-inter text-[64px] font-bold leading-[76.8px]">
                  £69
                </p>
                <p className="text-[#314660] font-inter text-[18px] font-medium leading-normal">
                  Inc. VAT
                </p>
              </div>
              <div className="flex flex-col w-[212px] items-center gap-[8px]">
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal">
                  For Landlords that want:
                </p>
                <p className="text-[#314660] font-inter text-[18px] font-semibold leading-normal truncate">
                  Advertising + Tenant Creation
                </p>
                <p className="text-[#449A2B] font-inter text-[18px] font-medium leading-normal underline decoration-solid decoration-none decoration-auto">
                  More Info
                </p>
              </div>
              <button className="flex w-[200px] h-[48px] p-[8px] justify-center items-center gap-[8px] rounded-[8px] bg-[#50B533]">
                <span className="text-white font-inter text-[18px] font-semibold leading-normal">
                  Add Listing Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start w-[835px] items-start gap-[24px] ml-[336px]">
        <div className="flex flex-col items-start gap-7 self-stretch">
          <p className="text-[#314660] font-semibold text-[30px] leading-[38px]">
            Discover New Opportunities for Landlords!
          </p>
          <p className="text-[#233244] font-normal text-[16px] leading-[24px] w-[833px]">
            Verve does a lot more than property ads and listings. We offer a
            full tenancy creation service called Rent Now, and everything else
            you need to rent your house, including: gas & electricity safety
            certification, inventories, photography, insurance and much more!
          </p>
        </div>
        <button className="flex w-[262px] h-[52px] p-1.5 justify-center items-center gap-2 rounded-[32px] bg-[#50B533]">
          <span className="text-white font-medium text-[16px] leading-[24px]">
            See All OpenRent Products{" "}
          </span>
        </button>
      </div>

      {/* Why Advertise With Verve */}

      <div className="flex flex-col w-[1216px] items-start gap-[28px] m-auto">
        <p className="self-stretch text-[#314660] font-semibold text-[30px] leading-[38px]">
          What our landlords are saying:
        </p>
        <div className="flex items-center gap-8 self-stretch">
          {/* single */}
          <div className="w-[384px] h-[359px]">
            <div className="w-[384px] h-[359px] flex-shrink-0 rounded-[20px] border border-[#EEF1F3] bg-[#FCFCFC] relative">
              <div className="inline-flex items-center gap-3 pl-[28px] pt-[28px] pb-[27.21px]">
                <Image
                  className="w-[60px] h-[60px] rounded-full border border-white  bg-gray-300 bg-center bg-cover bg-no-repeat"
                  width={60}
                  height={60}
                  src={landlordImage}
                  alt="landlordImage"
                />
                <div className="flex w-[165px] flex-col items-start gap-[10px] ">
                  <p className="self-stretch text-[#314660] font-inter text-[20px] font-semibold leading-[30px]">
                    Mrs Anne Downs
                  </p>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[384px] h-[1px] flex-shrink-0 bg-[#EEF1F3]"></div>
              <p className="w-[328px] text-[#233244] font-normal text-[16px] leading-[24px] pl-[28px] pt-[28px]">
                Verve has made finding tenants without an estate agent so easy
                and will take you through each step of the way. If you need help
                they are available by phone or email for extra peace of mind....
              </p>
              <p className="text-[#314660] font-semibold text-[24px] leading-[32px] pl-[28px] absolute bottom-[28px]">
                &ldquo;So Easy&rdquo;
              </p>
            </div>
          </div>
          <div className="w-[384px] h-[359px]">
            <div className="w-[384px] h-[359px] flex-shrink-0 rounded-[20px] border border-[#EEF1F3] bg-[#FCFCFC] relative">
              <div className="inline-flex items-center gap-3 pl-[28px] pt-[28px] pb-[27.21px]">
                <Image
                  className="w-[60px] h-[60px] rounded-full border border-white  bg-gray-300 bg-center bg-cover bg-no-repeat"
                  width={60}
                  height={60}
                  src={landlordImage}
                  alt="landlordImage"
                />
                <div className="flex w-[165px] flex-col items-start gap-[10px]">
                  <p className="self-stretch text-[#314660] font-inter text-[20px] font-semibold leading-[30px]">
                    Mrs Anne Downs
                  </p>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[384px] h-[1px] flex-shrink-0 bg-[#EEF1F3]"></div>
              <p className="w-[328px] text-[#233244] font-normal text-[16px] leading-[24px] pl-[28px] pt-[28px]">
                I have used OpenRent for two tenancies. A few questions have
                cropped up during this time, which they have always answered
                promptly and, courteously.
              </p>
              <p className="text-[#314660] font-semibold text-[24px] leading-[32px] pl-[28px] absolute bottom-[28px]">
                &ldquo;Excellent service&rdquo;
              </p>
            </div>
          </div>
          <div className="w-[384px] h-[359px]">
            <div className="w-[384px] h-[359px] flex-shrink-0 rounded-[20px] border border-[#EEF1F3] bg-[#FCFCFC] relative">
              <div className="inline-flex items-center gap-3 pl-[28px] pt-[28px] pb-[27.21px]">
                <Image
                  className="w-[60px] h-[60px] rounded-full border border-white  bg-gray-300 bg-center bg-cover bg-no-repeat"
                  width={60}
                  height={60}
                  src={landlordImage}
                  alt="landlordImage"
                />
                <div className="flex w-[165px] flex-col items-start gap-[10px]">
                  <p className="self-stretch text-[#314660] font-inter text-[20px] font-semibold leading-[30px]">
                    Mrs Anne Downs
                  </p>
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M9.73001 1.33831C10.003 0.78882 10.7869 0.78882 11.0599 1.33831L13.2896 5.82597C13.3977 6.04356 13.6055 6.1945 13.8458 6.23008L18.8028 6.96389C19.4098 7.05375 19.652 7.79924 19.2138 8.22869L15.6348 11.736C15.4613 11.9061 15.3819 12.1503 15.4224 12.3899L16.2563 17.3311C16.3584 17.9361 15.7242 18.3968 15.1804 18.1128L10.7387 15.7928C10.5233 15.6803 10.2666 15.6803 10.0512 15.7928L5.60954 18.1128C5.06568 18.3968 4.43153 17.9361 4.53364 17.3311L5.36755 12.3899C5.40798 12.1503 5.32863 11.9061 5.15509 11.736L1.57609 8.22869C1.13787 7.79924 1.38009 7.05375 1.98705 6.96389L6.94409 6.23008C7.18444 6.1945 7.39218 6.04356 7.5003 5.82597L9.73001 1.33831Z"
                        fill="#FEA500"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[384px] h-[1px] flex-shrink-0 bg-[#EEF1F3]"></div>
              <p className="w-[328px] text-[#233244] font-normal text-[16px] leading-[24px] pl-[28px] pt-[28px]">
                Verve has made finding tenants without an estate agent so easy
                and will take you through each step of the way. If you need help
                they are available by phone or email for extra peace of mind....
              </p>
              <p className="text-[#314660] font-semibold text-[24px] leading-[32px] pl-[28px] absolute bottom-[28px]">
                &ldquo;Great advertising portal&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landlords;
