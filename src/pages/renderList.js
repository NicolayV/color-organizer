import React from "react";
import { bigData, BigList } from "../components/list-examples/bigList";
// import { List, tahoe_peaks } from "../components/list-examples/List";
// import { simpleList } from "../components/list-examples/simpleList";

const RenderList = () => {
  console.log("RenderList render");

  const renderItem = (item) => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} — {item.email}
      </p>
    </div>
  );

  return (
    <>
      <h2>Render List </h2>
      {/* {simpleList()} */}
      {/* <List
        data={tahoe_peaks}
        renderEmpty={<p>This list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} — {item.elevation.toLocaleString()} ft
          </>
        )}
      /> */}
      <BigList
        data={bigData}
        renderEmpty={<p>This list is empty</p>}
        renderItem={renderItem}
      />
    </>
  );
};

export default RenderList;
