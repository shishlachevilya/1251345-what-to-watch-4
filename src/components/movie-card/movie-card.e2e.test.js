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
        />
    );

    component.find(`article.small-movie-card`).simulate(`mouseover`);

    expect(onMovieCardHover).toHaveBeenCalledTimes(1);

    onMovieCardHover.mockImplementation(() => card.id);

    expect(onMovieCardHover()).toBe(`2`);
  });
});
