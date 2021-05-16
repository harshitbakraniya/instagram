import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <div className="list">
      {props.itemData.map((data) => {
        return (
          <>
            <ListItem
              id={data.id}
              name={data.name}
              img={data.img}
              icon={data.icon}
            />
          </>
        );
      })}
    </div>
  );
};

export default List;
