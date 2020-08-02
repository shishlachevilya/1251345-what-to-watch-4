import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import configureStore from "redux-mock-store";
import {genreList, movies} from "../../testData";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

describe(`App component test`, () => {
  it(`component should renders correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies,
        genreList,
        currentGenreItem: genreList[0]
      }
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <App/>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

