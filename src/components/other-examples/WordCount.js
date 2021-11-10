import React, { useEffect, useMemo } from "react";
import useAnyKeyToRender from "./useAnyKeyToRender";

export function WordCount({ children = "" }) {
  useAnyKeyToRender();
  console.log("render key");

  // useAnyKeyToRender() при нажатии клавиши запускает рендер
  // useMemo() передает мемоизированое значение в зависимость
  //  useEffect() чем предотвращает дополнительный вызов useEffect

  //   const words = useMemo(() => {
  //     const words = children.split(" ");
  //     return words;
  //   }, [children]);

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);
  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} — words</strong>
      </p>
    </>
  );
}
