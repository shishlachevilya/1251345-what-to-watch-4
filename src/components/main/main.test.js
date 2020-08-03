import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {genreList, movies} from "../../testData";
import {BrowserRouter} from "react-router-dom";

configure({
  adapter: new Adapter(),
});

describe(`Main component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <Main
            activeItem={`one`}
            authorizationStatus={`auth`}
            user={{avatar: `avatar`}}
            visibleMoviesAmount={8}
            movies={movies}
            genres={genreList}
            currentGenreItem={genreList[0]}
            onPlayButtonClick={() => {}}
            onChangeActiveTab={() => {}}
            onCardTitleClick={() => {}}
            onGenreItemClick={() => {}}
            onLoadMoreMovies={() => {}}
            isMainPlayerShow={false}
          />
        </BrowserRouter>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`component should contain 8 articles`, () => {
    const wrapper = shallow(
        <Main
          activeItem={`one`}
          authorizationStatus={`auth`}
          user={{avatar: `avatar`}}
          visibleMoviesAmount={8}
          movies={movies}
          genres={genreList}
          currentGenreItem={genreList[0]}
          onPlayButtonClick={() => {}}
          onChangeActiveTab={() => {}}
          onCardTitleClick={() => {}}
          onGenreItemClick={() => {}}
          onLoadMoreMovies={() => {}}
          isMainPlayerShow={false}
        />
    );
    expect(wrapper.find(`.small-movie-card`).map((card) => card.toHaveLength(8)));
  });
});
