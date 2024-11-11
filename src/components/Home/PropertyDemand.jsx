import { Button } from "../ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PropertyDemand = () => {
  return (
    <section className="w-[345px] md:w-[1216px] m-auto mt-10 md:mt-[100px]">
      <h3 className="text-xl font-semibold text-colorTextLime mb-4 text-center md:text-left">
        PROPERTIES IN DEMAND
      </h3>
      <div className="md:flex md:justify-between md:items-center mb-8">
        <div className="w-[345px] md:w-[800px] text-center md:text-left">
          <h2 className="text-[28px] md:text-3xl font-semibold text-colorTextPrimary leading-[120%]">
            Current Trending Properties Available
          </h2>
          <p className="text-lg leading-[150%] mt-4 text-colorTextSecondary">
            Discover our most in-demand properties, showcasing prime locations,
            competitive prices, and modern amenities. Browse our handpicked
            selection to find your perfect home or room today.
          </p>
        </div>
        <div>
          <Button className="bg-colorButton text-lg font-semibold w-[298px] h-[56px] p-[8px_16px] rounded-[32px] hidden md:block">
            Browse More Properties
          </Button>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <span className="bg-red-600">{index}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default PropertyDemand;
