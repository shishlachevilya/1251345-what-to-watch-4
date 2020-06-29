import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer";
import {Provider} from "react-redux";
import App from "./components/app/app";

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
