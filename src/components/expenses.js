import React from "react";

export default function Expenses() {
  console.log("Expenses render");
  localStorage.clear();
  sessionStorage.clear();
  console.log(!!null);
  return (
    // <main style={{ padding: "1rem 0" }}>
    <h2>Expenses</h2>
    // </main>
  );
}
