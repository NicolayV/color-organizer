import React from "react";
import { ColorProvider } from "../castomHooks/useColors";
import AddColorForm from "../components/color-organizer/AddColorForm";
import ColorList from "../components/color-organizer/ColorList";

const ColorOrganizer = () => {
  return (
    <ColorProvider>
      <h2>Color Organizer</h2>
      <AddColorForm />
      <ColorList />
    </ColorProvider>
  );
};

export default ColorOrganizer;
