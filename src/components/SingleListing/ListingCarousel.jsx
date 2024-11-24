import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "../ui/carousel2";

const ListingCarousel = () => {
  return (
    <Carousel>
      <CarouselNext className="top-1/3 -translate-y-1/3" />
      <CarouselPrevious className="top-1/3 -translate-y-1/3" />
      <CarouselMainContainer className="h-60">
        {Array.from({ length: 5 }).map((_, index) => (
          <SliderMainItem key={index} className="bg-transparent">
            <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              Slide {index + 1}
            </div>
          </SliderMainItem>
        ))}
      </CarouselMainContainer>
      <CarouselThumbsContainer>
        {Array.from({ length: 5 }).map((_, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="bg-transparent w-[148px] h-[120px]"
          >
            <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              Slide {index + 1}
            </div>{" "}
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default ListingCarousel;
