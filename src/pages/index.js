import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Numbers } from "../components/other-examples/Reduce";
// import { User } from "../components/other-examples/Reduce";
import CheckBox from "../components/other-examples/Reduce";
import SubForm from "../components/other-examples/SubForm";
import { SomeCat } from "../components/other-examples/Cat";
// import { WordCount } from "../components/other-examples/WordCount";
import Expenses from "../components/expenses";
import ColorOrganizer from "./colorOrganizer";
import Layout from "./layout";
import Moonhighway from "./moonhighway";
import RenderList from "./renderList";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="colororganizer" element={<ColorOrganizer />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="moonhighway" element={<Moonhighway />} />
          <Route path="renderlist" element={<RenderList />} />
          <Route path="numbers" element={<Numbers />} />
          <Route path="checkbox" element={<CheckBox />} />
          <Route path="subform" element={<SubForm />} />
          <Route path="somecat" element={<SomeCat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;

// const Number = () => {
//   return <div>Number</div>;
// };

// const Use = () => {
//   return <div>User page</div>;
// };
