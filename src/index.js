import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorProvider } from "./castomHooks/hooks";
// import colorData from "./data/color-data.json";
// import { v4 } from "uuid";

// export const ColorContext = createContext();
// export const useColors = () => useContext(ColorContext);

// export const ColorProvider = ({ children }) => {
//   const [colors, setColors] = useState(colorData);

//   const addColor = (title, color) =>
//     setColors([
//       ...colors,
//       {
//         id: v4(),
//         raiting: 0,
//         title,
//         color,
//       },
//     ]);

//   const rateColor = (id, rating) =>
//     setColors(
//       colors.map((color) => (color.id === id ? { ...color, rating } : color))
//     );

//   const removeColor = (id) =>
//     setColors(colors.filter((color) => color.id !== id));

//   return (
//     <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
//       {children};
//     </ColorContext.Provider>
//   );
// };

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,

  document.getElementById("root")
);
