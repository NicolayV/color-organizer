import React from "react";
import GitHubUserHook from "../components/fetch-examples/reqUserHook";

const MoonhighwayHook = () => {
  console.log("MoonhighwayHook render");
  return (
    <>
      <h2>Fetch user with promise </h2>
      <p>stack castom hook useFetch</p>
      <GitHubUserHook login="moonhighway" />
    </>
  );
};

export default MoonhighwayHook;
