import _ from "lodash";

const Rating = ({ rating }) => {
  return (
    <div>
      {rating} {_.repeat("★", _.floor(rating))}
      {_.repeat("☆", _.floor(5 - rating))}
    </div>
  );
};

export default Rating;
