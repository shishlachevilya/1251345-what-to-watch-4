import React from "react";
import renderer from "react-test-renderer";
import MovieDetail from "./movie-detail";

const props = {
  "id": `5`,
  "name": `We need to talk about Kevin`,
  "poster_image": `img/we-need-to-talk-about-kevin-poster.jpg`,
  "preview_image": `img/we-need-to-talk-about-kevin.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 1.2,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false
};

describe(`MovieDetail component test`, () => {
  it(`component should renders correctly`, () => {
    const tree = renderer
    .create(
        <MovieDetail
          activeMovieCard={props}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
