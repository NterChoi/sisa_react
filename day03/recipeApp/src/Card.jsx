import Image from "./Image";
import Info from "./Info";

const Card = ({ image, name, rating, reviewCount, difficulty }) => {
  return (
    <div>
      <div>
        <Image image={image}></Image>
        <Info
          name={name}
          rating={rating}
          reviewCount={reviewCount}
          difficulty={difficulty}
        ></Info>
      </div>
    </div>
  );
};

export default Card;
