import React, { useReducer, useState } from "react";

export function Numbers() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return <h1 onClick={() => setNumber(30)}>{number}</h1>;
}

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false,
};

export function User() {
  //   const [user, setUser] = useState(firstUser);
  const [user, setUser] = useReducer(
    (user, newDetails) => ({ ...user, ...newDetails }),
    firstUser
  );
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} — {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        //!!   Распространенная ошибка при управлении состояниями — перезапись состояния
        //  onClick={() => {
        //   setUser({ admin: true });
        // }}
        // *? Правильный вариант но есть болле удобный вариант useReducer
        onClick={() => {
          setUser({ admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}
