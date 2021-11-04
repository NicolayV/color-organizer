import React from "react";
import Star from "./Star";

const StarRating = ({
  selectedStars = 0,
  totlaStars = 5,
  onRate = (f) => f,
}) => {
  const createArry = (length) => [...Array(length)];

  return (
    <>
      {createArry(totlaStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totlaStars} stars
      </p>
    </>
  );
};

export default StarRating;
