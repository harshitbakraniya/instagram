import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  // const [item, setItem] = useState({
  //   id: 0,
  //   name: "",
  //   img: "",
  // });

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
              // open={openMsg}
            />
          </>
        );
      })}
    </div>
  );
};

export default List;
