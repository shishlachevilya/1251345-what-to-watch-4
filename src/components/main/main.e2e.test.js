import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {BrowserRouter as Router} from "react-router-dom";
import {genreList, movies} from "../../testData";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Main component`, () => {
  it(`should click title`, () => {
    const mockEvent = {
      preventDefault() {}
    };

    const store = mockStore({
      movies,
      genreList,
      currentGenreItem: genreList[0]
    });

    const mockData = movies[0];

    const onCardTitleClick = jest.fn();

    const component = mount(
        <Provider store={store}>
          <Router>
            <Main
              movies={movies}
              genreList={genreList}
              currentGenreItem={genreList[0]}
              onCardTitleClick={onCardTitleClick}
              onGenreItemClick={() => {}}
              onLoadMoreMovies={() => {}}
              isMainPlayerShow={false}
            />
          </Router>
        </Provider>
    );

    window.HTMLMediaElement.prototype.play = () => {};

    const movieTitles = component.find(`.small-movie-card__link`);

    movieTitles.at(0).simulate(`click`, mockEvent);

    expect(onCardTitleClick.mock.calls[0][0]).toEqual(mockData);
  });
});
