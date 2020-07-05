import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

configure({adapter: new Adapter()});

describe(`ShowMoreButton component`, () => {
  it(`click by ShowMoreButton should calls callback`, () => {
    const handlerShowMoreButtonClick = jest.fn();

    const wrapper = shallow(
        <ShowMoreButton
          onLoadMoreMovies={handlerShowMoreButtonClick}
        />
    );

    wrapper.find(`.catalog__button`).simulate(`click`);
    expect(handlerShowMoreButtonClick).toHaveBeenCalledTimes(1);
  });
});
