import Image from "next/image";
import property from "../../assets/images/property-image.jpg";

const PropertyCard = () => {
  return (
    <div className="w-[384px] rounded-[24px] bg-white shadow-md mb-1">
      <div className="w-[384px] rounded-t-[24px] rounded-b-none relative">
        <Image
          src={property}
          alt="property card image"
          width={384}
          height={200}
          className="rounded-t-[24px] rounded-b-none"
        />
        <div className="w-32 h-8 text-white text-xs font-inter font-semibold absolute -bottom-4 -left-2 rounded-lg bg-colorButton flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.99961 1.6C4.21178 1.6 4.41527 1.68428 4.56529 1.83431C4.71532 1.98434 4.79961 2.18783 4.79961 2.4V3.2H5.59961C5.81178 3.2 6.01527 3.28428 6.16529 3.43431C6.31532 3.58434 6.39961 3.78783 6.39961 4C6.39961 4.21217 6.31532 4.41565 6.16529 4.56568C6.01527 4.71571 5.81178 4.8 5.59961 4.8H4.79961V5.6C4.79961 5.81217 4.71532 6.01565 4.56529 6.16568C4.41527 6.31571 4.21178 6.4 3.99961 6.4C3.78744 6.4 3.58395 6.31571 3.43392 6.16568C3.2839 6.01565 3.19961 5.81217 3.19961 5.6V4.8H2.39961C2.18744 4.8 1.98395 4.71571 1.83392 4.56568C1.68389 4.41565 1.59961 4.21217 1.59961 4C1.59961 3.78783 1.68389 3.58434 1.83392 3.43431C1.98395 3.28428 2.18744 3.2 2.39961 3.2H3.19961V2.4C3.19961 2.18783 3.2839 1.98434 3.43392 1.83431C3.58395 1.68428 3.78744 1.6 3.99961 1.6ZM3.99961 9.6C4.21178 9.6 4.41527 9.68428 4.56529 9.83431C4.71532 9.98434 4.79961 10.1878 4.79961 10.4V11.2H5.59961C5.81178 11.2 6.01527 11.2843 6.16529 11.4343C6.31532 11.5843 6.39961 11.7878 6.39961 12C6.39961 12.2122 6.31532 12.4157 6.16529 12.5657C6.01527 12.7157 5.81178 12.8 5.59961 12.8H4.79961V13.6C4.79961 13.8122 4.71532 14.0157 4.56529 14.1657C4.41527 14.3157 4.21178 14.4 3.99961 14.4C3.78744 14.4 3.58395 14.3157 3.43392 14.1657C3.2839 14.0157 3.19961 13.8122 3.19961 13.6V12.8H2.39961C2.18744 12.8 1.98395 12.7157 1.83392 12.5657C1.68389 12.4157 1.59961 12.2122 1.59961 12C1.59961 11.7878 1.68389 11.5843 1.83392 11.4343C1.98395 11.2843 2.18744 11.2 2.39961 11.2H3.19961V10.4C3.19961 10.1878 3.2839 9.98434 3.43392 9.83431C3.58395 9.68428 3.78744 9.6 3.99961 9.6ZM9.59961 1.6C9.77616 1.59994 9.94777 1.65829 10.0877 1.76595C10.2276 1.87361 10.328 2.02453 10.3732 2.1952L11.3164 5.76L13.9996 7.3072C14.1212 7.37742 14.2222 7.4784 14.2924 7.60002C14.3626 7.72163 14.3996 7.85958 14.3996 8C14.3996 8.14042 14.3626 8.27837 14.2924 8.39998C14.2222 8.52159 14.1212 8.62258 13.9996 8.6928L11.3164 10.2408L10.3724 13.8048C10.3271 13.9753 10.2268 14.1261 10.0869 14.2336C9.94709 14.3412 9.77562 14.3995 9.59921 14.3995C9.4228 14.3995 9.25133 14.3412 9.11149 14.2336C8.97166 14.1261 8.87129 13.9753 8.82601 13.8048L7.88281 10.24L5.19961 8.6928C5.078 8.62258 4.97702 8.52159 4.90681 8.39998C4.83661 8.27837 4.79964 8.14042 4.79964 8C4.79964 7.85958 4.83661 7.72163 4.90681 7.60002C4.97702 7.4784 5.078 7.37742 5.19961 7.3072L7.88281 5.7592L8.82681 2.1952C8.87197 2.02466 8.97224 1.87384 9.112 1.76619C9.25177 1.65855 9.4232 1.60012 9.59961 1.6Z"
              fill="white"
            />
          </svg>
          <p className="">POPULAR</p>
        </div>
      </div>

      <div className="mt-8 px-6 pb-8">
        <div className="flex justify-between items-center">
          <p>
            <span className="text-2xl font-semibold text-textColor leading-[150%]">
              &#163;item.pricePerMonth
            </span>
            <span className="opacity-50">/month</span>
          </p>
          <div className="p-[10px] rounded-full border border-colorButton">
            {/* <img
              src={iconHeart}
              alt="iconHeart"
              className="w-[20px] h-[20px]"
            /> */}
            Icon Heart
          </div>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-textColorPrimary leading-[150%]">
          item.title
        </h2>
        <p className="text-base font-normal text-textColorSecondary leading-[150%] mt-1">
          item.address.street, item.address.city, item.address.state
        </p>
        <div className="w-[336px] border border-[#EAEDEF] my-2"></div>

        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            {/* <img src={iconBed} alt="iconBed" /> */}
            <span className="text-sm font-normal text-textColorSecondary leading-[120%]">
              item.features.beds Beds
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            {/* <img src={iconBath} alt="iconBed" /> */}
            <span className="text-sm font-normal text-textColorSecondary leading-[120%]">
              item.features.bathrooms Bathrooms
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            {/* <img src={iconSquareMeter} alt="iconBed" /> */}
            <span className="text-sm font-normal text-textColorSecondary leading-[120%]">
              item.features.size.width x item.features.size.length m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
