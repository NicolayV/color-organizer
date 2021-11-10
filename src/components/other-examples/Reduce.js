import React, { useReducer, useEffect } from "react";

// Пример №1
const numbers = [28, 34, 67, 68];
numbers.reduce((number, nextNumber) => number + nextNumber, 0); // 197

export const Numbers = () => {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return (
    <div>
      <h3>Пример использования useReducer()</h3>
      <p>при каждом нажатии чисто увеличивается на 30</p>
      <p onClick={() => setNumber(30)}>нажмите на число: {number}</p>
    </div>
  );
};

// Пример №2
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
  const [user, setUser] = useReducer(
    (user, newDetails) => ({ ...user, ...newDetails }),
    firstUser
  );
  return (
    <div>
      <h3>Пример использования useReducer()</h3>
      <h3>
        {user.firstName} {user.lastName} — {user.admin ? "Admin" : "User"}
      </h3>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        onClick={() => {
          setUser({ admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}

// Пример №3
export const CheckBox = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  useEffect(() => {
    // alert(`cecked: ${checked.toString()}`);
    console.log(`cecked: ${checked.toString()}`);
  });
  return (
    <>
      <h3>Пример использования useReducer()</h3>
      <p>нажмите checkbox</p>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>checkbox - {checked ? "checked" : "not checked"}</p>
    </>
  );
};

export default CheckBox;
