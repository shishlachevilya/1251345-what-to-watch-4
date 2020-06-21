import React from "react";
import {mount} from "enzyme";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {BrowserRouter as Router} from "react-router-dom";

configure({adapter: new Adapter()});

describe(`MovieCard Component`, () => {
  it(`check hover`, () => {
    const card = {
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
    const onMovieCardHover = jest.fn();

    const component = mount(
        <Router>
          <MovieCard
            card={card}
            onMouseOver={onMovieCardHover}
            onCardTitleClick={() => {}}
          />
        </Router>
    );

    const mockEvent = {
      preventDefault() {}
    };

    component.find(`article.small-movie-card`).simulate(`mouseover`, mockEvent);
  });

  it(`check title click`, () => {
    const card = {
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

    const onCardTitleClick = jest.fn();

    const component = mount(
        <Router>
          <MovieCard
            card={card}
            onMouseOver={() => {}}
            onCardTitleClick={onCardTitleClick}
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
