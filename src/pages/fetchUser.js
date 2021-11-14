import React from "react";
// import { requestGithubUser } from "../components/fetch-examples/reqUser";
import { GitHubUser } from "../components/fetch-examples/reqUserWithStorage";

const Moonhighway = () => {
  console.log("Fetch user page");
  //   requestGithubUser("moonhighway");
  return (
    <>
      <h2>Fetch user with promise </h2>
      <p>stack useEffect, useState and seve data to Storage</p>
      <GitHubUser login="moonhighway" />
      <GitHubUser login="eveporcello" />
    </>
  );
};

export default Moonhighway;
