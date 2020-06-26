import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviePlayer from "./movie-player";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Movie player component`, () => {
  it(`should start play after 1s`, () => {
    const wrapper = mount(
        <MoviePlayer
          video={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
          poster={`bg-the-grand-budapest-hotel-poster.jpg`}
          isHover={false}
        />
    );

    wrapper.setProps({isHover: false});

    expect(wrapper.instance().props.isHover).toEqual(false);

    jest.setTimeout(1000);

    wrapper.setProps({isHover: true});

    expect(wrapper.instance().props.isHover).toEqual(true);
  });
});
