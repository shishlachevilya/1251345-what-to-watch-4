import {createSelector} from "reselect";
import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getAllMovies = (state) => {
  return state[NAME_SPACE].movies;
};

