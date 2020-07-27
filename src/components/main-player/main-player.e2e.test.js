import React from "react";
import {configure, mount} from "enzyme";
import MainPlayer from "./main-player";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {genreList, movies} from "../../testData";

configure({adapter: new Adapter()});
const mockStore = configureStore([]);

describe(`Main player component`, () => {
  it(`should open at full screen`, function () {

    const onFullScreeButtonClick = jest.fn();

    const store = mockStore({
      movies,
      genreList,
      currentGenreItem: genreList[0]
    });

    const component = mount(
        <Provider store={store}>
          <Router>
            <MainPlayer
              onCloseButtonClick={() => {}}
              isPlaying={false}
              progress={10}
              elapsedTime={`10`}
              fullTime={50}
              onFullScreeButtonClick={onFullScreeButtonClick}
              onTogglePlay={() => {}}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    );

    const mockEvent = {
      preventDefault() {}
    };

    component.find(`.player__full-screen`).simulate(`click`, mockEvent);

    expect(onFullScreeButtonClick).toHaveBeenCalledTimes(1);
  });
});
