import React from "react";
import {configure, mount} from "enzyme";
import {MainPlayer} from "./main-player";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe(`Main player component`, () => {
  it(`should open at full screen`, function () {

    const onFullScreeButtonClick = jest.fn();

    const component = mount(
        <MainPlayer
          onCloseButtonClick={() => {}}
          onFullScreeButtonClick={onFullScreeButtonClick}
          onTogglePlay={() => {}}
          elapsedTime={`10`}
          fullTime={`50`}
          progress={10}
          isPlaying={false}
        />
    );

    const mockEvent = {
      preventDefault() {}
    };

    component.find(`.player__full-screen`).simulate(`click`, mockEvent);

    expect(onFullScreeButtonClick).toHaveBeenCalledTimes(1);
  });
});
