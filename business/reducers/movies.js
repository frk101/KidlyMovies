import {
  MOVIES_MOVIE,
  MOVIES_MOVIE_SUCCESS,
  MOVIES_MOVIE_FAIL,
} from "../types/movies";

const INITIAL_STATE = {
  movieLoading: false,
  movieResult: {},
  movieFail: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_MOVIE:
      return {
        ...state,
        movieLoading: true,
        movieResult: {},
        movieFail: false,
      };
    case MOVIES_MOVIE_SUCCESS:
      return {
        ...state,
        movieLoading: false,
        movieResult: action.payload.data,
        movieFail: false,
      };
    case MOVIES_MOVIE_FAIL:
      return {
        ...state,
        movieLoading: false,
        movieResult: {},
        movieFail: true,
      };

    default:
      return state;
  }
};
