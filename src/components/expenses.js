import React from "react";

export default function Expenses() {
  console.log("Expenses render");
  localStorage.clear();
  sessionStorage.clear();
  console.log(!!null);
  return (
    <>
      <h2>Expenses</h2>
    </>
  );
}
