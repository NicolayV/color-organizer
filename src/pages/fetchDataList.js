import React from "react";
import ComponentFetch from "../components/fetch-examples/ComponentFetch";
import { UserDetails } from "../components/fetch-examples/UserDetails";

const FetchDataList = ({ login = "eveporcello" }) => {
  console.log("FetchDataList user page");
  return (
    <>
      <h2>FetchDataList </h2>
      <p>FetchDataList</p>
      <ComponentFetch
        uri={`https://api.github.com/users/${login}`}
        renderError={(error) => {
          return <p>Something went wrong... {error.message}</p>;
        }}
        renderSuccess={UserDetails}
      />
    </>
  );
};

export default FetchDataList;
