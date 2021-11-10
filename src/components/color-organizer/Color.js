import React from "react";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../../castomHooks/hooks";
import StarRating from "./StarRating";

const Color = ({ id, title, color, rating }) => {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        onRate={(rating) => rateColor(id, rating)}
        selectedStars={rating}
      />
    </section>
  );
};

export default Color;
