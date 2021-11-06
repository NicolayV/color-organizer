import React, { useEffect, useReducer } from "react";

const CheckBox = () => {
  // const [checked, setChecked] = useState(false);
  // const toggle = () => setChecked((prev) => !checked);
  const [checked, toggle] = useReducer((prev) => !checked, false);

  useEffect(() => {
    // alert(`cecked: ${checked.toString()}`);
    console.log(`cecked: ${checked.toString()}`);
  });
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
};

export default CheckBox;
