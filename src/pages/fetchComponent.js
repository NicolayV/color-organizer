import React from "react";
import ComponentFetch from "../components/fetch-examples/ComponentFetch";

const GitHubUser = ({ login }) => {
  return (
    <>
      <ComponentFetch
        uri={`https://api.github.com/users/${login}`}
        renderError={(error) => {
          return <p>Something went wrong... {error.message}</p>;
        }}
        // ! renderSuccess вызывает UserDetails
        renderSuccess={UserDetails}
      />
      {/* Гибкая настройка компонента Featch */}

      <ComponentFetch
        uri={`https://api.github.com/users/${login}`}
        renderError={(error) => {
          return <p>Something went wrong... {error.message}</p>;
        }}
        // ! renderSuccess отображает функцию
        renderSuccess={({ data }) => (
          <>
            <h1>Todo: Render UI for data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        )}
      />
    </>
  );
};

const UserDetails = ({ data }) => {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />{" "}
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

const FetchComponent = () => {
  console.log("Fetch Component page");
  return (
    <>
      <h2>Fetch Component </h2>
      <p>stack castom hook and castom component </p>

      <GitHubUser login="moonhighway" />
    </>
  );
};

export default FetchComponent;
