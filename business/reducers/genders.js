import {
  GENRES_GET_MOVIE_LIST,
  GENRES_GET_MOVIE_LIST_SUCCESS,
  GENRES_GET_MOVIE_LIST_FAIL,
} from "../types/genres";

const INITIAL_STATE = {
  getMovieListLoading: false,
  getMovieListResult: [],
  getMovieListFail: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENRES_GET_MOVIE_LIST:
      return {
        ...state,
        getMovieListLoading: true,
        getMovieListResult: [],
        getMovieListFail: false,
      };
    case GENRES_GET_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        getMovieListLoading: false,
        getMovieListResult: action.payload.data.genres,
        getMovieListFail: false,
      };
    case GENRES_GET_MOVIE_LIST_FAIL:
      return {
        ...state,
        getMovieListLoading: false,
        getMovieListResult: [],
        getMovieListFail: true,
      };

    default:
      return state;
  }
};
