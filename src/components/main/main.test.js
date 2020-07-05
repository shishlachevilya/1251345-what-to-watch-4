import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter as Router} from "react-router-dom";
import {genreList, movies} from "../../testData";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Main component test`, () => {
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
            <Main
              movies={movies}
              genreList={genreList}
              currentGenreItem={genreList[0]}
              onCardTitleClick={() => {}}
              onGenreItemClick={() => {}}
              onLoadMoreMovies={() => {}}
            />
          </Router>
        </Provider>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`component should contain 8 articles`, () => {
    const store = mockStore({
      movies,
      genreList,
      currentGenreItem: genreList[0]
    });

    const wrapper = shallow(
        <Provider store={store}>
          <Router>
            <Main
              movies={movies}
              genreList={genreList}
              currentGenreItem={genreList[0]}
              onCardTitleClick={() => {}}
              onGenreItemClick={() => {}}
              onLoadMoreMovies={() => {}}
            />
          </Router>
        </Provider>
    );
    expect(wrapper.find(`.small-movie-card`).map((card) => card.toHaveLength(8)));
  });
});
