import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Pages from "./pages";

const App = () => {
  console.log("App render");
  return (
    <>
      <GlobalStyle />
      <Pages />
    </>
  );
};

export default App;
