import AreLandlord from "../Home/AreLandlord";
import SingleProductChild2 from "./SingleProductChild2";

const SingleProductParent = () => {
  return (
    <div>
      <SingleProductChild2 />
      <AreLandlord />
    </div>
  );
};

export default SingleProductParent;
