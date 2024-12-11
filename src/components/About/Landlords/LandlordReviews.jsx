// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LandlordReviews = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[1152px] h-[364px] m-auto flex justify-center items-center"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/2 flex justify-center items-center"
          >
            <div className="w-[488px] h-[268px] rounded-[20px] border border-[rgba(196,198,201,0.6)] bg-white flex-shrink-0">
              <Avatar className="w-[48px] h-[48px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-4" />
      <CarouselNext className="mr-4" />
    </Carousel>
  );
};

export default LandlordReviews;
