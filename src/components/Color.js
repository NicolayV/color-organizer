import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

const Color = ({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        onRate={(rating) => onRate(id, rating)}
        selectedStars={rating}
      />
    </section>
  );
};

export default Color;
