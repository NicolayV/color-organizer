import React, { useEffect, useMemo, useLayoutEffect, useState } from "react";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import CheckBox from "./components/CheckBox";
import SubForm from "./components/SubForm";
import useAnyKeyToRender from "./castomHooks/useAnyToRender";
import { Numbers, User } from "./components/Reduse";
import { PureCat } from "./components/Cat";

// function WordCount({ children = "" }) {
//   useAnyKeyToRender();

//   const words = useMemo(() => {
//     const words = children.split(" ");
//     return words;
//   }, [children]);

//   useEffect(() => {
//     console.log("fresh render");
//   }, [words]);
//   return (
//     <>
//       <p>{children}</p>
//       <p>
//         <strong>{words.length} — words</strong>
//       </p>
//     </>
//   );
// }

const App = () => {
  // useEffect(() => console.log("useEffect"));
  // useLayoutEffect(() => console.log("useLayoutEffect"));
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
      {/* <Numbers /> */}
      {/* <User /> */}
      {/* <div>redy</div> */}
      {/* <WordCount>You are not going to believe this but...</WordCount>; */}
      {/* <NewsFeed /> */}
      {/* <SubForm /> */}
      {/* <CheckBox /> */}
      {/* <AddColorForm /> */}
      {/* <ColorList /> */}
    </>
  );
};

export default App;
