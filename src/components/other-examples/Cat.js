import React, {
  useState,
  // useCallback,
  memo,
} from "react";

export const Cat = ({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

export const PureCat = memo(
  Cat,
  // второй аргумннт функ memo() это предикат
  // который определяет необходимость повторного рендеринга (true/false)
  (prevProp, nextProp) => prevProp.name === nextProp.name
);

export const SomeCat = () => {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  // если передаем функ в компоненту
  // либо оборачиваем функ в useCallback
  // либо добавляем предикат в memo()
  // const meow = useCallback((name) => console.log(`${name} has meowed`), []);

  return (
    <>
      <h3>пример функ memo() и useCallback()</h3>
      {cats.map((name, i) => (
        <PureCat
          key={i}
          name={name}
          // meow={meow}
          meow={(name) => console.log(`${name} has meowed`)}
        />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
};
