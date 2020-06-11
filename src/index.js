import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const info = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDom.render(
    <App info={info}/>,
    document.getElementById(`root`)
);
