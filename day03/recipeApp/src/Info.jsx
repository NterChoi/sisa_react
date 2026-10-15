import Rating from "./Rating";
import ReviewCount from "./ReviewCount";

const difficultyObj = {
  Easy: "💚",
  Medium: "💛",
};

const Info = ({ name, rating, reviewCount, difficulty }) => {
  return (
    <article>
      <div>{name}</div>
      <Rating rating={rating}></Rating>
      <ReviewCount reviewCount={reviewCount}></ReviewCount>
      <div>난이도 : {difficultyObj[difficulty]}</div>
    </article>
  );
};

export default Info;
