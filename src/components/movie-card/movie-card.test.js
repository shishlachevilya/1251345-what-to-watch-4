import React from "react";
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card";
import {BrowserRouter as Router} from "react-router-dom";

const card = {
  "id": `1`,
  "name": `The Grand Budapest Hotel`,
  "poster": `bg-the-grand-budapest-hotel-poster.jpg`,
  "preview": `img/bg-the-grand-budapest-hotel.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false,
  "video": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`MovieCard component test`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
    .create(
        <Router>
          <MovieCard
            card={card}
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            onCardTitleClick={() => {}}
            isHover={false}
          />
        </Router>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

