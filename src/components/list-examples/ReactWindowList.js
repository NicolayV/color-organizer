import React from "react";
import { FixedSizeList } from "react-window";
import faker from "faker";

export const bigDataList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

export const VirtualizedList = () => {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigDataList[index].avatar}
        alt={bigDataList[index].name}
        width={50}
      />

      <p>
        {bigDataList[index].name} — {bigDataList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigDataList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
};
