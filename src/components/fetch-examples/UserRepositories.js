import React from "react";
import ComponentFetch from "./ComponentFetch";
import { RepoMenu } from "./RepoMenu";

export default function UserRepositories({
  login,
  selectedRepo,
  onSelect = (f) => f,
}) {
  return (
    <ComponentFetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu
          repositories={data}
          selectedRepo={selectedRepo}
          onSelect={onSelect}
        />
      )}
    />
  );
}
