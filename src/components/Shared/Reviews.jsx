import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Reviews = () => {
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
            <div className="w-[488px] h-[268px] px-[21px] py-[24px] rounded-[20px] border border-[rgba(196,198,201,0.6)] bg-white flex-shrink-0">
              <div className="flex flex-col items-start gap-7">
                {/* header */}
                <div className="flex justify-between items-start self-stretch">
                  {/* avatar */}
                  <div className="w-[208px] h-[48px] flex items-center gap-4">
                    <Avatar className="w-[48px] h-[48px]">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-colorTextPrimary font-semibold leading-[24px]">
                        David&apos;s Properties
                      </h3>
                      <p className="text-colorTextSecondary text-sm leading-[20px]">
                        13 November, 2024
                      </p>
                    </div>
                  </div>
                  {/* ratings */}
                  <div className="w-[98px] h-[22.615px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="23"
                      viewBox="0 0 98 23"
                      fill="none"
                    >
                      <path
                        d="M10.3566 2.92705C10.656 2.00574 11.9594 2.00574 12.2587 2.92705L13.6219 7.12244C13.7558 7.53446 14.1397 7.81342 14.573 7.81342H18.9843C19.953 7.81342 20.3558 9.05304 19.572 9.62244L16.0032 12.2153C15.6528 12.47 15.5061 12.9213 15.64 13.3334L17.0031 17.5288C17.3025 18.4501 16.248 19.2162 15.4643 18.6468L11.8955 16.0539C11.545 15.7993 11.0704 15.7993 10.7199 16.0539L7.1511 18.6468C6.36738 19.2162 5.3129 18.4501 5.61225 17.5288L6.97542 13.3334C7.10929 12.9213 6.96263 12.47 6.61215 12.2153L3.04334 9.62244C2.25962 9.05304 2.6624 7.81342 3.63112 7.81342H8.04241C8.47564 7.81342 8.8596 7.53446 8.99347 7.12244L10.3566 2.92705Z"
                        fill="#FABA1D"
                      />
                      <path
                        d="M35.4855 2.92705C35.7849 2.00574 37.0883 2.00574 37.3877 2.92705L38.7508 7.12244C38.8847 7.53446 39.2687 7.81342 39.7019 7.81342H44.1132C45.0819 7.81342 45.4847 9.05304 44.701 9.62244L41.1321 12.2153C40.7817 12.47 40.635 12.9213 40.7689 13.3334L42.132 17.5288C42.4314 18.4501 41.3769 19.2162 40.5932 18.6468L37.0244 16.0539C36.6739 15.7993 36.1993 15.7993 35.8488 16.0539L32.28 18.6468C31.4963 19.2162 30.4418 18.4501 30.7412 17.5288L32.1043 13.3334C32.2382 12.9213 32.0915 12.47 31.7411 12.2153L28.1722 9.62244C27.3885 9.05304 27.7913 7.81342 28.76 7.81342H33.1713C33.6045 7.81342 33.9885 7.53446 34.1224 7.12244L35.4855 2.92705Z"
                        fill="#FABA1D"
                      />
                      <path
                        d="M60.6144 2.92705C60.9138 2.00574 62.2172 2.00574 62.5166 2.92705L63.8797 7.12244C64.0136 7.53446 64.3976 7.81342 64.8308 7.81342H69.2421C70.2108 7.81342 70.6136 9.05304 69.8299 9.62244L66.2611 12.2153C65.9106 12.47 65.7639 12.9213 65.8978 13.3334L67.2609 17.5288C67.5603 18.4501 66.5058 19.2162 65.7221 18.6468L62.1533 16.0539C61.8028 15.7993 61.3282 15.7993 60.9777 16.0539L57.4089 18.6468C56.6252 19.2162 55.5707 18.4501 55.8701 17.5288L57.2332 13.3334C57.3671 12.9213 57.2204 12.47 56.87 12.2153L53.3011 9.62244C52.5174 9.05304 52.9202 7.81342 53.8889 7.81342H58.3002C58.7335 7.81342 59.1174 7.53446 59.2513 7.12244L60.6144 2.92705Z"
                        fill="#FABA1D"
                      />
                      <path
                        d="M85.7394 2.92705C86.0388 2.00574 87.3422 2.00574 87.6416 2.92705L89.0047 7.12244C89.1386 7.53446 89.5226 7.81342 89.9558 7.81342H94.3671C95.3358 7.81342 95.7386 9.05304 94.9549 9.62244L91.3861 12.2153C91.0356 12.47 90.8889 12.9213 91.0228 13.3334L92.3859 17.5288C92.6853 18.4501 91.6308 19.2162 90.8471 18.6468L87.2783 16.0539C86.9278 15.7993 86.4532 15.7993 86.1027 16.0539L82.5339 18.6468C81.7502 19.2162 80.6957 18.4501 80.9951 17.5288L82.3582 13.3334C82.4921 12.9213 82.3454 12.47 81.995 12.2153L78.4261 9.62244C77.6424 9.05304 78.0452 7.81342 79.0139 7.81342H83.4252C83.8585 7.81342 84.2424 7.53446 84.3763 7.12244L85.7394 2.92705Z"
                        fill="#FABA1D"
                      />
                    </svg>
                  </div>
                </div>
                {/* body */}
                <p className="text-colorTextPrimary leading-[24px]">
                  Happy to recommend OpenRent - smart, responsive, seamless
                  service. I was able to be a lot more flexible when negotiating
                  the rent because of using OpenRent and instead of paying lots
                  to an agent I was able to pay for a cooker and extra
                  plumbing/electrical work when I was right at the very end of
                  my renovation budget.
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-4 bg-colorButton" />
      <CarouselNext className="mr-4 bg-colorButton" />
    </Carousel>
  );
};

export default Reviews;
