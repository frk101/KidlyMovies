import {
  GENRES_GET_MOVIE_LIST,
  GENRES_GET_MOVIE_LIST_URL,
} from "../types/genres";

export function getMovieList() {
  return {
    type: GENRES_GET_MOVIE_LIST,
    payload: {
      request: {
        url: `${GENRES_GET_MOVIE_LIST_URL}`,
      },
    },
  };
}
