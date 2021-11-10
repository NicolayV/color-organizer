import React, { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { SomeCat } from "./Cat";
import { Numbers, User, CheckBox } from "./Reduce";
import SubForm from "./SubForm";
import { WordCount } from "./WordCount";
// import { NewsFeed } from "./NewsFeed";

const Examples = () => {
  let params = useParams();
  console.log(params);
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));

  return (
    <>
      <h2>This is some React examples</h2>
      <Numbers />
      <User />
      <CheckBox />
      <SubForm />
      <SomeCat />
      <WordCount>You are not going to believe this but...</WordCount>;
      {/* <NewsFeed /> */}
    </>
  );
};

export default Examples;
