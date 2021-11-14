import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

const ReqUserSearchForm = ({ onSearch }) => {
  const [titleProps, resetTitle] = useInput("");
  //   const addTitle = (prop) => console.log(prop);

  const submit = (e) => {
    e.preventDefault();
    onSearch(titleProps.value);
    resetTitle();
  };

  return (
    <>
      <div>ReqUserSearchForm</div>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          placeholder="search title..."
          required
        ></input>
        <button>search user</button>
      </form>
    </>
  );
};

export default ReqUserSearchForm;
