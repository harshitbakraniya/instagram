import React from "react";
import Posts from "../components/Posts";

const Home = (props) => {
  return (
    <>
      <Posts
        value={props.dataStorie}
        post={props.dataPost}
        idMain={props.mainId}
      />
    </>
  );
};

export default Home;
