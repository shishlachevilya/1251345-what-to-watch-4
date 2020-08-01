import {extend} from "../../helpers";
import moviesAdapter from "../../adapters/movie-adapter";

const initialState = {
  isMainPlayerShow: false,
  movies: []
};

const ActionType = {
  TOGGLE_MAIN_PLAYER: `TOGGLE_MAIN_PLAYER`,
  SET_ALL_MOVIES: `SET_ALL_MOVIES`
};

export const ActionCreator = {
  setAllMovies: (movies) => ({
    type: ActionType.SET_ALL_MOVIES,
    payload: movies
  })
};

const toggleMainPlayer = () => ({
  type: ActionType.TOGGLE_MAIN_PLAYER
});

const Operation = {
  loadAllMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.setAllMovies(moviesAdapter(response.data)));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ALL_MOVIES:
      return extend(state, {
        movies: action.payload
      });
    case ActionType.TOGGLE_MAIN_PLAYER:
      return extend(state, {
        isMainPlayerShow: !state.isMainPlayerShow
      });
    default:
      return state;
  }
};

export {
  reducer,
  ActionType,
  Operation,
  toggleMainPlayer
};
