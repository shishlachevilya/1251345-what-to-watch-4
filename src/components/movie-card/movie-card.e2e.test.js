import React from "react";
import {shallow} from "enzyme";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

configure({adapter: new Adapter()});

describe(`MovieCard Component`, () => {
  it(`check hover`, () => {
    const card = {
      id: `2`,
      path: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`
    };
    const onMovieCardHover = jest.fn();

    const component = shallow(
        <MovieCard
          card={card}
          onMouseOver={onMovieCardHover}
          onCardTitleClick={() => {}}
        />
    );

    const mockEvent = {
      preventDefault() {}
    };

    component.find(`article.small-movie-card`).simulate(`mouseover`, mockEvent);
  });

  it(`check title click`, () => {
    const card = {
      id: `2`,
      path: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`
    };

    const onCardTitleClick = jest.fn();

    const component = shallow(
        <MovieCard
          card={card}
          onMouseOver={() => {}}
          onCardTitleClick={onCardTitleClick}
        />
    );

    const mockEvent = {
      preventDefault() {}
    };

    component.find(`.small-movie-card__link`).simulate(`click`, mockEvent);

    expect(onCardTitleClick).toHaveBeenCalledTimes(1);

    expect(onCardTitleClick).toHaveBeenCalledWith(card);
  });
});
