import React, { useState, useEffect } from "react";

const SubForm = () => {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  return (
    <div>
      <h3>Пример использования useEffect(), useState()</h3>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </div>
  );
};

export default SubForm;
