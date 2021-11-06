import React from "react";
import Color from "./Color";
import { useColors } from "../castomHooks/hooks";

const ColorList = () => {
  // получение значения contexta (consumer)
  const { colors } = useColors();

  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
