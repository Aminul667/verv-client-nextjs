import Image from "next/image";
import propertyImage from "../../assets/images/property-image.jpg";
import { Button } from "../ui/button";

const SingleListing = () => {
  return (
    <div className="w-[384px] h-[549px] rounded-[24px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <Image
        src={propertyImage}
        alt="property image"
        width={384}
        height={200}
        className="w-[384px] h-[200px] flex-shrink-0 rounded-t-[24px] rounded-b-none bg-lightgray bg-cover bg-center bg-no-repeat"
      />
      <div className="mt-8 px-6 pb-8">
        <div className="flex justify-between items-center h-[40px]">
          <p>
            <span className="text-2xl font-semibold text-colorTextLime leading-[120%]">
              &#163;2,095
            </span>
            <span className="opacity-50 leading-[150%]">/month</span>
          </p>
          <div className="p-[10px] rounded-full border border-colorButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.59837 5.265C3.25014 5.61322 2.97391 6.02662 2.78546 6.48159C2.597 6.93657 2.5 7.42421 2.5 7.91667C2.5 8.40913 2.597 8.89677 2.78546 9.35174C2.97391 9.80671 3.25014 10.2201 3.59837 10.5683L10 16.97L16.4017 10.5683C17.105 9.86507 17.5001 8.91123 17.5001 7.91667C17.5001 6.9221 17.105 5.96827 16.4017 5.265C15.6984 4.56173 14.7446 4.16664 13.75 4.16664C12.7555 4.16664 11.8016 4.56173 11.0984 5.265L10 6.36333L8.9017 5.265C8.55348 4.91677 8.14008 4.64055 7.68511 4.45209C7.23013 4.26363 6.74249 4.16663 6.25003 4.16663C5.75757 4.16663 5.26993 4.26363 4.81496 4.45209C4.35999 4.64055 3.94659 4.91677 3.59837 5.265V5.265Z"
                stroke="#449A2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-colorTextPrimary leading-[120%]">
          Palm Harbor
        </h2>
        <p className="text-base font-normal text-colorTextSecondary leading-[150%] my-2">
          2699 Green Valley, Highland Lake, FL
        </p>
        <div className="flex items-center gap-1 h-[24px]">
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
              d="M8 17.3333C10.8125 17.3333 15.5 12.165 15.5 8.07403C15.5 3.98304 12.1421 0.666626 8 0.666626C3.85786 0.666626 0.5 3.98304 0.5 8.07403C0.5 12.165 5.1875 17.3333 8 17.3333ZM8 10.6667C9.38071 10.6667 10.5 9.54738 10.5 8.16667C10.5 6.78595 9.38071 5.66667 8 5.66667C6.61929 5.66667 5.5 6.78595 5.5 8.16667C5.5 9.54738 6.61929 10.6667 8 10.6667Z"
              fill="#449A2B"
            />
          </svg>
          <p className="text-lg font-semibold text-colorTextLime">
            0.23{" "}
            <span className="text-[#000929] leading-[150%] opacity-50">
              miles
            </span>
          </p>
        </div>

        <div className="w-[336px] border border-[#EAEDEF] my-4"></div>

        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M17.4993 9.48317V7.1665C17.4993 5.7915 16.3743 4.6665 14.9993 4.6665H11.666C11.0243 4.6665 10.441 4.9165 9.99935 5.3165C9.55768 4.9165 8.97435 4.6665 8.33268 4.6665H4.99935C3.62435 4.6665 2.49935 5.7915 2.49935 7.1665V9.48317C1.99102 9.9415 1.66602 10.5998 1.66602 11.3332V16.3332H3.33268V14.6665H16.666V16.3332H18.3327V11.3332C18.3327 10.5998 18.0077 9.9415 17.4993 9.48317ZM11.666 6.33317H14.9993C15.4577 6.33317 15.8327 6.70817 15.8327 7.1665V8.83317H10.8327V7.1665C10.8327 6.70817 11.2077 6.33317 11.666 6.33317ZM4.16602 7.1665C4.16602 6.70817 4.54102 6.33317 4.99935 6.33317H8.33268C8.79102 6.33317 9.16602 6.70817 9.16602 7.1665V8.83317H4.16602V7.1665ZM3.33268 12.9998V11.3332C3.33268 10.8748 3.70768 10.4998 4.16602 10.4998H15.8327C16.291 10.4998 16.666 10.8748 16.666 11.3332V12.9998H3.33268Z"
                fill="#50B533"
              />
            </svg>
            <span className="text-sm font-normal text-colorTextSecondary leading-[120%]">
              3 Beds
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.4993 8.33333H5.83268V5.83333C5.83268 4.91417 6.58018 4.16667 7.49935 4.16667C8.41852 4.16667 9.16602 4.91417 9.16602 5.83333H10.8327C10.8327 3.995 9.33768 2.5 7.49935 2.5C5.66102 2.5 4.16602 3.995 4.16602 5.83333V8.33333H2.49935C2.27834 8.33333 2.06637 8.42113 1.91009 8.57741C1.75381 8.73369 1.66602 8.94565 1.66602 9.16667V10.8333C1.66602 13.005 3.06102 14.8525 4.99935 15.5417V18.3333H6.66602V15.8333H13.3327V18.3333H14.9993V15.5417C16.9377 14.8525 18.3327 13.005 18.3327 10.8333V9.16667C18.3327 8.94565 18.2449 8.73369 18.0886 8.57741C17.9323 8.42113 17.7204 8.33333 17.4993 8.33333ZM16.666 10.8333C16.666 12.6717 15.171 14.1667 13.3327 14.1667H6.66602C4.82768 14.1667 3.33268 12.6717 3.33268 10.8333V10H16.666V10.8333Z"
                fill="#50B533"
              />
            </svg>
            <span className="text-sm font-normal text-colorTextSecondary leading-[120%]">
              4 Bathrooms
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clipPath="url(#clip0_974_3316)">
                <path
                  d="M8.83148 16.0437L3.45631 10.6685C2.8479 10.0601 2.8479 8.93989 3.45631 8.33148L8.83148 2.95631C9.43989 2.3479 10.5601 2.3479 11.1685 2.95631L16.5437 8.33148C17.1521 8.93989 17.1521 10.0601 16.5437 10.6685L11.1685 16.0437C10.5601 16.6521 9.43989 16.6521 8.83148 16.0437V16.0437Z"
                  stroke="#50B533"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 13.6714L6.36371 18.0351"
                  stroke="#50B533"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.6367 18.0351L18.0004 13.6714"
                  stroke="#50B533"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_974_3316">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-normal text-colorTextSecondary leading-[120%]">
              3 x 3 m<sup>2</sup>
            </span>
          </div>
        </div>
        <p className="text-colorTextSecondary text-[12px] font-semibold leading-[120%] mt-6 mb-8">
          Last updated 1 week ago
        </p>
      </div>
      <Button className="w-full">View Details</Button>
    </div>
  );
};

export default SingleListing;
