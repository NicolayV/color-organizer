import React, { useState } from "react";
import Star from "./Star";

const StarRaiting = ({ style = {}, totlaStars = 5, ...props }) => {
  const createArry = (length) => [...Array(length)];
  const [selectedStars, setSlectedStars] = useState(0);

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArry(totlaStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSlectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totlaStars} stars
      </p>
    </div>
  );
};

export default StarRaiting;
