import React from "react";
// import { requestGithubUser } from "../components/fetch-examples/reqUser";
import { GitHubUser } from "../components/fetch-examples/reqUserWithStorage";

const Moonhighway = () => {
  console.log("Moonhighway render");
  //   requestGithubUser("moonhighway");
  return (
    <>
      <h2>Moon high way </h2>
      <p>fetch user from GitHub with seve his data to storage</p>
      <GitHubUser login="moonhighway" />
    </>
  );
};

export default Moonhighway;
