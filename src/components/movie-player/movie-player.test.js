import React from "react";
import renderer from "react-test-renderer";
import MoviePlayer from "./movie-player";

describe(`MoviePlayer component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <MoviePlayer
          videoPrev={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
          poster={`bg-the-grand-budapest-hotel-poster.jpg`}
          isHover={true}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
