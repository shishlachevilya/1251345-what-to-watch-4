import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import movies from "./mocks/films";

ReactDom.render(
    <App movies={movies} />,
    document.getElementById(`root`)
);
