import heroImage from "../../assets/images/hero-image.png";
import { Button } from "../ui/button";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImage.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "lightcyan",
    // width: "1216px",
    // height: "528px",
  };
  return (
    <header
      style={backgroundImageStyle}
      className="w-[393px] h-[600px] md:w-[1216px] md:h-[528px] m-auto md:rounded-[40px] mt-9 flex justify-center items-center"
    >
      <div>
        <h1 className="text-colorTextPrimary text-center font-inter text-[48px] font-bold leading-[120%] sm:w-[345px] md:w-auto">
          Rent Smarter with Verified Reviews
        </h1>

        {/* search location */}
        <div className="w-[345px] md:w-[788px] flex justify-center items-center sm:flex-col md:flex-row gap-4 p-4 bg-colorTextPrimary rounded-lg m-auto mt-14 mb-6">
          {/* dropdown input field */}
          <select
            defaultValue="rent"
            className="w-[313px] md:w-36 h-14 py-2 pr-2 pl-4 text-colorTextPrimary rounded-[8px] bg-[#F6FFF4] text-lg font-medium leading-normal"
          >
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
          </select>

          {/* Location input field */}
          <div className="flex w-[313px] md:w-[400px] h-14 px-4 py-0 items-center gap-2 rounded-[8px] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 20.5C12.375 20.5 18 14.2981 18 9.38889C18 4.47969 13.9706 0.5 9 0.5C4.02944 0.5 0 4.47969 0 9.38889C0 14.2981 5.625 20.5 9 20.5ZM9 12.5C10.6569 12.5 12 11.1569 12 9.5C12 7.84315 10.6569 6.5 9 6.5C7.34315 6.5 6 7.84315 6 9.5C6 11.1569 7.34315 12.5 9 12.5Z"
                fill="#50B533"
              />
            </svg>
            <input type="text" placeholder="e.g. Oxford or NW3" />
          </div>
          <Button className="w-[313px] md:w-[180px] h-14 px-4 py-2 rounded-[8px] bg-colorButton text-lg font-semibold leading-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M22.5 22.5L20.5 20.5M2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Search
          </Button>
        </div>
        <p className="text-lg text-white text-center leading-[150%]">
          Want more visibility?{" "}
          <span className="text-[#50B533] font-semibold leading-normal">
            List with Verv.
          </span>
        </p>
      </div>
    </header>
  );
};

export default Hero;
