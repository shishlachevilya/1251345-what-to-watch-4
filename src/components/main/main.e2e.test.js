import React from "react";
import Enzyme, {render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
// import shallow from "enzyme/src/shallow";

Enzyme.configure({
  adapter: new Adapter(),
});

const movies = [
  {
    id: `1`,
    path: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  }
];

describe(`Main component`, () => {
  it(`should click title`, () => {
    const mockEvent = {
      preventDefault() {}
    };

    const mockData = movies[0];

    const onCardTitleClick = jest.fn();

    const component = render(
        <Main
          movies={movies}
          onCardTitleClick={onCardTitleClick}
        />
    );

    const movieTitles = component.find(`.small-movie-card__link`);

    // expect(component.find(`.small-movie-card__link`)).toBe(1);

    // movieTitles.forEach((title) => title.simulate(`click`, mockEvent));

    movieTitles.at(0).simulate(`click`, mockEvent);

    // expect(movieTitles.simulate(`click`, mockEvent)).toHaveBeenCalledTimes(movies.length);

    expect(onCardTitleClick.mock.calls[0][0]).toEqual(mockData);
  });
});
