import React from "react";
import {mount} from "enzyme";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {BrowserRouter as Router} from "react-router-dom";
import {movies} from "../../testData";

configure({adapter: new Adapter()});

const card = movies[0];

describe(`MovieCard Component`, () => {
  it(`check hover`, () => {

    const onMovieCardHover = jest.fn();
    const onMovieCardUnHover = jest.fn();

    const component = mount(
        <Router>
          <MovieCard
            movie={card}
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
            movie={card}
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
