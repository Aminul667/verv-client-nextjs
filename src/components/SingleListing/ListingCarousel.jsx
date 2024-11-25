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
      <div className="w-[1216px] h-[865px] m-auto bg-green-300">
        <p className="text-colorTextSecondary text-lg font-medium mb-[32px]">
          Home / Birmingham / Houses / Grange Road
        </p>
        <div className="h-[811px] bg-red-400 flex items-start self-stretch gap-[32px]">
          <div className="w-[800px] h-full bg-slate-400">
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
          </div>
          <div className="w-[384px] h-full bg-orange-400">
            <h1 className="text-colorTextPrimary text-[32px] font-semibold leading-[120%]">
              6 Bed, 3 Bathhouse
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingCarousel;
