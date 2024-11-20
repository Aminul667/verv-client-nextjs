"use client";

import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const setEmail = () => {};
  const setPassword = () => {};
  const handleSubmit = () => {};

  return (
    // main section
    <section className="flex flex-col items-center justify-center gap-[40px] p-[40px] w-[416px] h-[411px] mt-[56px] mb-[56px] shrink-0 rounded-[16px] border border-secondary-1 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      {/* Create An Account */}
      <div>
        <p className="text-[#314660] text-center font-inter text-2xl font-semibold leading-[120%]">
          Create a new account
        </p>
      </div>
      {/* Rest of Register */}
      <div className="flex flex-col items-center gap-[32px] self-stretch">
        {/* first section */}
        <div className="flex flex-col items-start gap-[24px] self-stretch">
          {/* input section */}
          <div className="flex flex-col items-start gap-[24px] self-stretch">
            {/* email pass */}
            <div className="flex flex-col items-start gap-4 self-stretch">
              {/* email */}
              <div className="flex flex-col items-start gap-4 self-stretch">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex items-center self-stretch flex-[1_0_0] rounded-md border border-gray-400 bg-white px-3 py-1.5"
                  aria-label="Email"
                />
              </div>
              {/* pass */}
              <div className="flex flex-col items-start gap-4 self-stretch flex-[1_0_0]">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div className="relative w-full">
                    <input
                      type="password"
                      placeholder="Password"
                      className="flex w-full items-start self-stretch px-3 py-1.5 rounded-md border border-gray-400 bg-white pr-10"
                      aria-label="Password"
                    />
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1077_2680)">
                        <path
                          d="M7.9995 4.75316C7.57323 4.75316 7.15113 4.83712 6.75731 5.00025C6.36349 5.16338 6.00565 5.40248 5.70423 5.7039C5.40281 6.00531 5.16371 6.36315 5.00059 6.75697C4.83746 7.1508 4.7535 7.57289 4.7535 7.99916C4.7535 8.42544 4.83746 8.84753 5.00059 9.24135C5.16371 9.63518 5.40281 9.99302 5.70423 10.2944C6.00565 10.5959 6.36349 10.835 6.75731 10.9981C7.15113 11.1612 7.57323 11.2452 7.9995 11.2452C8.86039 11.2452 9.68603 10.9032 10.2948 10.2944C10.9035 9.68569 11.2455 8.86006 11.2455 7.99916C11.2455 7.13827 10.9035 6.31264 10.2948 5.7039C9.68603 5.09515 8.86039 4.75316 7.9995 4.75316ZM5.7535 7.99916C5.7535 7.40349 5.99013 6.83221 6.41134 6.411C6.83254 5.9898 7.40382 5.75316 7.9995 5.75316C8.59518 5.75316 9.16646 5.9898 9.58766 6.411C10.0089 6.83221 10.2455 7.40349 10.2455 7.99916C10.2455 8.59484 10.0089 9.16612 9.58766 9.58733C9.16646 10.0085 8.59518 10.2452 7.9995 10.2452C7.40382 10.2452 6.83254 10.0085 6.41134 9.58733C5.99013 9.16612 5.7535 8.59484 5.7535 7.99916Z"
                          fill="#6C757D"
                        />
                        <path
                          d="M9.7955 1.34216C9.2685 -0.447836 6.7305 -0.447836 6.2035 1.34216L6.1095 1.66116C6.0727 1.78612 6.0084 1.90125 5.92132 1.99812C5.83424 2.095 5.72658 2.17115 5.60624 2.22102C5.4859 2.27088 5.35593 2.29318 5.22585 2.28628C5.09578 2.27939 4.96889 2.24347 4.8545 2.18116L4.5625 2.02116C2.9225 1.12916 1.1295 2.92316 2.0225 4.56216L2.1815 4.85416C2.24381 4.96856 2.27972 5.09544 2.28662 5.22552C2.29351 5.3556 2.27121 5.48557 2.22135 5.60591C2.17149 5.72624 2.09533 5.8339 1.99846 5.92098C1.90158 6.00806 1.78645 6.07236 1.6615 6.10916L1.3425 6.20316C-0.4475 6.73016 -0.4475 9.26816 1.3425 9.79516L1.6615 9.88916C1.78645 9.92597 1.90158 9.99027 1.99846 10.0773C2.09533 10.1644 2.17149 10.2721 2.22135 10.3924C2.27121 10.5128 2.29351 10.6427 2.28662 10.7728C2.27972 10.9029 2.24381 11.0298 2.1815 11.1442L2.0215 11.4362C1.1295 13.0762 2.9225 14.8702 4.5625 13.9762L4.8545 13.8172C4.96889 13.7549 5.09578 13.7189 5.22585 13.712C5.35593 13.7052 5.4859 13.7275 5.60624 13.7773C5.72658 13.8272 5.83424 13.9033 5.92132 14.0002C6.0084 14.0971 6.0727 14.2122 6.1095 14.3372L6.2035 14.6562C6.7305 16.4462 9.2685 16.4462 9.7955 14.6562L9.8895 14.3372C9.9263 14.2122 9.9906 14.0971 10.0777 14.0002C10.1648 13.9033 10.2724 13.8272 10.3928 13.7773C10.5131 13.7275 10.6431 13.7052 10.7731 13.712C10.9032 13.7189 11.0301 13.7549 11.1445 13.8172L11.4365 13.9772C13.0765 14.8702 14.8705 13.0752 13.9765 11.4362L13.8175 11.1442C13.7552 11.0298 13.7193 10.9029 13.7124 10.7728C13.7055 10.6427 13.7278 10.5128 13.7776 10.3924C13.8275 10.2721 13.9037 10.1644 14.0005 10.0773C14.0974 9.99027 14.2125 9.92597 14.3375 9.88916L14.6565 9.79516C16.4465 9.26816 16.4465 6.73016 14.6565 6.20316L14.3375 6.10916C14.2125 6.07236 14.0974 6.00806 14.0005 5.92098C13.9037 5.8339 13.8275 5.72624 13.7776 5.60591C13.7278 5.48557 13.7055 5.3556 13.7124 5.22552C13.7193 5.09544 13.7552 4.96856 13.8175 4.85416L13.9775 4.56216C14.8705 2.92216 13.0755 1.12916 11.4365 2.02216L11.1445 2.18116C11.0301 2.24347 10.9032 2.27939 10.7731 2.28628C10.6431 2.29318 10.5131 2.27088 10.3928 2.22102C10.2724 2.17115 10.1648 2.095 10.0777 1.99812C9.9906 1.90125 9.9263 1.78612 9.8895 1.66116L9.7955 1.34216ZM7.1625 1.62516C7.4085 0.790164 8.5905 0.790164 8.8365 1.62516L8.9305 1.94416C9.00952 2.21225 9.14754 2.45925 9.33443 2.66706C9.52132 2.87488 9.75235 3.03823 10.0106 3.14514C10.2688 3.25206 10.5477 3.29983 10.8268 3.28495C11.1059 3.27008 11.3781 3.19293 11.6235 3.05916L11.9145 2.89916C12.6785 2.48416 13.5145 3.31916 13.0985 4.08416L12.9395 4.37616C12.8059 4.62159 12.729 4.89379 12.7143 5.17282C12.6995 5.45185 12.7474 5.73063 12.8544 5.98875C12.9615 6.24686 13.1249 6.47777 13.3327 6.66454C13.5405 6.85131 13.7875 6.98922 14.0555 7.06816L14.3735 7.16216C15.2085 7.40816 15.2085 8.59016 14.3735 8.83616L14.0545 8.93016C13.7864 9.00918 13.5394 9.1472 13.3316 9.33409C13.1238 9.52098 12.9604 9.75201 12.8535 10.0102C12.7466 10.2685 12.6988 10.5474 12.7137 10.8264C12.7286 11.1055 12.8057 11.3778 12.9395 11.6232L13.0995 11.9142C13.5145 12.6782 12.6795 13.5142 11.9145 13.0982L11.6235 12.9392C11.378 12.8054 11.1057 12.7283 10.8266 12.7135C10.5474 12.6987 10.2685 12.7465 10.0103 12.8535C9.75204 12.9606 9.52102 13.124 9.33418 13.332C9.14734 13.5399 9.00941 13.787 8.9305 14.0552L8.8365 14.3732C8.5905 15.2082 7.4085 15.2082 7.1625 14.3732L7.0685 14.0542C6.98944 13.7862 6.85145 13.5394 6.66463 13.3316C6.47781 13.1239 6.24689 12.9607 5.98879 12.8537C5.73069 12.7468 5.45194 12.699 5.17297 12.7138C4.894 12.7286 4.62186 12.8056 4.3765 12.9392L4.0845 13.0992C3.3205 13.5142 2.4845 12.6792 2.9005 11.9142L3.0595 11.6232C3.19345 11.3777 3.27075 11.1054 3.28573 10.8262C3.3007 10.547 3.25297 10.268 3.14604 10.0096C3.03911 9.75125 2.87569 9.52011 2.66778 9.33315C2.45986 9.14619 2.21272 9.00815 1.9445 8.92916L1.6255 8.83517C0.7905 8.58916 0.7905 7.40716 1.6255 7.16116L1.9445 7.06716C2.21231 6.98807 2.45904 6.8501 2.66664 6.66335C2.87425 6.4766 3.03746 6.24579 3.14435 5.98782C3.25124 5.72985 3.2991 5.45124 3.28442 5.17238C3.26973 4.89353 3.19289 4.62149 3.0595 4.37616L2.8995 4.08416C2.4845 3.32016 3.3195 2.48416 4.0845 2.90016L4.3765 3.05916C4.62186 3.19274 4.894 3.26974 5.17297 3.28452C5.45194 3.2993 5.73069 3.25148 5.98879 3.14458C6.24689 3.03768 6.47781 2.87439 6.66463 2.66669C6.85145 2.45898 6.98944 2.21211 7.0685 1.94416L7.1625 1.62516Z"
                          fill="#6C757D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1077_2680">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* radio button */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col justify-center items-start bg-[rgba(255,255,255,0)]">
                <p className="text-[#3B5374] font-inter text-base font-normal leading-[150%]">
                  Register as
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <label className="flex items-center relative">
                    <input
                      type="radio"
                      name="option"
                      id="landlord"
                      className="peer w-3.5 h-3.5 mr-[3px] appearance-none border border-gray-300 rounded-full cursor-pointer checked:border-0"
                    />
                    <svg
                      className="absolute left-0 hidden peer-checked:block pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="7.7"
                        stroke="#50B533"
                        strokeWidth="1.4"
                      />
                      <circle cx="9" cy="9" r="5.25" fill="#50B533" />
                    </svg>
                    <span className="text-[#314660] font-inter text-sm font-semibold leading-normal ml-[3px]">
                      Landlord/Agent
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center relative">
                    <input
                      type="radio"
                      name="option"
                      id="tenant"
                      className="peer w-3.5 h-3.5 mr-[3px] appearance-none border border-gray-300 rounded-full cursor-pointer checked:border-0"
                    />
                    <svg
                      className="absolute left-0 hidden peer-checked:block pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="7.7"
                        stroke="#50B533"
                        strokeWidth="1.4"
                      />
                      <circle cx="9" cy="9" r="5.25" fill="#50B533" />
                    </svg>
                    <span className="text-[#314660] font-inter text-sm font-semibold leading-normal ml-[3px]">
                      Tenant
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* register button */}
          <button className="rounded-[4px] bg-[#50B533] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex p-[10px_18px] justify-center items-center gap-[8px] self-stretch">
            <span className="text-[#FFFFFF] font-inter text-lg font-semibold">
              Register
            </span>
          </button>
        </div>
        {/* got an account section */}
        <div>
          <p className="text-[#3B5374] text-center font-inter text-[16px] font-normal leading-[150%]">
            Got an account?{" "}
            <span className="text-[#50B533] font-inter text-[16px] font-semibold leading-normal underline decoration-solid decoration-auto decoration-ink-none underline-offset-auto text-underline-position-from-font">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
