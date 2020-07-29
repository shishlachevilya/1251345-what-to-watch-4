import React from "react";
import renderer from "react-test-renderer";
import MainPlayer from "./main-player";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {genreList, movies} from "../../testData";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe(`Main player component test`, () => {
  it(`renders correctly`, () => {
    const store = mockStore({
      movies,
      genreList,
      currentGenreItem: genreList[0]
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <MainPlayer
              onCloseButtonClick={() => {}}
              isPlaying={false}
              progress={10}
              elapsedTime={`10`}
              fullTime={50}
              onFullScreeButtonClick={() => {}}
              onTogglePlay={() => {}}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
