import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ColorProvider } from "./castomHooks/hooks";

const rootElement = document.getElementById("root");
const app = (
  <BrowserRouter>
    <ColorProvider>
      <App />
    </ColorProvider>
  </BrowserRouter>
);
ReactDOM.render(app, rootElement);
