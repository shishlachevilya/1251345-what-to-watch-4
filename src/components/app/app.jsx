import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {info} = props;

  return (
    <Main info={info}/>
  );
};

export default App;
