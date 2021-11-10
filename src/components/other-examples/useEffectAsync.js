import React, { useEffect } from "react";

export const Async = () => {
  // Хук useEffect принимает в качестве первого аргумента функцию,
  //   а не промис. Таким образом, не получится использовать асинхронную
  // функцию в качестве первого аргумента: useEffect(async () => {}).

  useEffect(() => {
    const fn = async () => {
      await SomePromise();
    };
    fn();
  });
  useEffect(() => {
    (async () => {
      await SomePromise();
    })();
  });

  return <div></div>;
};
