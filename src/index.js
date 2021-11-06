import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorProvider } from "./castomHooks/hooks";

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,

  document.getElementById("root")
);
