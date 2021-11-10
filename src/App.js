import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import ColorList from "./components/color-organizer/ColorList";
import AddColorForm from "./components/color-organizer/AddColorForm";
import Examples from "./components/other-examples";

const App = () => {
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to="/"
        >
          color
        </NavLink>{" "}
        |{" "}
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to="/examples"
        >
          Examples
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddColorForm />
              <ColorList />
            </>
          }
        />
        <Route path="examples" element={<Examples />} />
      </Routes>
    </>
  );
};

export default App;
