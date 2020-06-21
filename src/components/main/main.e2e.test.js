import React from "react";
import Enzyme, {mount} from "enzyme";
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

    const component = mount(
        <Main
          movies={movies}
          onCardTitleClick={onCardTitleClick}
        />
    );

    const movieTitles = component.find(`.small-movie-card__link`);

    movieTitles.simulate(`click`, mockEvent);

    expect(onCardTitleClick.mock.calls[0][0]).toEqual(mockData);
  });
});
