import React from "react";
import styled from "styled-components";

import Color from "./Color";
import { useColors } from "../../castomHooks/useColors";

const ColorWrapper = styled.div`
  max-width: 250px;
  margin: 0;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #f5f4f0;
`;

const ColorList = () => {
  // получение значения contexta (consumer)
  const { colors } = useColors();

  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <ColorWrapper className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </ColorWrapper>
  );
};

export default ColorList;
