import AreLandlord from "../Home/AreLandlord";
import ListingCarousel from "./ListingCarousel";
import SingleProductChild2 from "./SingleProductChild2";

const SingleProductParent = () => {
  return (
    <div>
      <ListingCarousel />
      <SingleProductChild2 />
      <AreLandlord />
    </div>
  );
};

export default SingleProductParent;
