import React from "react";
import { useInput, useColors } from "../castomHooks/hooks";

const AddColorForm = ({ onNewColor = (f) => f }) => {
  const { addColor } = useColors();

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;

// Теперь компонент AddColorForm является неконтролируемым компонентом, потому что он использует DOM для сохранения значений формы.

// const AddColorForm = ({ onNewColor = (f) => f }) => {
//   const txtTitle = useRef();
//   const hexColor = useRef();
//   const submit = (e) => {
//     e.preventDefault();
//     const title = txtTitle.current.value;
//     const color = hexColor.current.value;
//     onNewColor(title, color);
//     txtTitle.current.value = "";
//     hexColor.current.value = "";
//   };

//   return (
//     <form onSubmit={submit}>
//       <input ref={txtTitle} type="text" placeholder="color title..." required />
//       <input ref={hexColor} type="color" required />
//       <button>ADD</button>
//     </form>
//   );
// };

// export default AddColorForm;
