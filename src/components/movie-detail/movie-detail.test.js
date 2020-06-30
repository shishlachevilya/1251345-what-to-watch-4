import React from "react";
import renderer from "react-test-renderer";
import MovieDetail from "./movie-detail";
import {genreList, movies} from "../../testData";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const movie = movies[0];

const mockStore = configureStore([]);

describe(`MovieDetail component test`, () => {
  it(`component should renders correctly`, () => {
    const store = mockStore({
      movies,
      genreList,
      currentGenreItem: genreList[0]
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <MovieDetail
              activeMovie={movie}
              onCardTitleClick={() => {}}
            />
          </Router>
        </Provider>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
