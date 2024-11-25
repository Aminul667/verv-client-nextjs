import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "../ui/carousel2";

import propertyCarousel1 from "../../assets/images/property-carousel-img-1.png";
import propertyCarousel2 from "../../assets/images/property-carousel-img-2.png";
import propertyCarousel3 from "../../assets/images/property-carousel-img-3.png";
import propertyCarousel4 from "../../assets/images/property-carousel-img-4.png";
import propertyCarousel5 from "../../assets/images/property-carousel-img-5.png";
import propertyCarousel6 from "../../assets/images/property-carousel-img-6.png";
import Image from "next/image";
import { Button } from "../ui/button";

const ListingCarousel = () => {
  const listOfCarouselImage = [
    propertyCarousel1,
    propertyCarousel2,
    propertyCarousel3,
    propertyCarousel4,
    propertyCarousel5,
  ];

  return (
    <section className="h-[982px] bg-[#EEF1F3] flex items-center justify-center">
      <div className="w-[1216px] h-[865px] m-auto">
        <p className="text-colorTextSecondary text-lg font-medium mb-[32px]">
          Home / Birmingham / Houses / Grange Road
        </p>
        <div className="h-[811px] flex items-start self-stretch gap-[32px]">
          <div className="w-[800px] h-full">
            <Carousel>
              <CarouselNext className="top-1/3 -translate-y-1/3" />
              <CarouselPrevious className="top-1/3 -translate-y-1/3" />
              <CarouselMainContainer className="h-[522px]">
                {listOfCarouselImage.map((carouselImage, index) => (
                  <SliderMainItem key={index} className="bg-transparent p-0">
                    <Image
                      src={carouselImage}
                      alt="property"
                      width={800}
                      height={522}
                      className="rounded-2xl bg-white"
                    />
                  </SliderMainItem>
                ))}
              </CarouselMainContainer>
              <CarouselThumbsContainer className="justify-between">
                {listOfCarouselImage.map((thumbImage, index) => (
                  <SliderThumbItem
                    key={index}
                    index={index}
                    className="bg-transparent w-[148px] h-[120px] p-0 flex"
                  >
                    <Image
                      src={thumbImage}
                      alt="thumb image"
                      width={148}
                      height={120}
                      className="rounded-2xl bg-white"
                    />{" "}
                  </SliderThumbItem>
                ))}
              </CarouselThumbsContainer>
            </Carousel>

            {/* share property */}
            <div className="flex justify-center items-center gap-6 w-[539px] h-[89px] p-[24px_24px_25px_25px] rounded-2xl bg-white mt-6">
              <p className="text-xl text-colorTextSecondary font-semibold leading-[120%]">
                Share Property
              </p>
              <div className="flex justify-center items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M33.75 0H6.25C2.79822 0 0 2.79822 0 6.25V33.75C0 37.2018 2.79822 40 6.25 40H33.75C37.2018 40 40 37.2018 40 33.75V6.25C40 2.79822 37.2018 0 33.75 0Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M30 20C30 14.5 25.5 10 20 10C14.5 10 10 14.5 10 20C10 25 13.625 29.125 18.375 29.875V22.875H15.875V20H18.375V17.75C18.375 15.25 19.875 13.875 22.125 13.875C23.25 13.875 24.375 14.125 24.375 14.125V16.625H23.125C21.875 16.625 21.5 17.375 21.5 18.125V20H24.25L23.75 22.875H21.375V30C26.375 29.25 30 25 30 20Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M33.75 0H6.25C2.79822 0 0 2.79822 0 6.25V33.75C0 37.2018 2.79822 40 6.25 40H33.75C37.2018 40 40 37.2018 40 33.75V6.25C40 2.79822 37.2018 0 33.75 0Z"
                    fill="#1DA1F2"
                  />
                  <path
                    d="M30 13.75C29.25 14.125 28.5 14.25 27.625 14.375C28.5 13.875 29.125 13.125 29.375 12.125C28.625 12.625 27.75 12.875 26.75 13.125C26 12.375 24.875 11.875 23.75 11.875C21.125 11.875 19.125 14.375 19.75 16.875C16.375 16.75 13.375 15.125 11.25 12.625C10.125 14.5 10.75 16.875 12.5 18.125C11.875 18.125 11.25 17.875 10.625 17.625C10.625 19.5 12 21.25 13.875 21.75C13.25 21.875 12.625 22 12 21.875C12.5 23.5 14 24.75 15.875 24.75C14.375 25.875 12.125 26.5 10 26.25C11.875 27.375 14 28.125 16.25 28.125C23.875 28.125 28.125 21.75 27.875 15.875C28.75 15.375 29.5 14.625 30 13.75Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M33.75 0H6.25C2.79822 0 0 2.79822 0 6.25V33.75C0 37.2018 2.79822 40 6.25 40H33.75C37.2018 40 40 37.2018 40 33.75V6.25C40 2.79822 37.2018 0 33.75 0Z"
                    fill="#2867B2"
                  />
                  <path
                    d="M14.5 30H10.25V16.625H14.5V30ZM12.375 14.75C11 14.75 10 13.75 10 12.375C10 11 11.125 10 12.375 10C13.75 10 14.75 11 14.75 12.375C14.75 13.75 13.75 14.75 12.375 14.75ZM30 30H25.75V22.75C25.75 20.625 24.875 20 23.625 20C22.375 20 21.125 21 21.125 22.875V30H16.875V16.625H20.875V18.5C21.25 17.625 22.75 16.25 24.875 16.25C27.25 16.25 29.75 17.625 29.75 21.75V30H30Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M33.75 0H6.25C2.79822 0 0 2.79822 0 6.25V33.75C0 37.2018 2.79822 40 6.25 40H33.75C37.2018 40 40 37.2018 40 33.75V6.25C40 2.79822 37.2018 0 33.75 0Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M29.5 15.125C29.25 14.25 28.625 13.625 27.75 13.375C26.25 13 19.875 13 19.875 13C19.875 13 13.625 13 12 13.375C11.125 13.625 10.5 14.25 10.25 15.125C10 16.75 10 20 10 20C10 20 10 23.25 10.375 24.875C10.625 25.75 11.25 26.375 12.125 26.625C13.625 27 20 27 20 27C20 27 26.25 27 27.875 26.625C28.75 26.375 29.375 25.75 29.625 24.875C30 23.25 30 20 30 20C30 20 30 16.75 29.5 15.125ZM18 23V17L23.25 20L18 23Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M33.75 0H6.25C2.79822 0 0 2.79822 0 6.25V33.75C0 37.2018 2.79822 40 6.25 40H33.75C37.2018 40 40 37.2018 40 33.75V6.25C40 2.79822 37.2018 0 33.75 0Z"
                    fill="#F00073"
                  />
                  <path
                    d="M19.999 11.5C22.749 11.5 23.124 11.5 24.249 11.5C25.249 11.5 25.749 11.75 26.124 11.875C26.624 12.125 26.999 12.25 27.374 12.625C27.749 13 27.999 13.375 28.124 13.875C28.249 14.25 28.374 14.75 28.499 15.75C28.499 16.875 28.499 17.125 28.499 20C28.499 22.875 28.499 23.125 28.499 24.25C28.499 25.25 28.249 25.75 28.124 26.125C27.874 26.625 27.749 27 27.374 27.375C26.999 27.75 26.624 28 26.124 28.125C25.749 28.25 25.249 28.375 24.249 28.5C23.124 28.5 22.874 28.5 19.999 28.5C17.124 28.5 16.874 28.5 15.749 28.5C14.749 28.5 14.249 28.25 13.874 28.125C13.374 27.875 12.999 27.75 12.624 27.375C12.249 27 11.999 26.625 11.874 26.125C11.749 25.75 11.624 25.25 11.499 24.25C11.499 23.125 11.499 22.875 11.499 20C11.499 17.125 11.499 16.875 11.499 15.75C11.499 14.75 11.749 14.25 11.874 13.875C12.124 13.375 12.249 13 12.624 12.625C12.999 12.25 13.374 12 13.874 11.875C14.249 11.75 14.749 11.625 15.749 11.5C16.874 11.5 17.249 11.5 19.999 11.5ZM19.999 9.625C17.124 9.625 16.874 9.625 15.749 9.625C14.624 9.625 13.874 9.875 13.249 10.125C12.624 10.375 11.999 10.75 11.374 11.375C10.749 12 10.499 12.5 10.124 13.25C9.87402 13.875 9.74902 14.625 9.62402 15.75C9.62402 16.875 9.62402 17.25 9.62402 20C9.62402 22.875 9.62402 23.125 9.62402 24.25C9.62402 25.375 9.87402 26.125 10.124 26.75C10.374 27.375 10.749 28 11.374 28.625C11.999 29.25 12.499 29.5 13.249 29.875C13.874 30.125 14.624 30.25 15.749 30.375C16.874 30.375 17.249 30.375 19.999 30.375C22.749 30.375 23.124 30.375 24.249 30.375C25.374 30.375 26.124 30.125 26.749 29.875C27.374 29.625 27.999 29.25 28.624 28.625C29.249 28 29.499 27.5 29.874 26.75C30.124 26.125 30.249 25.375 30.374 24.25C30.374 23.125 30.374 22.75 30.374 20C30.374 17.25 30.374 16.875 30.374 15.75C30.374 14.625 30.124 13.875 29.874 13.25C29.624 12.625 29.249 12 28.624 11.375C27.999 10.75 27.499 10.5 26.749 10.125C26.124 9.875 25.374 9.75 24.249 9.625C23.124 9.625 22.874 9.625 19.999 9.625Z"
                    fill="white"
                  />
                  <path
                    d="M19.999 14.625C16.999 14.625 14.624 17 14.624 20C14.624 23 16.999 25.375 19.999 25.375C22.999 25.375 25.374 23 25.374 20C25.374 17 22.999 14.625 19.999 14.625ZM19.999 23.5C18.124 23.5 16.499 22 16.499 20C16.499 18.125 17.999 16.5 19.999 16.5C21.874 16.5 23.499 18 23.499 20C23.499 21.875 21.874 23.5 19.999 23.5Z"
                    fill="white"
                  />
                  <path
                    d="M25.499 15.75C26.1894 15.75 26.749 15.1904 26.749 14.5C26.749 13.8096 26.1894 13.25 25.499 13.25C24.8087 13.25 24.249 13.8096 24.249 14.5C24.249 15.1904 24.8087 15.75 25.499 15.75Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M33.75 0H6.25C2.79822 0 0 2.79822 0 6.25V33.75C0 37.2018 2.79822 40 6.25 40H33.75C37.2018 40 40 37.2018 40 33.75V6.25C40 2.79822 37.2018 0 33.75 0Z"
                    fill="#25D366"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27 12.875C25.125 11 22.625 10 20 10C14.5 10 10 14.5 10 20C10 21.75 10.5 23.5 11.375 25L10 30L15.25 28.625C16.75 29.375 18.375 29.875 20 29.875C25.5 29.875 30 25.375 30 19.875C30 17.25 28.875 14.75 27 12.875ZM20 28.25C18.5 28.25 17 27.875 15.75 27.125L15.5 27L12.375 27.875L13.25 24.875L13 24.5C12.125 23.125 11.75 21.625 11.75 20.125C11.75 15.625 15.5 11.875 20 11.875C22.25 11.875 24.25 12.75 25.875 14.25C27.5 15.875 28.25 17.875 28.25 20.125C28.25 24.5 24.625 28.25 20 28.25ZM24.5 22C24.25 21.875 23 21.25 22.75 21.25C22.5 21.125 22.375 21.125 22.25 21.375C22.125 21.625 21.625 22.125 21.5 22.375C21.375 22.5 21.25 22.5 21 22.5C20.75 22.375 20 22.125 19 21.25C18.25 20.625 17.75 19.75 17.625 19.5C17.5 19.25 17.625 19.125 17.75 19C17.875 18.875 18 18.75 18.125 18.625C18.25 18.5 18.25 18.375 18.375 18.25C18.5 18.125 18.375 18 18.375 17.875C18.375 17.75 17.875 16.5 17.625 16C17.5 15.625 17.25 15.625 17.125 15.625C17 15.625 16.875 15.625 16.625 15.625C16.5 15.625 16.25 15.625 16 15.875C15.75 16.125 15.125 16.75 15.125 18C15.125 19.25 16 20.375 16.125 20.625C16.25 20.75 17.875 23.375 20.375 24.375C22.5 25.25 22.875 25 23.375 25C23.875 25 24.875 24.375 25 23.875C25.25 23.25 25.25 22.75 25.125 22.75C25 22.125 24.75 22.125 24.5 22Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {/* report listing */}
            <div className="w-32 h-6 flex items-center gap-1 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.47599 1.12444C7.14024 -0.0414791 8.85976 -0.0414812 9.52401 1.12444L15.2781 11.2243C15.9237 12.3575 15.0834 13.75 13.7541 13.75H2.24591C0.916594 13.75 0.0763281 12.3575 0.721903 11.2243L6.47599 1.12444ZM8.74995 10.75C8.74995 11.1642 8.41417 11.5 7.99995 11.5C7.58574 11.5 7.24995 11.1642 7.24995 10.75C7.24995 10.3358 7.58574 10 7.99995 10C8.41417 10 8.74995 10.3358 8.74995 10.75ZM8.56245 4.75C8.56245 4.43934 8.31061 4.1875 7.99995 4.1875C7.68929 4.1875 7.43745 4.43934 7.43745 4.75V8.5C7.43745 8.81066 7.68929 9.0625 7.99995 9.0625C8.31061 9.0625 8.56245 8.81066 8.56245 8.5V4.75Z"
                  fill="#56677D"
                />
              </svg>
              <p className="text-colorTextSecondary leading-[150%]">
                Report Listing
              </p>
            </div>
          </div>
          {/* property info container */}
          <div className="w-[384px] h-full">
            <h1 className="text-colorTextPrimary text-[32px] font-semibold leading-[120%]">
              6 Bed, 3 Bathhouse
            </h1>
            <p className="w-40 h-8 p-2 text-sm font-semibold text-center leading-[120%] text-[#314660] rounded-[32px] bg-[#B4DFA7] mt-4 mb-8">
              6 rooms available
            </p>
            {/* property information */}
            <div className="flex flex-col items-start gap-4 w-[348px] h-[187px]">
              {/* location */}
              <div className="flex items-start gap-2 w-full h-[58px]">
                <div className="w-[18px] h-[20px]">
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
                </div>
                <p className="text-lg text-colorTextSecondary leading-[150%]">
                  Grange Road, Selly Oak, Birmingham, B296AP{" "}
                  <span className="font-semibold text-colorButton">
                    Show on map
                  </span>
                </p>
              </div>
              {/* available from */}
              <div className="flex items-center gap-2 w-full h-[27px]">
                <div className="w-[18px] h-[22px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.75 1.5C5.75 1.08579 5.41421 0.75 5 0.75C4.58579 0.75 4.25 1.08579 4.25 1.5V3H4C1.79086 3 0 4.79086 0 7V7.75H18V7C18 4.79086 16.2091 3 14 3H13.75V1.5C13.75 1.08579 13.4142 0.75 13 0.75C12.5858 0.75 12.25 1.08579 12.25 1.5V3H5.75V1.5ZM0 9.25H18V17.5C18 19.7091 16.2091 21.5 14 21.5H4C1.79086 21.5 0 19.7091 0 17.5V9.25ZM9 15.5C9.55229 15.5 10 15.0523 10 14.5C10 13.9477 9.55229 13.5 9 13.5C8.44771 13.5 8 13.9477 8 14.5C8 15.0523 8.44771 15.5 9 15.5ZM14 14.5C14 15.0523 13.5523 15.5 13 15.5C12.4477 15.5 12 15.0523 12 14.5C12 13.9477 12.4477 13.5 13 13.5C13.5523 13.5 14 13.9477 14 14.5ZM5 15.5C5.55228 15.5 6 15.0523 6 14.5C6 13.9477 5.55228 13.5 5 13.5C4.44772 13.5 4 13.9477 4 14.5C4 15.0523 4.44772 15.5 5 15.5Z"
                      fill="#50B533"
                    />
                  </svg>
                </div>
                <p className="text-lg text-colorTextSecondary leading-[150%]">
                  Available from:{" "}
                  <span className="font-semibold">1st January 2025</span>
                </p>
              </div>
              {/* agent */}
              <div className="flex items-center gap-2 w-full h-[27px]">
                <div className="w-[24px] h-[25px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.1804 22.5H7.81965C5.5109 22.5 3.6393 20.714 3.6393 18.5108V13.633C3.6393 12.9248 3.34447 12.2456 2.81969 11.7448C1.60381 10.5845 1.76187 8.66205 3.15251 7.69692L9.54124 3.263C11.0071 2.24567 12.9929 2.24567 14.4588 3.263L20.8475 7.69691C22.2381 8.66205 22.3962 10.5845 21.1803 11.7448C20.6555 12.2456 20.3607 12.9248 20.3607 13.633V18.5108C20.3607 20.714 18.4891 22.5 16.1804 22.5ZM10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25H14C14.4142 19.25 14.75 18.9142 14.75 18.5C14.75 18.0858 14.4142 17.75 14 17.75H10Z"
                      fill="#50B533"
                    />
                  </svg>
                </div>
                <p className="text-lg text-colorTextSecondary leading-[150%]">
                  Letting agent{" "}
                  <span className="font-semibold">1st January 2025</span>
                </p>
              </div>
              {/* reference */}
              <div className="flex items-center gap-2 w-full h-[27px]">
                <div className="w-[18px] h-[22px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.75 1.5C5.75 1.08579 5.41421 0.75 5 0.75C4.58579 0.75 4.25 1.08579 4.25 1.5V3H4C1.79086 3 0 4.79086 0 7V7.75H18V7C18 4.79086 16.2091 3 14 3H13.75V1.5C13.75 1.08579 13.4142 0.75 13 0.75C12.5858 0.75 12.25 1.08579 12.25 1.5V3H5.75V1.5ZM0 9.25H18V17.5C18 19.7091 16.2091 21.5 14 21.5H4C1.79086 21.5 0 19.7091 0 17.5V9.25ZM9 15.5C9.55229 15.5 10 15.0523 10 14.5C10 13.9477 9.55229 13.5 9 13.5C8.44771 13.5 8 13.9477 8 14.5C8 15.0523 8.44771 15.5 9 15.5ZM14 14.5C14 15.0523 13.5523 15.5 13 15.5C12.4477 15.5 12 15.0523 12 14.5C12 13.9477 12.4477 13.5 13 13.5C13.5523 13.5 14 13.9477 14 14.5ZM5 15.5C5.55228 15.5 6 15.0523 6 14.5C6 13.9477 5.55228 13.5 5 13.5C4.44772 13.5 4 13.9477 4 14.5C4 15.0523 4.44772 15.5 5 15.5Z"
                      fill="#50B533"
                    />
                  </svg>
                </div>
                <p className="text-lg text-colorTextSecondary leading-[150%]">
                  Property Reference:{" "}
                  <span className="font-semibold">2191292</span>
                </p>
              </div>
            </div>

            {/* monthly pricing */}
            <div className="flex flex-col items-center justify-center gap-6 p-6 w-full h-[474px] rounded-3xl bg-white mt-8">
              {/* price */}
              <div className="flex items-center gap-6 w-[289px] h-[81px]">
                <div className="flex flex-col items-center -gap-1 h-full">
                  <h1 className="text-[48px] text-colorButton font-bold leading-[120%]">
                    &#163;950
                  </h1>
                  <p className="text-lg text-colorTextSecondary leading-[150%]">
                    per month
                  </p>
                </div>
                <span className="text-lg text-colorTextSecondary leading-[150%]">
                  or
                </span>
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl text-colorTextSecondary font-semibold leading-[120%]">
                    &#163;219.23
                  </h2>
                  <span className="text-lg text-colorTextSecondary leading-[150%]">
                    per week
                  </span>
                </div>
              </div>
              {/* no extra fees */}
              <div className="flex items-center gap-4 w-[314px] h-[37px]">
                <div className="flex items-start gap-[2px] p-2 w-[129px] h-[37px] rounded-[32px] bg-[#EEF8EB]">
                  <div>
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
                        d="M10.0003 18.8333C14.6027 18.8333 18.3337 15.1023 18.3337 10.5C18.3337 5.89759 14.6027 2.16663 10.0003 2.16663C5.39795 2.16663 1.66699 5.89759 1.66699 10.5C1.66699 15.1023 5.39795 18.8333 10.0003 18.8333ZM13.827 8.3837C14.0389 8.11123 13.9898 7.71856 13.7174 7.50664C13.4449 7.29472 13.0522 7.34381 12.8403 7.61627L9.50115 11.9095C9.4269 12.005 9.28723 12.0173 9.19733 11.9364L7.0851 10.0354C6.82853 9.80452 6.43335 9.82532 6.20244 10.0819C5.97153 10.3385 5.99233 10.7336 6.24889 10.9645L8.36113 12.8656C8.9904 13.4319 9.96808 13.3452 10.4878 12.6769L13.827 8.3837Z"
                        fill="#50B533"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-colorTextPrimary leading-[150%]">
                    No extra fees
                  </p>
                </div>
                <div className="flex items-start gap-[2px] p-2 w-[169px] h-[37px] rounded-[32px] bg-[#EEF8EB]">
                  <div>
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
                        d="M10.0003 18.8333C14.6027 18.8333 18.3337 15.1023 18.3337 10.5C18.3337 5.89759 14.6027 2.16663 10.0003 2.16663C5.39795 2.16663 1.66699 5.89759 1.66699 10.5C1.66699 15.1023 5.39795 18.8333 10.0003 18.8333ZM13.827 8.3837C14.0389 8.11123 13.9898 7.71856 13.7174 7.50664C13.4449 7.29472 13.0522 7.34381 12.8403 7.61627L9.50115 11.9095C9.4269 12.005 9.28723 12.0173 9.19733 11.9364L7.0851 10.0354C6.82853 9.80452 6.43335 9.82532 6.20244 10.0819C5.97153 10.3385 5.99233 10.7336 6.24889 10.9645L8.36113 12.8656C8.9904 13.4319 9.96808 13.3452 10.4878 12.6769L13.827 8.3837Z"
                        fill="#50B533"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-colorTextPrimary leading-[150%]">
                    Transparent pricing
                  </p>
                </div>
              </div>
              {/* proceed to rent */}
              <div className="flex flex-col items-center gap-4 w-[336px] h-[94px]">
                <p className="text-lg text-[#7D8A9B] font-semibold">
                  Proceed to Rent
                </p>
                <Button className="w-full h-14 bg-colorButton px-4 py-2 rounded-[32px]">
                  Rent Now
                </Button>
              </div>

              {/* separate line */}
              <div className="w-[336px] h-[1.5px] opacity-10 bg-colorTextPrimary"></div>

              {/* arrange a viewing */}
              <div className="flex flex-col items-center gap-4 w-[336px] h-[94px]">
                <p className="text-lg text-[#7D8A9B] font-semibold">
                  Want to arrange a viewing?
                </p>
                <Button className="w-full h-14 bg-colorTextPrimary px-4 py-2 rounded-[32px]">
                  Contact Landlord
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingCarousel;
