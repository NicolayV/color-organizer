import React, { useEffect } from "react";
import { useIterator } from "./useIterator";

export function RepoMenu({ repositories, onSelect = (f) => f }) {
  const [{ name }, previous, next] = useIterator(repositories);

  useEffect(() => {
    if (!name) return;
    onSelect(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div style={{ display: "flex" }}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
}
