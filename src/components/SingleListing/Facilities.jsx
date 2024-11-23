const Facilities = ({ text, number }) => {
  return (
    <div className="flex justify-center items-center gap-[8px]">
      <div className="flex">
        {text == "Beds" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className="pr-[3px]"
          >
            <path
              d="M21 11.2798V8.49982C21 6.84982 19.65 5.49982 18 5.49982H14C13.23 5.49982 12.53 5.79982 12 6.27982C11.47 5.79982 10.77 5.49982 10 5.49982H6C4.35 5.49982 3 6.84982 3 8.49982V11.2798C2.39 11.8298 2 12.6198 2 13.4998V19.4998H4V17.4998H20V19.4998H22V13.4998C22 12.6198 21.61 11.8298 21 11.2798ZM14 7.49982H18C18.55 7.49982 19 7.94982 19 8.49982V10.4998H13V8.49982C13 7.94982 13.45 7.49982 14 7.49982ZM5 8.49982C5 7.94982 5.45 7.49982 6 7.49982H10C10.55 7.49982 11 7.94982 11 8.49982V10.4998H5V8.49982ZM4 15.4998V13.4998C4 12.9498 4.45 12.4998 5 12.4998H19C19.55 12.4998 20 12.9498 20 13.4998V15.4998H4Z"
              fill="#50B533"
            />
          </svg>
        ) : text == "Bathroom" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M21 10.5H7V7.5C7 6.397 7.897 5.5 9 5.5C10.103 5.5 11 6.397 11 7.5H13C13 5.294 11.206 3.5 9 3.5C6.794 3.5 5 5.294 5 7.5V10.5H3C2.73478 10.5 2.48043 10.6054 2.29289 10.7929C2.10536 10.9804 2 11.2348 2 11.5V13.5C2 16.106 3.674 18.323 6 19.15V22.5H8V19.5H16V22.5H18V19.15C20.326 18.323 22 16.106 22 13.5V11.5C22 11.2348 21.8946 10.9804 21.7071 10.7929C21.5196 10.6054 21.2652 10.5 21 10.5ZM20 13.5C20 15.706 18.206 17.5 16 17.5H8C5.794 17.5 4 15.706 4 13.5V12.5H20V13.5Z"
              fill="#50B533"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <g clipPath="url(#clip0_477_4295)">
              <path
                d="M10.5974 19.1525L4.14718 12.7022C3.41709 11.9722 3.41709 10.6279 4.14718 9.8978L10.5974 3.44759C11.3275 2.7175 12.6717 2.7175 13.4018 3.44759L19.852 9.8978C20.5821 10.6279 20.5821 11.9722 19.852 12.7022L13.4018 19.1525C12.6717 19.8825 11.3275 19.8825 10.5974 19.1525V19.1525Z"
                stroke="#50B533"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.40039 16.3057L7.63685 21.5421"
                stroke="#50B533"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3633 21.5421L21.5997 16.3057"
                stroke="#50B533"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_477_4295">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
        <div className="flex w-[250px] justify-between items-center">
          <p className="text-[18px] font-normal leading-[150%] text-[#314660] font-inter">
            {text}
          </p>
          <p className="text-[#314660] font-semibold text-[18px] leading-normal font-inter">
            {text == "Area" ? (
              <>
                {number} <span className="text-sm align-super">2</span>
              </>
            ) : (
              number
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
