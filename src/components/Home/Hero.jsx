import heroImage from "../../assets/images/hero-image.png";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImage.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "lightcyan",
    width: "1216px",
    height: "528px",
  };
  return (
    <header>
      <div
        style={backgroundImageStyle}
        className="w-[1216px] h-[528px] m-auto rounded-[40px] my-9"
      >
        <h1>Rent Smarter with Verified Reviews</h1>
      </div>
    </header>
  );
};

export default Hero;
