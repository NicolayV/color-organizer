import { useCallback, useMemo, useState } from "react";

// export const useIterator = (items = [], initialIndex = 0) => {
//   const [i, setIndex] = useState(initialIndex);

//   const prev = () => {
//     if (i === 0) return setIndex(items.length - 1);
//     setIndex(i - 1);
//   };

//   const next = () => {
//     if (i === items.length - 1) return setIndex(0);
//     setIndex(i + 1);
//   };

//   return [items[i], prev, next];
// };

// useUterator Запоминание значений
export const useIterator = (items = [], initialIndex = 0) => {
  const [i, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  const next = useCallback(() => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const item = useMemo(() => items[i], [i]);

  return [item || items[0], prev, next];
};
