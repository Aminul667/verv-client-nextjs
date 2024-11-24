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
                {Array.from({ length: 5 }).map((_, index) => (
                  <SliderMainItem key={index} className="bg-transparent">
                    <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                      Slide {index + 1}
                    </div>
                  </SliderMainItem>
                ))}
              </CarouselMainContainer>
              <CarouselThumbsContainer className="justify-between">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SliderThumbItem
                    key={index}
                    index={index}
                    className="bg-transparent w-[148px] h-[120px] p-0 flex"
                  >
                    <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                      Slide {index + 1}
                    </div>{" "}
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
