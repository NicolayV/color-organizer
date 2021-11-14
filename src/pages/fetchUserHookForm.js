import React from "react";
import ReqUserHookForm from "../components/fetch-examples/reqUserWithForm";

const MoonhighwayHookForm = () => {
  console.log("MoonHookForm render");
  return (
    <>
      <h2>Fetch user with promise </h2>
      <p>stack castom hook useFetch and search form</p>
      <ReqUserHookForm login="moonhighway" />
    </>
  );
};

export default MoonhighwayHookForm;
