import React from "react";
import renderer from "react-test-renderer";
import GenreListItem from "./genre-list-item";
import {genreList} from "../../testData";

describe(`GenreListItem component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <GenreListItem
          genre={genreList[0]}
          currentGenreItem={genreList[1]}
          onGenreItemClick={() => {}}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
