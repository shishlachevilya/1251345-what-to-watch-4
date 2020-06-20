import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const props = [
  {
    id: `1`,
    path: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    id: `2`,
    path: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    id: `3`,
    path: `img/macbeth.jpg`,
    title: `Macbeth`
  },
  {
    id: `4`,
    path: `img/aviator.jpg`,
    title: `Aviator`
  },
  {
    id: `5`,
    path: `img/we-need-to-talk-about-kevin.jpg`,
    title: `We need to talk about Kevin`
  },
  {
    id: `6`,
    path: `img/what-we-do-in-the-shadows.jpg`,
    title: `What We Do in the Shadows`
  },
  {
    id: `7`,
    path: `img/revenant.jpg`,
    title: `Revenant`
  },
  {
    id: `8`,
    path: `img/johnny-english.jpg`,
    title: `Johnny English`
  }
];

describe(`Main component`, () => {
  it(`should click title`, () => {
    const onCardTitleClick = jest.fn();

    const component = shallow(
        <Main
          movies={props}
          onCardTitleClick={onCardTitleClick}
        />
    );

    const movieTitles = component.find(`.small-movie-card__link`);

    movieTitles.forEach((title) => title.simulate(`click`));

    expect(onCardTitleClick).toHaveBeenCalledTimes(movieTitles.length);
  });
});
