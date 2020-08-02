import {createSelector} from "reselect";
import NameSpace from "../name-space";
import {ALL_GENRES} from "../../constants";

const NAME_SPACE = NameSpace.DATA;

export const getAllMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getMoviesByGenre = (state, genre) => {
  const movies = getAllMovies(state);

  if (genre !== ALL_GENRES) {
    return movies.filter((movie) => movie.genre === genre);
  }

  return movies;
};

export const getGenreList = createSelector(
    getAllMovies,
    (movies) => {
      return movies.reduce((acc, movie) => {
        if (!acc.includes(movie.genre)) {
          acc.push(movie.genre);
        }

        return acc;
      }, [ALL_GENRES]);
    }
);

