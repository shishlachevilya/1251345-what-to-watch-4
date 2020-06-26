import React from "react";
import {mount} from "enzyme";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {BrowserRouter as Router} from "react-router-dom";

configure({adapter: new Adapter()});

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

describe(`MovieCard Component`, () => {
  it(`check hover`, () => {

    const onMovieCardHover = jest.fn();
    const onMovieCardUnHover = jest.fn();

    const component = mount(
        <Router>
          <MovieCard
            card={card}
            onMouseOver={onMovieCardHover}
            onMouseLeave={onMovieCardUnHover}
            onCardTitleClick={() => {}}
            isHover={false}
          />
        </Router>
    );

    const mockEvent = {
      preventDefault() {}
    };


    component.simulate(`mouseenter`, mockEvent);
    component.simulate(`mouseleave`);

    expect(onMovieCardHover).toHaveBeenCalledTimes(1);
    expect(onMovieCardUnHover).toHaveBeenCalledTimes(1);
  });

  it(`check title click`, () => {
    const onCardTitleClick = jest.fn();

    const component = mount(
        <Router>
          <MovieCard
            card={card}
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            onCardTitleClick={onCardTitleClick}
            isHover={false}
          />
        </Router>
    );

    const mockEvent = {
      preventDefault() {}
    };

    component.find(`.small-movie-card__title`).simulate(`click`, mockEvent);

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);

    expect(onCardTitleClick).toHaveBeenCalledWith(card);
  });
});
