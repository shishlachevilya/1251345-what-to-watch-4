import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer/reducer";
import {Provider} from "react-redux";
import App from "./components/app/app";
import thunk from "redux-thunk";
import {createApi} from "./api";
import {composeWithDevTools} from "redux-devtools-extension";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.setAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createApi(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadAllMovies());
store.dispatch(UserOperation.checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
