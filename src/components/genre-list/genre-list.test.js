import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list";
import {genreList} from "../../testData";

describe(`GenreList component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <GenreList
          genreList={genreList}
          currentGenreItem={genreList[0]}
          onGenreItemClick={() => {}}/>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
